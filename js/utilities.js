function stringToFloat(string)
    {
        const floatValue= parseFloat(string).toFixed(2);
        return floatValue;
    }

function setElementByInnerText(id,value)
{
    const container =document.getElementById(id);
    container.innerText=Number(value).toFixed(2);
}
function setElementByValue(id,value)
{
    const container =document.getElementById(id);
    container.innerText=Number(value).toFixed(2);
}
function getTotal(total,itemPrice){
    total=parseInt(total)+ itemPrice;
    return total;
}
function myRemoveFunction(id) {
    var listRemove = document.getElementById(id).childNodes;
    for(let i=0; i<=listRemove.length; i++)
    {
        listRemove[i].remove();
        myRemoveFunction(id);
    }
    
       
    
 }
 function setTotal(){
    total=0;
 }