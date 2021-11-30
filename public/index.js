const input = document.getElementById("input-url")
const output = document.getElementById("output-url")

// init
input.addEventListener("keydown", e => e.code == "Enter" ? oooify() : null)

// make tooltips
tippy(
    "#copy-button",
    {
        content: "Cooopied tooo clipboooard!",
        trigger: "click",
        animation: "shift-away-subtle"
    }
)

function oooify() {

    if (window.inBlinking) return

    try {
        new URL(input.value)
    } catch (e) {

        window.inBlinking = true

        input.style.opacity = 1
        input.disabled = true

        let oldValue = input.value
        input.value = "Invalid URL! Noooooooooooo"

        let times = 0
        let i = setInterval(async () => {
            input.style.opacity = (parseInt(input.style.opacity) + 1) % 2
            if (++times == 6) {
                clearInterval(i)
                input.value = oldValue
                input.disabled = false
                input.focus()
                inBlinking = false
            }
        }, 100)
        return
    }

    const domain = location.host

    let url = new OOO().encodeUrl(input.value.trim())
    url = `${location.protocol}//${domain}/${url}`

    document.getElementById("output-div").classList.remove("d-none")

    output.innerHTML = url
    output.setAttribute("href", url)

    input.value = ""
}

function copy() {
    const el = document.createElement('textarea');
    el.value = output.innerHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    setTimeout(() => tippy.hideAll(), 2000)

};
