// 实现前进后退小图片的效果========================================
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let ul = document.querySelector('.spec-items ul');
let lis = document.querySelectorAll('.spec-items ul li');

prev.onclick = function(){
	ul.style.left = '0';
}

next.onclick = function(){
	ul.style.left = '-116px'
}

let img = document.querySelector('.img');
let imgBig = document.querySelector('.imgbig');

// 实现鼠标放入小图显示中图的效果,鼠标滑到小图时更改小图边框样式
for(let i=0;i<lis.length;i++){
	lis[i].onmousemove = function(){
		for(let j=0;j<lis.length;j++){
			lis[j].className = '';
		}
		
		lis[i].className = 'img-hover';
		img.src = lis[i].children[0].src;
		imgBig.src = lis[i].children[0].src;
	}
}
// 鼠标滑入显示放大镜效果，划出隐藏起来=============================================
let mainImg = document.querySelector('.main-img');
let zoomPup = document.querySelector('.zoom-pup');
let zoomDiv = document.querySelector('.zoom-div');
let bigImg = document.querySelector('.zoom-div img');

mainImg.onmouseover = function(){
	zoomPup.style.display = 'block';
	zoomDiv.style.display = 'block';
}

mainImg.onmouseout = function(){
	zoomPup.style.display = 'none';
	zoomDiv.style.display = 'none';
}

//计算放大镜========垂直方向上=============水平方向上========================================
mainImg.onmousemove = function(e){
	// 获取鼠标距离文档顶部的距离
	let pageY = e.pageY;
	// 获取鼠标距离文档左侧（水平方向）的距离
	let pageX = e.pageX;
	
	// 获取到中图距离文档顶部的距离
	let offsetTop = mainImg.offsetTop;
	// 获取到中图距离文档左侧的距离
	let offsetLift = mainImg.offsetLeft;
	
	// 获取黄色小块的高度的一半
	let h = zoomPup.clientHeight/2;
	// 获取黄色小块的宽度的一半
	let w = zoomPup.clientWidth/2;
	
	let top =pageY - offsetTop - h;
	let left = pageX - offsetLift -w;
	
	// 判断top范围
	if(top<=0){
		top=0;
	}else if(top>=mainImg.clientHeight-zoomPup.clientHeight){
		top = mainImg.clientHeight-zoomPup.clientHeight;
	}
	
	if(left<=0){
		left=0;
	}else if(left>=mainImg.clientWidth - zoomPup.clientWidth){
		left = mainImg.clientWidth - zoomPup.clientWidth;
	}
	
	zoomPup.style.top = top + 'px';
	zoomPup.style.left = left + 'px';
	
	
	let y = top/(mainImg.clientHeight - zoomPup.clientHeight);
	
	let yy = y * (800 - 540);
	
	bigImg.style.top = -yy +'px';
	
	let x = left/(mainImg.clientWidth - zoomPup.clientWidth);
	
	let xx = x * (800 - 540);
	
	bigImg.style.left = -xx +'px';
	
}



