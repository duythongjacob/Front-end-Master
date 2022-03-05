var array = [1,5,7,8,9,15,8]
function checkNumbers5(mang) {
    for (let i = 0; i < mang.length; i++) {
    var item = mang[i];
        if(item == 5){
            console.log('hello');
            return true;

        }
      
    }
    return false;
}

checkNumbers5(array)