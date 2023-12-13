

function log(x){
    return Math.log10(x);
}


function sqrt(x){
    return Math.sqrt(x);
}

function exp(x){
    return 2.71**x;
}

function backspace(){
    let display=document.getElementById("display");
    display.value=display.value.slice(0,-1);
}

function calc(){
    let display=document.getElementById("display");
    let output=document.getElementById("output");
    let expr=display.value;
    let result;
    try {
        result = eval(expr);
        output.value = result;
        display.value="";
    } catch (error) {
        output.value = "Error";
        display.value= "";
    }
}

function SquareRoot(){
    let display=document.getElementById("display");
    if(display.value=="" || display.value.slice(-1)=="+"||display.value.slice(-1)=="-"||display.value.slice(-1)=="*"||display.value.slice(-1)=="/"||display.value.slice(-1)=="("||display.value.slice(-1)==".")
    {
        display.value+="sqrt(";
    }
    else
    {
        display.value+="*sqrt(";
    }
}

function Pi(){
    let display=document.getElementById("display");
    if(display.value=="" || display.value.slice(-1)=="+"||display.value.slice(-1)=="-"||display.value.slice(-1)=="*"||display.value.slice(-1)=="/"||display.value.slice(-1)=="("||display.value.slice(-1)==".")
    {
        display.value+="3.14";
    }
    else
    {
        display.value+="*3.14";
    }
}

function LogBase10(){
    let display=document.getElementById("display");
    if(display.value=="" || display.value.slice(-1)=="+"||display.value.slice(-1)=="-"||display.value.slice(-1)=="*"||display.value.slice(-1)=="/"||display.value.slice(-1)=="("||display.value.slice(-1)==".")
    {
        display.value+="log(";
    }
    else
    {
        display.value+="*log(";
    }
}

function Pow(){
    let display=document.getElementById("display");
    display.value+="**(";
}

function Exp(){
    let display=document.getElementById("display");
    if(display.value=="" || display.value.slice(-1)=="+"||display.value.slice(-1)=="-"||display.value.slice(-1)=="*"||display.value.slice(-1)=="/"||display.value.slice(-1)=="("||display.value.slice(-1)==".")
    {
        display.value+="exp(";
    }
    else
    {
        display.value+="*exp(";
    }
}

