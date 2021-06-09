const input = document.getElementById("input-url")
const output = document.getElementById("output-url")

// make tooltips
tippy(
    "#copy-button",
    {
        content: "Copied to clipboard!",
        trigger: "click",
        animation: "shift-away-subtle"
    }
)

function oooify() {

    try {
        new URL(input.value)
    } catch (e) {
        input.style.opacity = 1

        let oldValue = input.value
        input.value = "Invalid URL! Noooooooooooo"

        let times = 0
        let i = setInterval(async () => {
            input.style.opacity = (parseInt(input.style.opacity) + 1) % 2
            if (++times == 6) {
                clearInterval(i)
                input.value = oldValue
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
