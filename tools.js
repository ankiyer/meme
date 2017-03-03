		function retChildren(node){

			var child = node.childNodes,
				len = child.length;
			
			for(var i = 0; i < len; i++){
		
				if(child[i].nodeType == 1){
					
					console.log(child[i]);
					child[i].hasChildNodes() && retChildren(child[i]);

				}
			}
		}

		function retParent(node , n){
			var e = node;
			while(n && e){
				
				e = e.parentNode;
				n--;

			}
			return e;

		}

		var em = document.getElementsByTagName('em')[0]; 


		function retSibling(node , n){

			var e = node;
			while(n && e){

				if(n > 0){
					if(e.nextElementSibling){

						e = e.nextElementSibling;
					
					}else{

						for(e = e.nextSibling; e && e.nodeType != 1; e = e.nextSibling){}

					}
					n--;
				}else{
					if(e.previousElementSibling){
					
						e = e.previousElementSibling;
					
					}else{
						
						for(e = e.previousSibling; e && e.nodeType != 1; e = e.previousSibling){}

					}
					n++;
				}

			}

			return e;
		}

		var strong = document.getElementsByTagName('strong')[0];




		Element.prototype.retChildren = function () {

			var child = this.childNodes,
				len = child.length,
				arr = [];

			for(var i = 0; i < len; i++){

				if(child[i].nodeType == 1){

					arr.push(child[i]);

				}		
			}
			return arr;
		}

		Element.prototype.hasChildren = function () {

			var child = this.childNodes,
				len = child.length;

			for(var i = 0; i < len; i++){

				if(child[i].nodeType == 1){

					return true;

				}
			}
			return false;
		}


		Element.prototype.insertAfter = function (insertNode,afterNode) {

			var node = this,
				targetNode = afterNode.nextElementSibling,
				child = node.children,
				len = child.length;

			if(len <= 1 || !targetNode){

				node.appendChild(insertNode);

			}else{

				node.insertBefore(insertNode,targetNode);

			}
		}



		Element.prototype.removd = function () {

			var node = this;
			node.parentNode.removeChild(node); 

		}



		function writeDate() {

			var date = new Date();
			return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日，星期" + date.getDay();
		}



		function getScrollOffset() {

			if(window.pageXOffset){

				return {
					x : window.pageXOffset,
					y : window.pageYOffset
				}
			
			}else{
				return {
					x : document.body.scrollLeft + document.documentElement.scrollLeft,
					y : document.body.scrollTop + document.documentElement.scrollTop
				}
			}

		}

		function getViewportOffset() {

			if(window.innerHeight){

				return {
					h : window.innerHeight,
					w : window.innerWidth
				}

			}else{

				if(document.compatMode === 'CSS1Compat') {
					return {
						h : document.documentElement.clientHeight,
						w : document.documentElement.clientWidth
					}

				}else{

					return {
						h : document.body.clientHeight,
						w : document.body.clientWidth
					}
				}
			}
		}

		function getElementOffset(elem) {
			var box = elem.getBoundingClientRect();
			if(box.width){
				return {
					w : box.width,
					h : box.height
				}
			}else{
				return {
					w : box.right - box.left,
					h : box.bottom - box.top
				}
			}
		}

		function getStyle(obj, propStyle) {
			if(obj.currentStyle) {
				return obj.currentStyle[propstyle];
			}else{
				return window.getComputedStyle(obj,false)[propStyle];
			}
		}


		function getElementPosition(elem) {
			var x = elem.offsetLeft,
				y = elem.offsetTop;
			while(elem.offsetParent != document.body) {
				elem = elem.offsetParent;
				x += elem.offsetLeft;
				y += elem.offsetTop;
			}
			return {
				x : x,
				y : y
			}
		}

		function addEvent(elem, type, handler) { //绑定事件
			if(elem.addEventListener) {
				elem.addEventListener(type, handler, false);
			}else if(elem.attachEvent) {

				elem['temp' + type + handler] = handler;

				elem[type + handler] = function() {
					elem['temp' + type + handler].call(elem);
				}

				elem.attachEvent('on' + type, elem[type + handler]);

			}else{
				elem['on'+'type'] = handler;
			}
		}

		function removeEvent(elem, type, handler) {  //解除事件
			if(elem.removeEventListener) {
				elem.removeEventListener(type, handler, false);
			}else if(elem.detachEvent) {
				elem.detachEvent('on' + type, handler);//handler -> elem[type + handler]
			}else{
				elem['on' + type] = null;
			}
		}

		function stopBubble(event) { //取消冒泡
			if(event.stopPropagation) {
				event.stopPropagation();
			}else{
				event.stopBubble = true;
			}
		}


		function cancelHandler(event) { //阻止默认事件
			if(event.preventDefault) {
				event.preventDefault();
			}else{
				event.returnValue = false;
			}
		}




//异步加载JS
	function scriptLoaded(url,callback){
var script =document.createElement('script');
script.type='text/javascript';
if(script.readyState){
	script.onreadystatechange=function(){
		if(script.readyState=='complete'||script.readyState=='loaded'){
			callback();
			script.onreadystatechange=null;
		}
	}
}else {
	script.onload=function(){
script.onload=null;
callback();
	}
}
script.src=url;
document.head.appendChild(script);
	}





	function ajax(method ,url ,flag,updata,callBack){
		var xhr=null;
		if(window.XMLHttpRequest){
xhr =new XMLHttpRequest();
		}else{
			xhr= new ActiveXObject('Microsoft.XMLHTTP');

		}
		method=method.toUpperCase();
		if(method==='GET'){
			xhr.open(method,url+'?'+updata,flag);
			xhr.send();
		}
		else if(method=='POST'){
      xhr.open(method,url,flag);
      xhr.setRequestHeader('content-type','application/x-www-form-uelrncoded');
      xhr.send(data);
		}
		xhr.onreadstatachange=function(){
			if(xhr.readyState===4){
				if(xhr.status===200){
					callBack(xhr.responseText);
				}else{
					alert('error');
				}
			}
		}
	}
	function Ajax (method,address,flag,callBacks,data) {
		var xhr = null;
		if(window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else {
			xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}
		if (method == 'get') {
			xhr.open('get',address,flag);
			xhr.send();		
		}else if (method == 'post') {
			xhr.open('post',address,flag);
			xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
			xhr.send(data);			
		}
		
		xhr.onreadystatechange = function() {
			if ( xhr.readyState == 4 ) {
				if ( xhr.status == 200 ) {
					callBacks(xhr.responseText);
				} else {
					alert(xhr.status);
				}
			}
			
		}	
	}