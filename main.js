//Screens
document.getElementById("screen1").style.display = "block";
document.getElementById("screen2").style.display = "none";

//RANDOM NUMBERS
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min;
}

var num0 = getRandomInt(10, 99);
var num1 = getRandomInt(10, 99);
var num2 = getRandomInt(10, 99);
var num3 = getRandomInt(10, 99);
var num4 = getRandomInt(10, 99);

document.getElementById("00").innerHTML = num0;
document.getElementById("01").innerHTML = num1;
document.getElementById("02").innerHTML = num2;
document.getElementById("03").innerHTML = num3;
document.getElementById("04").innerHTML = num4;

var x = document.getElementById("myAudio"); 

//TIMER
let count1;
let count2;
count1 = setInterval(update, 25);
step1 = 0;
step2 = 0;
function update() {
    if (step1 > 100) {
        // console.log("100%");
        document.getElementById("screen1").style.display = "none";
        document.getElementById("screen2").style.display = "block";
        document.getElementById('fileText').innerHTML = "Wpisz";
        clearInterval(count1);
        set();
        playAudio();
        focus()
    } else {
        step1 += 0.5;
        // console.log(step);
        document.getElementById('file').value = step1;
    }
}
function set() {
    document.getElementById('file').value = 0;
    count2 = setInterval(update2, 50);
    // console.log("test");
}
function update2() {
    if (step2 > 100) {
        clearInterval(count2);
        // console.log("End Time");
        pauseAudio()
        testAnsvers();
    } else {
        step2 += 0.25;
        // console.log(step);
        document.getElementById('file').value = step2;
    }
}

function end() {
    step2 += 100;
}

function testAnsvers() {
    document.getElementById("screen2").style.display = "none";
    document.getElementById("file").style.display = "none";
    document.getElementById("fileText").style.display = "none";
    document.getElementById("endScreen").style.display = "block";

    const val0 = document.getElementById("input01").value;
    const val1 = document.getElementById("input02").value;
    const val2 = document.getElementById("input03").value;
    const val3 = document.getElementById("input04").value;
    const val4 = document.getElementById("input05").value;
    // console.log(val1.toString());
    // console.log(num0.toString());

    if (val0 == num0.toString() && val1 == num1.toString() && val2 == num2.toString() && val3 == num3.toString() && val4 == num4.toString()) {
        // console.log("passed");
        document.getElementById('end').innerHTML = "System Zakceptował Odpowiedź!"
    } else {
        document.getElementById('end').innerHTML = "System Nie Zakceptował Odpowiedźi!"
    }
    
}

function playAudio() { 
x.play(); 
} 

function pauseAudio() { 
x.pause(); 
} 

function focus() {
    document.getElementById("input01").focus();
}