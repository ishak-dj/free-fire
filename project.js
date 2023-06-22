var ok = document.getElementById('ok');
var data = document.getElementById('data');

document.getElementById('submit').onsubmit = function(){
if(document.getElementById('inp2').value != "" && document.getElementById('inp1').value != ""){
ok.classList.remove('hide');
data.remove();
}
}