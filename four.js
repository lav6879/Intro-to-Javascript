/*Create function that takes in one argument that is passed through a 
conditional statement with if, else ifs, and else. Return the result as an
alert or console.log. Test all of your conditions to make sure you can receive
 all of your results back.*/

function bangerFunction(number) {
	if (number==0) {
		alert("Number is 0.");
	} else if (number>0) {
		alert("Number is positive.");
	} else alert("Number is negative.");
}

bangerFunction(0);
bangerFunction(12);
bangerFunction(-6);