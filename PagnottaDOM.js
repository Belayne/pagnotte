const spanPagnotte = document.getElementById("numeroPagnotte");
const lineElement = document.getElementById("currentLine");
const btnContinua = document.getElementById("btnContinua");
const btnBuyOne = document.createElement("button");
const btnBuyTwelve = document.createElement("button");
btnBuyOne.textContent = "Prendi una pagnotta"
btnBuyTwelve.textContent = "Prendi 12 pagnotte"

const lines = [
   'Sua moglie gli dice:',
   'Prendi una pagnotta',
   'e, se hanno le uova',
   'prendine una dozzina.',
   'Il tizio torna con 12 pagnotte.'
]

let currentLine = 0;
let numeroDiPagnotte = 0;

spanPagnotte.textContent = numeroDiPagnotte;

function nextLine() {
    if(currentLine == 1) {
        btnContinua.insertAdjacentElement("beforebegin", btnBuyOne)
        btnContinua.setAttribute("disabled", "true");
    }

    if(currentLine == 3) {
        btnContinua.insertAdjacentElement("beforebegin", btnBuyTwelve)
        btnContinua.setAttribute("disabled", "true");
    }

    if(currentLine < lines.length - 1) {
        currentLine++;
    }
}

btnContinua.addEventListener("click", () => {
        lineElement.textContent = lines[currentLine];
        nextLine();
    }
)

btnBuyOne.addEventListener("click", e => {
    numeroDiPagnotte++;
    spanPagnotte.textContent = numeroDiPagnotte;
    btnContinua.removeAttribute("disabled");
    e.target.remove();
})

btnBuyTwelve.addEventListener("click", e => {
    numeroDiPagnotte += 12;
    spanPagnotte.textContent = numeroDiPagnotte;
    btnContinua.removeAttribute("disabled");
    e.target.remove();
})