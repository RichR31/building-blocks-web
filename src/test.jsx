import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import createCube from './cube';

const Cube = () => {
  const canvasRef = useRef(null);
  const scene = useRef(null);
  const camera = useRef(null);
  const renderer = useRef(null);
  const raycaster = useRef(null);
  const mouse = useRef(new THREE.Vector2());
  const [isDragging, setIsDragging] = useState(false);
  const [dragObject, setDragObject] = useState(null);
  const [initialPosition, setInitialPosition] = useState(null);

  useEffect(() => {
    const width = canvasRef.current.clientWidth;
    const height = canvasRef.current.clientHeight;

    // Scene setup
    scene.current = new THREE.Scene();

    // Camera setup
    camera.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.current.position.z = 5;

    // Renderer setup
    renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.current.setSize(width, height);

    // Raycaster setup
    raycaster.current = new THREE.Raycaster();

    // Cube creation
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.current.add(cube);

    const handleMouseDown = (event) => {
      event.preventDefault();

      // Convert mouse coordinates to normalized device coordinates (NDC)
      mouse.current.x = (event.clientX / width) * 2 - 1;
      mouse.current.y = -((event.clientY / height) * 2) + 1;

      // Perform raycast to check for object intersection
      raycaster.current.setFromCamera(mouse.current, camera.current);
      const intersects = raycaster.current.intersectObjects(scene.current.children, true);

      if (intersects.length > 0) {
        setIsDragging(true);
        setDragObject(intersects[0].object);
        setInitialPosition(intersects[0].object.position.clone()); // Store initial position
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setDragObject(null);
    };

    const handleMouseMove = (event) => {
      if (!isDragging) {
        return;
      }

      event.preventDefault();

      // Update mouse coordinates and perform raycast again
      mouse.current.x = (event.clientX / width) * 2 - 1;
      mouse.current.y = -((event.clientY / height) * 2) + 1;
      raycaster.current.setFromCamera(mouse.current, camera.current);

      // Calculate movement based on mouse delta (prevents jittering)
      const deltaX = event.movementX / width;
      const deltaY = event.movementY / height;

      dragObject.position.x = initialPosition.x + deltaX * 5; // Adjust movement sensitivity as needed
      dragObject.position.y = initialPosition.y - deltaY * 5; // Adjust movement sensitivity as needed
    };

    // Event listeners for mouse interaction
    canvasRef.current.addEventListener('mousedown', handleMouseDown);
    canvasRef.current.addEventListener('mouseup', handleMouseUp);
    canvasRef.current.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.current.render(scene.current, camera.current);
    };

    animate();

    return () => {
      // Cleanup event listeners and resources
      canvasRef.current.removeEventListener('mousedown', handleMouseDown);
      canvasRef.current.removeEventListener('mouseup', handleMouseUp);
      canvasRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={canvasRef} style={{ width: '400px', height: '400px' }} />
  );