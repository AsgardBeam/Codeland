"use strict";


/* __ General  __ */

// setting constants

const scrollSensorData = window.scrollHeight;
const servicesImages = {bigData: "big_data.jpg", refactoring: "refactoring.jpg", webDev: "web_dev.jpg", automation: "automation.png", support: "support.png"};
const servicesDecriptions = {bigData: "Мы повысим эффективность планирования Вашего труда благодаря внедрению высококлассных статистических моделей, которые включают принципы обработки больших данных и применяют системы искусственного интеллекта.", refactoring: "Мы качественно модернизируем Вашу кодовую базу согласно передовым технологическим стандартам, напишем чистую документацию, параллельно бесплатно обучим Ваших сотрудников пользоваться обновлёнными компонентами.", webDev: "Мы сделаем для Вашего бизнеса актуальные конкурентные веб-приложения (в мобильной и декстопной форме), взяв на себя дизайнерские работы, всю техническую разработку, SEO-оптимизацию, загрузку на хостинг-сервер и т.д.", automation: "Мы вычислим малополезные практики и неактуальные рутины в Вашем предприятии, по итогам чего обстоятельно составим прогрессивный план для цифровизации Вашего труда, на основе которого обеспечим автоматизацией.", support: "Мы бесплатно предоставляем нашим клиентам услуги консультации и поддержки в течение года, в том числе мы всегда открыты для оказания профессиональной консультации/поддержки любым другим нанимателям."};

// selecting DOM nodes

const main = document.querySelector("main");
const mainMajorWin = document.querySelector("#major-win");

const inputPhone = document.querySelector("#phone-number");
const actionButton = document.querySelector("#button-action");

const servicesMenu = document.querySelector("#services-menu");
const servicesBigData = document.querySelector("#bigData");
const servicesRefactoring = document.querySelector("#refactoring");
const servicesWebdev = document.querySelector("#webDev");
const servicesAutomation = document.querySelector("#automation");
const servicesSupport = document.querySelector("#support");

const infocard = document.querySelector("#service-info-card");
const infocardImage = document.querySelector("#img-show");
const infocardDivider = document.querySelector("#service-info-card .small-line-divider");
const infocardDescriptor = document.querySelector("#service-info-card .descriptor-1");

// adding EventListeners

main.addEventListener("click", bunishForm);
mainMajorWin.addEventListener("click", (event) => {event.stopPropagation()});
inputPhone.addEventListener("keypress", inputPhoneValidator);
actionButton.addEventListener("click", summonForm);
servicesBigData.addEventListener("click", slideCards);
servicesRefactoring.addEventListener("click", slideCards);
servicesWebdev.addEventListener("click", slideCards);
servicesAutomation.addEventListener("click", slideCards);
servicesSupport.addEventListener("click", slideCards);
fieldNeedNubmers

/* __ SECTION  main  __  */

// input validate
	
function inputPhoneValidator() {

	let value = inputPhone.value;
	
	if (isNaN(value)) {
		inputPhone.value = null;
		alert('В поле "Ваш телефон" можно вводить только цифры.');
		setTimeout(() => {inputPhone.value = null}, 1); /* second cleaning to delete remants of previous input*/
	}
}

// show the box of e-mail form
function summonForm() {
	main.style.pointerEvents = "all";
	main.style.left = "0";  // Opera Mini
	main.style.opacity = "100%";
}

// hide the box of e-mail form
function bunishForm() {
	main.style.pointerEvents = "none";
	main.style.left = "-200";  // Opera Mini
	main.style.opacity = "0%";
}

/* __ SECTION  #services  __  */
// __ DIV #service-info-card __ code */


// making #servicesMenu dynamic

// ## to set permanent :active style for an option of the #servicesMenu
function clickedMenu(item) {
	item.style.fontSize = "3rem";
	item.style.textShadow = "0 0 10rem #fff700, 0 0 10rem #fff700, 0 0 10rem #fff700, 0 0 10rem #fff700, 0 0 10rem #fff700, 0 0 10rem #fff700, 0 0 10rem #fff700, 0 0 10rem #fff700, 0 0 10rem #fff700, 0 0 10rem #fff700";
}

// ## remove the permanent :active style from all the #servicesMenu options
function resetMenu() {
	
	servicesMenu.querySelectorAll(".service-info-card-select").forEach((item) => {
		item.style.fontSize = "2rem";
		item.style.textShadow = "none";
	}
	);
}

// making #service-info-card dynamic

// ## This functions plays TWO logicaly connected animation pairs as one
// ## in order to hide how the content updates while sliding
function slideCards() {

	resetMenu(); // resetting a few style rules for the item
	
	let serviceName = this.id;
	
	clickedMenu(this); // setting a few hover style rules for the item
	
	infocardImage.style.animationName = "s-card_ImgOut"; 
	infocardDescriptor.style.animationName = "s-card_DescOut"; 
	
	let cardUpdate = (key) => {

		infocardImage.style.animationName = "s-card_ImgIn";
		infocardDescriptor.style.animationName = "s-card_DescIn";

		infocardImage.src = `./assets/images/${servicesImages[key]}`;
		infocardDescriptor.innerText = servicesDecriptions[key];
	
	}

	setTimeout(() => cardUpdate(serviceName), 1500);
}




