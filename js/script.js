'use strict';
const buttonsParent = document.getElementById("buttons_parent")
let leftButtonTexts = ['КОНСАЛТИНГ', 'Медицина']
let centerButtonTexts = ['ВАЛИДАЦИЯ', 'фармацевтика']
let rightButtonTexts = ['AQ-SHARING', 'косметология']
const buttons = [
  document.getElementById("button_1"),
  document.getElementById("button_2"),
  document.getElementById("button_3")
]
const contactForm = document.getElementById("contact_form")
const resultHeader = document.getElementById("result")
const buttonTexts = [leftButtonTexts, centerButtonTexts, rightButtonTexts]
let choices = []
let steps = 0
let variations = 0

buttonsParent.addEventListener('click', event => {
  choices.push(event.target.innerText.toUpperCase()); ++steps
  if (steps === 1) {
    $('.header_inner_text').text('Выберете Ваше направление');
  }
  if (steps === 2){
    if(variations === 1) {
      $('.header_inner_text').text('Выберете подходящий вариант направления сертификации');
    }
    else if (variations === 2) {
      $('.header_inner_text').text('Выберете подходящий вариант направления валидации');
    }
    else if (variations === 3) {
      $('.header_inner_text').text('Выберете подходящий для Вас вариант сотрудничества');
    }
  }
  if (steps === 3) {
    $('.header_inner_text').text('Оставьте ваши контактные данные и мы свяжемся с вами для уточнения деталей.');
  }
  if (steps < 3) {
    buttons.forEach((button,index) => {
      if (steps === 1 && choices == "КОНСАЛТИНГ") {
        variations = 1
        leftButtonTexts.push("ПРОИЗВОДСТВО");
        centerButtonTexts.push("ПРОДУКТ");
        rightButtonTexts.push("ПРОЦЕСС");
        button.innerText = buttonTexts[index][steps]
      }
      else if (steps === 1 && choices == "ВАЛИДАЦИЯ"){
        variations = 2
        leftButtonTexts.push("ОБОРУДОВАНИЕ");
        centerButtonTexts.push("ПОМЕЩЕНИЕ ");
        rightButtonTexts.push("ПРОЦЕСС");
        button.innerText = buttonTexts[index][steps]
    } else if (steps === 1 && choices == "AQ-SHARING"){
        variations = 3
        leftButtonTexts.push("ЛАЙТ");
        centerButtonTexts.push("СТАНДАРТ");
        rightButtonTexts.push("VIP");
        button.innerText = buttonTexts[index][steps]
    } else {
      button.innerText = buttonTexts[index][steps]
    }
    })
  } else {
    resultHeader.innerHTML = calculatePrice(choices)
    resultHeader.style.display = 'block'
    contactForm.style.setProperty("display", "flex")
    steps = 0
    choices = []
    buttons.forEach((button,index) => button.style.setProperty("display", "none"))
    $('.header_hide_last-stage').hide();
    $('.header_inner_text').attr('style','margin-top:-50px!important');
    $('#buttons_parent').hide();
  }
  // console.log(choices)
});

const calculatePrice = (choices) => {
  const lbt = leftButtonTexts.map(text => text.toUpperCase())
  const cbt = centerButtonTexts.map(text => text.toUpperCase())
  const rbt = rightButtonTexts.map(text => text.toUpperCase())
  let result = ''
  switch (choices[0]) {
    case lbt[0]:
      result = "Мы уже приступили к расчету стоимости <br>и сроков решения вашей задачи."; break
    case cbt[0]:
      result = "Мы уже приступили к расчету стоимости <br>и сроков решения вашей задачи."; break
    case rbt[0]:
      if (choices[1] === lbt[1]) {
        if (choices[2] === lbt[2]) {
          result = 'Мы уже приступили к расчету стоимости <br>и сроков решения вашей задачи.'
        } else if (choices[2] === cbt[2]) {
          result = 'Мы уже приступили к расчету стоимости <br>и сроков решения вашей задачи.'
        } else if (choices[2] === rbt[2]) {
          result = 'Мы уже приступили к расчету стоимости <br>и сроков решения вашей задачи.'
        }
      } else if (choices[1] === cbt[1]) {
        if (choices[2] === lbt[2]) {
          result = 'Мы уже приступили к расчету стоимости <br>и сроков решения вашей задачи.'
        } else if (choices[2] === cbt[2]) {
          result = 'Мы уже приступили к расчету стоимости <br>и сроков решения вашей задачи.'
        } else if (choices[2] === rbt[2]) {
          result = 'Мы уже приступили к расчету стоимости <br>и сроков решения вашей задачи.'
        }
      } else if (choices[1] === rbt[1]) {
        if (choices[2] === lbt[2]) {
          result = 'Мы уже приступили к расчету стоимости <br>и сроков решения вашей задачи.'
        } else if (choices[2] === cbt[2]) {
          result = 'Мы уже приступили к расчету стоимости <br>и сроков решения вашей задачи.'
        } else if (choices[2] === rbt[2]) {
          result = 'Мы уже приступили к расчету стоимости <br>и сроков решения вашей задачи.'
        }
      }
  }
  return result
}




$(document).ready(function () {
  ScrollReveal({
    mobile: true
  });

  ScrollReveal().reveal('.wow-right', {
    origin: 'right',
    distance: '10rem',
    duration: 1500
  });

  ScrollReveal().reveal('.wow-right-2', {
    delay: 100
  })
  ScrollReveal().reveal('.wow-right-3', {
    delay: 200
  })
  ScrollReveal().reveal('.wow-right-4', {
    delay: 300
  })
  ScrollReveal().reveal('.wow-right-5', {
    delay: 400
  })
  ScrollReveal().reveal('.wow-right-6', {
    delay: 500
  })
  ScrollReveal().reveal('.wow-right-7', {
    delay: 600
  })
  ScrollReveal().reveal('.wow-right-8', {
    delay: 700
  })
  ScrollReveal().reveal('.wow-top', {
    origin: 'top',
    distance: '10rem',
    delay: 250
  })

  $('.pop-up-footer-sec-1-block').click(function() {
    var input = $(this).closest('.pop-up-footer-sec-1').siblings('.pop-up-footer-sec-2').find('input[name="choosen-questions"]');

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }

    var valueToSet = '';

    $(this).closest('.pop-up-footer-sec-1').find('.pop-up-footer-sec-1-block.active').each(function(index, elem) {
      valueToSet = valueToSet + (index + 1).toString() + '. ' + $(elem).find('p').text().trim() + '\n';
    });

    input.val(valueToSet);
  });


  $('.popup-btn').click(function() {
    $('.' + $(this).attr('for')).addClass('active');
    initPopupReveal();
  })

  $('.pop-up').click(function(e) {
    if (e.target == this) {
      $(this).removeClass('active');
    }    
  })



  $('form').find('.checkbox').change(function() {
    if ($(this).find('input').is(":checked")) {
      $(this).closest('form').find('button').removeAttr('disabled');
    } else {
      $(this).closest('form').find('button').attr('disabled', 'disabled');
    }
  });

  $('form')


  $('form').each(function() {
    var $form = $(this);
    
    $form.validate({
      messages: {
        name: {
          required: "Это обязательное поле"
        }, 
        phone: {
          required: "Это обязательное поле"
        },  
        email: {
          email: "Введите корректный email",
          required: "Это обязательное поле"
        },
        question: {
          required: "Это обязательное поле"
        }
      },
      submitHandler: function() {
        var formData = new FormData($form.get(0));
        var ymFormId = $form.find('input[name="ym_form_id"]').val();
        console.log(ymFormId);

        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: formData,
          processData: false,
          contentType: false
        }).done(function() {

          ym(64736089,'reachGoal', ymFormId);
		  gtag('event', 'Форма '+ymFormId, {'event_category': 'click', 'event_action': ymFormId});
		  
          $('.pop-up').removeClass('active');
          $('.thanks-popup').addClass('active');
        }).fail(function() {
          $('.pop-up').removeClass('active');
          $('.error-popup').addClass('active');
        });
        $form.trigger("reset");
        return false;
      }
    });
  });

  function objectifyForm(formArray) {//serialize data function

    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
      returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
  }

  $('.sec-4-bottom .hr').css('width', $(window).width());
  var hrWidth = $('.sec-4-bottom .hr').width();
  
  animateHrOnScroll();

  function animateHrOnScroll() {
    if ($('.sec-4-bottom .hr').offset().top - $(window).height() < $(window).scrollTop()) {
      var diff = $('.sec-4-bottom .hr').offset().top - $(window).scrollTop();
      var percent = diff / $(window).height() * 100;
      $('.sec-4-bottom .hr').css('width', (hrWidth / 100) * percent);
    }
  }

  $(window).scroll(function() {
    animateHrOnScroll();
    //isInViewport($('.sec-3-slider-img'));
  });
  
  $( 'input[type="file"]' ).each( function()  {
    var $input   = $( this ),
      $label   = $input.next( 'label' ),
      labelVal = $label.html();

    $input.on( 'change', function( e )
    {
      var fileName = '';

      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else if( e.target.value )
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        $label.find( 'span' ).html( fileName );
      else
        $label.html( labelVal );
    });

    // Firefox bug fix
    $input
    .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
    .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
  });

  // function isInViewport($element) {
  //   var top_of_element = $element.offset().top;
  //   var bottom_of_element = $element.offset().top + $element.outerHeight();
  //   var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  //   var top_of_screen = $(window).scrollTop();

  //   console.log(top_of_element, bottom_of_element);

  //   if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
  //       console.log('true');
  //   } else {
  //     console.log('false');
  //   }
  // }


  var calc = {
    consulting: {
      med: {
        production: 19,
        product: 19,
        process: 19
      },
      farma: {
        production: 19,
        product: 19,
        process: 19
      },
      cosmetology: {
        production: 19,
        product: 19,
        process: 19
      },
    },
    validation: {
      med: {
        equipment: 98,
        room: 98,
        process: 98
      },
      farma: {
        equipment: 98,
        room: 98,
        process: 98
      },
      cosmetology: {
        equipment: 98,
        room: 98,
        process: 98
      },
    },
    aqSharing: {
      med: {
        lite: 600,
        standart: 825,
        vip: 1050
      },
      farma: {
        lite: 800,
        standart: 1100,
        vip: 1400
      },
      cosmetology: {
        lite: 400,
        standart: 550,
        vip: 700
      },
    }
  } 

  var valueStep1;
  var valueStep2;
  var valueStep3;
  var step1text;
  var step2text;
  var step3text;

  $('.sec-2-block').click(function() {
    if ($(this).hasClass('step1')) {
      valueStep1 = $(this).data('type')
      var text = $(this).find('p').text();
      step1text = text.substr(0,1).toUpperCase() + text.substr(1).toLowerCase();
    }

    if ($(this).hasClass('step2')) {
      valueStep2 = $(this).data('type')
      var text = $(this).find('p').text();
      step2text = text.substr(0,1).toUpperCase() + text.substr(1).toLowerCase();
    }

    if ($(this).hasClass('step3')) {
      valueStep3 = $(this).data('type')
      var text = $(this).find('p').text();
      step3text = text.substr(0,1).toUpperCase() + text.substr(1).toLowerCase();

      $('.calc-cost').text(calc[valueStep1][valueStep2][valueStep3]);

      $('input[name="services"]').each(function(index, elem) {
        $(elem).val(step1text + ', ' + step2text + ', ' + step3text);
      });

      $([document.documentElement, document.body]).animate({
        scrollTop: $(".sec-2").offset().top - 25
      }, 100);
    }

    
    console.log(valueStep1, valueStep2, valueStep3, calc[valueStep1], calc[valueStep1][valueStep2])
  })
  
});

function initRevealFadeRight(id, container, delay) {
  return ScrollReveal().reveal(
    '.popup-wow-right-' + id,
    {
      container: container,
      delay: delay,
      origin: 'right',
      distance: '10rem',
      viewFactor: 0.2
    }
  );
}

function initPopupReveal() {
  ScrollReveal().reveal(
    '.pop-up-sec-1-block', 
    {
      container: '.pop-up-1 .wrapper',
      origin: 'right',
      distance: '10rem',
      viewFactor: 0.2
    }
  );

  ScrollReveal().reveal(
    '.pop-up-sec-1-block', 
    {
      container: '.pop-up-2 .wrapper',
      origin: 'right',
      distance: '10rem',
      viewFactor: 0.2
    }
  );

  ScrollReveal().reveal(
    '.pop-up-sec-1-block', 
    {
      container: '.pop-up-3 .wrapper',
      origin: 'right',
      distance: '10rem',
      viewFactor: 0.2
    }
  );


  initRevealFadeRight(1, '.pop-up-1 .wrapper', 0);
  initRevealFadeRight(2, '.pop-up-1 .wrapper', 200);
  initRevealFadeRight(3, '.pop-up-1 .wrapper', 300);
  initRevealFadeRight(4, '.pop-up-1 .wrapper', 400);

  initRevealFadeRight(1, '.pop-up-2 .wrapper', 0);
  initRevealFadeRight(2, '.pop-up-2 .wrapper', 200);
  initRevealFadeRight(3, '.pop-up-2 .wrapper', 300);
  initRevealFadeRight(4, '.pop-up-2 .wrapper', 400);

  initRevealFadeRight(1, '.pop-up-3 .wrapper', 0);
  initRevealFadeRight(2, '.pop-up-3 .wrapper', 200);
  initRevealFadeRight(3, '.pop-up-3 .wrapper', 300);
  initRevealFadeRight(4, '.pop-up-3 .wrapper', 400);
}

// (() => {
//   const $$ = (e) => {
//     return document.querySelectorAll(e)
//   }, $ = (e) => {return document.querySelector(e)}
//   const img = $$('.sec-6-logo'),
//     text = $$('.sec-6-text'),
//     sec2 = $$('.sec-2-block'),
//     btn = $$('.pop-up-sec-5-button'),
//     uls = $$('.pop-up-sec-5-format'),
//     sec2blocks = $$('.sec-2-blocks'),
//     sec2blocksMain = $('#sec-2-blocks-main')

//   const lol = $('.sec-2'), sec22 = lol.querySelector('.wrapper')



  

//   //                      ------CALCULATOR--------
//   //sec-2-blocks-main





//   for (let i = 0; i < sec2blocksMain.children.length; i++) {
//     sec2blocksMain.children[i].addEventListener('click', () => {
//       sec2blocksMain.classList.add('selected-' + i)
//       sec2blocksMain.classList.remove('sec-2-blocks-active')
//       sec2blocks[1].classList.add('sec-2-blocks-active')
//     })

//     sec2blocks[1].children[i].addEventListener('click', () => {
//       if (sec2blocksMain.classList.contains('selected-0')) {
//         sec2blocksMain.classList.remove('selected-0')
//         sec2blocksMain.classList.add('selected-0-' + i)
//         sec2blocks[1].classList.remove('sec-2-blocks-active')
//         sec2blocks[2].classList.add('sec-2-blocks-active')
//       } else if (sec2blocksMain.classList.contains('selected-1')) {
//         sec2blocksMain.classList.remove('selected-1')
//         sec2blocksMain.classList.add('selected-1-' + i)
//         sec2blocks[1].classList.remove('sec-2-blocks-active')
//         sec2blocks[4].classList.add('sec-2-blocks-active')
//       } else {
//         sec2blocksMain.classList.remove('selected-2')
//         sec2blocksMain.classList.add('selected-2-' + i)
//         sec2blocks[1].classList.remove('sec-2-blocks-active')
//         sec2blocks[3].classList.add('sec-2-blocks-active')
//       }
//     })

//     sec2blocks[2].children[i].addEventListener('click', () => {
//       for (let ii = 0; ii < 3; ii++) {
//         if (sec2blocksMain.classList.contains('selected-0-' + ii)) {
//           sec2blocksMain.classList.remove('selected-0-' + ii)
//           //open pop-up class="pop-up-10"

//           sec22.style.display           = 'none'
//           $('.pop-up-10').style.display = 'block'
//           // sec2blocks[2].classList.remove('sec-2-blocks-active')
//           // sec2blocksMain.classList.add('sec-2-blocks-active')
//         }
//       }
//     })

//     sec2blocks[4].children[i].addEventListener('click', () => {
//       for (let ii = 0; ii < 3; ii++) {
//         if (sec2blocksMain.classList.contains('selected-1-' + ii)) {
//           sec2blocksMain.classList.remove('selected-1-' + ii)
//           //open pop-up class="pop-up-11"

//           sec22.style.display           = 'none'
//           $('.pop-up-11').style.display = 'block'
//           // sec2blocks[4].classList.remove('sec-2-blocks-active')
//           // sec2blocksMain.classList.add('sec-2-blocks-active')
//         }
//       }
//     })

//     sec2blocks[3].children[i].addEventListener('click', () => {
//       if (sec2blocksMain.classList.contains('selected-2-0')) {
//         sec2blocksMain.classList.remove('selected-2-0')
//         sec2blocksMain.classList.add('selected-2-0-' + i)
//         const pop13 = document.querySelector('.pop-up-13'),
//               h2 = pop13.querySelector('h2')
//         if (sec2blocksMain.classList.contains('selected-2-0-0')) {
//           h2.innerText = 'Стоимость решения — от 600 €/месяц'
//         } else if (sec2blocksMain.classList.contains('selected-2-0-1')) {
//           h2.innerText = 'Стоимость решения — от 825 €/месяц'
//         } else {
//           h2.innerText = 'Стоимость решения — от 1050 €/месяц'
//         }
//         //open pop-up class="pop-up-13"

//         sec22.style.display           = 'none'
//         $('.pop-up-13').style.display = 'block'
//         // sec2blocks[3].classList.remove('sec-2-blocks-active')
//         // sec2blocksMain.classList.add('sec-2-blocks-active')
//       } else if (sec2blocksMain.classList.contains('selected-2-1')) {
//         sec2blocksMain.classList.remove('selected-2-1')
//         sec2blocksMain.classList.add('selected-2-1-' + i)
//         const pop14 = document.querySelector('.pop-up-14'),
//               h2 = pop14.querySelector('h2')
//         if (sec2blocksMain.classList.contains('selected-2-1-0')) {
//           h2.innerText = 'Стоимость решения — от 800 €/месяц'
//         } else if (sec2blocksMain.classList.contains('selected-2-1-1')) {
//           h2.innerText = 'Стоимость решения — от 1100 €/месяц'
//         } else {
//           h2.innerText = 'Стоимость решения — от 1400 €/месяц'
//         }
//         //open pop-up class="pop-up-14"

//         sec22.style.display           = 'none'
//         $('.pop-up-14').style.display = 'block'
//         // sec2blocks[3].classList.remove('sec-2-blocks-active')
//         // sec2blocksMain.classList.add('sec-2-blocks-active')
//       } else if (sec2blocksMain.classList.contains('selected-2-2')) {
//         sec2blocksMain.classList.remove('selected-2-2')
//         sec2blocksMain.classList.add('selected-2-2-' + i)
//         const pop12 = document.querySelector('.pop-up-12'),
//               h2 = pop12.querySelector('h2')
//         if (sec2blocksMain.classList.contains('selected-2-2-0')) {
//           h2.innerText = 'Стоимость решения — от 400 €/месяц'
//         } else if (sec2blocksMain.classList.contains('selected-2-2-1')) {
//           h2.innerText = 'Стоимость решения — от 550 €/месяц'
//         } else {
//           h2.innerText = 'Стоимость решения — от 700 €/месяц'
//         }
//         //open pop-up class="pop-up-12"

//         sec22.style.display           = 'none'
//         $('.pop-up-12').style.display = 'block'
//         // sec2blocks[3].classList.remove('sec-2-blocks-active')
//         // sec2blocksMain.classList.add('sec-2-blocks-active')
//       }
//     })

//   }
// //                      ------CALCULATOR END--------






//   for (let i = 0; i < img.length; i++) {
//     text[i].addEventListener('mouseover', () => {
//       img[i].children[0].style.transform = 'scale(1.2)'
//     })
//     text[i].addEventListener('mouseout', () => {
//       img[i].children[0].style.transform = 'scale(1)'
//     })
//   }

//   for (let i = 0; i < sec2.length; i++) {
//     sec2[i].addEventListener('mouseover', () => {
//       sec2[i].classList.add('sec-2-block-border')
//     })
//     sec2[i].addEventListener('mouseout', () => {
//       sec2[i].classList.remove('sec-2-block-border')
//     })
//   }

//   for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener('click', () => {
//       for (let i = 0; i < btn.length; i++) {
//         if (btn[i].classList.contains('pop-up-sec-5-button-active')) {
//           btn[i].classList.remove('pop-up-sec-5-button-active')
//         }
//         if (uls[i].classList.contains('pop-up-sec-5-format-active')) {
//           uls[i].classList.remove('pop-up-sec-5-format-active')
//         }
//       }
//       btn[i].classList.add('pop-up-sec-5-button-active')
//       uls[i].classList.add('pop-up-sec-5-format-active')
//     })
//   }

// })()

$(document).ready(function(){
	
	$('.pop-up-sec-5-button').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.pop-up-sec-5-button').removeClass('current');
		$('.pop-up-sec-5-format').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})