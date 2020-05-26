import cssInfo from "./css-collection"
let iframe = document.createElement("iframe");
document.body.innerHTML = "";
document.body.appendChild(iframe);

function happen(element, event) {
  return new Promise((resolve) => {
    let handler = () => {
      resolve();
      element.removeEventListener(event, handler);
    }
    element.addEventListener(event, handler);
  })
}

void async function(){
  for(let info of cssInfo) {
    iframe.src = info.url;
    // console.log(info.name);
    await happen(iframe, "load");
  }
}();
