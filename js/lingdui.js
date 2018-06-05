function selectElement(e){
	return document.querySelectorAll(e)
}
selectElement(".top a")[0].addEventListener("touchstart",function(){
	window.location.href="index.html"
})