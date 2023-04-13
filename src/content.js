import createElement from './createElement.js';

function createContents(){
    const contents = createElement('dic',null, 'contents');
    contents.textContent = "Mw se contents"
    return contents
}
export default createContents;