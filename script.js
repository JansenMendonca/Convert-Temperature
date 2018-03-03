function convertTemp(){

	var tempFrom = document.getElementById('tempFrom').value;
	var tempTo = document.getElementById('tempTo').value;
	var tempValue = document.getElementById('tempValue').value;

	tempValue = parseInt(tempValue);

	var convertTemp = 0;


	if(tempFrom == 1 || tempTo == 1){

		document.getElementById('convertedTemp').value = ((9/5)*tempValue) + 32 ; 

	}  else if(tempFrom == 2 || tempTo == 2){

	   document.getElementById('convertedTemp').value = 5/9 * (tempValue - 32) ; 
	} else {
		
		alert("Please select different options to convert temperatures, you can't convert from celsius to celsius or fahrenheit to fahrenheit");
	}


}
