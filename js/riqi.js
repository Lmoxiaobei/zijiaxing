function selectElement(ele){
	return document.querySelectorAll(ele)
}



var inputValue=null
selectElement(".jiage-1-2 a:first-child")[0].addEventListener("touchend",function(){
	inputValue=Number(selectElement(".jiage-1-2 input")[0].value)
	inputValue-=1
	if(inputValue<="1"){
		inputValue=1
	}
	selectElement(".jiage-1-2 input")[0].value=inputValue
})
selectElement(".jiage-1-2 a:last-child")[0].addEventListener("touchend",function(){
	inputValue=Number(selectElement(".jiage-1-2 input")[0].value)
	inputValue+=1
	selectElement(".jiage-1-2 input")[0].value=inputValue
})



selectElement(".jiage-2-2 a:first-child")[0].addEventListener("touchend",function(){
	inputValue=Number(selectElement(".jiage-2-2 input")[0].value)
	inputValue-=1
	if(inputValue<="0"){
		inputValue=0
	}
	selectElement(".jiage-2-2 input")[0].value=inputValue
})
selectElement(".jiage-2-2 a:last-child")[0].addEventListener("touchend",function(){
	inputValue=Number(selectElement(".jiage-2-2 input")[0].value)
	inputValue+=1
	selectElement(".jiage-2-2 input")[0].value=inputValue
})


// selectElement(".dibu a")[0].addEventListener("touchend",function(){
// 	window.location.href="zijiatuantianxiedingdanyemian.html"
// })
$(".dibu a").tap(function(){
		window.location.href="zijiatuantianxiedingdanyemian.html"
	})
// selectElement(".top a")[0].addEventListener("touchend",function(){
// 	window.location.href="index.html"
// })
$(".top a").tap(function(){
		// window.location.href="index.html"
		history.go(-2)
	})