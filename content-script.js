var searchButton = document.createElement('a');
searchButton.style.cssText = `
    position: absolute;
`;
searchButton.target = "_blank"

var buttomIcon = document.createElement('img');
buttomIcon.src = chrome.runtime.getURL("images/search-icon.png");
buttomIcon.style.width = "32px";
searchButton.appendChild(buttomIcon);



function createSearchButton(rectTop, rectLeft, imgSource) {
    searchButton.href = imgSource;
    searchButton.style.left = rectLeft + 'px';
    searchButton.style.top = rectTop + window.scrollY + 'px';
    

    document.documentElement.appendChild(searchButton);
}   

function addSearchButton(event){
    var target = event.target;
    if (target.tagName.toLowerCase() === 'img') {
        var elementRect = target.getBoundingClientRect()

        createSearchButton(elementRect.top, elementRect.left, target.src)
    }
}

document.body.addEventListener('mouseover', addSearchButton, false);

