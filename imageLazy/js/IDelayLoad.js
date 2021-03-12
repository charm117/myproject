function LazyLoad(n, conf) {
	var Agent = navigator.userAgent;
	var isIE = Agent.indexOf("compatible") > -1 && Agent.indexOf("MSIE") > -1;
	if (isIE) {
		window.attachEvent("scroll", Load);
	}
	window.addEventListener("scroll", Load);
	var imgs = document.getElementsByTagName(n);
	var len = imgs.length;
	var an = conf.attr || "_src";
	var th = conf.th || 20;
	var dataList = [];
	var load = document.createElement("style");
	load.innerHTML=".loading{min-width:50px;min-height:50px}";
	for (var i = 0; i < len; i++) {
		dataList.push(imgs[i].getAttribute(an));
		imgs[i].classList.add("loading");
	}
	Load();
	document.documentElement.appendChild(load);

	function Load() {
		var scrollTop = document.documentElement.scrollTop ||
			document.body.scrollTop || window.scrollY;
		for (var i = 0; i < len; i++) {
			var _tNode = imgs[i];
			var top = _tNode.getBoundingClientRect().top || (imgs[i].offsetTop - scrollTop); //
			if (top < window.innerHeight - th && (top > 0)) {
				if (_tNode.src !== 'undefined') {
					_tNode.src = dataList[i];
					_tNode.removeAttribute(an);
					_tNode.classList.remove("loading");
				}
			}
		}
	}
};