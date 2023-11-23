function fibonacci(num) {
	if(num===1){
		return 0;
	}
	else if(num===2){
		return 1;
	}
		
	else{
		let n1 = 0, n2 = 1;
        for (let i = 2; i < num; i++) {
            let n3 = n1 + n2;
            n1 =n2;
            n2 =n3;
        }
        return n2;
	}

}

module.exports = fibonacci;
