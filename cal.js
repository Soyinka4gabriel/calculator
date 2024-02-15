let currentResult = "";

function show(value){
    currentResult += value;
    document.getElementById("enter").value=currentResult;
}

function clr(){
    currentResult = "";
    document.getElementById("enter").value = currentResult;
}

function cal(){
    try{
        const result = eval(currentResult);
        document.getElementById("enter").value = result;
        currentResult = String(result);
    }
    catch(error){
        document.getElementById("enter").value ="Error";
        currentResult = ""
    }
    
}