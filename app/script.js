'use strict'
//
// Elementu pasirinkimas
//

// var block_class = document.getElementsByClassName('block'); // grazinu visus elementus pagal klases pavadinima
// var block_id = document.getElementById('special-block'); // grazina elementa pagal ID
// var block_query = document.querySelector('.block#special-block'); //  grazina pirma elementa atitikusi css selectoriu
// var block_query_all = document.querySelectorAll('.block'); // grazina sarasa visu atitikusiu css selectoriu
// var block_name = document.getElementsByTagName('div'); // grazina visus elementus pagal html tag'o pavadinima


//
// Elemento klasiu pasiemimas, keitimas
//

// var ball = document.querySelector('.ball');

// Get class list
// console.log(ball.classList);

// Add new class
// ball.classList.add('shadow');

// Check if class exists
// if (ball.classList.contains('shadow')) {
//     // console.log('shadow class exists');
// }

// Remove class
// ball.classList.remove('shadow');
// console.log(ball.classList);

//
// Elemento turinys
//

// var text = document.querySelector('p');
// console.log(text.innerText); // text content without html tags
// console.log(text.innerHTML); // content with html tags
// // text.innerText = "some new text";
// text.innerHTML = "<div class='ball purple'>labas</div>";




//
// Click events
//

// Event for single element

// function alertText() {
//     alert('AAAA');
// }

// block_id.addEventListener('click', alertText);

// block_id.addEventListener('click', function() {    
//     if (this.classList.contains('shadow')) {
//         this.classList.remove('shadow');
//     }
//     else {
//         this.classList.add('shadow');
//     }
// });


// Event for multiple elements

// for (var i = 0; i < block_class.length; i++) {
//     block_class[i].addEventListener('click', function() {
//         console.log('hello block with class clicked');
//     });
// }

// for (var el of block_class) {
//     el.addEventListener('click', function() {
    

//         if (this.classList.contains('shadow')) {
//             this.classList.remove('shadow');
//         }
//         else {
//             this.classList.add('shadow');
//         }


//     });
// }

//
//  Mouse events
//

// var floaty = document.querySelector('.floateris');

// document.addEventListener('mousemove', function(e) {
//     // console.log('aa');
//     console.log(e.x, e.y);

//     floaty.style.top = e.y + "px";
//     floaty.style.left = e.x + "px";

// });

// for (var ball of document.querySelectorAll('.ball')) {
//     ball.addEventListener('mouseenter', function() {
//         console.log('mouseenter');
//     })
//     ball.addEventListener('mousemove', function() {
//         console.log('mousemove');
//     })
//     ball.addEventListener('mouseleave', function() {
//         console.log('mouseleave');
//     })
// }

// for (var ball of document.querySelectorAll('.ball')) {
//     ball.addEventListener('mouseleave', function() {
//         console.log('mouseleave');
//     })
// }

// for (var ball of document.querySelectorAll('.ball')) {
//     ball.addEventListener('mousemove', function() {
//         console.log('mousemove');
//     })
// }

//
//  Keyboard events
//

// document.addEventListener('keydown', function(e) {
//     // console.log(e);

//     if (e.keyCode === 27) {
//         console.log('exit the game');
//     }
// });