const createScene = function() {
    const scene = new BABYLON.Scene(engine);

    //Add a camera to to the scene and attach it to the canvas
    const camera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(-6, 0, 0), scene);

    // We then set the goal: height above the the center of the target;
    camera.heightOffset = 8;
    
    // radial distance from target plus height offset;
    camera.radius = 1;


    // rotation, in radians, center of target in x y plane;
    camera.rotationOffset = 0;

    // acceleration in moving from current to goal position;
    camera.cameraAcceleration = 0.005

    //speed at which acceleration is halted
    camera.maxCameraSpeed = 10

    BABYLON.Animation.AllowMatricesInterpolation = true;
    var points = -1;
    //Add a light(s) to the Scene
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(100, 10,
    10));
    light.intensity = 1;
    
    var inputMap = {};
    scene.actionManager = new BABYLON.ActionManager(scene);
    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));
    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    

    const block = BABYLON.MeshBuilder.CreateBox("box",{});
    BABYLON.SceneLoader.ImportMesh("", "./assets/", "pirate.babylon", scene, function (newMeshes, particleSystems, skeletons) {
        // Set the target of the camera to the first imported mesh
        pirate = newMeshes[0];
        var skeletons= skeletons[0];
        camera.lockedTarget = pirate;
        pirate.scaling = new BABYLON.Vector3(.02,.02,.02);
        skeletons.animationPropertiesOverride = new BABYLON.AnimationPropertiesOverride();
        skeletons.animationPropertiesOverride.enableBlending = true;
        skeletons.animationPropertiesOverride.blendingSpeed = .5;
        skeletons.animationPropertiesOverride.loopMode = 1;
        var helper = scene.createDefaultEnvironment({
            enableGroundShadow: true
        });
        pirate.CheckCollisions = true;
        
        var walkRange = skeletons.getAnimationRange("Walk");
        var jumpRange = skeletons.getAnimationRange("jump");
        var idleRange = skeletons.getAnimationRange("idle");
        var crouchRange = skeletons.getAnimationRange("crouched");
        var animating = true;
        scene.onBeforeRenderObservable.add(() => {
            
            
            var keydown = false;
            if (inputMap["w"]) {
                
                pirate.moveWithCollisions(pirate.forward.scaleInPlace(-.1));
                keydown = true;
                
                
            }
            if (inputMap["a"]) {
                pirate.rotate(BABYLON.Vector3.Up(), -.1);
                keydown = true;
            }
            else if (inputMap["d"]) {
                pirate.rotate(BABYLON.Vector3.Up(), .1);
                keydown = true;
            }
            else if (inputMap["v"]) {
               
                keydown = true;
            }
            else if (inputMap["c"]) {
               
                keydown = true;
            }
            if(pirate.intersectsMesh(block))
                    {
                          points++;
                          console.log(points);
                          block.position.x = (Math.random() * 10) - (Math.random() * 10)
                          block.position.z = (Math.random() * 10) - (Math.random() * 10) ;
                          var newDiv = document.createElement("div"); 
    var newContent = document.createTextNode("Score: "+ points); 
    newDiv.appendChild(newContent);
 
    newDiv.style.position= 'absolute';
    newDiv.style.right= '90%';
    newDiv.style.top= '10%';
    newDiv.style.background= 'white';
    newDiv.style.fontSize= '20px';
    document.body.appendChild(newDiv);
                    }
            
            

            if (keydown) {
                if (!animating) {
                    animating = true;
                    
                    
                    if(inputMap["w"])
                    {
                        var walk = scene.beginAnimation(skeletons, walkRange.from , walkRange.to, true);
                    }
                    else if (inputMap["d"]) {
                        var walk = scene.beginAnimation(skeletons, walkRange.from , walkRange.to, true);
                    }
                    else if (inputMap["a"]) {
               
                        scene.beginAnimation(skeletons, walkRange.from  ,walkRange.to,true);
                    }
                    else if (inputMap["v"]) {
               
                        scene.beginAnimation(skeletons, jumpRange.from ,jumpRange.to,true);
                    }
                    else if (inputMap["c"]) {
               
                        scene.beginAnimation(skeletons, crouchRange.from ,crouchRange.to,true);
                    }
                    
                }
            }
            else {

                if (animating) {
                   
                    scene.beginAnimation(skeletons, idleRange.from, idleRange.to, true);
                    
                    animating = false;
                }
            }
            
           

        });
       
    
  

    

       
    });
     
     

    
    return scene;
    }

