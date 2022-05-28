for(variables of esprima.tokenize(data)){
    function isFloat(n) {
        return n === +n && n !== (n|0);
    }
    
    function isInteger(n) {
        return n === +n && n === (n|0);
    }

    if(variables.type==="Identifier"){

        if(variables.value.includes("__STRING__")){
            console.log(variables.value)
            if(typeof eval(variables.value) != "string"){
                throw new Error(`Assignment of non string value to string type ${variables.value}`)
            }
        }else if(variables.value.includes("__INTEGER__")){
            console.log(variables.value)
            if(typeof eval(variables.value) != "number"){
                throw new Error(`Assignment of non integer value to integer type" ${variables.value}`)
            }else if(!isInteger(eval(variables.value))){
                throw new Error(`Assignment of non integer value to integer type" ${variables.value}`)
            }
        }else if(variables.value.includes("__FLOAT__")){
            console.log(variables.value)
            if(typeof eval(variables.value) != "number"){
                throw new Error(`Assignment of non float value to float type: ${variables.value}`)
            }else if(!isFloat(eval(variables.value))){
                throw new Error(`Assignment of non float value to float type: ${variables.value}`)
            }
        }
    }
}