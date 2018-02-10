(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
var newTodoBtn = document.querySelector('#new-todo-btn');
var todoInput = document.querySelector('#todo');
var todoList = document.querySelector('#todo-list');

newTodoBtn.addEventListener('click', addTodoAfterClick);
todoInput.addEventListener('keypress', addTodoAfterKeypress);


function toggleContent(event) {
    event.target.nextElementSibling.classList.toggle("hide");
}

function inputLength() {
    return todoInput.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    li.classList.add('list-group-item');
    // span
    var span = document.createElement('span');
    span.appendChild(document.createTextNode(todoInput.value));
    li.appendChild(span);

    //remove button
    var removeBtn = document.createElement('button');
    removeBtn.classList.add('btn', 'btn-danger', 'rmv-btn');
    removeBtn.style.cssFloat = 'right';
    removeBtn.appendChild(document.createTextNode('X'));
    removeBtn.addEventListener('click', removeTodo);
    li.appendChild(removeBtn);

    //tick button
    var tickBtn = document.createElement('button');
    tickBtn.classList.add('btn', 'btn-success', 'tick-btn');
    tickBtn.style.cssFloat = 'right';
    tickBtn.innerHTML = '✓';
    tickBtn.addEventListener('click', tickTodo);
    li.appendChild(tickBtn);
    li.classList.add('myLi');
    todoList.appendChild(li);
    todoInput.value = '';
}

function addTodoAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addTodoAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function removeTodo(event) {
    todoList.removeChild(event.target.parentElement);
}


function tickTodo(event) {
    event.target.parentNode.childNodes[0].classList.toggle('done'); 
}




},{}]},{},[1]);
