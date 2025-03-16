
function createElement(element, idAndClassName = '') {
    let el = document.createElement(element);

    idAndClassName != '' ? el.setAttribute('id', idAndClassName) : '';
    idAndClassName != '' ? el.setAttribute('class', idAndClassName) : '';

    return el;
}

function attributes(element, attr, value) {
    return element.setAttribute(attr, value);
}