//Onloading the window Run the function addColor....
window.onload = function() {
    addColor();
}

// Using a loop run the code within as many times as the loop says
for(let i=0; i<9; i++) {

    // declare a variable box.
    // use the createElement keyword to create a div or any html tag you want.
    const box = document.createElement('div');

    //give the div a CSS class by using .classList.add | or remove a class using .classList.remove
    box.classList.add('box');

    //simply calling a html class and nesting the box variable within it.
    document.querySelector('.container').appendChild(box);
}

// Giving the html classes a variable name so it can be used in the JS file... By using the keyword querySelector
//if its a class use .
//if it's an Id use #
//if it not a class or an id use the name of the tag like that.
const btn = document.querySelector('.btn');
const randomColorBlock = document.querySelectorAll('.box');


//The random color function
//The function generates random hex codes.
function randomHexColorCode() {
    var chars = '0123456789abcdef';
    var colorLength = 6;
    var color = '';

    for(var i = 0; i< colorLength; i++){
        var randomColor =Math.random() * chars.length;
        color += chars.substring(randomColor, randomColor + 1);
    }

    return '#'+ color;
}

function addColor(){
    randomColorBlock.forEach(a => 
        {
        var newColor =randomHexColorCode();
        a.style.backgroundColor = newColor;
        a.innerHTML = newColor;
        }
    )
}