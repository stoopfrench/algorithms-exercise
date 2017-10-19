// 2
	
// 	var isLeapYear = function(year){

// 	if (year % 100 === 0 && year % 400 === 0 && year % 4 === 0) {

// 		return true; 
// 	}

// 	else {

// 		return false;
// 	}


// }


// console.log(isLeapYear(2000))



// 3

// var myArray = [3,2,1,6,5]

// function findFirstMissing(array) {
	
// 	array.sort()
    
//     for (var i = 0; i < array.length; i++) {
        
//         if (array[i+1] - array[i] !== 1) {
            
//             return array[i] + 1;
//         }
//     }
// }

// console.log(findFirstMissing(myArray));



//4

// var myArray = [3,3,2,1,1,6,5]

// var dublicateInteger = function(array) {
	
// 	var newArray = [];
    
//     for(var i = 0; i < array.length; i++){
        
//         if(newArray.indexOf(array[i]) == -1){
        
//         	newArray.push(array[i]);
        
//         }
//     }
    
//     return newArray;
// }

// console.log(dublicateInteger(myArray));



//5






//6

var myArray = [1,5,7,3,1,5,7];

var limitArray = function(array, limit) {

	var newArray = [];

	for(var i = 0; i < array.length; i++) {

		if(array[i] > limit) {

			newArray.push(limit);
		}
		else {

			newArray.push(array[i]);
		}
	}
	console.log(newArray);
}


console.log(limitArray(myArray, 3));


//7






//8

// var myArray = [];

// var generateRandom = function() {
// for (var i=0; i<10; i++) {

//     myArray.push(Math.round(Math.random() * 100))

//     var randArray = [];
		
// 		for (var j = 0; j < myArray.length; j++) {

// 			if (myArray.indexOf(myArray[j]) !== -1) {

// 				randArray.push(myArray[j]);

// 			}
// 		}
// 	}

// 	console.log(randArray);
// }
                                                                                                                                                                 
// generateRandom();  



//9

// var myArray1 = [-1, 0, 1];
// var myArray2 = [-2, 2];

// var newArray = myArray1.concat(myArray2);
	
// var sortArray = function(array) {

// 	return array.sort(function(a, b){return a-b});
// }

// console.log(sortArray(newArray));

