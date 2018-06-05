var num=null
function selectElement(e){
	return document.querySelectorAll(e)
}

var checkbox=selectElement(".checkbox")
for(var index=0;index<checkbox.length;index++){
	for(var ind=0;ind<checkbox.length;ind++){
		checkbox[ind].stat=0
	}
	checkbox[index].onclick=function(){
		num=0

		if(this.getElementsByTagName("svg")[0].style.display!="block"){

			this.getElementsByTagName("svg")[0].style.display="block"
			this.stat=1
		}else{

			this.getElementsByTagName("svg")[0].style.display="none"
			this.stat=0
		}
		for(var j=0;j<checkbox.length;j++){
			num+=Number(checkbox[j].stat)
			if(num>2){
				console.log("Little than 2 please")
				selectElement(".cover")[0].style.display="block"
				selectElement(".header-menu a")[0].style.display="none"
			}else{
				selectElement(".main-top-content p span")[0].innerText=Number(num)
				selectElement(".header-menu a")[0].style.display="block"

			}
		}
			console.log(num)
	}
	
}


selectElement(".cover-text button")[0].onclick=function(){
	selectElement(".cover")[0].style.display="none"
}
selectElement(".header-return a")[0].addEventListener("touchstart",function(){
	window.location.href="index.html"
})
selectElement(".footer-content")[0].addEventListener("touchstart",function(){
	window.location.href="zijiatuantianjiayouke.html"
})
selectElement(".header-menu a")[0].addEventListener("touchstart",function(){
	window.location.href="zijiatuantianxiedingdanyemian.html"
})