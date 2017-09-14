/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
const cart = document.querySelector('.cart');
const cartBox = document.querySelector('.cart-items-dropdown');
let flag = true; 

function displayCartItems (event) {
	if (flag) {
		cartBox.style.display = "block"
		flag = !flag;
	} else {
		cartBox.style.display = "none";
		flag = !flag;
	}
}

cart.addEventListener('click', displayCartItems)
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
const addToCart = document.querySelectorAll('.submit');
//const colorOption = document.querySelectorAll('.colors-wrap');
//const sizeOption = document.querySelectorAll('name="colors"');
const itemsCount = document.querySelector('.items');
const sumTotal = document.querySelector('.sum-total');
let itemsArray = [];
let total = 0;


function sendToCart (event) {
	let color, size,  
		description = event.path[2].children[1].children[1].textContent,
		price = event.path[2].children[1].children[2].textContent,
		addToTotal = event.path[2].children[1].children[2].dataset.price;
	/**/
	if (event.path[2].children[0].children.length === 2) {
		size = event.path[2].children[0].children[1].children.sizes.value;
		color = event.path[2].children[0].children[0].children.colors.value;
	} else if (event.path[2].children[0].children.length === 1) {
		color = event.path[2].children[0].children[0].children[0].children.colors.value;
	}
	if (color === 'Color' || size === 'Size') {
		alert("You need to choose a COLOR and SIZE!");
	} else {
		itemsArray.push({description: description, color: color, size: size, price: price});
	}
	itemsCount.textContent = itemsArray.length;
	/**/
	itemsArray.forEach((item,i)=> {
		if (i === itemsArray.length-1) {
			let node = document.createElement('li'); 
			node.innerHTML = `
				<a class="item-row">
    				<p class="cart-description">${itemsArray[i].description}</p>
    				<p class="cart-color">${itemsArray[i].color}</p>
    				<p class="cart-size">${itemsArray[i].size}</p>
    				<p class="cart-price">${itemsArray[i].price}</p>
    			</a>
			`
			cartBox.appendChild(node);
		}

	});
	/**/
	itemsArray.forEach((item,i) => {
		if (i === itemsArray.length-1) {
			total += +addToTotal;
		}
		sumTotal.innerHTML = `<p>Total: $${total}</p>`
	});
	/**/
}
addToCart.forEach(button => button.addEventListener('click', sendToCart));
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
const leftArrow = document.querySelector('.fa-angle-left');
const rightArrow = document.querySelector('.fa-angle-right');
const background = document.querySelector('.img-scroll');
const title = document.querySelector('.title'); 
const subTitle = document.querySelector('.sub-title'); 
let index = 0; 

const pictures = {
	0: {picture: "fjällräven bkg1.jpg", subTitle: "Nikkaluokta-Abisko / September 12-17, 2014"},
	1: {picture: "fjallraven bkg7.jpg", subTitle: "The Kings Trail / October 29-31, 2015"},
	2: {picture: "fjallraven bkg3.jpg", subTitle: "Norrland Forest / June 3-10, 2016"},
	3: {picture: "fjallraven bkg9.jpg", subTitle: "Kolmården Forest / November 13-18, 2017"}
}

background.style.backgroundImage = `url("${pictures[0].picture}")`;
subTitle.textContent = `${pictures[0].subTitle}`; 

function previousImage(){
	index--;
	if (index < 0)
		index = 3;
	background.style.backgroundImage = `url("${pictures[index].picture}")`;
	background.style.transition = "1s";
	background.style.transitionTimingFunction = 'ease-in-out';
	subTitle.textContent = `${pictures[index].subTitle}`;
}

leftArrow.addEventListener('click', previousImage); 

function nextImage() {
	index++;
	if (index > 3)
		index = 0;
	background.style.backgroundImage = `url("${pictures[index].picture}")`;
	background.style.transition = "1.0s";
	background.style.transitionTimingFunction = 'ease-in-out';
	subTitle.textContent = `${pictures[index].subTitle}`;
}

setInterval(nextImage, 5000)

rightArrow.addEventListener('click', nextImage)

/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
const images = {
	kids: {
		0:{pic:"fjallraven kids.jpg", text:"Hiking Trips"},
		1:{pic:"fjallraven kids 2.jpg", text:"His Backpack"},
		2:{pic:"fjallraven kids 3.jpg", text:"Explorers"}
	},
	trekking: {
		0:{pic:"fjallraven trekking.jpg", text:"Greenland Family"},
		1:{pic:"fjallraven trekking 2.jpg", text:"Kiruna Family"},
		2:{pic:"fjallraven trekking 3.png", text:"Övik Family"}
	},
	outdoors: {
		0:{pic:"fjallraven outdoors.jpg", text:"Exploring"},
		1:{pic:"fjallraven outdoors 2.jpg", text:"The"},
		2:{pic:"fjallraven outdoors 3.jpg", text:"Wilderness"}
	},
	summer: {
		0:{pic:"fjallraven summer.jpg", text:"New Backyards"},
		1:{pic:"fjallraven summer 2.jpg", text:"New Streams"},
		2:{pic:"fjallraven summer 3.jpeg", text:"New People"}
	}
}
const text1 = document.querySelector('.text1'); 
const text2 = document.querySelector('.text2'); 
const text3 = document.querySelector('.text3');
const subHeaderText = document.querySelectorAll('.sub-header-text');
const box1 = document.querySelector('.box1'); 
const box2 = document.querySelector('.box2'); 
const box3 = document.querySelector('.box3');  

box1.style.backgroundImage = `url("${images.trekking[0].pic}")`;
box2.style.backgroundImage = `url("${images.trekking[1].pic}")`;
box3.style.backgroundImage = `url("${images.trekking[2].pic}")`;
subHeaderText[1].classList.add('border');
text1.textContent = `${images.trekking[0].text}`;
text2.textContent = `${images.trekking[1].text}`;
text3.textContent = `${images.trekking[2].text}`;

function changeContent (event) { 
	if (this.innerText === "FJÄLLRÄVEN KIDS") {
		subHeaderText.forEach(text => text.classList.remove('border'));
		box1.style.backgroundImage = `url("${images.kids[0].pic}")`;
		box2.style.backgroundImage = `url("${images.kids[1].pic}")`;
		box3.style.backgroundImage = `url("${images.kids[2].pic}")`;
		this.classList.add('border');
		text1.textContent = `${images.kids[0].text}`;
		text2.textContent = `${images.kids[1].text}`;
		text3.textContent = `${images.kids[2].text}`;
	} else if (this.innerText === "TREKKING") {
		subHeaderText.forEach(text => text.classList.remove('border'));
		box1.style.backgroundImage = `url("${images.trekking[0].pic}")`;
		box2.style.backgroundImage = `url("${images.trekking[1].pic}")`;
		box3.style.backgroundImage = `url("${images.trekking[2].pic}")`;
		this.classList.add('border');
		text1.textContent = `${images.trekking[0].text}`;
		text2.textContent = `${images.trekking[1].text}`;
		text3.textContent = `${images.trekking[2].text}`;
	} else if (this.innerText === "EVERYDAY OUTDOOR") {
		subHeaderText.forEach(text => text.classList.remove('border'));
		box1.style.backgroundImage = `url("${images.outdoors[0].pic}")`;
		box2.style.backgroundImage = `url("${images.outdoors[1].pic}")`;
		box3.style.backgroundImage = `url("${images.outdoors[2].pic}")`;
		this.classList.add('border');
		text1.textContent = `${images.outdoors[0].text}`;
		text2.textContent = `${images.outdoors[1].text}`;
		text3.textContent = `${images.outdoors[2].text}`;
	} else if (this.innerText === "SUMMER CLOTHING") {
		subHeaderText.forEach(text => text.classList.remove('border'));
		box1.style.backgroundImage = `url("${images.summer[0].pic}")`;
		box2.style.backgroundImage = `url("${images.summer[1].pic}")`;
		box3.style.backgroundImage = `url("${images.summer[2].pic}")`;
		this.classList.add('border');
		text1.textContent = `${images.summer[0].text}`;
		text2.textContent = `${images.summer[1].text}`;
		text3.textContent = `${images.summer[2].text}`;
	} 
}
subHeaderText.forEach(subtext => subtext.addEventListener('click', changeContent));
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/
