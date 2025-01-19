/* This is forbidden, dont use this. but if the jonkler ever gets you. This will be your friend
addEventListener("DOMContentLoaded", () => 
    Array.from(document.getElementsByClassName("reveal")).forEach(item =>
        item.innerHTML = `<span>${item.innerText.split(" ").join(" </span><span>")}</span>`),
); */
var spans;
addEventListener("DOMContentLoaded", () => {
    const elements = document.getElementsByClassName("reveal");
    for (const element of elements){
        const words = element.innerText.split(" ");
        for (let j=0; j < words.length; j++){
            if (j == 0){
                element.innerHTML = ('<span class="word">' + words[j] + '</span>');
            }
            else {
                element.innerHTML += (' <span class="word">' + words[j] + '</span>');
            }
        }
    }
    revealWords();
    
  
});

window.addEventListener("scroll", () => {
    revealWords();
    });

function revealWords(){
    //console.clear();
    const elements = document.getElementsByClassName("reveal");
    for (const element of elements){
        const spans = Array.from(element.getElementsByClassName("word"));
        firstWord = spans[0];
        lastWord = spans[spans.length - 1];
        let {top} = firstWord.getBoundingClientRect();
        let {bottom} = lastWord.getBoundingClientRect();
    
        diff = bottom - top;
        windowDiff = ((window.innerHeight * .5)- top);

        let progress = (windowDiff / diff);

        let WordProgress = progress * spans.length;

        /*if (progress > 0 && progress < 1){
            console.log("Currently Animating element" )
            console.log("top:" + top);
            console.log("bottom:" + bottom);
            console.log("diff:" + diff);
            console.log("windowDiff:" + windowDiff);
            console.log("progress:" + progress);
            console.log("Words Displayed:" + WordProgress);
        }*/




        for (i = 0; i < spans.length; i++){

            let opacityValue = WordProgress - i;
            if (opacityValue > 1){
                spans[i].style.opacity = 1;
                continue;
            }
            if (opacityValue < 0){
                spans[i].style.opacity = 0;
                continue;
            }
            console.log("opacity of " + i + ". word:" + opacityValue);
            spans[i].style.opacity = opacityValue;
        }
    }

}; 

