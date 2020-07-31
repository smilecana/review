// var nameBuilder = function(firstName="Joe", lastName="Doe") {
// 			console.log(firstName + " " + lastName);
// 		};

// nameBuilder();


// ES6 Syntack Template strings
function print(firstName) {
	console.log(`Hello ${firstName}`);
}
print("HanaPark");


function createEmail(fristname, purchasePrice) {
	var shipping = 5.95;
	console.log(
		`Hi ${firstName}, Thanks for buying from us!
		Total: $${purchasePrice}
		Shipping: $${shipping}
		GrandTotal: $${purchasePrice + shipping}`
	);

}

createEmail("Gina", 100);