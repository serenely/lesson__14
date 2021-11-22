const btn = document.querySelector('button'),
    btnn = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');


// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Click 2 click');
// };

// btn.addEventListener('click', () => {
//     alert('Click double');
// });


// btn.addEventListener('click', () => {
//     alert('Click threeble');
// });


// let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++
    // if (i == 1) {
    //     btnn[2].removeEventListener('click', deleteElement);
    // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});