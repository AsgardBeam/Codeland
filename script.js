"use strict";


/* __ General  __ */

// small databases
const servicesImages = {bigData: "big_data.jpg", refactoring: "refactoring.jpg", webDev: "web_dev.jpg", automation: "automation.png", support: "support.png"};
const servicesDecriptions = {bigData: "Мы повысим эффективность планирования Вашего труда благодаря внедрению высококлассных статистических моделей, которые включают принципы обработки больших данных и применяют системы искусственного интеллекта.", refactoring: "Мы качественно модернизируем Вашу кодовую базу согласно передовым технологическим стандартам, напишем чистую документацию, параллельно бесплатно обучим Ваших сотрудников пользоваться обновлёнными компонентами.", webDev: "Мы сделаем для Вашего бизнеса актуальные конкурентные веб-приложения (в мобильной и декстопной форме), взяв на себя дизайнерские работы, всю техническую разработку, SEO-оптимизацию, загрузку на хостинг-сервер и т.д.", automation: "Мы вычислим малополезные практики и неактуальные рутины в Вашем предприятии, по итогам чего обстоятельно составим прогрессивный план для цифровизации Вашего труда, на основе которого обеспечим автоматизацией.", support: "Мы бесплатно предоставляем нашим клиентам услуги консультации и поддержки в течение года, в том числе мы всегда открыты для оказания профессиональной консультации/поддержки любым другим нанимателям."};
const portfolioContents = [ {name: "Интегратор", image: "./assets/images/product_1.png", desc: "Синхронизировать и объединить все социальные сети в одном удобном мобильном приложении, быть на волне всех важных событий."}, {name: "NiceView", image: "./assets/images/product_2.jpg", desc: "Продвинутая браузерная камера для мобильного телефона, использующая матрицу искусственного интеллекта."}, {name: "iБизнесток700", image: "./assets/images/product_7.jpg", desc: "Мы с гордостью сообщаем, что выполнили главную роль в цифровой модернизации холдинга iБизнесток700."}, {name: "Янгуг", image: "./assets//images/product_3.png", desc: "Система веб-услуг высшего класса, сравнимая с веб-порталами Яндекс и Google."}, {name: "megaCloudBits", image: "./assets/images/product_4.png", desc: "Интерактивное хранилище информации, произведённой алгоритмами обработки больших данных, которым пользуются миллионы."}, {name: "SmartМашины", image: "./assets/images/product_5.jpg", desc: "Веб-сайт лидирующей на рынке робототехники компании, которая славится беспилотными умными экскаваторами."}, {name: "Око", image: "./assets/images/product_6.jpg", desc: "инамичная система наблюдения за отрытыми общественными потоками больших данных с целью прогнозирования."}, {name: "PaintGreat", image: "./assets/images/product_8.jpg", desc: "Популярный браузерный редактор графики, рисующий за Вас, на основе голосовых приказов и текстовых сообщений."} ];
const reviewsData = {client1: {logo: "./assets/images/client1.jpg", info: {headline: "Не пытаются с тебя снять деньги", clientname: 'ООО «ТехноЕдаа»', summary: "доставка, оптовая торговля, Санкт-Петербург", review: "Эта компания очень хорошая. Нам понравилось, что они не пытаются заработать на каждом клиенте. Не пытаются с тебя снять деньги. И с тобой сотрудничают и помогают."}},  client2: {logo: "./assets/images/client2.jpg", info: {headline: "Быстро реагирует на запросы", clientname: "DasIstKohler", summary: "кондиционеры, климат-контроль, Берлин", review: "Мы, как клиенты, можем сказать, что эта компания является одной из лучших в Европе и Азии, потому что она очень быстро реагирует на запросы, всегда дает ответы на технические вопросы, помогает с диплоем и т. д. Они очень быстро реагируют на запросы. Это важно для того, чтобы клиент не тратил свое время и деньги, когда он нуждается в них."}}, client3: {logo: "./assets/images/client3.jpg", info: {headline: "Есть все необходимое", clientname: '"ОАО Дзинь-Дзань99"', summary: "компьютерные сети, техобслуживание, Сеул", review: "Это очень хорошая компания. Нас все устраивает. Мы имеем дело с ними уже три года и мы не разочарованы. Мы можем сказать, что в этой компании есть все необходимое, чтобы выполнять любые виды работ. Но мы также можем сказать,что это одна из лучших компаний в Корее."}}, client4: {logo: "./assets/images/client4.jpg", info: {headline: "Очень опытный технический персонал", clientname: 'Община "Good Settler"', summary: "строительство, общественные услуги, Торонто", review: "Мы работаем с этой компанией около трех лет. За это время они сделали очень много для нас. У них работает очень опытный технический персонал. Они понимают нас и даже если у нас есть проблемы, они всегда помогают. Это действительно хорошее сотрудничество."}}, client5: {logo: "./assets/images/client5.png", info: {headline: "Уже более восьми лет", clientname: 'ВТС-buildMatrix Inc.', summary: "электромеханическое оборудование, роботы, Пекин", review: "Мы пользуемся услугами этой компании уже более восьми лет. Они работают очень хорошо и в течении всего этого времени никогда не подводили нас. В этой организации работают профессионалы своего дела. Они всегда готовы помочь и решить проблему, если она возникла. Мы очень довольны ими. Мы всегда можем обращаться к ним и они с радостью помогут нам."}}};

// selecting DOM nodes

const main = document.querySelector("main");
const header = document.querySelector("#header");
const services = document.querySelector("#services");
const portfolio = document.querySelector("#portfolio");
const reviews = document.querySelector("#reviews");
const team = document.querySelector("#team");
const footer = document.querySelector("#footer");

const mainMajorWin = document.querySelector("#major-win");

const inputPhone = document.querySelector("#phone-number");

const nav2Btn = document.querySelector("#nav-2-btn");
const nav2List = document.querySelector("#nav-list-2");

const toheader = document.querySelector("#toheader-wrapper");

const actionButtons = document.querySelectorAll(".button-action");

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

const portfolioCard = document.querySelector("#portfolio-card");
const portfolioProjectName = document.querySelector("#project-name-h3");
const portfolioCardWrapper = document.querySelector("#portfolio-card-content-wrapper");
const portfolioImageContainer = document.querySelector("#image-container");
const portfolioImage = document.querySelector("#portfolio-image");
const portfolioDecsription = document.querySelector("#portfolio-card-description");
const portfolioControls = document.querySelector("#portfolio-controls");
const portfolioTheControls = document.querySelector("#the-controls");
const portfolioOverlay = document.querySelector("#the-overlay");
const portfolioCircle = document.querySelector("#portfolio-controls-circle-container");
const portfolioArrowTop = document.querySelector("#controls-arrow-top");
const portfolioArrowBottom= document.querySelector("#controls-arrow-bottom");

const revBtnsBoxAuras = document.getElementsByClassName("rev-btn-container");
const revBtnsBoxReal = document.querySelectorAll("#the-rev-buttons-real .rev-btn-container");
const revButtons = document.querySelectorAll(".rev-button ");

const revQuotesLeftTab = document.querySelector("#reviews-quotes-left-tab");
const revClientFace = document.querySelector("#client-face");
const revClientName = document.querySelector("#client-name");
const revClientSummary = document.querySelector("#client-summary");
const revQuotesRightTab = document.querySelector("#reviews-quotes-right-tab");
const revHeading = document.querySelector("#review-heading");
const revReview = document.querySelector("#review");
const revSmallDivider = document.querySelector("#small-line-divider");


// adding EventListeners

window.addEventListener("scroll", responsiveScrolling);

main.addEventListener("click", bunishForm);
mainMajorWin.addEventListener("click", (event) => {event.stopPropagation()});

nav2Btn.addEventListener("click", controlNavMenu);
nav2List.addEventListener("mouseleve", hideMenu);

inputPhone.addEventListener("keypress", inputPhoneValidator);

actionButtons.forEach((item) => item.addEventListener("click", summonForm));

servicesBigData.addEventListener("click", slideCards);
servicesRefactoring.addEventListener("click", slideCards);
servicesWebdev.addEventListener("click", slideCards);
servicesAutomation.addEventListener("click", slideCards);
servicesSupport.addEventListener("click", slideCards);

portfolioControls.addEventListener("click", circleClickReaction);
portfolioCardWrapper.addEventListener("mouseover", imageShrinking);
portfolioCardWrapper.addEventListener("mouseleave", imageExpanding);

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

/* __ SECTIONs #nav-2 and #toheader-wrapper __*/

let toOpen = true;

function controlNavMenu(event, isMouseleave=false) {
	if (toOpen && !isMouseleave) {
		nav2Btn.style.opacity = "100%";
		nav2List.style.transform = "translateX(0rem)";
		nav2List.style.opacity = "100%";
		toOpen = false;
	} else if (!toOpen || isMouseleave) {
		nav2Btn.style = "";
		nav2List.style = "";
		toOpen = true;
	}
}

function hideMenu() {
	controlNavMenu(true);
}

/* __ SECTION  #services  __  */

// making #servicesMenu dynamic

// ## to set permanent :active style for an option of the #servicesMenu
function clickedMenu(item) {
	item.style.fontSize = "3rem";
}

// ## remove the permanent :active style from all the #servicesMenu options
function resetMenu() {
	
	servicesMenu.querySelectorAll(".service-info-card-select").forEach((item) => {
		item.style.fontSize = "2rem";
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

/* __ SECTION  #portfolio  __  */

// dymanic styling

function circleClickReaction() {
	portfolioCircle.style.transform = "scale(250%)";
	setTimeout(() => {portfolioCircle.style = ""}, 200);
}

function imageShrinking() {
	portfolioImageContainer.style = "filter: saturate(125%); margin-top: 3%; max-width: 88%; min-width: 88%; max-height: 60%; min-height: 60%;";

}

function imageExpanding() {
	portfolioImageContainer.style = "";
}


// sliding logic

const PortfolioSlider = {
	index: 0,
	isInProgress: false,
	playAnimation() {

		portfolioCard.style.animationPlayState = 'running';
		setTimeout(() => {
			portfolioCard.style.animationPlayState = 'rotateCard';
			portfolioCard.style.animationPlayState = 'paused';
			PortfolioSlider.isInProgress = false;
			portfolioOverlay.style.visibility = "hidden";
		}, 4000);

		portfolioProjectName.style.opacity = "0%";
		setTimeout(() => {
			portfolioProjectName.style = "";
		}, 3000);
	},
	refreshConent(name, img, desc) {
		portfolioProjectName.innerText = name;
		portfolioImage.src = img;
		portfolioDecsription.innerText = desc;
	},
	slideUp() {

		if (PortfolioSlider.isInProgress == false) {
			
			portfolioOverlay.style.visibility = "visible";

			PortfolioSlider.index += 1;
			
			PortfolioSlider.index = PortfolioSlider.index >= 8 ? 0 : PortfolioSlider.index;

			let project = portfolioContents[PortfolioSlider.index];

			let newName = project.name;
			let newImage = project.image;
			let newDescription = project.desc;

			PortfolioSlider.playAnimation();

			setTimeout(() => {
				PortfolioSlider.refreshConent(newName, newImage, newDescription);
			}, 1000);

			PortfolioSlider.isInProgress = true;
		}
		
	},
	slideDown() {
		if (PortfolioSlider.isInProgress == false) {
			
			portfolioOverlay.style.visibility = "visible";
			
			PortfolioSlider.index -= 1;
			console.log('PortfolioSlider.index 1', PortfolioSlider.index);
			PortfolioSlider.index = PortfolioSlider.index <= -1 ? 7 : PortfolioSlider.index;
			console.log('PortfolioSlider.index 2', PortfolioSlider.index);
			let project = portfolioContents[PortfolioSlider.index];
			console.log('project', project);
			let newName = project.name;
			let newImage = project.image;
			let newDescription = project.desc;

			PortfolioSlider.playAnimation();

			setTimeout(() => {
				PortfolioSlider.refreshConent(newName, newImage, newDescription);
			}, 1000);

			PortfolioSlider.isInProgress = true;

		}
	}
};

portfolioArrowTop.addEventListener("click", PortfolioSlider.slideUp);
portfolioArrowBottom.addEventListener("click", PortfolioSlider.slideDown);

/* SECTION #reviews */

// sliding buttons' styling infrastructure
const RevBtnTransitions = {
	targets: [],
	isOnePressed: false,
	idPressed: undefined,
	activeTags: [],
	isIntro: true,
	mouseover() {

		let revBtn = this.querySelector("a");
		let id = revBtn.getAttribute("id");

		RevBtnTransitions.targets.push(revBtn);

		let index = +(new String(revBtn.id)[8]);
		let theBackground = revBtnsBoxAuras[index-1];
		
		RevBtnTransitions.targets.push(theBackground);
		
		if (RevBtnTransitions.idPressed == id) {
			null;
		} else {
			theBackground.style.opacity = "80%";
			theBackground.style.transform = "scale(100%)";
			theBackground.style.backgroundColor = "black";
			theBackground.style.border = ".2rem magenta solid";
		}
		
	
	},
	mouseleave() {

		let revBtn = RevBtnTransitions.targets[0];
		let theBackground = RevBtnTransitions.targets[1];
		
		RevBtnTransitions.transitionSmartControl(revBtn, theBackground);

		RevBtnTransitions.targets = [];
	},

	click() {
		// styling
		let revBtn = RevBtnTransitions.targets[0];
		let theBackground = RevBtnTransitions.targets[1];

		let id = revBtn.getAttribute("id");
		RevBtnTransitions.idPressed = id;

		if (RevBtnTransitions.activeTags != [revBtn, theBackground] && RevBtnTransitions.isOnePressed) {
			RevBtnTransitions.transitionSmartControl(RevBtnTransitions.activeTags[0], RevBtnTransitions.activeTags[1]);
		}

		RevBtnTransitions.activeTags = [revBtn, theBackground];
		RevBtnTransitions.isOnePressed = true;

		revBtn.style.backgroundColor = "white";
		revBtn.style.transform = "scale(20%)";
		revBtn.style.filter = "none";
		revBtn.style.backgroundColor = "none";
		revBtn.style.opacity = "100%";
		revBtn.style.filter = "blur(.5rem)";
		theBackground.style.opacity = "60%";
		theBackground.style.transform = "scale(70%)";
		theBackground.style.backgroundColor = "rgb(0, 0, 100)";
		theBackground.style.filter = "blur(.1rem)";
		theBackground.style.border = ".2rem red solid";

		// real logics
		let index = +(new String(revBtn.id)[8]);
		slideReview('client' + index);

	},
	transitionSmartControl(elem1, elem2) {
	
		let id = elem1.getAttribute("id");
		
		if (RevBtnTransitions.idPressed != id) {
			elem1.style = "";
			elem2.style = "";
		}
	}

};


// initializations
revBtnsBoxReal.forEach((item) => item.addEventListener("mouseover", RevBtnTransitions.mouseover));
revBtnsBoxReal.forEach((item) => item.addEventListener("mouseleave", RevBtnTransitions.mouseleave));
revBtnsBoxReal.forEach((item) => item.addEventListener("click", RevBtnTransitions.click));

let msover = new Event('mouseover');
let msleave = new Event('mouseleave');
let click = new Event('click');

Array.from(revBtnsBoxReal)[2].dispatchEvent(msover);
Array.from(revBtnsBoxReal)[2].dispatchEvent(click);
Array.from(revBtnsBoxReal)[2].dispatchEvent(msleave);


// sliding logic

function slideReview(target) {
	
	// animations
	revClientFace.style.animationName = '';
	revClientName.style.animationName =  '';
	revClientSummary.style.animationName = '';
	revQuotesRightTab.style.animationName = '';

	function refreshingAll() {
		revClientFace.style.animationName = 'clientFaceRefresh-Full';
		revClientName.style.animationName = 'clientNameRefresh-Full';
		revClientSummary.style.animationName = 'clientSummaryRefresh-Full';
		revQuotesRightTab.style.animationName = 'rotateReviewPanel-Full';
	}
	// contents
	function refreshRightTab() {
		revReview.innerText = reviewsData[`${target}`].info.review;
		revHeading.innerText = reviewsData[`${target}`].info.headline;
	}

	function refreshLeftTab() {
		console.log('target', target);
		revClientFace.src = reviewsData[`${target}`].logo;
		revClientName.innerText = reviewsData[`${target}`].info.clientname;
		revClientSummary.innerText = reviewsData[`${target}`].info.summary;
	}
	
	setTimeout(refreshingAll, 5);
	setTimeout(refreshRightTab, 1550);
	setTimeout(refreshLeftTab, 3005);


}

/* __ Responsive Scrolling __ */

// root variables

let documentHeight;
let scrollingPoint;
let headerClientHeight; 
let servicesClientHeight;
let portfolioClientHeight;
let reviewsClientHeight;
let teamClientHeight;
let footerClientHeight;

// ## gets the current height of the document that changes due to zoomings
// ## gets the current position of the viewport that moves across the document
// ## calculates variables
// ## reacts
function responsiveScrolling() {

	headerClientHeight = header.clientHeight;
	servicesClientHeight = services.clientHeight;
	portfolioClientHeight = portfolio.clientHeight;
	reviewsClientHeight = reviews.clientHeight;
	teamClientHeight = team.clientHeight;
	footerClientHeight = footer.clientHeight;
	
	documentHeight = headerClientHeight + servicesClientHeight + portfolioClientHeight + reviewsClientHeight + teamClientHeight + footerClientHeight;
	
	scrollingPoint = window.scrollY;

	nav2CssControll();


}


// reactions
function nav2CssControll() {
	
	let topPoint = headerClientHeight;
	let bottomPoint = documentHeight - footerClientHeight - 30;
	let lineHeight = scrollingPoint;


	// appear
	if (lineHeight > topPoint) {
		nav2Btn.style.visibility = "visible";
		toheader.style.visibility = "visible";

	}
	if (lineHeight < bottomPoint) {
		nav2Btn.style.visibility = "visible";
		toheader.style.visibility = "visible";
	}

	// disappear
	if (topPoint > lineHeight) {
		nav2Btn.style.visibility = "hidden";
		toheader.style.visibility = "hidden";
		nav2List.style = "";
	}
	if (bottomPoint < lineHeight) {
		nav2Btn.style.visibility = "hidden";
		toheader.style.visibility = "hidden";
		nav2List.style = "";
	}

}

// activations


