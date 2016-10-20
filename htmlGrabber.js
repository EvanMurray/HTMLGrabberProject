
var mdnUrl = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/';

var tagNameArray = [];

var nodeArray = getChildren(document.documentElement.tagName);

//get children in list

function getChildren(tag){

var element = document.getElementsByTagName(tag);
element = element[0];
var children = element.childNodes;

 for (var i = 0; i < children.length; i++) {
   var node = children[i];
   if (node.nodeType == 3 && !/\S/.test(node.nodeValue)){
     children[i].remove(node);
     i--;
   }
 }

 for (var j = 0; j < children.length; j++){
   if(children[j].tagName != undefined){

   tagNameArray.push(children[j].tagName);

 };
}

 for (var k = 0; k < children.length; k++){
   if(children[k].hasChildNodes()){
      getChildren(children[k].tagName);
   }
 }
}

buildOverlay();

function buildOverlay(){
  var filteredArray = tagNameArray.filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
});
var elemDiv = document.createElement('div');
elemDiv.setAttribute("class", "overlay");
elemDiv.setAttribute("id", "myTags");
document.body.appendChild(elemDiv);

elemDiv.innerHTML += '<a href="javascript:void(0)" class="closebtn" onclick="closeOverlay()">&times;</a>';

var contentDiv = document.createElement('div');
contentDiv.setAttribute("class", "overlay-content");
elemDiv.appendChild(contentDiv);

for(tag in filteredArray){
  var urlTag = filteredArray[tag].toLowerCase();
  var newUrl = mdnUrl + urlTag;
  contentDiv.innerHTML += "<a href = '"+newUrl +"'><p>"+filteredArray[tag]+ "</p></a>";
;}

elemDiv.innerHTML += "</div>";

}

var overlayButton = document.createElement('button');
overlayButton.setAttribute('id', 'overlay-button');
overlayButton.setAttribute('onclick', 'openOverlay()');
overlayButton.innerHTML = "Show Overlay";
document.body.appendChild(overlayButton);


function openOverlay(){
  document.getElementById('myTags').style.width = "100%";
}

function closeOverlay(){
  document.getElementById('myTags').style.width = "0";
}
