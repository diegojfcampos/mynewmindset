var myImage = document.querySelector('img.desenvolvedor');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/diego j f campos.jpg') {
      myImage.setAttribute ('src','img/diego j f campos1.jpg');
    } else {
      myImage.setAttribute ('src','img/diego j f campos.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Por favor, digite seu nome.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
  

/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'My New Mind Set world!'; 

alert("Welcome at My New Mind Set");

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}


document.querySelector('img.github.png').onclick = function() {
    alert('GitHub /diegojfcampos .');
} */

/*function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }

multiply(50),(10);
multiply(5),(10);
multiply(200),(1000);
*/


