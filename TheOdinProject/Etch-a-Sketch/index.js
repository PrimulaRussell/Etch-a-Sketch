//  Declaring important variables//
const container = document.getElementById('container');
const button = document.getElementById('btn');

//function to create grid//

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.innerText = ("");
        cell.addEventListener('mouseover', function() {
            let rcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            cell.style.backgroundColor = rcolor;
        });
        container.appendChild(cell).className = "grid-item";
    };
};
//default page runs as 16x16//
makeRows(16, 16);

// Button function//
button.addEventListener('click', function() {
    container.innerHTML = '';
    let question = prompt('please enter a new grid size of not more than 100', 16);
    if (question > 100) {
        question = 100;
    };
    makeRows(question, question);
});