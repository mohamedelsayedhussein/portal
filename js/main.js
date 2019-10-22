
$(document).ready(function(){

	let shapeAfter = $('.form-area .shapeAfter')
	let welcome = $('.welcome-text');
	let arrowImg = welcome.find('.animated-arrow img');
	let textSlideHead = welcome.find('.text h1 span');
	let textSlidePara = welcome.find('.text p span');
	let formStructure = $('.form-structure');
	let leftForm = $('.form-box.left');
	let rightForm = $('.form-box.right');
	let mainNav = $('nav');
	let visitPage = $('.tween-visit-page');
	let container = visitPage.find('.container');

//  tween of log in page

	let tween = new TimelineMax();
	tween
		.from(shapeAfter, 1, {opacity:0,ease:Power1.easeInOut})
		.from(formStructure, 1, {x:1500,ease:Power1.easeInOut},'-=.95')
		.from(textSlideHead, 1, {y:200,autoAlpha:0,ease:Power2.easeInOut},('-=1'))	
		.from(textSlidePara, 1, {y:200,autoAlpha:0,ease:Power2.easeInOut},('-=.7'))	
		.from(arrowImg, 1, {y:-100,autoAlpha:0,ease:Power2.easeInOut})
		.fromTo(arrowImg, 1, {y:-10},{y:10,repeat:-1,yoyo:true},('-=.8'))
		.from(visitPage,.5,{y:200,autoAlpha:0},('-=2'))
		.staggerFrom(container, .5, {y:50,autoAlpha:0,ease:Expo.easeInOut})

// tween of nav

	let tween2 = new TimelineMax();

	tween2
		.from(mainNav, 1, { y:-300})
		.from(leftForm, 1, { x:'-100%',ease:Expo.easeIn},'-=.8')
		.from(rightForm, 1, { x:'100%',ease:Expo.easeIn}, ('-=1'))

	const hamburger = mainNav.find('#hamburger');
    const lineOne = hamburger.find('#line_1');
    const lineTwo = hamburger.find('#line_2');
    const lineThree = hamburger.find('#line_3');
    const lines = [lineOne, lineThree];
    const hamburgerAnimate = new TimelineMax();

// tween of hamburger menu

    hamburger.mouseenter(function(){
        hamburgerAnimate.staggerTo(lines, 0.25, {
            scaleX:1.5,
            repeat:1,
            yoyo:true,
            transformOrigin: 'center center',
            ease: Power1.easeInOut
        }, 0.1)

    });
	
	const menuLinks = mainNav.find('.links');
    const toggleMenu = new TimelineMax({reversed:true});

    toggleMenu
        .to(lineTwo, .125, {scaleX:0,display:'none'},0)
        .to(lineOne, .25, {transformOrigin:'50% 50%',y:2,ease:Power2.easeInOut,},'slide')
        .to(lineThree, .25, {transformOrigin:'50% 50%',y:-2,ease:Power2.easeInOut,},'slide')    
        .to(hamburger, .5, {rotation:360,ease:Power4.easeInOut})
        .to(lineOne, .25, {rotation:45,ease:Power2.easeInOut,},'cross')  
        .to(lineThree, .25, {rotation:-45,ease:Power2.easeInOut,},'cross');
    
        hamburger.click(function(){
            toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
            menuLinks.toggleClass('clicked')
		});
	
		
//  log in page script

	const loginBtn = document.getElementById('login');
	const signupBtn = document.getElementById('signup');

	loginBtn.addEventListener('click', (e) => {
		let parent = e.target.parentNode.parentNode;
		Array.from(parent.classList).find((element) => {
			if(element !== "slide-up") {
				parent.classList.add('slide-up')
			}else{
				signupBtn.parentNode.classList.add('slide-up')
				parent.classList.remove('slide-up')
			}
		});
	});

	signupBtn.addEventListener('click', (e) => {
		let parent = e.target.parentNode;
		Array.from(e.target.parentNode.classList).find((element) => {
			if(element !== "slide-up") {
				parent.classList.add('slide-up')
			}else{
				loginBtn.parentNode.parentNode.classList.add('slide-up')
				parent.classList.remove('slide-up')
			}
		});
	});





});
