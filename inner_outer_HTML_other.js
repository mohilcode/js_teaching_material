console.dir(document.body.getElementsByTagName("span")[0]);// Will show with all properties
console.log(document.body.getElementsByTagName("span")[0]);
console.log(document.body.firstChild.nodeName)
console.dir(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)
console.dir(document.body.firstElementChild.nodeName)
console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeValue);
console.log(first.innerHTML); // allows to get the HTML inside the element as a string, can change
console.log(first.outerHTML); // contains full HTML, innerHTML + elemenent itself, can change
console.log(document.body.textContent) // just text content, can use this to edit also
first.hidden = true; // hides it, can use it to unhide it also
