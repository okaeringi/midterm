function factorial(num){
		if(num>=1){
			var result1=1;
			for(i=0;i<num;i++){
				result1*i;
			}
		}
		
		if(num>0){
			Math.floor(num);
			var result2=1;
			for(i=0;i<num;i++){
				result2*i;
			}
		}
		
		if(num<=0){
			return null;
		}
	}