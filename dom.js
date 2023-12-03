console.dir(document);
console.log(document.domain);
console.log(document.url);
let items=document.getElementsByClassName('list-group-item');
console.log(items)
items[2].style.backgroundColor='green'
for(var i=0;i<items.length;i++)
items[i].style.fontWeight='bold'
let l=document.getElementsByTagName('li')
l.style.backgroundColor='red'