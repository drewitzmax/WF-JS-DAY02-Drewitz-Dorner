arr = [];

function addToCart(id){
	let name =document.getElementsByClassName("name")[id].textContent;
	let img =document.getElementsByClassName("imgProduct")[id].src;
	let price =document.getElementsByClassName("price")[id].textContent;
	price = price.substr(0,price.length-1);
	price = price.replace(",",".");
	pro = new Product (img, name, price);
	arr.push(pro);
}

function changeHTML() {
   
  localStorage.myArray = JSON.stringify(arr);

}

function printCart(arr){
	for(let i=0; i<arr.length;i++){
		let itemCard = document.createElement("div");
		itemCard.className = "itemCard"
		let image = document.createElement("img");
		image.src= arr[i].img;
		let name = document.createElement("h5");
		name.textContent = arr[i].name;
		let price = document.createElement("p");
		price.textContent = arr[i].price + "€";
		let remove = document.createElement("button");
		remove.textContent = "Delete";
		remove.onclick = function () {removeItem(this.itemCard);};
		itemCard.appendChild(image);
		itemCard.appendChild(name);	
		itemCard.appendChild(price);
		itemCard.appendChild(remove);
		document.getElementById("einkauf").appendChild(itemCard);
	}
}

function removeItem(a){
	a
}