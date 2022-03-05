var array = [];
function Items(...items) {
  array.push(...items);
}
function evenAndOdd() {

  var newArray= [] 
 
  for (let i = 0; i < array.length; i++) {
    
  
    if (array.indexOf(array[i]) === i) {
      
   
      newArray.push(array[i])
      newArray.sort();
     
    }
   
  }
  for (let i = 0; i < newArray.length; i++) {
    if(newArray[i]%2==0){
      console.log(`${newArray[i]} la so chan`);
    }
    else{
      console.log(`${newArray[i]} la so le`);
    }
    if( newArray[i]>=5){
      console.log(`${newArray[i]} la so lon hon hoac bang  5`);
    }
   
    }
  }
 

Items(5,7,8,9,4,6,7,7,7);
evenAndOdd();
console.log("my test");
console.log("my test");
console.log("my test");
console.log("my test");
console.log("my test");
console.log("my test");
console.log("my test");
console.log("my test");
console.log("my test");
