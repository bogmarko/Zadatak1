var config = require("./config.js");

exports.minimum = config.min;
exports.maximum = config.max;
exports.isInArray = config.isInArray;
exports.someText = config.someText;
exports.type = config.type;
exports.arrayOfString = config.arrayOfString;


exports.random = function(minimum, maximum) {
	var result;
	if (typeof minimum !== "number" || typeof maximum !== "number") {
		result = "Error NaN";
	} else {
		result = Math.floor(Math.random() * (maximum - config.min + 1)) + minimum;
	}

	return result;
}

exports.minIntegerFromArray = function(isInArray) {
	var newArray = [];
	var result;
	isInArray.forEach(function(item){
		if (typeof item == "number") {
			newArray.push(item);
			result = Math.min(...newArray);	
		} else {
			result = "False";			
		}
	});
	return result;
}

exports.minIntegerFromString = function(someText){
	var regex = someText.match(/\d+/g); 
	var result;
	if (regex === null) {
		result = "False";
	} else {	
		result = Math.min(...regex);
	}	

	return result;
}

exports.concatStringsByLength = function(type,arrayOfString) {
	var result;
	if (type == 0){
		arrayOfString.sort(function(a, b) {
			return a.length - b.length;
		});
		result = arrayOfString.join(""); 
	} else if (type == 1) {
		arrayOfString.sort(function(a, b) {
			return b.length - a.length;
		});
		result = arrayOfString.join("");
	} else {
		return "Error";
	}
	return result;
}