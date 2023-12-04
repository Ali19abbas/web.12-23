let newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='Hello';

var newDivText=document.createTextNode('HEllo');

newDiv.appendChild(newDivText);

var container =document.querySelector(('header .container'));

var h1=document.querySelector('header h1');

console.log(newDiv)

container.insertBefore(newDiv, h1);