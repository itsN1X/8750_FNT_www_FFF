const changeBg = () => {
  const background = document.querySelector('.wrapper__background__left');
  const background2 = document.querySelector('.wrapper__background__right')
  const hoverChange = document.querySelector('.nav__menu__list-item');
  const hoverChangeTwo = document.querySelector('.nav__menu__list-item');
  const hoverBarChange = document.querySelector('.header__border');

    hoverChange.addEventListener('mouseover', handle);
    hoverChange.addEventListener('mouseleave', handle2);
    hoverChangeTwo.addEventListener('mouseover', handle3);
    hoverChangeTwo.addEventListener('mouseleave', handle4);
    hoverChange.addEventListener('mouseover',()=> {
      hoverBarChange.classList.toggle('active');
    });
    hoverChange.addEventListener('mouseleave', ()=> {
      hoverBarChange.classList.remove('active')
    });

  function handle() {
    background.style.background = 'url(../img/vectors/violet.svg) bottom left/auto 50% no-repeat';
  }

  function handle2() {
    background.style.background = '';
  }

  function handle3() {
    background2.style.background = 'url(../img/vectors/orangeNew.svg) bottom right/auto 100% no-repeat';
  }

  function handle4() {
    background2.style.background = '';
  }

}
changeBg ();

let changedHeight = $('')

jQuery(document).ready(function() {
  jQuery(".item__link").click(function () {
  elementClick = jQuery(this).attr("href")
  destination = jQuery(elementClick).offset().top - 77;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 700);
  return false;
  });
});

const burgerSlide = () => {
  const burger = document.querySelector('.nav__container__burger');
  let nav = document.querySelector ('.header__container');
  let navLinks = document.querySelectorAll ('.nav__menu__list-item li');
  const lock = document.querySelector ('body');
  let border = document.querySelector ('.header__border');

  burger.addEventListener('click',()=> {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    lock.classList.toggle('lock');
    border.classList.toggle('active');


      navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
   });
};

burgerSlide();


$(".nav__menu__list-item li a").click(function(){
$(".header__container").removeClass('active')
$("body").removeClass('lock')
$(".header__border").removeClass('active')
$(".nav__container__burger").removeClass('active')
$('.nav__menu__list-item li').removeAttr( 'style' );

})

// Etherscan Calculation.js

//	        <!--auth.ID=1TsNiXCQkPKaB6zfDQQXAwMBfe12ySoKa-->
FNTes01 = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdc5864ede28bd4405aa04d93e05a0531797d9d59&address=0xbca64241b4c7d3d2ca36c91facc69663b4517f54&tag=latest&apikey=DIQNA28DRMHXN51CBTN2KCUTWIP2S4DFSQ";
falcones01=new XMLHttpRequest();
falcones01.open("GET", FNTes01, true);
falcones01.onload = function(){FALCONes01=JSON.parse(this.response);
	FNTes02 = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdc5864ede28bd4405aa04d93e05a0531797d9d59&address=0xf56b07ab0e46afef054ae0a58d4195ee944bea93&tag=latest&apikey=DIQNA28DRMHXN51CBTN2KCUTWIP2S4DFSQ";
	falcones02=new XMLHttpRequest();
	falcones02.open("GET", FNTes02, true);
	falcones02.onload = function(){FALCONes02=JSON.parse(this.response);
		FNTes03 = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdc5864ede28bd4405aa04d93e05a0531797d9d59&address=0x3deffdb7004b1b4c5388f5a0ee7c2031c0ad375d&tag=latest&apikey=DIQNA28DRMHXN51CBTN2KCUTWIP2S4DFSQ";
		falcones03=new XMLHttpRequest();
		falcones03.open("GET", FNTes03, true);
		falcones03.onload = function(){FALCONes03=JSON.parse(this.response);
			FNTes04 = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdc5864ede28bd4405aa04d93e05a0531797d9d59&address=0xa32043305cab58eca36badc26e62b7af83dc825b&tag=latest&apikey=DIQNA28DRMHXN51CBTN2KCUTWIP2S4DFSQ";
			falcones04=new XMLHttpRequest();
			falcones04.open("GET", FNTes04, true);
			falcones04.onload = function(){FALCONes04=JSON.parse(this.response);
				FNTes05 = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdc5864ede28bd4405aa04d93e05a0531797d9d59&address=0x8c54085ad729fde488338fc50cfc8dfd5e2b5b89&tag=latest&apikey=DIQNA28DRMHXN51CBTN2KCUTWIP2S4DFSQ";
				falcones05=new XMLHttpRequest();
				falcones05.open("GET", FNTes05, true);
				falcones05.onload = function(){
					FALCONes05=JSON.parse(this.response);
					const Falcones=document.getElementById('falcon-live');
          const Falcon2es=document.getElementById('falcon-live-v');
          const Falcones2=document.getElementById('falcon-live-2');
					const Falcon2es2=document.getElementById('falcon-live-v2');
					FNTCS = (1e11
						- FALCONes01.result/1e6
						- FALCONes02.result/1e6
						- FALCONes03.result/1e6
						- FALCONes04.result/1e6
					);
          Falcon2es.textContent = (FALCONes05.result/1e6).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
          Falcon2es2.textContent = (FALCONes05.result/1e6).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          Falcones.textContent = FNTCS.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
          Falcones2.textContent = FNTCS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          
          


					falconcg=new XMLHttpRequest();
					falconcg.open("GET","https://api.coingecko.com/api/v3/coins/falcon-token?localization=false&tickers=true&market_data=false&community_data=false&developer_data=false&sparkline=false",true);
					falconcg.onload = function()
					{
						var pb =0;
						var vb =0;
						Falcont = document.getElementById("footer__gecko_table_tt");
						FALCONCG=JSON.parse(this.response);
						for(i=0;i<FALCONCG.tickers.length;i++)
						{
							const FalconCGROW = document.createElement("tr");
							const FalconCGPR = document.createElement("td");
							FalconCGPR.textContent= FALCONCG.tickers[i].target+ " " + FALCONCG.tickers[i].last.toFixed(8) ;
							const FalconCGEX = document.createElement("td");
							FalconCGEX.textContent=FALCONCG.tickers[i].market.name;
							const FalconCGVO = document.createElement("td");
							FalconCGVO.textContent=FALCONCG.tickers[i].volume.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
							FalconCGROW.appendChild(FalconCGPR);
							FalconCGROW.appendChild(FalconCGEX);
							FalconCGROW.appendChild(FalconCGVO);
							Falcont.appendChild(FalconCGROW);
							pb+=FALCONCG.tickers[i].converted_last.usd*FALCONCG.tickers[i].converted_volume.usd;
							vb+=FALCONCG.tickers[i].converted_volume.usd;
						}
						const FalconCGMS=document.getElementById("footer__gecko_ms");
						FalconCGMS.innerText = "market capitalization of $" + (FNTCS*pb/vb).toFixed(0) + " at median price of " + (pb/vb).toFixed(6) + "$/FNT";
					}
					falconcg.send();
				;}
				falcones05.send();
			;}
			falcones04.send();
		;}
		falcones03.send();
	;}
	falcones02.send();
;}
falcones01.send();

//===============================POPUP__WINDOW==================================

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 300;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen (currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
        bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});


(function () {
  if (!Element.prototype.closest) {

    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();

(function (){
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();


window.onload = function() {

	document.querySelectorAll('.swape-block').forEach((item) => {
		let step = parseInt(item.getAttribute('id').replace('step-', ''));
		if(step == 3)
			item.querySelector('.swape-block__bottom-button.ACCEPT').onclick = sendResult;
		else
			item.querySelector('.swape-block__bottom-button.ACCEPT').onclick = () => {goStep(step + 1)};
		if(step == 1) {
			if(item.querySelector('.swape-block__bottom-button.back'))
				item.querySelector('.swape-block__bottom-button.back').onclick = () => {goStep(1)};
		}
		else {
			if(item.querySelector('.swape-block__bottom-button.back'))
				item.querySelector('.swape-block__bottom-button.back').onclick = () => {goStep(step - 1)};
		}
	});


	document.querySelector('input[name="quantity_from"]').onchange = () => {
		
		document.querySelector('input[name="quantity_to"]').value = document.querySelector('input[name="quantity_from"]').value;
	};

	
	document.querySelectorAll('.swape-block__bottom-button.close').forEach((item) => {
		item.onclick = () => {window.location.href = 'index.html';}
	});
	document.querySelectorAll('.swape-block__bottom-button.close_block').forEach((item) => {
		item.onclick = () => { 
			let parent = item.parentNode;
			while(parent.tagName != 'BODY' && !parent.classList.contains('swape-voucher')) {
				parent = parent.parentNode;
			}
			if(parent.classList.contains('swape-voucher'))
				parent.style.display = 'none';
			document.getElementById('shadow').style.display = 'none';
		}
	});

	document.querySelectorAll('.swape-block__item').forEach((item) => {
		item.onclick = (e) => {
			if(e.target.tagName != 'IMG') {
				e.preventDefault();
				return false;
			}
				
			let result = activateCurrentcy(item);
//console.log('click ', !result);
			if(!result)
				e.preventDefault();
			return result;
		}
	});

	document.getElementById('quantity_static').onchange = () => {
		document.querySelector('input[name="quantity_from"]').value = document.getElementById('quantity_static').value;
		document.querySelector('input[name="quantity_to"]').value = document.getElementById('quantity_static').value;
	};
window.step = 0;
}

function goStep(nextStep) {
	if(nextStep == 3 && !validateCurrency()) {
		document.getElementById('step-error').style.display = 'block';
		return false;
	}

	if(nextStep == 3 && !validate()) {
		document.querySelectorAll('.error').forEach(item => {
			item.classList.remove('error');
		});
		document.querySelectorAll('#step-2 input').forEach(item => {
			if(!item.value)
				item.classList.add('error');
		});
		return false;
	}

	document.querySelectorAll('.swape-block').forEach((item) => {
		item.style.display = 'none';
	});
	document.getElementById('step-' + nextStep).style.display = 'block';
	if(nextStep == 3)
		drawSummary();
}

function drawSummary() {
	
	let summaryNode = document.getElementById('summary_from');
	summaryNode.querySelector('.swape-block__link').innerHTML = document.querySelector('input[name="currency_from"]:checked').nextSibling.nextSibling.innerHTML;
	summaryNode.querySelector('.amount').innerHTML = document.querySelector('input[name="quantity_from"]').value;
	summaryNode.querySelector('.address').innerHTML = document.querySelector('input[name="address_from"]').value;

	summaryNode = document.getElementById('summary_to');
	summaryNode.querySelector('.swape-block__link').innerHTML = document.querySelector('input[name="currency_to"]:checked').nextSibling.nextSibling.innerHTML;
	summaryNode.querySelector('.amount').innerHTML = document.querySelector('input[name="quantity_to"]').value;
	summaryNode.querySelector('.address').innerHTML = document.querySelector('input[name="address_to"]').value;	
}

function activateCurrentcy(node) {

	clearInput();
	
	let isValidCurrency = false;

	if(node.parentNode.parentNode.classList.contains('left')) {
		let fromBlock = document.querySelector('.swape-block__column.right');
		let selectedFromValue = (node.querySelector('input')) ? node.querySelector('input').getAttribute('data-id') : 0;			
		let selectedToValue = 0;//(document.querySelector('input[name="currency_to"]:checked')) ? document.querySelector('input[name="currency_to"]:checked').getAttribute('data-id') : 0;		

/*	
		if(selectedFromValue == 1 && selectedToValue != 2)
			fromBlock.querySelector('input[data-id="2"]').parentNode.click();
		if(selectedFromValue == 3 && selectedToValue != 2)
			fromBlock.querySelector('input[data-id="2"]').parentNode.click();
		if(selectedFromValue == 2 && selectedToValue == 2)
			fromBlock.querySelector('input[data-id="1"]').parentNode.click();
*/


		if(selectedFromValue == 1 || selectedFromValue == 2)
			document.querySelector('input[name="address_to"]').value = '0x8C54085Ad729FDE488338FC50CfC8dFD5e2b5B89';

		if(selectedFromValue == 1 /*|| selectedFromValue == 2*/ || selectedToValue == 1 /*|| selectedToValue == 2*/)
			switchInputSelect();
		else
			switchInputSelect(true);

		isValidCurrency = validateCurrency(0, selectedFromValue);		
	}
	if(node.parentNode.parentNode.classList.contains('right')) {
		let fromBlock = document.querySelector('.swape-block__column.left');
		let selectedFromValue = (node.querySelector('input')) ? node.querySelector('input').getAttribute('data-id') : 0;				
		let selectedToValue = 0;//(document.querySelector('input[name="currency_from"]:checked')) ? document.querySelector('input[name="currency_from"]:checked').getAttribute('data-id') : 0;		

/*	
		if(selectedFromValue == 1 && selectedToValue != 2)
			fromBlock.querySelector('input[data-id="2"]').parentNode.click();
		if(selectedFromValue == 3 && selectedToValue != 2)
			fromBlock.querySelector('input[data-id="2"]').parentNode.click();
		if(selectedFromValue == 2 && selectedToValue == 2)
			fromBlock.querySelector('input[data-id="1"]').parentNode.click();

*/
		if(selectedToValue == 1 || selectedToValue == 2)
			document.querySelector('input[name="address_to"]').value = '0x8C54085Ad729FDE488338FC50CfC8dFD5e2b5B89';

		if(selectedFromValue == 1 || selectedToValue == 1 /*|| selectedToValue == 2 || selectedFromValue == 2*/)
			switchInputSelect();
		else
			switchInputSelect(true);

		isValidCurrency = validateCurrency(selectedFromValue, 0);
	}

console.log('validateCurrency ', !isValidCurrency, node);

	if(!isValidCurrency) {
		
		console.log('validateCurrency not passed');
		return false;
	}

	node.querySelector('input').checked = true;

	//node.parentNode.querySelectorAll('img').forEach((item) => { item.classList.remove('active'); });
	node.parentNode.querySelectorAll('img').forEach((item) => { 
		if(item.classList.contains('active'))
			item.style.display = 'block';
		else
			item.style.display = 'none';
	});
	
	node.querySelector('img.active').style.display = 'none';
	node.querySelector('img:not(.active)').style.display = 'block';

	return true;
}


function validate() {
	if(!document.querySelector('input[name="quantity_from"]').value)
		return false;
	if(!document.querySelector('input[name="address_from"]').value)
		return false;
	if(!document.querySelector('input[name="quantity_to"]').value)
		return false;
	//if(!document.querySelector('input[name="address_to"]').value)
	//	return false;
	if(!document.querySelector('input[name="currency_from"]:checked').value)
		return false;
	if(!document.querySelector('input[name="currency_to"]:checked').value)
		return false;

	return true;
} 

function validateCurrency(newSelectedFromValue, newSelectedToValue) {
	let selectedFromValue = document.querySelector('input[name="currency_to"]:checked') ? document.querySelector('input[name="currency_to"]:checked').getAttribute('data-id') : 0;				
	let selectedToValue = document.querySelector('input[name="currency_from"]:checked') ? document.querySelector('input[name="currency_from"]:checked').getAttribute('data-id') : 0;

console.log('func validateCurrency ', selectedFromValue , '/', selectedToValue );

	if(newSelectedFromValue)
		selectedFromValue = newSelectedFromValue;
	if(newSelectedToValue)
		selectedToValue = newSelectedToValue;
		
console.log('func validateCurrency ', selectedFromValue , '/', selectedToValue );
console.log('func validateCurrency ', newSelectedFromValue , '/', newSelectedToValue );
console.log('func validateCurrency ', selectedToValue != 0 );
console.log('func validateCurrency ', selectedFromValue == selectedToValue );

	if(selectedFromValue < 1 || selectedToValue < 1)
		return true;

	if(selectedFromValue == selectedToValue)
		return false;

	if(selectedFromValue == 1 && selectedToValue == 3)
		return false;
	if(selectedFromValue == 3 && selectedToValue == 1)
		return false;

	return true;
} 


function sendResult() {

	let formData = new FormData();
	formData.append('quantity_from', document.querySelector('input[name="quantity_from"]').value);
	formData.append('address_from', document.querySelector('input[name="address_from"]').value);
	formData.append('quantity_to', document.querySelector('input[name="quantity_to"]').value);
	formData.append('address_to', document.querySelector('input[name="address_to"]').value);
	formData.append('currency_from', document.querySelector('input[name="currency_from"]:checked').value);
	formData.append('currency_to', document.querySelector('input[name="currency_to"]:checked').value);

	let oReq = new XMLHttpRequest();
	oReq.addEventListener("load", (response) => {
		document.getElementById('step-result-graph').style.display = 'block';
		document.getElementById('shadow').style.display = 'block';
		document.getElementById('step-result-graph').querySelector('.address_result').innerHTML = document.querySelector('input[name="address_to"]').value;
		document.querySelectorAll('.swape-block').forEach((item) => {
			item.style.display = 'none';
		});
		console.log(response);
	});
	oReq.open("POST", "send.php");
	oReq.send(formData);
}


function clearInput() {
	document.querySelectorAll('.form__input').forEach(item => {
		item.value = '';
	});
}


/*
 * direct == true is input to select
 * direct == false is select to input
*/
function switchInputSelect(direct) {
	if(direct) {	
		document.getElementById('step-warning').style.display = 'none';
		//document.getElementById('step-warning').style.display = 'block';
		document.getElementById('shadow').style.display = 'none';
		document.getElementById('quantity_static').style.display = 'none';
		document.querySelector('input[name="quantity_from"]').style.display = 'block';
	} else {	
		document.getElementById('step-warning').style.display = 'block';
		document.getElementById('shadow').style.display = 'block';
		document.getElementById('quantity_static').style.display = 'block';
		document.querySelector('input[name="quantity_from"]').style.display = 'none';
	}
}






;