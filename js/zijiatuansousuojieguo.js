function selectElement(ele){
	return document.querySelectorAll(ele)
}

//cover display
selectElement(".footer-section")[0].onclick=function(){
	selectElement(".cover")[0].style.display="block"
}

selectElement(".cover-menu-top-cancel p")[0].onclick=function(){
	alert(1)
	selectElement(".cover")[0].style.display="none"
}

//cover menu sub
var coverSub=selectElement(".cover-menu-main-sub ul li")
for(i=0;i<coverSub.length;i++){
	coverSub[i].getElementsByTagName("div")[0].onclick=function(){
		if(this.getElementsByTagName("a")[0].style.display!="block"){
			this.getElementsByTagName("a")[0].style.display="block"
			this.style.border="1px solid #51BBDB"
			this.parentNode.style.color="#51BBDB"
		}else{
			this.getElementsByTagName("a")[0].style.display="none"
			this.style.border="1px solid #D9D9D9"
			this.parentNode.style.color="#000000"
		}
	}
}


selectElement(".header-return")[0].addEventListener("touchstart",function(){
	// window.location.href="index.html"
	history.go(-2)
})
$(".main-section").tap(function(){
		window.location.href="zijiatuanxiangqingye.html"
	})