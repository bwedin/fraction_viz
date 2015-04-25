function long_division(n, d, mod){
	var remainders = [];
	var ptemp = n;
	var qtemp = -4;
	for(i= 0; i < d; i++){
		qtemp = (ptemp*mod) % d;
		remainders.push(qtemp);
		ptemp = qtemp;
	}
	return remainders;
}

//console.log(long_division(1, 101, 103))