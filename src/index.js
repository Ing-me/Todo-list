import './style.css';
import todo from './assets/todo.png';
import createElement from './createElement.js';
import inbo from './assets/inbox-full-outline.png';
import toda from './assets/calendar-blank.png';
import weekly from './assets/calendar-week.png';
import plus from './assets/plus(1).png';
import createSingleElement from './createSingleElement.js'
import createFooter from './footer';
import createSidebar from './sideBar';
import createContents from './content';

function component() {
    const element = document.querySelector('#content');
    element.appendChild(createHeader());
    element.appendChild(createteMain());
    element.appendChild(createFooter());
    
  
    return element;
  }
  
  document.body.appendChild(component());

function createHeader(){
    const header = createElement('div', null, 'header');
    const title = createElement('div', null, null);
    title.textContent = "Todo List";

    const img = new Image();
    img.src = todo;
    header.appendChild(img);
    header.appendChild(title)

    return header
}

function createteMain(){
    const main = createElement('div', null, 'main');  
    main.appendChild(createSidebar());
    //main.appendChild(createContents())

    return main;
}







