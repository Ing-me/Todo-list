

function createSingleElement(el, content){
    const element = document.createElement(el);
    element.textContent = content;

    return element;
}

export default createSingleElement;