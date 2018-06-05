function selectElement(ele){
	return document.querySelectorAll(ele)
}

var value=Number(selectElement(".value")[0].innerText)


//jian
selectElement(".jian")[0].onclick=function(){
	if(value<=1){
		selectElement(".value")[0].innerText="1"
	}else if(value>1){
		value-=1
		selectElement(".value")[0].innerText=value
	}
}


//jia
selectElement(".jia")[0].onclick=function(){
	value+=1
	selectElement(".value")[0].innerText=value
}


//feiyongshuoming
var feiyongshuoming=selectElement(".feiyongshuoming ul li")
for(var i=0;i<feiyongshuoming.length;i++){
	feiyongshuoming[i].onclick=function(){
		// if(this.style.borderBottom=="0px"){
			for(var j=0;j<feiyongshuoming.length;j++){
				feiyongshuoming[j].style.borderBottom="0"
				feiyongshuoming[j].getElementsByTagName("a")[0].style.display="none"
			}
			this.style.borderBottom="0.01rem solid #51BBDB"
			this.getElementsByTagName("a")[0].style.display="block"
		// }
	}
}
selectElement("footer a")[0].addEventListener("touchstart",function(){	
		window.location.href="zhifu.html"
})
selectElement(".header-return a")[0].addEventListener("touchstart",function(){	
		window.location.href="index.html"
})
selectElement(".xiugai")[0].addEventListener("touchstart",function(){	
		window.location.href="riqi.html"
})
selectElement(".main-section-title p")[0].addEventListener("touchstart",function(){	
		window.location.href="zijiatuanxuanzechangyongyoukeyemian.html"
})