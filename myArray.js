// creates an object to build array methods on
class MyArray{
    constructor(){
        let tempArr = [];
        for(var i = 0; i < arguments.length; i++){
            tempArr.push(arguments[i])
        }

        this.arr = tempArr;
    }

    // build the map function
    map(callback){

    }

    // build filter method
    filter(callback){

    }

    // build reduce method
    reduce(callback, startingValue){

    }

}

var myArr1 = new MyArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
myArr1;

// add 5 to each position
var map1 // = myArr1.map();

map1;


// replace numbers divisible by 3 with the string 'cool number'
var map2 // = myArr2.map()

map2;


var myArr2 = new MyArray(1, 2, 3, 1, 5, 4, 7, 3, 2, 1);
myArr2;


//remove evens from myArr2
var filter1 //= myArr2.filter();

filter1;


//remove duplicates from myArr2
var filter2 //= myArr2.filter();

filter2;