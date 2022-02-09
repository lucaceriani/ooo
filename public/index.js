const input = document.getElementById("input-url");
const output = document.getElementById("output-url");
const oooBtn = document.getElementById("ooo-button");
const copyBtn = document.getElementById("copy-button");

// init
input.addEventListener("keydown", e => e.code == "Enter" ? oooify() : null)

// mouse enter listener

let oooBtnInt;

oooBtn.addEventListener("mouseenter", () => oooBtnInt = setInterval(() => {
    console.log("a");
    if (oooBtn.innerText == "oOo") oooBtn.innerText = "OoO";
    else oooBtn.innerText = "oOo";
}, 200));

oooBtn.addEventListener("mouseleave", () => {
    clearInterval(oooBtnInt);
    // oooBtn.innerText = "oOo";
});


function oooify() {

    if (window.inBlinking) return

    try {
        new URL(input.value)
    } catch (e) {

        window.inBlinking = true

        input.style.opacity = 1
        input.disabled = true

        let oldValue = input.value
        input.value = "Invalid URL! Noooooooooooo D:"

        let times = 0

        let i = setInterval(async () => {
            if (parseInt(input.style.opacity) == 1)
                input.style.opacity = 0.2;
            else
                input.style.opacity = 1;

            if (++times == 6) {
                clearInterval(i)
                input.value = oldValue
                input.disabled = false
                input.focus()
                inBlinking = false
            }
        }, 150)
        return
    }

    const domain = location.host;

    let url = new OOO().encodeUrl(input.value.trim());
    url = `${location.protocol}//${domain}/${url}`;

    // show the output div
    document.getElementById("output-div").style.display = "block";

    output.innerHTML = url;
    output.setAttribute("href", url);

    input.value = "";
}

function copy() {
    const el = document.createElement('textarea');
    el.value = output.innerHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    copyBtn.parentNode.setAttribute("data-showme", "");
    setTimeout(() => copyBtn.parentNode.removeAttribute("data-showme"), 1000);
};
