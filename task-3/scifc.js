function opr(valu) {
	document.getElementById('result').value+=valu;
}
function eql() {
	let x = document.getElementById('result').value;
	let y = eval(x);
	document.getElementById('result').value = y;
}
function clr() {
	document.getElementById('result').value ="";
}
function dlt() {
	var z = document.getElementById('result').value;
	document.getElementById('result').value = z.substring( 0, z.length-1);
}
function sqr() {
	var u = document.getElementById('result').value;
	document.getElementById('result').value *= u;
}
function fact() {
  var v = document.getElementById('result').value;
  f =1;
  for (var i = 2; i <= v; i++) 
  	f = f * i;
  document.getElementById('result').value = f;  
}
function pwr() {
 var aa = document.getElementById('result').value;
 document.getElementById('result').value = Math.round(aa);
}
function root() {
 var bb = document.getElementById('result').value;
 document.getElementById('result').value = Math.sqrt(bb);
}
function func() {
 var cc = document.getElementById('result').value;
 document.getElementById('result').value = Math.cos( cc * Math.PI / 180);
}
 function ffunc() {
  var dd = document.getElementById('result').value;
  document.getElementById('result').value = Math.sin(dd * Math.PI / 180);
 }

 function fffunc() {
  var ee = document.getElementById('result').value;
  document.getElementById('result').value = Math.tan(ee * Math.PI / 180);
 }

 function ffffunc() {
  var kk = document.getElementById('result').value;
  document.getElementById('result').value = Math.log(kk);
 }
  function ffffffunc() {
  var ll = document.getElementById('result').value;
  document.getElementById('result').value = ( ll * 180/ Math.PI) ;
 }
 function llog() {
  var mm = document.getElementById('result').value;
  document.getElementById('result').value = Math.log(mm);
 }
 function expe() {
  var nn = document.getElementById('result').value;
  document.getElementById('result').value = Math.exp(nn);
 }

 











