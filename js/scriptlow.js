
$(function(){
	let questionNum = 1;
	let ansverScore = 0;
	// анимация попап


	$('.menu-btn').click(function(){
		
		let pop = document.querySelector('.pop-up');

		setTimeout(remove, 100);
		pop.classList.remove('hidden');
		function remove() {
			pop.classList.remove('opacity');
		}
	});

	$('.pop-up__cross').click(function(){
		let pop = document.querySelector('.pop-up');
		setTimeout(add, 1000);
		pop.classList.add('opacity');
		

		function add() {
			
			pop.classList.add('hidden');
		}
	});

	$('.custom-radio').click(function(){
		let value = $('input[name=radio]:checked').val();
		console.log(value);
		if (value === 'false') {
			$('#help'+ questionNum).removeClass('hidden');
		}
		
	});

	// функционал кнопки далее

	


	$('.next-btn').click(function(){
		let value = $('input[name=radio]:checked').val();
		let countRotate = $('.game-arrow').css('transform');
		let curentRotate;
		
		event.preventDefault();
		$('#help'+ questionNum).addClass('hidden');


		// Получаем значение Rotate для стрелки в градусах
		
		if (countRotate !== 'none') {
			let values = countRotate.split('(')[1].split(')')[0].split(',');
			let a = values[0];
			let b = values[1];
			let angel = Math.round(Math.atan2(b, a) * (180/Math.PI));
			
		if (curentRotate === undefined ) {
				curentRotate = angel
			}
		}

		// действия при выборе правильного ответа

		if (value === 'true' && curentRotate < 60) {
				curentRotate = (curentRotate + 11);
			$('.game-arrow').css({
				'transform' : 'rotate('+curentRotate+'deg)'
			});



				if ( curentRotate >= -60 ) {
					$('.game-btn').css({'background-image' : 'url(../img/games-img/circle.png)'});
					$('.game-arrow').attr('src', '../img/games-img/gamecircl.png');
					$('.face-icon').attr('src', '../img/games-img/good-face.png');
				}

				
				ansverScore++;

		$('#' + questionNum).addClass('opacity');
					setTimeout(function(){
						$('#' + questionNum).addClass('hidden');
						questionNum++
						$('#' + questionNum).removeClass('hidden');
						$('#' + questionNum).removeClass('opacity');
						if (questionNum <= 10)  {
			
								$('.qnumberCount').replaceWith('<span class="qnumberCount">'+ questionNum + '</span>');
							}
					}, 1000);
		}

		// Действия при выборе неправильного ответа
		
		if (value === 'false' && curentRotate > -170) {
				curentRotate = (curentRotate - 11);
			$('.game-arrow').css({
				'transform' : 'rotate('+curentRotate+'deg)'
			});

				if ( curentRotate < -60 ) {
					$('.game-btn').css({'background-image' : 'url(../img/games-img/bacircl.png)'});
					$('.game-arrow').attr('src', '../img/games-img/gamecirclbad.png');
					$('.face-icon').attr('src', '../img/games-img/badface.png');
				}


				
				

				$('#' + questionNum).addClass('opacity');
					setTimeout(function(){
						$('#' + questionNum).addClass('hidden');
						questionNum++
						$('#' + questionNum).removeClass('hidden');
						$('#' + questionNum).removeClass('opacity');
						if (questionNum <= 10)  {
			
								$('.qnumberCount').replaceWith('<span class="qnumberCount">'+ questionNum + '</span>');
							}
					}, 1000);
			
		}

		else if (questionNum === 10 ) {
			alert('вы ответили на ' + ansverScore + 'вопросов');
		}
		




		
		
		
	});
});








