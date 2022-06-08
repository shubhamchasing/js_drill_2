const strToNum = (...args)=>{

    let stringArr = [...args];
    let numberArr = [];
    
    stringArr.forEach(item => {

        let temp = item.replace("$","");
            temp  = temp.replaceAll(",",'')
        console.log(temp)
        const num = parseFloat(temp);
        console.log(num)
        if (temp.length === (num.toString().length))
         {
            numberArr.push(num)
        }
        else
         {
            numberArr.push(0)
        }
        
    }) 

    return numberArr;
}
module.exports = strToNum
