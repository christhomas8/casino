var counter=0;
        
function repeat()
{	
    window.setTimeout(myFunction, 100);
}

function myFunction() {
    var pic = ["images/setitoff.jpeg","images/titanic.jpeg","images/karaoke small.png","images/fav.png","images/2023 Calendar.png"];
    var rand1 = pic[Math.floor(Math.random()*pic.length)];
    var rand2 = pic[Math.floor(Math.random()*pic.length)];
    var rand3 = pic[Math.floor(Math.random()*pic.length)]; 
    document.getElementById("pic1").src = rand1;
    document.getElementById("pic2").src = rand2;
    document.getElementById("pic3").src = rand3;
    
    
    var com = ["RED","BLUE", "RED","BLUE"];
    var randcom = com[Math.floor(Math.random()*com.length)];
    
    var randcom1 = "DONE ";
    //document.getElementById("command").innerHTML = "~SPINNING~";//+randcom;
    
    if (counter<40){
    repeat();
    counter = counter+1;
    //console.log(counter + " " + rand1);
    //console.log(counter + " " + rand2);
    //console.log(counter + " " + rand3);
    }
    
    else {
        counter = 0;
        if (rand1 == rand2 && rand1 == rand3 && rand2 == rand3)
        {
            console.log("Win");
            console.log("Winner");
        }
        else if (rand1 == rand2 || rand2 == rand3)
        {
            console.log("Almost");
            console.log("Try Again");
        }
        else
        {
            console.log("Lose");
            console.log("Loser");
        }
        //document.getElementById("command").innerHTML = randcom+" Side";
    }
 }  