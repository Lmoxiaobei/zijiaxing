function selectEle(element){
	return document.querySelectorAll(element)
}
var mtl=selectEle(".main-top-left")
mtl[0].onclick=function(){
	if(selectEle(".cover-fenlei")[0].style.display!="block"){
		selectEle(".cover-fenlei")[0].style.display="block"
		selectEle(".cover-fenlei1")[0].style.display="none"
	}else{
		selectEle(".cover-fenlei")[0].style.display="none"
	}
}
var mtl=selectEle(".main-top-right")
mtl[0].onclick=function(){
	if(selectEle(".cover-fenlei1")[0].style.display!="block"){
		selectEle(".cover-fenlei1")[0].style.display="block"
		selectEle(".cover-fenlei")[0].style.display="none"
	}else{
		selectEle(".cover-fenlei1")[0].style.display="none"
	}
}
$(".header-return a").tap(function(){
	  history.go(-2)
	})

// $(".main-top-left").touchstart(function(){
// 	$(".cover-fenlei").style.display="block"
// })