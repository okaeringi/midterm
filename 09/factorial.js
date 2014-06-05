function factorial(num){
		if(num>=1){
			for(i=1;i<=num;i++){
				i*=i;
			}
		}
		
		if(num>0){
			Math.floor(num);
			for(i=1;i<=num;i++){
				i*=i;
			}
		}
		
		if(num<=0){
			return null;
		}
	}