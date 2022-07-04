function getDrawing(){
    let newDrawing = document.getElementById("drawing");
    let drawings = [];
    drawings[0] = <img src="Images/AnimeBoy.jpg" alt="Drawing 1" id="Drawings" />;
    drawings[1] = <img src="Images/AnimeDude.jpg" alt="Drawing 2" id="Drawings" />;
    drawings[2] = <img src="Images/goku.jpg" alt="Drawing 3" id="Drawings" />;
    drawings[3] = <img src="Images/GokuUI.jpg" alt="Drawing 4" id="Drawings" />;
    drawings[4] = <img src="Images/Vegeta.jpg" alt="Drawing 5" id="Drawings" />;
    drawings[5] = <img src="Images/HandRose.jpg" alt="Drawing 6" id="Drawings" />;
    drawings[6] = <img src="Images/bleachdude.jpg" alt="Drawing 7" id="Drawings" />;
    drawings[7] = <img src="Images/demonboy.jpg" alt="Drawing 8" id="Drawings" />;
    drawings[8] =  <img src="Images/elfdemon.jpg" alt="Drawing 9" id="Drawings" />;
    drawings[9] = <img src="Images/gokucolor.jpg" alt="Drawing 10" id="Drawings" />;
    drawings[10] = <img src="Images/sideprofile.jpg" alt="Drawing 11" id="Drawings" />;
    drawings[11] = <img src="Images/vegetacolor.jpg" alt="Drawing 12" id="Drawings" />;
    let i = Math.floor(Math.random() * drawings.length);
    newCompliment.innerHTML =  drawings[i];
}