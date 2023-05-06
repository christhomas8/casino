var counter=0;
var rand1;
var rand2;
var rand3;
var spinning = false;

window.addEventListener('gamepadconnected', (event) => {
    const update = () => {
    const output = document.getElementById('axes');

    for (const gamepad of navigator.getGamepads()) {
    if (!gamepad) continue;
    for (const [index, axis] of gamepad.axes.entries()) {
        if (index == 1 && axis == 1 && spinning == false)
        {
            console.log(index, axis);
            myFunction();
        }
    }
    }
        requestAnimationFrame(update);
    };
    update();
});
        
function repeat()
{	
    window.setTimeout(myFunction, 100);
}

function myFunction() {
    var pic = [
       "images/karaoke.png",
       "images/reach.jpg",
       "images/rubiks.jpg",
       "images/seven.png",
       "images/titanic.jpeg",
       "images/seven.png"
    ];
    document.getElementById("result").innerText= "";
    spinning = true;
    
    if (counter < 20)
    {
        rand1 = pic[Math.floor(Math.random()*pic.length)];
        document.getElementById("pic1").src = rand1;
    }
    if (counter < 30)
    {
        rand2 = pic[Math.floor(Math.random()*pic.length)];
        document.getElementById("pic2").src = rand2;
    }
    rand3 = pic[Math.floor(Math.random()*pic.length)];
    document.getElementById("pic3").src = rand3;
    
    if (counter<40){
        repeat();
        counter = counter+1;
        document.getElementById("result").innerText= "";
    }
    
    else {
        counter = 0;
        spinning = false;
        if (rand1 == rand2 && rand1 == rand3 && rand2 == rand3)
        {
            document.getElementById("result").innerText = "Winner!";
        }
        else if (rand1 == rand2 || rand2 == rand3 || rand1 == rand3)
        {
            document.getElementById("result").innerText = "Almost!";
        }
        else
        {
            document.getElementById("result").innerText= "Try Again...";
        }
    }
 }  