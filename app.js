var element;
var children;
var tagArray = getChildren('HTML');
var tempArray = [];

function getChildren(tag){

element = document.getElementsByTagName(tag);
element = element[0];
children = element.childNodes;

 for (var i = 0; i < children.length; i++) {
   var node = children[i];
   if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
     children[i].remove(node);
 }

return children;
}



console.log(tagArray);

for (var i = 0; i < tagArray.length; i++){
 if(tagArray[i].hasChildNodes()){
   tempArray = getChildren(tagArray[i].tagName);
   console.log(tempArray);
 };
};
