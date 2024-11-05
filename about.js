/* This is forbidden, dont use this. but if the jonkler ever gets you. This will be your friend
addEventListener("DOMContentLoaded", () => 
    Array.from(document.getElementsByClassName("reveal")).forEach(item =>
        item.innerHTML = `<span>${item.innerText.split(" ").join(" </span><span>")}</span>`),
); */

addEventListener("DOMContentLoaded", () => {
    const elements = document.getElementsByClassName("reveal");
    for (const element of elements){
        const words = element.innerText.split(" ");
        for (j=0; j < words.length; j++){
            if (j == 0){
                element.innerHTML = ('<span class="word">' + words[j] + '</span>');
            }
            else {
                element.innerHTML += (' <span class="word">' + words[j] + '</span>');
            }
        }
    }
    
});

