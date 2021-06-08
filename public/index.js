const input = document.getElementById("input-url")
const output = document.getElementById("output-url")

function oooify() {
    const domain = location.host
    const ooo = new OOO()

    let url = ooo.encodeUrl(input.value)
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
};
