const workIDs = [123,1234,12345,123456,1234567]



const beforeResult = document.querySelector(".order-container")
const afterResult = document.querySelector(".order-result-container")
const heading = document.querySelector(".order-heading");
const orderId = document.querySelector("#orderid");
const searchButton = document.querySelector("button");
const orderSearch = document.querySelector(".order-search")
const workID = document.querySelector("#workid")



searchButton.addEventListener('click', () => {
    console.log(orderId.value)
    if (workIDs.includes(parseInt(orderId.value))){
        afterResult.style.background = "url(./images/order-received.png)";
        beforeResult.style.display = "none";
        workID.innerHTML += parseInt(orderId.value)
        afterResult.style.display = "flex";
    }
    else{
        beforeResult.style.background = "red";
        orderSearch.style.display = "none"
        heading.innerHTML = "<h2>You may entered a wrong id number please check the order id and it has no spaces</h2>"
        
    }
})


