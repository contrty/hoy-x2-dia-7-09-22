'use strict';
const validatedString = (cad) => {
    //ternario
    let response = (cad.length > 3) ? true : false;
    //console.log(response);
    return response;
    
}
const validatedAverage =(value) => {
    let result = (value >= 0 && value <= 5) ? true : false;
    return result;
}
export {validatedString,validatedAverage};