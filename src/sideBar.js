import createElement from './createElement.js';
import inbo from './assets/inbox-full-outline.png';
import toda from './assets/calendar-blank.png';
import weekly from './assets/calendar-week.png';
import plus from './assets/plus(1).png';
import goal from './assets/goal1.png';
import todayCal from './assets/todaycal.png';
import createSingleElement from './createSingleElement.js'

function createSidebar(){
    const sidebar = createElement('div', null, 'sidebar');
    const inbox = createElement('div', null, 'sidebar-link');
    const today = createElement('div', null, 'sidebar-link');
    const week = createElement('div', null, 'sidebar-link');
    const project = createElement('div', null, 'sidebar-link');

    project.addEventListener('click', () => {
        const form = document.querySelector('#form-container');
        form.style.display = "flex";
    });
   
    const inb = new Image();
    inb.src = inbo;   
    inbox.appendChild(inb);    
    inbox.appendChild(createElement('div', 'Inbox', 'side-item'));

    const tod = new Image();
    tod.src = toda;
    today.appendChild(tod);
    today.appendChild(createElement('div', 'Today', 'side-item'))

    const we = new Image();
    we.src = weekly;
    week.appendChild(we)
    week.appendChild(createElement('div', 'Week', 'side-item'));

    const proj = new Image();
    proj.src = goal;
    project.appendChild(proj)
    project.appendChild(createElement('div', 'Projects','side-item'))



    sidebar.appendChild(inbox);
    sidebar.appendChild(today);
    sidebar.appendChild(week);
    sidebar.appendChild(project)
    return sidebar;
}
export default createSidebar;