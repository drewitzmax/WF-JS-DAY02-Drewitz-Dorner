arr = [];

function addToCart(id){
	let card = document.getElementsByClassName("productCard")[id];
	let name = card.getElementsByTagName("h1").textContent;
	let img = card.getElementsByTagName("img").src;
	let price = card.getElementsByClassName("price").value;
	pro = new Product (img, name, price);
	arr.push(pro);
}