// Date: 2024-06-17
// Author: Jeffrey Bolk
// Description: Functions for MyPortfolio


// close cookies

let closeButton = document.getElementById('check-image');
let cookiesDialogueBox = document.getElementById('cookies');

function closeCookies() {
    cookiesDialogueBox.style.display = 'none';
}

if (document.getElementById('check-image')) { //This is needed to avoid this error in the console: cannot read properties of null. This is because the JS does not recognize the specified html elements from other html pages. (Credit: reddit)
    closeButton.addEventListener('click', closeCookies);
}

// show article

let article = document.getElementsByClassName('article');
let picture = document.getElementsByClassName('picture');
var articleLength = article.length;

//using indexing to capture each class iteration (Credit: Stack Overflow)

function showArticle() {

    for (var i = 0; i< articleLength; i++) {
        article[i].style.display = 'flex';
    }
}

if (document.getElementsByClassName('article')) {
    for (var i = 0; 1 < article.length; i++) {
        picture[i].addEventListener('click', showArticle);
    }
    
}

// Just a little fun...

console.log("Only computer nerds who use 'Inspect' will see this :)")

