const getMonth = (date) => {

    const months = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"];
    let temp = date.split("/");
    let month = parseInt(temp[0]) ;

    
    return months[month-1];
}

module.exports = getMonth
