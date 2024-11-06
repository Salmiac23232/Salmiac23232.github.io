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
    let spans = document.getElementsByClassName("word");
    for (i = 0; i < spans.length; i++){
        let {left, top} = spans[i].getBoundingClientRect();
        top = top - (window.innerHeight * .5);
        let opacityValue = (top + (left * 0.1)) >  0 ? 0.1 : 1;
        opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
        spans[i].style.opacity = opacityValue;
        
    }
}; 

