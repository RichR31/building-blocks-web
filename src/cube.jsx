import * as THREE from 'three';
import createMaterial from './material';


// Define cube size
const size = 1;

// Define colors for each side
const colors = [
    "#4169E1",
    "#2ECC71",
    "#DC3545",
    "#FBA020",
    "#8E44AD",
    "#FFFF00",
  ];

function createCube(x,y,z,letters) {
    // Create a single cube geometry
    const geometry = new THREE.BoxGeometry(size, size, size);

    // Create individual materials for each side
    const materials = [];

    for (let i = 0; i < 6; i++) {
        materials.push(createMaterial(colors[i], letters[i]));
    }
    const cube = new THREE.Mesh(geometry, materials); 

    cube.position.set(x, y, z);
    return cube;
}

export default createCube;