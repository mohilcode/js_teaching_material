// DOM trees convert HTML page into a object tree
// Direct as well as deeply nested elments of an element are called its children
// Child nodes: Elements that are direct children. For example: head and body are children of <html> tag
// Descendant nodes: All nested elements, children, their children and so on ...

console.log(document.body.firstChild) // It includes empty text node as well
console.log(document.body.lastChild) // same as elem.childNodes[elem.childNodes.length-1]
console.log(document.body.childNodes) // This is not an array, it is node list

// There is also a method elem.hasChildNodes() to check whether there are any child nodes
let arr = Array.from(document.body.childNodes) // Can use this to convert to arrays
console.log(arr);

// DOM Collection (Read-only)
// Can use $0 to refer to an element
// They are live elem.childNodes variable (refrence) will automatically update if child nodes of elem
// is changed, They are iterable using for .. of loop
// can use $0.nextSibling

a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)



