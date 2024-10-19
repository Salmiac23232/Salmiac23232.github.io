var loaded = false;
var last = false;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Names = [
    "Mael.Fuamba",
];
var CurName = Names[0];
let iterations = 0;

//When DOM Ready, Check is user has visited the site during the session already
//If has skip preloader, if not set flag and play preloader.
addEventListener("DOMContentLoaded", () => {
    if (typeof window.sessionStorage !== "undefined") {
        if (!sessionStorage.getItem('visited')) {
            sessionStorage.setItem('visited', true);
        }
        else {
            clearInterval(interval);
            document.getElementById("Name").innerText = "Mael.fi";
            document.getElementById("Name").classList.add("active");
            document.getElementById("Holder").classList.add("active");
            document.getElementById("pre-outer").classList.remove("preloader");
            document.getElementById("pre-outer").classList.add("topnav");
        }

    }
});

window.addEventListener("load", function() {
    loaded = true;
});

// Start Hacker animation loop
const interval = setInterval(() => HackerAnim(), 30);

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function HackerAnim() {
    if (iterations >= CurName.length + 15) {
        if (loaded) {
            console.log("loaded!");
            if (last) {
                console.log("Last!");
                clearInterval(interval);
                document.getElementById("Name").classList.add("active");
                document.getElementById("Holder").classList.add("active");
                await delay(1000);
                document.getElementById("pre-outer").classList.remove("preloader");
                document.getElementById("pre-outer").classList.add("topnav");

            } else {
                last = true;
                CurName = "Mael.fi";
                iterations = 0;
            }

        } else {
            if (last) return;
            iterations = 0;
            CurName = Names[Math.floor(Math.random() * Names.length)];
        }
    }

    document.getElementById("Name").innerText = document
        .getElementById("Name")
        .innerText.split("")
        .map((letter, index) => {
            if (index + 5 < iterations) {
                return CurName[index];
            }

            return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

    iterations += 1 / 3;
}

