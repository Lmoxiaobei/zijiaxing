function selectElement(ele){
	return document.querySelectorAll(ele)
}
selectElement(".fukuan")[0].addEventListener("touchend",function(){
	window.location.href="zhifuchenggong.html"
})
var checkBox=selectElement(".checkBox")
for(var i=0;i<checkBox.length;i++){
	checkBox[i].addEventListener("touchend",function(){
		for(var j=0;j<checkBox.length;j++){
			checkBox[j].getElementsByTagName("svg")[0].style.display="none"
		}
		this.getElementsByTagName("svg")[0].style.display="block"
	})
}