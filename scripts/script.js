function timer(func) {
	setInterval(func,4000);
}


function changework(x) {
	let xx=new Array3();
	xx[0]='Ui Designer';
	xx[1]='ux Designer';
	xx[2]='Web Developer';

	for (var i = 0; i<xx.length; i++) {
			document.querySelector('#work').textContent=xx[i];
	}
	
}

	let x='#work';
//document.querySelctor('#work').addEventListener(hover,
//			changework(bon););