var total=0;
let i=0;
let j=0;
function handleClickBtn(target)
{
    
    const itemTitle=target.childNodes[5].childNodes[1].innerText;
    const selectedItemsContainer= document.getElementById("selectedItems");
    const li = document.createElement("li");
    li.setAttribute("type", "1");
    li.innerText = itemTitle;
    selectedItemsContainer.appendChild(li);
    

    const itemPriceString=target.childNodes[5].childNodes[3].childNodes[0].innerText;
    
    const itemPrice=parseInt(itemPriceString);
    total=getTotal(itemPrice,total);

    setElementByInnerText("totalPrice",total);
    if(total>0){
        document.querySelector('#purchaseBtn').disabled = false;
    }
    if(total>=200){
        document.querySelector('#applyBtn').disabled = false;
    }
    
    
    setElementByInnerText("grandTotal", total);

}

document.getElementById("applyBtn").addEventListener("click",function()
{
    

    const couponField= document.getElementById("couponField");
    const coupon= couponField.value;
    if(coupon=='SELL200')
    {
        couponField.value="";
        i++;
        if(i==1){
            document.querySelector('#applyBtn').disabled = true;
        }
        const discountContainer= document.getElementById("discountPrice");
        console.log();
        const discount=total*0.2;
        setElementByInnerText("discountPrice",discount);
        setElementByInnerText("grandTotal", total-discount);
    }
})
document.getElementById("homeeBtn").addEventListener("click",function(){
    j++;
    setElementByInnerText("totalPrice",0);
    setElementByInnerText("discountPrice",0);
    setElementByInnerText("grandTotal",0);
    myRemoveFunction("selectedItems");
    setTotal();
})
