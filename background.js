document.addEventListener('DOMContentLoaded', function() {

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

            chrome.tabs.sendMessage(tabs[0].id, {}, function(response) {

                console.log('success');
                console.log(response);
                var mdnUrl = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/';


                htmlString = "";
                var tagList = document.getElementById('tag-list');

                for(i in response){
                  var urlTag = response[i].toLowerCase();
                  var newUrl = mdnUrl + urlTag;
                  htmlString += "<a href = '"+newUrl +"' target='_blank' class = 'overlay-links'>";
                  htmlString+= '<p class="tag">';
                  htmlString+=response[i];
                  htmlString+='</p></a>';
                }
                tagList.innerHTML = htmlString;
            });
        });
    });
