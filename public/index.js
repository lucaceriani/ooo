const input = document.getElementById("input-url")
const output = document.getElementById("output-url")

function oooify() {
    const domain = location.host
    const ooo = new OOO()

    let url = ooo.encodeUrl(input.value)
    url = `${location.protocol}//${domain}/${url}`

    output.innerHTML = `<a href="${url}">${url}</a><br><p>Copied to clipboard!</p>`

    copy(url)
}

function copy(str) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
