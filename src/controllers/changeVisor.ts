const onMaxLength = (number:string) =>{
    if(number.length === 13){
        return true;
    }
    else{return false;}
}


const concatNumber = (number:string, concatValue:string) =>{
    if(onMaxLength(number)){
        return number;
    }
    if(number === "0"){
        number = "";
    }
    
    number += concatValue;
    return number;
}

const clearNumber = (number:string) =>{
    if(number !== "0"){
        number = "0";
    }

    return number;
}

const deleteNumber = (number:string) =>{
    if(number !== "0") {
        let numberArray = number.split("");
        numberArray.pop();
        number = numberArray.join("");
    }
    if(number === ""){
        number = "0";
    }
    return number;
}

const showResult = (op:string, number:string, fixedNumber:string) =>{
    let result = 0;

    switch(op){
        case "+":
            result = Number(fixedNumber) + Number(number);
            break;
        case "-":
            result = Number(fixedNumber) - Number(number);
            break;
        case "x":
            result = Number(fixedNumber) * Number(number);
            break;
        case "/":
            result = Number(fixedNumber) / Number(number);
            break;
    }
    console.log(result);
    
    const finalResult = result.toString();
    return finalResult;
}


export { concatNumber, clearNumber, deleteNumber, showResult };