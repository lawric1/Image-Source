var searchButton = document.createElement('a');
searchButton.style.cssText = `
    position: absolute;
    padding: 6px;
`;
searchButton.target = "_blank"

var buttomIcon = document.createElement('img');
buttomIcon.src = chrome.runtime.getURL("images/search-icon.png");
buttomIcon.style.cssText = `
    padding: 4px;
    background-color: rgba(0, 0, 0);
    border-radius: 8px;
    width: 32px;
`;
searchButton.appendChild(buttomIcon);


function findSource(image) {
    var url = "https://www.google.com/searchbyimage?site=search&sa=X&image_url=" + image;
}


function createSearchButton(rectTop, rectLeft, image) {
    // var imageSource = findSource(image);
    searchButton.href = image;
    searchButton.style.left = rectLeft + 'px';
    searchButton.style.top = rectTop + window.scrollY + 'px';
    

    document.documentElement.appendChild(searchButton);
}   

function addSearchButton(event){
    var target = event.target;
    if (target.tagName.toLowerCase() === 'img') {
        var elementRect = target.getBoundingClientRect();

        createSearchButton(elementRect.top, elementRect.left, target.src);
    }
}

document.body.addEventListener('mouseover', addSearchButton, false);
