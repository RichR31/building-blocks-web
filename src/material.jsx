import * as THREE from 'three';

// Function to create a material with a specific color

function createMaterial(color, letter) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;

    //Draw the background color
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text on top of the background
    context.font = 'bold 200px verdana';
    context.fillStyle = 'white';
    context.strokeStyle = '#0000009f';
    context.lineWidth = 8;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(letter, canvas.width / 2, canvas.height / 2);
    context.strokeText(letter, canvas.width / 2, canvas.height / 2);
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    const material = new THREE.MeshBasicMaterial({ map:texture });
    return material;
}

export default createMaterial;