const titleCase = (name) => {
     
    let first =  name.first_name.slice(0,1).toUpperCase() + name.first_name.slice(1).toLowerCase();
    let middle = ""

    if(typeof name.middle_name === 'string'){

         middle = name.middle_name.slice(0,1).toUpperCase() + name.middle_name.slice(1).toLowerCase();
         middle = middle + " "
    }

    let last = name.last_name.slice(0,1).toUpperCase() + name.last_name.slice(1).toLowerCase();
    let ans = first + " " + middle + last;
    
    return ans;

    }

module.exports = titleCase
