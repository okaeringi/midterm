var fizzbuzz = function(n){	
	if(n%5 == 0 && n%3 == 0){
		return "fizzbuzz";
	} else if(n%3 == 0){
		return "fizz";
	} else if(n%5 == 0){
		return "buzz";
	} else {
		return n;
	}
};