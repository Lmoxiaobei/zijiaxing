function selectElement(ele){
	return document.querySelectorAll(ele)
}
var inputValue=selectElement(".search-input input")[0].value
selectElement(".search-input input")[0].onchange=function(){
	inputValue=selectElement(".search-input input")[0].value
	console.log(inputValue)
}
selectElement(".search-content a")[0].addEventListener("touchend",function(){
	inputValue=selectElement(".search-input input")[0].value
	if(inputValue==="南京"){
		window.location.href="zijiatuansousuojieguo.html"
	}
})

// selectElement(".main-section")[0].addEventListener("touchstart",function(){
// 	window.location.href="zijiatuanxiangqingye.html"
// })

// for(var j=0;j<mainSection.length;j++){
// 	mainSection[j].addEventListener("touchend",function(){	
// 		window.location.href="zijiatuanxiangqingye.html"
// 	})
// }
$(".gerenzhongxin").tap(function(){
	  window.location.href="dingdanliebiaoyemian.html"
	})



	$('.main-section').tap(function(){
		window.location.href="zijiatuanxiangqingye.html"
	})
// }