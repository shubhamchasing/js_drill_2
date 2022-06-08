const ipv4ToArr = (ipv4) => {
    const arr = ipv4.split(".");
    let ipv4Arr = [];
    let num;

    arr.forEach(item => {
        num = parseInt(item)
        
        if (num.toString().length === item.length && !Number.isNaN(num)){
                ipv4Arr.push(num) 
            }

        else {
            ipv4Arr = []
        } 
    }) 

    if (ipv4Arr.length === 4){
        return ipv4Arr
    }
    else {
        return []
    }
}

module.exports = ipv4ToArr;
