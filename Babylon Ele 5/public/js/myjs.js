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
    
    /////Scene 0///////

    
    const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    const button = BABYLON.GUI.Button.CreateSimpleButton("btn", "Play!");
    button.width = "150px";
    button.height = "40px";
    button.color = "black";
    button.background = "orange";
    button.cornerRadius = 15;
    button.top = "20%"
    button.onPointerUpObservable.add(function() {
        //any actions we want to happen here
        engine.stopRenderLoop();
        scene1.render();
    });
    advancedTexture.addControl(button);




    /////Scene1///////


   
    var scene1 = createScene1();
    
    
    
    
    return scene;
}

    


var createScene1 = function () {
    var scene1 = new BABYLON.Scene(engine);
	var camera1 = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene1);
	camera1.attachControl(canvas, true);
    var beepa = new BABYLON.Sound("beepa","./assets/beep.wav",scene1);
    const Beep = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    
    
    const BeepB = BABYLON.GUI.Button.CreateSimpleButton("btn", "Beeps");
    BeepB.width = "200px";
    BeepB.height = "200px";
    BeepB.color = "black";
    BeepB.background = "orange";
    BeepB.cornerRadius = 15;
    BeepB.top = "30%"
    BeepB.onPointerUpObservable.add(function() {
        //any actions we want to happen here
        beepa.play();
        
    });
    Beep.addControl(BeepB);

    const BoopB = BABYLON.GUI.Button.CreateSimpleButton("btn", "Boops");
    BoopB.width = "200px";
    BoopB.height = "200px";
    BoopB.color = "black";
    BoopB.background = "orange";
    BoopB.cornerRadius = 15;
    BoopB.top = "30%"
    BoopB.left = "30%";
    BoopB.onPointerUpObservable.add(function() {
        //any actions we want to happen here
        beepa.play();
        
    });
    Beep.addControl(BoopB);
   
    const BaapB = BABYLON.GUI.Button.CreateSimpleButton("btn", "Baaps");
    BaapB.width = "200px";
    BaapB.height = "200px";
    BaapB.color = "black";
    BaapB.background = "orange";
    BaapB.cornerRadius = 15;
    BaapB.top = "30%"
    BaapB.left = "-30%";
    BaapB.onPointerUpObservable.add(function() {
        //any actions we want to happen here
        beepa.play();
        
    });
    Beep.addControl(BaapB);
    
    const QuitB = BABYLON.GUI.Button.CreateSimpleButton("btn", "Back");
    QuitB.width = "200px";
    QuitB.height = "100px";
    QuitB.color = "black";
    QuitB.background = "orange";
    QuitB.cornerRadius = 15;
    QuitB.top = "-30%"
    QuitB.left = "-30%";
    QuitB.onPointerUpObservable.add(function() {
        //any actions we want to happen here
        engine.stopRenderLoop();
        scene.render();
        
    });
    Beep.addControl(QuitB);
    return scene1;
}
