

	function getHistory()
	{
		return document.getElementById("history-value").innerText;
	}
	
	function printHistory(num)
	{
		return document.getElementById("history-value").innerText=num;
	}

	function getOutput()
	{
		return document.getElementById("output-value").innerText;
	}
	
	function printOutput(num)
	{
		if(num=="")
		{
		document.getElementById("output-value").innerText = num;	
		}
		else 
		{
		return document.getElementById("output-value").innerText=getFormattedNumber(num);	
		}
		
	}

	function getFormattedNumber(num)
	{
		var n = Number(num);
		var value = n.toLocaleString("en");
		return value;
	}
	
	function reversNumberFormat(num){
		return Number(num.replace(/,/g, ''));
	}
	
	var operator = document.getElementsByClassName("operator");
		for(var i = 0; i<operator.length; i++)
		{
			operator[i].addEventListener('click', function()
			{
				
				if(this.id==="clear")
				{
					printHistory("");
					printOutput("");
				}
				
				else if(this.id=="backspace")
				{
					var outpt = reversNumberFormat(getOutput()).toString();
					if(outpt){
						outpt = outpt.substr(0, outpt.length - 1);
						printOutput(outpt);
					}
				}
				
				else{
				var output = getOutput();
				var history = getHistory();
				
					if(output!=="")
					{
						output = reversNumberFormat(output);
						history = history+output;
						if(this.id=="="){
						var result = eval(history);
						printOutput(result);
						printHistory("");
						
						}
					}
					else{
					history = history+this.id;
					printHistory(history);
					printOutput("");
					}
				}
			});
		}
		
		var number = document.getElementsByClassName("number");
		for(var i = 0; i<number.length; i++)
		{
			number[i].addEventListener('click', function(){
				
				var output = reversNumberFormat(getOutput());
				if(output!=NaN){
					output = output + this.id;
					printOutput(output);
				}
			})
		}
