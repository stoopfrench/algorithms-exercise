//1 --COMPLETED

// var myArray = [1, 2, 4, 5, 6, 7, 35];

// function maxNumber(array) {

// var max = 0;

// for (var i = 0; i < array.length; i++) {
    
//     if (array[i] > max) {
        
//        max = array[i];
//     }
// }
// 		return max;
// }

// console.log(maxNumber(myArray));




// 2 --COMPLETED
	
// var isLeapYear = function(year){

// 	if (year % 100 === 0 && year % 400 === 0 && year % 4 === 0) {

// 		return true; 
// 	}

// 	else {

// 		return false;
// 	}


// }


// console.log(isLeapYear(2000))




// 3 --COMPLETED

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




//4  COMPLETED

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


 


//6 --COMPLETED

// var array1 = ["a", "c", "b"];
// var array2 = ["a", "b", "c"];

// var compareArray = function(arr1,arr2) {

// 	for (var i = 0; i < arr1.length; i++) {

// 		for (var j = 0; j < arr2.length; j++) {

// 			if(arr1.length !== arr2.length) {

// 				return false;
// 			}


// 			else if(arr1[i] === arr2[j]) {

// 				return true;
// 			}
			
// 			else {

// 				return false;
// 			}
// 		}
// 	}
// }

// console.log(compareArray(array1, array2));




//7 --COMPLETED

// var myArray = [1,5,7,3,1,5,7];

// var limitArray = function(array, limit) {

// 	var newArray = [];

// 	for(var i = 0; i < array.length; i++) {

// 		if(array[i] > limit) {

// 			newArray.push(limit);
// 		}
// 		else {

// 			newArray.push(array[i]);
// 		}
// 	}
// 	return newArray;
// }

// console.log(limitArray(myArray, 3));




//8 --COMPLETED

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




//9 --COMPLETED

// var myArray1 = [-1, 0, 1];
// var myArray2 = [-2, 2];

// var newArray = myArray1.concat(myArray2);
	
// var sortArray = function(array) {

// 	return array.sort(function(a, b){return a-b});
// }

// console.log(sortArray(newArray));




//10 --COMPLETED

// var array1 = [1,2,3];
// var array2 = [2,3,2,4];

// var combineArray = function(arr1,arr2) {

//  if(arr1.length > arr2.length) {

// 	var newArray1 = arr1.concat(arr2);

//  	console.log(newArray1);

//  	arr2.splice(0);

//  }

//  else if (arr2.length > arr1.length) {

// 	var newarray2 = arr2.concat(arr1);

//  	console.log(newarray2);

//  	arr1.splice(0);

//  }

// }

// combineArray(array1, array2);




//11 --COMPLETED


// var replaceNumbers = function(num){

// 	var number = num.toString();

// 	var numArray = number.split('');


// 	for (var i = 0; i < numArray.length; i++) {

// 		if(numArray[i] === '3') {

// 			numArray[i] = 8;
// 		}

// 		else if (numArray[i] === '7') {

// 			numArray[i] = 1;
// 		}

// 		// var newNumberString = numArray[i].toString();

		
// 		var newNumber = Number(numArray[i]);
		
// 	}


// 		return numArray.join('');

// }

// console.log(replaceNumbers(Math.random()));




//12 --COMPLETED

// var findLongestWord = function(string) {

// 	var wordArray = string.split(' ');


// 	var longestString = wordArray.sort(function (a, b) {
//     return a.length < b.length;

// 	});

// 	console.log(longestString[0]);

// }

// findLongestWord('my name is aaron allen');




//13 --COMPLETE


// var capitalizeFirstLetters = function(str) {
     
//      wordsArray = str.split(' ');

//      for(var i = 0; i < wordsArray.length; i++) {
          
//           var lettersArray = wordsArray[i].split('');
          
//           lettersArray[0] = lettersArray[0].toUpperCase();
          
//           wordsArray[i] = lettersArray.join('');
//      }
     
//      return wordsArray.join(' ');
// }

// console.log(capitalizeFirstLetters("My name is aaron allen"));




//14

var daysBetween = function(string1, string2){

	var dateArray1 = string1.split('/');
 var dateArray2 = string2.split('/');

	console.log(dateArray1);
	console.log(dateArray2);
}

daysBetween('2017/02/15', '2004/04/25');




//15





//16 --COMPLETED

// var isInteger = function(num) {

// 	if (Number.isInteger(num) && num > 0) {

// 		return true;
// 	}
// 	else {

// 		return false;
// 	}
// }

// console.log(isInteger(-4));




//17 --COMPLETED

// var randNum = function() {

// 	var number = Math.round(Math.random() * 9) + 1;

// 	console.log(number);
// }

// randNum();



