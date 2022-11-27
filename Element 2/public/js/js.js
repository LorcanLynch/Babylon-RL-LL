const createScene = function() {
    const scene = new BABYLON.Scene(engine);
    //Add a camera to the scen and attach it to the canvas
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 1, Math.PI /
    4, 250, new BABYLON.Vector3(0, 0, 0));
    camera.lowerBetaLimit = 6;
    camera.upperBetaLimit = 1;
    camera.attachControl(canvas, true);
    //Add a light(s) to the Scene
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./assets/skybox/skybox/skybox", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	skybox.material = skyboxMaterial;	
    createHouse();
    createRock();
    createFlatland();
    return scene;
    };

    const createRock = (scene) =>{
        const groundMat = new BABYLON.StandardMaterial("groundMat");
        groundMat.diffuseTexture = new BABYLON.Texture("./assets/stone.jpg")
       
       
        const ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm", "./assets/heightMap.png", {width:1000, height :1000, subdivisions: 30, maxHeight: 50});
        ground.material = groundMat
        
    }
    const createFlatland = (scene) =>{
        const groundMat = new BABYLON.StandardMaterial("groundMat");
        groundMat.diffuseTexture = new BABYLON.Texture("./assets/grass.jpg")
        
        const plane = BABYLON.MeshBuilder.CreatePlane("plane", {height:500,width:500 })
        plane.rotation.x = 1.58;
        plane.position.y = 2
        plane.material = groundMat;
    }

    const createHouse = (scene) =>{

        BABYLON.SceneLoader.ImportMesh("", "./assets/", "townhall.glb", scene, function (newMeshes) {
            // Set the target of the camera to the first imported mesh
            var house = newMeshes[0];
            house.scaling = new BABYLON.Vector3(10,10,10);
            house.position.y = 15 ;
        });
    }