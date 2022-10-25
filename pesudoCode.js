//////selectors//////
numbers=document.querySelectorAll(`.number`)
operators=document.querySelectorAll(`.operator`)


///Initial Parameters/////
let value=; 
const object={
num1:, 
num2:``,
operator:`=`,
}
let result=``;

////// + - x ÷ /////////
sum()
substract()
multiply()
divide()

////////Event//////
numbers.forEach(num=>num.addEventListener(`keydown`,enterNumber))
operators.forEach(oper=>oper.addEventListener(`keydown`,operator))


///// Simulate 1 0 + 3 0 = * 5+....

///////Logic//////
function enterNumber(e){
value +=e.target.toString()  //value is a string number here
change value to number
return value
}


function Operator(e){
if(object.operator doesnt exist) object.operator=e.target;

if(value!==empty)
   { 
    if(num1 is empty) num1=value
    else num2=value
    }

value=``


if(obj.num1 and obj.num2 both exist) {
    
    if(obj.operator===`+`) {
        result=sum(obj.num1,obj.num2);  
        empty num1,num2;
        result=num1 ;
        e.target===`=`?empty obj.operator:obj.operator=e.target
        }
    else if (obj.sign===`*`) {
        result=multiply(obj.num1,obj.num2)
        empty num1,num2;
        result=num1 ;
        e.target===`=`?empty obj.operator:obj.operator=e.target
    }
    else if ...

}

}








