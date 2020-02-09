//var: to declare any variable
var a; 
var b;

//assignment of variables
a=4;
b=5;

//declaring a function
function add(a,b){
	//logic of the function
	var c = a+b;
	return c;
};

//call the function
var myResult = add(3,4);

console.log(myResult);