const tbnames = document.getElementById('maths');
function find(){
    var x = document.getElementById('searchbar').value;
    document.getElementById('maths').innerHTML = "value"+ x;
}
(() => {
    document.getElementById('searchbar').addEventListener('change',find);
})();
