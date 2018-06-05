function selectElement(e){
	return document.querySelectorAll(e)
}
function fanhui(class1){
	selectElement(class1)[0].addEventListener("touchend",function(){
	window.location.href="index.html"
	})
}
fanhui(".guanbi")
fanhui(".return1")
fanhui(".ganxie-2 a")