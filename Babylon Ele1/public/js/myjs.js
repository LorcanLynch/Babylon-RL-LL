const createScene = function() {
    const scene = new BABYLON.Scene(engine);
    //Add a camera to the scen and attach it to the canvas
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI /
    2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    
    //Add a light(s) to the Scene
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(100, 10,
    10));
    light.intensity = 1;

    
    const grass = createGrass();
    
    const sword = createSword();

    const rock = createRock();
    
    const trees = createTrees();

    
    return scene;
    };

    const createSword = (scene) =>{
        BABYLON.SceneLoader.ImportMesh("", "./assets/models/", "sword.glb", scene, function (newMeshes) {
            // Set the target of the camera to the first imported mesh
            var sword = newMeshes[0];
            sword.rotation = new BABYLON.Vector3(80,0,0);
            sword.position.y = 5;
            sword.scaling = new BABYLON.Vector3(3,3,3);
            
        });
    }

    const createRock = (scene) =>{
        BABYLON.SceneLoader.ImportMesh("", "./assets/models/", "rock.glb", scene, function (newMeshes) {
            // Set the target of the camera to the first imported mesh
            var rock = newMeshes[0];
            rock.position.y = 31.6;
            rock.scaling = new BABYLON.Vector3(3,3,3);
            
        });
    }
    const createGrass = (scene) =>{
        const groundMat = new BABYLON.StandardMaterial("groundMat");
        groundMat.diffuseTexture = new BABYLON.Texture("./assets/models/grass1.jpg")
       
        groundMat.reflectionTexture = null
        const ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm", "./assets/models/heightMap.png", {width:200, height :200, subdivisions: 10, maxHeight: 3});
        ground.material = groundMat
        
    }
    const createTrees =(scene) => {
        var treeSize = new BABYLON.Vector3(60,60,60);
        const treeMat = new BABYLON.StandardMaterial("treeMat");
        treeMat.diffuseTexture = new BABYLON.Texture("./assets/models/Tree.tga")
        for (let i = 0; i < 30; i++) {
            const tree = BABYLON.SceneLoader.ImportMesh("", "./assets/models/", "tree.babylon", scene, function (newMeshes) {
            
                var tree = newMeshes[0];
            tree.position.x = Math.random() * (80) + 10;
            tree.position.z = Math.random() * -80  - 10;
            
            tree.scaling = treeSize;
            tree.material = treeMat;
            
        }); 
    }
    for (let i = 0; i < 30; i++) {
        const tree = BABYLON.SceneLoader.ImportMesh("", "./assets/models/", "tree.babylon", scene, function (newMeshes) {
        
            var tree = newMeshes[0];
        tree.position.x = Math.random() * (80) +10;
        tree.position.z = Math.random() * 80  +10;
        
        tree.scaling = treeSize;
        tree.material = treeMat;
        
    }); 
}
for (let i = 0; i < 30; i++) {
    const tree = BABYLON.SceneLoader.ImportMesh("", "./assets/models/", "tree.babylon", scene, function (newMeshes) {
    
        var tree = newMeshes[0];
    tree.position.x = Math.random() * -(80) - 10;
    tree.position.z = Math.random() * 80  + 10;
   
    tree.scaling = treeSize;
    tree.material = treeMat;
    
}); 
}
for (let i = 0; i < 30; i++) {
    const tree = BABYLON.SceneLoader.ImportMesh("", "./assets/models/", "tree.babylon", scene, function (newMeshes) {
    
        var tree = newMeshes[0];
    tree.position.x = Math.random() * -(80) - 10;
    tree.position.z = Math.random() * -80 - 10;
    
    tree.scaling = treeSize;
    tree.material = treeMat;
    
}); 
}
    }



