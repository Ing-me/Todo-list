import createElement from './createElement.js';

function createFooter(){
    const footer = createElement('div', null, 'footer');
    const div1 = createElement('div', null, null);
    div1.textContent = "Powered by meme123";
    const div2 = createElement('div', null, null);
    div2.textContent = "KwenTIC 2023";

    footer.appendChild(div1);
    footer.appendChild(div2);

    return footer;
}

export default createFooter;