arr = [];

function addToCart(id){
	let name = card.getElementsByClassName("name")[id].textContent;
	let img = card.getElementsByClassName("imgProduct")[id].src;
	let price = card.getElementsByClassName("price")[id].value;
	pro = new Product (img, name, price);
	arr.push(pro);
}