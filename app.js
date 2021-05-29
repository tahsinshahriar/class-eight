// const btnOne = document.querySelector('#button-1');

// console.dir(btnOne);

// function clicked() {
//     console.log('Button has been clicked');
// }

// btnOne.ondblclick = clicked;

// btnOne.addEventListener('click', clicked);

const container = document.querySelector('.container');
const ul = document.querySelector('.list');
const liOne = document.querySelector('#list-one');

container.addEventListener('click', function () {
    console.log('Container clicked');
});
ul.addEventListener('click', function (event) {
    console.log('Ul clicked');
    event.stopPropagation();
});
liOne.addEventListener('click', function (event) {
    console.log('List One clicked');
});
