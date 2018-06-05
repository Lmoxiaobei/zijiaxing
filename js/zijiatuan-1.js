function selectElement(ele){
	return document.querySelectorAll(ele)
}
var inputValue=selectElement(".search-input input")[0].value
selectElement(".search-input input")[0].onchange=function(){
	inputValue=selectElement(".search-input input")[0].value
	console.log(inputValue)
}
selectElement(".search-content a")[0].addEventListener("touchstart",function(){
	inputValue=selectElement(".search-input input")[0].value
	if(inputValue==="南京"){
		window.location.href="zijiatuansousuojieguo.html"
	}
})



// var jingnei=selectElement(".jingnei a")[0]
// .addEventListener("touchstart",function(){	
// 		window.location.href="index2.html"
// })
$(".jingnei a").tap(function(){
	  window.location.href="index2.html"
	})
$(".gerenzhongxin").tap(function(){
	  window.location.href="dingdanliebiaoyemian.html"
	})

// var mainSection=selectElement(".main-section")
// for(var i=0;i<mainSection.length;i++){
	$(".main-section").tap(function(){
		window.location.href="zijiatuanxiangqingye.html"
	})
// $(".footer-content-section").tap(function(){
// 		$(".footer-content-section").css("color","#333333")
// 		$(this).css("color","#333333")
// 	})
// }