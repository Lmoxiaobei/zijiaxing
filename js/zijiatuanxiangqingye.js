function selectElement(ele){
	return document.querySelectorAll(ele)
}

//get scrollTop
var ST1=selectElement(".xcts-scrollTop")[0].offsetTop
var ST2=selectElement(".xcjj-scrollTop")[0].offsetTop
var ST3=selectElement(".ydxz-scrollTop")[0].offsetTop
console.log(ST1)
console.log(ST2)
console.log(ST3)



var xcjj=selectElement(".main-list-top ul li")
// for(var j=0;j<xcjj.length;j++){
// 	xcjj[j].onclick=function(){

	$(".main-list-top ul li").tap(function(){
		var id=this.getAttribute("id")
		console.log(id)
		if(id==="main-top-xcts"){
			var t1=ST1-66
			$(window).scrollTop(t1)
		}else if(id==="main-top-xcjj"){
			var t2=ST2-66
			$(window).scrollTop(t2)
		}else if(id==="main-top-ydxz"){
			var t3=ST3-66
			$(window).scrollTop(t3)
		}



		for(var index=0;index<xcjj.length;index++){
			xcjj[index].style.color="#000000"
			xcjj[index].style.borderBottom="0rem solid #000000"
		}
		this.style.color="#50BBDB"
		this.style.borderBottom="0.03rem solid #50BBDB"
		// this.setAttribute("style","border-bottom:0.03rem solid #50BBDB")
		// this.setAttribute("style","color:#50BBDB")
	})
// 	}
// }
// $("#main-top-xcjj").on("tap",function(){
// 	this.style.color="#50BBDB"
// })




// selectElement(".footer-right a")[0].addEventListener("touchend",function(){
// 	window.location.href="./riqi.html"
// })
$(".footer-right a").tap(function(){
		window.location.href="riqi.html"
	})


// selectElement(".header-return a")[0].addEventListener("touchstart",function(){
// 	window.location.href="index.html"
// })
$(".header-return a").tap(function(){
		window.location.href="index.html"
	})

// selectElement(".ldjs-title")[0].addEventListener("touchend",function(){
// 	window.location.href="zijiatuansousuojieguo.html"
// })
$(".ldjs-title").tap(function(){
		window.location.href="zijiatuansousuojieguo.html"
	})



// selectElement(".ldjs-section")[0].addEventListener("touchend",function(){
// 	window.location.href="zijiatuanlingduixiangqingye.html"
// })
$(".ldjs-section").tap(function(){
		window.location.href="zijiatuanlingduixiangqingye.html"
	})
