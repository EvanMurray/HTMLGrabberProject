chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  var root = document.documentElement.tagName;
  var tagNames = [];
  var element = document.getElementsByTagName(root);
  element = element[0];

  var workingArray = [element]
  counter = 0;

  while(counter < workingArray.length){


     var temp = workingArray[counter];

     if(temp.hasChildNodes()){
        tempChildren = temp.childNodes;
        for(var i = 0; i < tempChildren.length; i++){
            if(tempChildren[i].nodeType != Node.TEXT_NODE && tempChildren[i].tagName != undefined){
            workingArray.push(tempChildren[i]);
            tagNames.push(tempChildren[i].tagName)
            }
        }

     }
     counter++;
  }


  var filteredArray = tagNames.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
  });
  
  console.log(workingArray);
  sendResponse(filteredArray);

});

/*



*/
