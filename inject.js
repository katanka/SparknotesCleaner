
removeElement("lit-guides-social");
removeElement("blog-feature");
removeElement("more-help");
getElement("content").setAttribute("style","width:850px");
getElement("containerUGC").setAttribute("style","width:850px");
getElement("containerUGC").setAttribute("style","background:#f6fbfe");
getElement("containerUGC").setAttribute("style","border:1px solid #6dcff4");

var element = getElement("light-blue-background border-blue content");
element.removeAttribute("light-blue-background");
element.removeAttribute("border-blue");
element.className = 'content';

element = getElement("light-grey-white-background border-blue padding-15 margin-btm-30");
element.removeAttribute("light-grey-white-background");
element.removeAttribute("border-blue");
element.removeAttribute("padding-15");
element.removeAttribute("margin-btm-30");
element.className = 'content';
while (element.firstChild) {
    element.removeChild(element.firstChild);
}
//element.setAttribute("style","border:0px");
//element.setAttribute("style","background:#fff");

function getElement(name){
	return document.getElementsByClassName(name)[0];
}

function removeElement(name){
  console.log("trying to remove " + name);
  var element = getElement(name);
  if(element){
    element.parentNode.removeChild(element);
  }
}