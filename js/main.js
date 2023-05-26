import { attach } from '../store.js';
import App from '/component/App.js';

// const $ = document.querySelector.bind(document);
attach(App, document.getElementById('root'));
// const newTodo = $("#new__todo");
// newTodo.onkeyup = function (event) {
//     event.keyCode === 13 && dispatch('add', this.value.trim())
// }

