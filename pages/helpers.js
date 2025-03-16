
function createElement(element, idAndClassName = '') {
    let el = document.createElement(element);

    idAndClassName != '' ? el.setAttribute('id', idAndClassName) : '';
    idAndClassName != '' ? el.setAttribute('class', idAndClassName) : '';

    return el;
}

function attributes(attributes, elements = "" | []) {
    let properties = Object.keys(attributes);
    let values = Object.values(attributes);

    let attribs = "";

    let valueCount = 0;

   if (Array.isArray(elements)) {
        elements.map((element) => {
            for (let i = 0; i < Object.keys(attributes).length; i++) {
            
                element.setAttribute(properties[i], values[i]);
            }
        })
   }else {
        for (let i = 0; i < Object.keys(attributes).length; i++) {
            
            elements.setAttribute(properties[i], values[i]);
        }
   }
    
     
}

function attach(parent, child) {
    if (Array.isArray(children)) {
        children.map((child) => {
            parent.append(child);
        })
    }else{
        parent.append(children);
    }
}