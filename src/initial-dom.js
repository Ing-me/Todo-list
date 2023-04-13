import { blankProject } from "./blankProject.js"; 
import createElement from "./createElement.js";

export function initialDom(){
    const content = document.querySelector('.main');
    const heading = document.createElement('h1');
    heading.textContent = "Todo Wepapp";

    content.appendChild(heading);

    const projectInfo = document.createElement('div');
    projectInfo.textContent = blankProject().projectTitle;
    content.appendChild(projectInfo);
}