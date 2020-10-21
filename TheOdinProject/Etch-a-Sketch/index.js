//  Declaring important variables//
const container = document.getElementById('container');


//16x16 square grid divs//

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', function(event) {
            let rcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            event.target.style.backgroundColor = rcolor;
        });
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16);