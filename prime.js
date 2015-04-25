function is_prime(n){
	for(i = 2; i < Math.sqrt(n, 0.5)+1; i++)
        if (n%i==0){
        	return false;
        }           
    return true;
}

//if a number is prime and is of the form 2q+1 where q is prime
function sophie_germain(n){
	if (is_prime((n-1)/2)){
		return true;
	}
	return false
}

function is_happy(n){
	n = n.toString();
	console.log(n);
	while(n != '0'){
		console.log(n)
		var sum = 0
		for(i = 0; i < n.length; i++){
			sum += Math.pow(parseInt(n[i], 10), 2);
		}
		n = sum
	}
}

is_happy(97);
sophie_germain(101)