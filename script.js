//Empty array for shopping cart
let cart = [];

//Function that will add items into the array (each item in html will call this function)
function AddItem(_name, _price){
    let item = {
        Name: _name,
        Price: _price
    }
    cart.push (item)
}

//Function that will display the receipt in the console
function GetReceipt(){
    for(let i = 0; i < cart.length; i++){
        console.log(cart[i].Name + ": $" + cart[i].Price)
    }

    //Keeping track of total to display at end
    let total = 0

    for(let i = 0; i < cart.length; i++){
        total += cart[i].Price
    }
    console.log("Total: $" + total)
}

//Option to clear the JS array
function ClearCart(){
        while(cart.length > 0){
        cart.pop();
    }
    console.log("Your cart is now clear")
}