sum(1,2); // Valid. Because Hoisting


/*
<function keyword> <name of function> (<optional parameters>) {
    <code that would be reused>
    <optional return>
}

Eg:
*/
function sum(a, b) {
    return a + b;
}

const result = sum(1,2);

function print1to10() {
    console.log(1,2,3,4,5,6,7,8,9,10);
}

function name(param1, param2) {
    // code 1
    // code 2

    // code 3
}



const fn1 = sum;
fn1(1,2);
console.log(typeof fn1);



/*

let/const <variabe name of function> = <function keyword> (<optional parameters>) {
    <code that would be reused>
    <optional return>
}

Eg:
*/
// multiply(1,2); Invalid: Cannot access 'multiply' before initialization

const multiply = function(a, b) {
    return a * b;
}

multiply(1,2);

multiply(1,2);

multiply(1,2);





/*
Nested functions / Alternate pattern for a Class

- Factory
*/
const Catalog = function () {
    let product;
    let wishlist;
    let pastOrders;

    const placeOrder = function (n1, n2) {
        return n1 + n2;
    }

    const checkout = function (n1, n2) {
        return n1 * n2;
    }

    const viewOrder = function (n1, n2) {
        return n1 * n2;
    }

    return {
        product,
        wishlist,
        pastOrders,
        placeOrder,
        checkout,
        viewOrder
    };
}

const catalog = Catalog();
console.log(catalog.viewOrder(1,2));
console.log(catalog.checkout(3,4));
console.log(catalog.placeOrder(3,4));




/*
Callback
*/
const CheckOut = function (
    selectAddressCallbackFn,
    selectDeliveryModeCallbackFn,
    selectPaymentModeCallbackFn
) {
    // Confirm Address
    const userAddresses = []; // Assume to be addressess that we fetched from server
    const selectedAddress = selectAddressCallbackFn(userAddresses);

    // Confirm Delivery mode
    const supportedDeliveryOptions = [];
    const selectedDeliveryMode = selectDeliveryModeCallbackFn(supportedDeliveryOptions);

    // Confirm Payment mode
    const selectedPaymentMode = selectPaymentModeCallbackFn();

    // Redirects to Payment
    const paymentResult = redirectToPaymentGateway();


    function redirectToPaymentGateway() {
        // Do payment and return result;
        return true;
    }
}


function selectAddress(userAddresses) {
    return userAddresses[0]; // Assume
}
function selectDeliveryMode(deliveryModes) {
    return deliveryModes[0]; // Assume
}
function selectPaymentMode() {
    return 1;
}

CheckOut(
    selectAddress,
    selectDeliveryMode,
    selectPaymentMode
);




/*
Arrow Function - ES6 only
*/

const division = (a, b) => {
    if (b != 0) {
        return a /b;
    }
    return 0;
}

division(4, 2)