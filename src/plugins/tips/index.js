import Vue from "vue"
import component from "./tips.vue"

let Con = Vue.extend(component)

let instance = null
// let el = null
let canAdd = true

function getInstance () {
    if (!instance) {
        instance = new Con().$mount()
    }

    return instance

    // return new Con().$mount()
}

function Tips (message, delay=1000) {
    if (!canAdd) {
        return
    }

    canAdd = false
    // instance = getInstance()
    // el = instance.$el
    let el = getInstance().$el

    instance.message = message
    document.body.appendChild(el)
    instance.show = true

    let timer = setTimeout(() => {
        instance.show = false
        canAdd = true
        el.addEventListener("transitionend", function (e) {
            document.body.removeChild(el)
            canAdd = true
            clearTimeout(timer)
        }, { once: true })
    }, delay);
}

export default {
    install (Vue) {
        Vue.tips = Tips
        Vue.prototype.$tips = Tips
    }
}