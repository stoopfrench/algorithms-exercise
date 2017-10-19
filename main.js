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




//7




//8

// var randArray = [];

// var generateRandom = function() {
// for (var i=0; i<10; i++) {

//     randArray.push(Math.round(Math.random() * 100))
// 	}
// console.log(randArray);
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

