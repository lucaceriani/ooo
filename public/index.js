if (location.pathname.length > 4) {
    let redirect = new OOO().decodeUrl(decodeURI(location.pathname.replace("/", "")))
    location.href = redirect
    console.log(redirect);
}

function oooify() {
    const input = document.getElementById("input-url")
    const output = document.getElementById("output-url")
    // const domain = "ooooooooooooooooooooooo.ooo"
    const domain = location.host

    const ooo = new OOO()
    const url = ooo.encodeUrl(input.value)
    output.innerHTML = `<a href="${location.protocol}//${domain}/${url}">${domain}/${url}</a>`
}
