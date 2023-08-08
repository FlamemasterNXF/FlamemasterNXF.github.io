let tab = "main"
function switchTab(t){
    if(t === tab) return
    DOM(t).style.display = `flex`
    DOM(tab).style.display = `none`
    tab = t
}