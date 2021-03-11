
				//轮播图
				var divIndex=1;
				window.addEventListener("load",show);
				function show(){
				for( var i=1;i<=3;i++){
					if(i==divIndex){
						var name = "div"+divIndex;
						var divName="div_d"+divIndex;
						var mydiv = document.getElementById(name);
						var ddiv=document.getElementById(divName);
						mydiv.style.display ="block";
						ddiv.style.backgroundColor="#2492eb";
					}else{
						var name = "div"+i;
						var divName = "div_d"+i;
						var mydiv = document.getElementById(name);
						var ddiv = document.getElementById(divName);
						mydiv.style.display = "none";
						ddiv.style.backgroundColor="#FFFFFF";
					}
				}
						divIndex++;
						if(divIndex>3){
							divIndex=1;
						}
						setTimeout("show()",3000);
				}