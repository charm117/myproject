		//导航条颜色渐变
		var topMneu=document.getElementById("div_top");
			var txt=document.getElementById("textName");
			var opacity=0;
			window.onscroll=function(){
				var ttop=document.documentElement.scrollTop;
				if(ttop>200){
					opacity=1;
					txt.style.backgroundColor="#b9b9b9";
				}else{
					opacity=ttop/200;
					txt.style.backgroundColor="#FFFFFF";
				}
				topMneu.style.backgroundColor="rgba(255,255,255,"+opacity+")"
			}