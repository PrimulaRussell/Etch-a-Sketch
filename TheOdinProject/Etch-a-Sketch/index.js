//  Declaring important variables//
const container = document.getElementById('container');


//16x16 square grid divs//

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.mouseover = function() {
            '#' + Math.floor(Math.random() * 16777215).toString(16);
        };
        container.appendChild(cell).className = "grid-item";
    };
};
/*
var gridItems = document.getElementsByClassName('grid-item');

for (i = 0; i < gridItems.length; i++) {
    gridItems[i].onmouseover = function() {
        '#' + Math.floor(Math.random() * 16777215).toString(16);
    };
};
*/

makeRows(16, 16);