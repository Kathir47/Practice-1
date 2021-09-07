// let dwarwes = ["Khorin", "Rhorin", "bhorin", "Jhorin", "Jhorin", "Thorin", "Phorin", "Whorin", "Ohorin",
//                 "Bhorin", "Hhorin", "Shorin", "Zhorin", "Xhorin", "Fhorin",]

// dwarwes.
// dwarwes.forEach(function(item,index,array){

//     if(item === "Thorin"){
//         item = item.toLowerCase();
//     }
//     else{
//         item = item.toUpperCase();
//     }
//     console.log(item);


// })




// program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// take input
// const palim = prompt('Enter a string: ');


// let string1 = palim.split();

//     if(string1 === palim){
//         console.log('Its is Palindrome');
//     }
//     else{
//         console.log('It is not Palindrome');
//     }





// // // call the function
// let string = prompt('Enter a word');


// let string = prompt('Enter a word:  ');

// function checkPalindrome(string){
//     let len = string.length;

//     for (i = 0; i<len/2; i++){

//         if(string[i] != string[len - 1 - i]){
//             return 'It is not Palindrome'
//         }
        
//     }
//     return 'It is Palindrome'

// }

// let value = checkPalindrome(string);

// console.log(value);





// let new1 = ['Barnet', 'Jarnet', 'Aarnet', 'Varnet', 'Oarnet'];

// console.log(new1.slice(3,4));

// const x = document.querySelectorAll('p.demo');


// document.querySelector('.demo1').innerHTML = "This is the value we get: " + x[1].innerHTML;


// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length ;i++) {
//   text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;


// const body = document.body;

// let h1 = document.createElement('h1');

// h1.innerText = 'Hellllloooo World !'
// body.append(h1);

// h1.id = 'id'



// let btn1 = document.querySelector('#btn1');

// btn1.addEventListener('click', (e) => {

//     e.target.style.backgroundColor = 'red';

//     let x = document.querySelector('#btn');

// x.value = 'SEND'



// let div = document.querySelector('.container1');




// let try5 = document.createElement('button')


// try5.classList.add('button');

// try5.textContent = 'This is Button';

// div.append(try5)


// let y = document.createElement('p');
// let z = document.createElement('p');

// let h = document.createElement('div');

// h.textContent = 'This is new div';

// y.textContent = 'Hii this the new world';
// z.textContent = 'Hii this the new world 2222';

// div.insertBefore(h,x)

// div.insertBefore(y, h);
// div.insertBefore(z, h);
// // div.removeChild(x);

// div.classList.add('container2');

// div.style.width = '190px';
// div.style.padding = '25px';
// div.style.borderRadius = '15px';
// div.style.textAlign = 'center';




// alert('this is working properly')
// })



// const buttons = document.querySelectorAll('button');

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {

//   // and for each one we add a 'click' listener
//   button.addEventListener('click', () => {
//     alert(button.id);
//   });
// }); 


// let buttons = document.querySelectorAll('button');

// buttons.forEach((button) => {
//     button.addEventListener('click', () =>{
//         alert(button.id)
//     })
// })




let i1 = document.querySelectorAll("i");
// let btn2 = document.querySelector(".button2");

let image = document.querySelectorAll('img');




image[0].addEventListener('mouseover', function(){

    document.querySelector('.heading').innerHTML = image[0].alt;

});

image[0].addEventListener('mouseout', function(){

    document.querySelector('.heading').innerHTML = "Gallery";

});


i1[0].addEventListener('click', function(){

        image.src = 'img/img1.jpg';
        image[0].style.display = 'block';
        image[1].style.display = 'none';
        image[2].style.display = 'none';
        image[3].style.display = 'none';
        image[4].style.display = 'none';
        image[5].style.display = 'none';
})




image[1].addEventListener('mouseover', function(){

    document.querySelector('.heading').innerHTML = image[1].alt;

});

image[1].addEventListener('mouseout', function(){

    document.querySelector('.heading').innerHTML = "Gallery";
    
});


i1[1].addEventListener('click', function(){

    image.src = 'img/img2.jpg';
    image[0].style.display = 'none';
    image[1].style.display = 'block';
    image[2].style.display = 'none';
    image[3].style.display = 'none';
    image[4].style.display = 'none';
    image[5].style.display = 'none';
})


// let btn3 = document.querySelector(".button3");

i1[2].addEventListener('click', function(){

    image.src = 'img/img3.jpg';
    image[0].style.display = 'none';
    image[1].style.display = 'none';
    image[2].style.display = 'block';
    image[3].style.display = 'none';
    image[4].style.display = 'none';
    image[5].style.display = 'none';
    // image.style.transition="all 2s"
})



image[2].addEventListener('mouseover', function(){

    document.querySelector('.heading').innerHTML = image[2].alt;

});

image[2].addEventListener('mouseout', function(){

    document.querySelector('.heading').innerHTML = "Gallery";
    
});





i1[3].addEventListener('click', function(){
    
    image.src = 'img/img4.jpg';
    image[0].style.display = 'none';
    image[1].style.display = 'none';
    image[2].style.display = 'none';
    image[3].style.display = 'block';
    image[4].style.display = 'none';
    image[5].style.display = 'none';
    
    // image.style.transition="all 2s"
})



image[3].addEventListener('mouseover', function(){

    document.querySelector('.heading').innerHTML = image[3].alt;

});

image[3].addEventListener('mouseout', function(){

    document.querySelector('.heading').innerHTML = "Gallery";
    
});




i1[4].addEventListener('click', function(){

    image.src = 'img/img5.jpg';
    image[0].style.display = 'none';
    image[1].style.display = 'none';
    image[2].style.display = 'none';
    image[3].style.display = 'none';
    image[4].style.display = 'block';
    image[5].style.display = 'none';
    // image.style.transition="all 2s"
})




image[4].addEventListener('mouseover', function(){

    document.querySelector('.heading').innerHTML = image[4].alt;

});

image[4].addEventListener('mouseout', function(){

    document.querySelector('.heading').innerHTML = "Gallery";
    
});



i1[5].addEventListener('click', function(){

    image.src = 'img/img6.jpg';
    image[0].style.display = 'none';
    image[1].style.display = 'none';
    image[2].style.display = 'none';
    image[3].style.display = 'none';
    image[4].style.display = 'none';
    image[5].style.display = 'block';
})



image[5].addEventListener('mouseover', function(){

    document.querySelector('.heading').innerHTML = image[5].alt;

});

image[5].addEventListener('mouseout', function(){

    document.querySelector('.heading').innerHTML = "Gallery";
    
});



// const square = function(number){
//      return number * number 
// }
// var x = square(4) ;

// console.log(x);



