var animals = ['rat','cat', 'butterfly', 'marmot', 'ocelot']

// for(var i=0; i<animals.length; i++) {

// 	console.log(animals[i])
// }

// for(var i=0; i<animals.length; i++) {
// 	animals.splice(4)
// 	console.log(animals[i])
// }

//------------------------------------------------

// for(var i=0; i<animals.length; i+=2){

// 	console.log(animals[i])
// }	


//------------------------------------------------

// for (var i =animals.length -1; i>=0; i--){

// 	console.log(animals[i])
// }
// -----------------------------------------



for( var x =0; x <= (animals.length-1); x+=animals.length){
		console.log(animals [x]);
	// } will return just the first element in the array


		for( var i = 1; i <=(animals.length -2); i++){

			for ( var m =1; m <=2; m++){
				console.log(animals[i]);
			}   // returns cat, butterfly and marmot twice
		
		}
			console.log(animals[(animals.length-1)])
 }
 