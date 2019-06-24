(function (doc, win) {
    let docELe = doc.documentElement
    let ev = "orientationchange" in window ? "orientationchange" : "resize"
    function setRem () {
        let width = docELe.clientWidth
        docELe.style.fontSize = 50 * width / 375 + "px"
    }

    win.addEventListener(ev, setRem, false)
    win.addEventListener("DOMContentLoaded", setRem, false)

})(document, window)