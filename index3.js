function convertToupperCase(str){
    const arr = str.split(" ");

 for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const str2 = arr.join(" ");
var arr1 = new Array();
arr1 = str2;
return arr1;
console.log(str2);
}

//convertToupperCase('the quick brown fox'); 
module.exports = convertToupperCase;