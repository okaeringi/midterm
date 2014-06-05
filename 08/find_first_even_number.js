function findFirstEvenNumber(num){
		for(i=0;i<num.length;i++){
			if(num[i]%2==0){
				return num[i];
				break;
			}
		}
		
		for(i=0;i<num.length;i++){
			if(num.length==0){
				return null;
				break;
			}
		}
		
		var count = 0
		for(i=0;i<num.length;i++){
			if(count<num.length){
				if(num[i]%2!=0){
					count++; 
				} else {
					return null;
				}
			}
		}
	}