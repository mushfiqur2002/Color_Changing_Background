const colorNameArr = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];
const button = document.getElementById("btn");
const colorName = document.getElementById("color_name");

// ######### FUNCTION ######### \\
function randomNumber(){
    let random = Math.floor(Math.random()*colorNameArr.length);
    return random;
}

// ######### EVENT listener ######### \\\
button.addEventListener("click", function(){
    let color = "#";
    for(var i=0; i<6; i++){
        color += colorNameArr[randomNumber()];
    }
    document.body.style.backgroundColor = color;
    colorName.innerText = color;
})
