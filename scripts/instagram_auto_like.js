let likes = 0;

// After every second we can like and dislike
let timer = setInterval(() => {
    
    // Select the span element
    const heart = document.querySelector(".fr66n");
    // Instagram page has the right arrow button to go to the next photo
    const rightArrow = document.querySelector("._65Bje.coreSpriteRightPaginationArrow");

    if(heart) {
        likes++;
        // Choose the button elements and click it
        heart.firstElementChild.click();
        console.log(`You have liked ${likes} posts`);
        // If it's the last photo then return
        if(rightArrow == null) {
            clearInterval(timer);
            return;
        }
        rightArrow.click();
    }
    
}, 50);
