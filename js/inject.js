
//create space for download button
var para = document.createElement("div");
var element = document.getElementsByClassName("sidebar")[0];
var panel = element.getElementsByClassName("panel")[0];
element.insertBefore(para, panel);
para.setAttribute("class", "panel");

//find url
var url = location.href;
var idxId = url.indexOf("id=");
//get Id
var id = url.substr(idxId+3, 9);
para.innerHTML = '<div class="isi">\
<select id="source">\
<option value="none"> -- Select game --\
<option value="smods.ru">Cities: Skyline (smods.ru)\
<option value="xcom2.smods.ru">XCOM 2 (xcom2.smods.ru)\
<option value="stellaris.smods.ru">Stellaris (stellaris.smods.ru)\
<option value="hearts-of-iron-4.smods.ru">Heart of Iron 4 (hearts-of-iron-4.smods.ru)\
<option value="transport-fever.smods.ru">Transport Fever (transport-fever.smods.ru)</select><br><br>\
<a class="btn_darkblue_white_innerfade" style="padding:10px" id="dwBtn" target="_blank">Download</a></div>';

//pick game function
var x = document.getElementById('source');
x.addEventListener('click', pickSource);

	function pickSource() {
    var y = document.getElementById("source").value;
    if (y == 'none') {
    	document.getElementById("dwBtn").setAttribute('href', "#")
	} 
    else {
    	document.getElementById("dwBtn").setAttribute('href', "http://"+ y +"/?s=" + id + "&s_byID=1")
    };	
}

