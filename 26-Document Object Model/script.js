// -------------185-------------
// let val;

// val = window.document;
// val = document.all;
// val = document.all.length;
// val = document.all[10];
// val = document.head;
// val = document.body;
// val = document.anchors;
// val = document.URL;
// val = document.domain;
// val = document.images;
// val = document.title;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.scripts;
// val = document.scripts[2];
// val = document.scripts[2].getAttribute('src');


// console.log(val);

// -------------186--------------

// let val;

// val= document.getElementById('header');
// val= document.getElementById('header').id;
// val= document.getElementById('header').className;

// val= document.getElementById('header');
// // val = val.className;

// val.style.color='red';
// val.style.fontSize='45px';
// val.style.fontWeight='bold';

// val= document.getElementById('header').innerText='my ToDo App';

// console.log(val);

// console.log(document.querySelector('#header'));

// console.log(document.querySelector('.card-header'));

// document.querySelector('li:nth-child(2)').textContent='task item';

// -----------------187-----------------

// let val;

// val= document.getElementsByClassName('list-group-item');

// // val = val[2];

// val[1].style.color='blue';
// val[1].style.fontSize='25px';
// val[2].textContent='new item';

// for(let i=0;i<val.length;i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent='new item');
// }

// val = document.getElementsByTagName('li');
// val = document.getElementById('task-list');
// val = val.getElementsByTagName('a');

//  val = document.querySelectorAll('li');

//  val.forEach(function(item,index){
//      item.textContent=`${index} - hello`;
//  });

// val = document.querySelectorAll('li:nth-child(even)');

// val.forEach(function(item){
//     item.style.background= '#ccc';
// });


// console.log(val);

//---------------188------------------

// let val;

// let list =document.querySelector('.list-group');
// val = list;

// val = list.childNodes;

// // val = list.children;

// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;
// val = list.childNodes[1].nodeType;

// val = list.children;
// val = list.children[0];
// val = list.children[2];

// val = list.children[2].textContent='new item';
// val = list.children[3].children;

// val = list.firstChild;
// val = list.firstElementChild;

// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount;

// val = list.parentNode;
// val = list.parentElement;
// val = list.parentElement.parentElement;

// val = list.children[0].nextSibling;
// val = list.children[0].nextElementSibling;
// console.log(val);

// for(let i=0; i<list.children.length;i++){
//     console.log(list.children[i]);
// }

//---------------189-------------------

// const li = document.createElement('li');

//  li.className= 'list-group-item list-group-item-secondary';
//  li.setAttribute('title','new item');
//  li.setAttribute('data-id','5');

// const text = document.createTextNode('new item');
// li.appendChild(text);

// const a= document.createElement('a');
// a.setAttribute('href','#');
// a.className= 'delete-item float-right';
// a.innerHTML='<i class="fas fa-times"></i>';

// li.appendChild(a);
// document.querySelector('#task-list').appendChild(li);

// console.log(li);

// ------------190----------------------

const taskList = document.querySelector('#task-list');

// taskList.remove();
// taskList.childNodes[3].remove();


console.log(taskList);




















