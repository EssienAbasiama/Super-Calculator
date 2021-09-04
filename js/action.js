function clic(val) {
    document.getElementById("input").value+=val;
}
function clr(){
    document.getElementById("input").value = "";
}
function solve() {
    let y = document.getElementById("input").value
    document.getElementById("result").value = eval(y);

}