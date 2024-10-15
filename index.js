const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

window.onload = function () {
    loaded = true;
    const menu = document.getElementById("menu");

    Array.from(document.getElementsByClassName("menu-item"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                menu.dataset.activeIndex = index;
            }
        });
};


const Names = [
  "MAEL FUAMBA",
  "Mael Fuamba",
  "mael fuamba",
  "MAEL_FUAMBA",
  "Mael_Fuamba",
  "mael_fuamba",
  "MAEL.FUAMBA",
  "Mael.Fuamba",
  "mael.fuamba",
  "MAEL#FUAMBA",
  "Mael#Fuamba",
  "mael#fuamba"
];
var loaded = true;
var last = false;
var CurName = Names[0];

let iterations = 0;

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
        document.getElementById("background-pattern").classList.add("intro");
      } else {
        last = true;
        CurName = "Mael.fi"   ;
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

