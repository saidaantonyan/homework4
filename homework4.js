
//2
const triangleStars = function (a) {
	let l = 0;
	while ( a>=1 ) {
		ast = a*2-1;
		console.log(" ".repeat(l)+"*".repeat(ast));
		a = a-1;
		l = l+1
	}
}

//3
const multiToSingle = function (a,b) {
		c = a.concat(b);
		console.log(c)
}


//4
const findMinMax = function (a,b) {
	if(b === true) {
		console.log(Math.max.apply(null,a))
	} else {
		console.log(Math.min.apply(null,a))
	}
}

//5
const forEach = function(a,func) {
	let i = 0;
	while ( i <a.length) {
		func(a[i]);
		i = i + 1;
	}
}
forEach([4,3,2], function(val) {
  console.log(val*val);
})

//6
const sum = function(a) {
	let b = a.length-1;
	let c = 0;
	while(b >=0) {
		c = c+a[b];
        b = b-1;
	}
	console.log(c)
}
		
	
//7
const reverse = function(a) {
	let b = a.length-1
	var result = ''
	while(b>=0) {
		result = result + a[b]
		b = b-1;
	}
	console.log(result);
}

//8
const checkerboard=function(n) {
	let k = 0;
	while (k<n) {
		if(k%2 != 0){
			c = " " + "*".repeat(n)
		} else {
			c = "*".repeat(n)
		}
		console.log(c);
		k = k+1;
	}
}



	

