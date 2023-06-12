var frInfo = document.getElementById("FR");
var fr;

var maxFrInfo = document.getElementById("MAXFR");
var maxFr = 0;

var minFrInfo = document.getElementById("MINFR");
var minFr = 120;

var medFrInfo = document.getElementById("AVFR");
var medFr = 0;

function setup() {
    console.log(frInfo);
}

function draw() {
    fr = Math.round(getFrameRate());

    setInterval(()=>{
        if(fr > maxFr) {
            maxFr = fr;
        }
        if(fr < minFr) {
            minFr = fr;
        }  
       },1000);

    medFr = maxFr + minFr;
    medFr = Math.round(medFr/2);

    
    
    if(maxFr == fr) {
        setInterval(()=>{
         maxFr = 0;   
        },20000);
    }
    if(minFr == fr) {
        setInterval(()=>{
         minFr = 120;   
        },20000);
    }

    frInfo.innerText = "Frame rate: " + fr;

    maxFrInfo.innerText = "Maximun frames: " + maxFr;

    minFrInfo.innerText = "Minimun frames: " + minFr;

    medFrInfo.innerText = "frames averege: " + medFr;
}