const arrToStr = (stringArr) => {

    let ans = "";

    for( let i = 0; i < stringArr.length; i++){

        ans = ans + " " + stringArr[i];

        if(i === stringArr.length - 1){

            ans = ans.trim()
            ans = ans + ".";
        }
    }
    return ans;
 }

 module.exports = arrToStr;