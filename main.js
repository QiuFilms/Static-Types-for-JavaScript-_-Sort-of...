    
const esprima = require('esprima');
const fs = require('fs')



fs.readFile(__filename, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  
    function isFloat(n) {
        return n === +n && n !== (n|0);
    }
    
    function isInteger(n) {
        return n === +n && n === (n|0);
    }

    const array = esprima.parse(data)
    for(i in array.body){
        if(array.body[i].type=="VariableDeclaration"){
            if((array.body[i].declarations[0].id.name).includes("__STRING__")){
                //console.log(array.body[i].declarations[0].id.name)
                if(typeof array.body[i].declarations[0].init.value != "string"){
                    throw new Error(`Assignment of non string value to string type ${array.body[i].declarations[0].id.name}`)
                }
            }else if((array.body[i].declarations[0].id.name).includes("__INT__")){
                //console.log(array.body[i].declarations[0].id.name)
                if(typeof array.body[i].declarations[0].init.value != "number"){
                    throw new Error(`Assignment of non integer value to integer type ${array.body[i].declarations[0].id.name}`)
                }else if(!isInteger(array.body[i].declarations[0].init.value)){
                    throw new Error(`Assignment of non integer value to integer type ${array.body[i].declarations[0].id.name}`)
                }
            }else if((array.body[i].declarations[0].id.name).includes("__FLOAT__")){
                //console.log(array.body[i].declarations[0].id.name)
                if(typeof array.body[i].declarations[0].init.value != "number"){
                    throw new Error(`Assignment of non float value to float type: ${array.body[i].declarations[0].id.name}`)
                }else if(!isFloat(array.body[i].declarations[0].init.value)){
                    throw new Error(`Assignment of non float value to float type: ${array.body[i].declarations[0].id.name}`)
                }
            }

        }

        if(array.body[i].type=="ExpressionStatement"){
            if(array.body[i].expression.type == "AssignmentExpression"){
                if((array.body[i].expression.left.name).includes("__STRING__")){
                    console.log(array.body[i].expression.left.name)
                    if(typeof array.body[i].expression.right.value != "string"){
                        throw new Error(`Assignment of non string value to string type ${array.body[i].expression.left.name}`)
                    }
                }else if((array.body[i].expression.left.name).includes("__INT__")){
                    if(typeof array.body[i].expression.right.value != "number"){
                        throw new Error(`Assignment of non integer value to integer type ${array.body[i].expression.left.name}`)
                    }else if(!isInteger(array.body[i].expression.right.value)){
                        throw new Error(`Assignment of non integer value to integer type ${array.body[i].expression.left.name}`)
                    }
                }else if((array.body[i].expression.left.name).includes("__FLOAT__")){
                    if(typeof array.body[i].expression.right.value != "number"){
                        throw new Error(`Assignment of non float value to float type: ${array.body[i].expression.left.name}`)
                    }else if(!isFloat(array.body[i].expression.right.value)){
                        throw new Error(`Assignment of non float value to float type: ${array.body[i].expression.left.name}`)
                    }
                }
            }
        }
    }
})

var variables = ""
var name__STRING__ = "12"
var name__INT__ = 123
var name__FLOAT__ = 10.1
var abb = 10.1

name__STRING__ = "asd"
name__INT__ = 123
name__FLOAT__ = 10


function asd(){
    var asd__FLOAT__ ="ASDASDSA"
    console.log()
    //checkTypes()
}

asd()

