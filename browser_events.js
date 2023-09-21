  // <div class="container" onmouseenter="console.log('container ke andar')" onclick="console.log('container pe click')">
  //   <button onclick="alert('Hello World!')">Click Me!</button>
  //   </div>

//Browser Event: DOMContentLoaded
//Mouse Event: click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout
//Keyboard Event: keydown, keyup, keypress
//Form Event: focus, blur, change, submit
//Domcontentloaded: when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
let a = document.getElementsByClassName("container")[0]
a.onclick = () => {
    console.log("You clicked on the container");
}
