import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import createCube from './cube';

const alphabet = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"
]

//TODO: figure out a better way to set the locations
const positions = [
    [-2, 1, 2],
    [0, 1, 2],
    [2, 1, 2],
    [-2, -1, 2],
    [0, -1, 2],
    [2, -1, 2]
]

const CubeScene = (props) => {
    const indices = props.indices;
    const canvasRef = useRef(null);
    const scene = useRef(null);
    const camera = useRef(null);
    const renderer = useRef(null);
    const raycaster = useRef(null);
    const mouse = useRef(new THREE.Vector2());
    const [isHoveringCube, setIsHoveringCube] = useState(false);
    const thisCube = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    

    useEffect(() => {
        const cubes = [];
        
        //for each cube
        const num_cubes = 6;
        console.log("again");
        for(let i =0; i<num_cubes;i++){
            const letters = [];
            const start = i*6;

            for(let j=0; j<6;j++){
                const letter = alphabet[indices[start+j]];
                letters.push(letter);
            }

            const cube = createCube(positions[i][0],positions[i][1],positions[i][2], letters);
            cube.name = "cube-"+i;
            cubes.push(cube);
        }

        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;
        // Scene setup
        scene.current = new THREE.Scene(); 
        // Camera setup
        camera.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);   
        camera.current.position.z = 8;

         // Renderer setup
        renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.current.setSize(width, height);

        // Raycaster setup
        raycaster.current = new THREE.Raycaster();

        cubes.forEach(c => scene.current.add(c));

    
        const handleMouseDown = (event)=>{

            // Normalize screen coordinates (between -1 and 1)
            const normalizedX = (event.clientX/ window.innerWidth) * 2 - 1;
            const normalizedY = -((event.clientY/window.innerHeight) * 2) + 1;
            
            // Perform raycast to check for object intersection
            raycaster.current.setFromCamera(new THREE.Vector2(normalizedX, normalizedY), camera.current);
            const intersects = raycaster.current.intersectObjects(cubes);

            if (intersects.length > 0) {
                thisCube.current = intersects[0].object;
            }

            mouse.current.x = event.clientX;
            mouse.current.y = event.clientY;
        };
        
        const handleMouseUp = () => {
            thisCube.current = null;
            setIsDragging(false);
        };

        const handleMouseMove = (event)=> {

            //hovering
            

            // Normalize screen coordinates (between -1 and 1)
            const normalizedX = (event.clientX/ window.innerWidth) * 2 - 1;
            const normalizedY = -((event.clientY/window.innerHeight) * 2) + 1;
            
            // Perform raycast to check for object intersection
            raycaster.current.setFromCamera(new THREE.Vector2(normalizedX, normalizedY), camera.current);
            const intersects = raycaster.current.intersectObjects(cubes);
            
            if (intersects.length > 0) {
                setIsHoveringCube(true);
            }else{
                setIsHoveringCube(false);
            }



            //rotation
            if (!thisCube.current) {
                return;
            }
            
            setIsDragging(true);
            const movementX = event.clientX - mouse.current.x;
            const movementY = event.clientY - mouse.current.y;

            //orientation flipped due to nature of 3D space in three.js
            thisCube.current.rotation.x += movementY * 0.03;
            thisCube.current.rotation.y += movementX * 0.03;

            mouse.current.x = event.clientX;
            mouse.current.y = event.clientY;

        }
        
        
        
        canvasRef.current.addEventListener('mousedown', handleMouseDown);
        canvasRef.current.addEventListener('mousemove', handleMouseMove);
        canvasRef.current.addEventListener('mouseup', handleMouseUp);

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
  
    return(
        <canvas className={""+(isDragging? "grabbing":"")+" "+(isHoveringCube?"grab":"")} id="scene" ref={canvasRef}/>
    );
  };
  
  export default CubeScene;