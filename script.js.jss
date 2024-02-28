let input = document.querySelector("input");
input.focus();
let history = document.querySelector("#history");
let keys = document.querySelectorAll("button");

let numbers = [];
let oprators = [];

keys.forEach(e=>{
    if (e.className == "number"){numbers.push(e)}
    if (e.className == "oprator"){oprators.push(e)}
});

for(let i in numbers){
    numbers[i].addEventListener("click",()=>{
        input.value += numbers[i].innerText;
    });
}

for(let i in oprators){
    oprators[i].addEventListener("click",()=>{
        input.value += oprators[i].innerText;
    });
}

for (let i in keys){
    window.addEventListener("keydown", (e)=>{
        if (e.key == keys[i].innerText){
            keys[i].classList.add("active");
        }
    });
    window.addEventListener("keyup", (e)=>{
        if (e.key == keys[i].innerText){
            keys[i].classList.remove("active");
        }
    });
}
function calculate(e){
    try{
        e.preventDefault();
        let text = "";
        text = input.value;

        let memory = document.createElement("p");
        input.value = eval(input.value);
        text = text + " : " + input.value;
        memory.innerText = text;
        history.appendChild(memory);
    } catch{
        input.value = "invalid input";
    }
}

let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
input.addEventListener("keypress", (e)=>{
    if (alphabets.includes(e.key)){e.preventDefault()}
    if (e.key == "Enter"){
        calculate(e);
    }
});

let equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", (e)=>{calculate(e)});

let clear = document.querySelector("#clear");
clear.addEventListener("click",()=>{input.value = ""});

let deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click",()=>{
    input.value = input.value.substring(0, input.value.length - 1);
});

let divideByOne = document.querySelector("#divide-by-one");
divideByOne.addEventListener("click", (e)=>{
    try{
        e.preventDefault();
        let text = "";
        text = input.value;

        let memory = document.createElement("p");
        input.value = 1 / eval(input.value);
        text = text + " division by one" + " : " + input.value;
        memory.innerText = text;
        history.appendChild(memory);
    } catch{
        input.value = "invalid input";
    }
});

let powerByTwo = document.querySelector("#power-by-two");
powerByTwo.addEventListener("click", (e)=>{
    try{
        e.preventDefault();
        let text = "";
        text = input.value;

        let memory = document.createElement("p");
        input.value = eval(input.value) ** 2;
        text = "(" + text + ")²" +" : " + input.value;
        memory.innerText = text;
        history.appendChild(memory);
    } catch{
        input.value = "invalid input";
    }
});

let squreRoot = document.querySelector("#squre-root");
squreRoot.addEventListener("click", (e)=>{
    try{
        e.preventDefault();
        let text = "";
        text = input.value;

        let memory = document.createElement("p");
        input.value = Math.sqrt(eval(input.value));
        text = "squre(" + text + ") : " + input.value;
        memory.innerText = text;
        history.appendChild(memory);
    } catch{
        input.value = "invalid input";
    }
});

let clearAll = document.querySelector("#clear-all");
clearAll.addEventListener("click", ()=>{
    input.value = "";
    history.innerHTML = "<h1>history</h1>";
});

let negetiveOrPosetive = document.querySelector("#negetive-or-positive");
negetiveOrPosetive.addEventListener("click", ()=>{
    if (eval(input.value) > 0){input.value = input.value + "+"}
    if (eval(input.value) < 0){input.value = input.value + "-"}
});

window.addEventListener("keypress",(e)=>{
    input.focus();
    if (e.key == "c"){input.value = ""}
    if (alphabets.includes(e.key)){e.preventDefault()}
});
let main = document.querySelector("main");
main.style.width = innerWidth / 2.5 + "px";
main.style.height = innerHeight / 2 + "px";

window.addEventListener("resize", ()=>{
    main.style.width = innerWidth / 2.5 + "px";
    main.style.height = innerHeight / 2 + "px";
});