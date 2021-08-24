
	
$(function(){
	
	let questionSum = document.querySelectorAll('.question-btn');
	
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

	// показ подсказки при неправильном выборе

	$('.custom-radio').click(function(){
		let value = $('input[type=radio]:checked').val();
		// let tests = $('input[name=qblock' + questionNum  +']');
		console.log(value);
		if (value === 'false') {
			$('#help'+ questionNum).removeClass('hidden');
			
		}

		
		
		// for (var i = tests.length - 1; i >= 0; i--) {
		// 	tests[i].disabled = true;
		// }


  		
  		
	});




	$('.all-question').replaceWith('<span class="all-question">'+ questionSum.length + '</span>');

	// функционал кнопки далее

	


	$('.next-btn').click(function(){
		let value = $('input[type=radio]:checked').val();
		let countRotate = $('.game-arrow').css('transform');
		let curentRotate;
		
		if (value === 'true') {
			++ansverScore;
			console.log(ansverScore);
		}
		
		if (questionNum === questionSum.length ) {
			
					setTimeout(function(){
						$('.fo-screen').addClass('hidden');
						
						$('.first-screen').removeClass('hidden');
						$('.first-screen').removeClass('opacity');
						
					}, 1000);
					$('#fin-result').replaceWith('<span id="fin-result">'+ ansverScore + '</span>');
					$('#fin-result__all').replaceWith('<span id="fin-result__all">'+ questionSum.length + '</span>');
		}
		
		event.preventDefault();
		
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

			// замена картинки при низком показателе счётчика

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
						$('.qnumberCount').replaceWith('<span class="qnumberCount">'+ questionNum + '</span>');
					}, 1000);
			
		}

		


	
	});

	// Викторина

	

	$('.quiz-answer').click(function(){
		let value = $('input[type=radio]:checked').val();
		
		if (value === 'false') {
			$('#help'+ questionNum).removeClass('hidden');
			
		}
		
	});

	$('.quiz-next__btn').click(function(){
			let value = $('input[type=radio]:checked').val();
			delete value
			if (value === 'true') {
				++ansverScore;
				console.log(ansverScore);
			}
			// загрузка финального экрана после вопросов
			if (questionNum === questionSum.length ) {
				
						setTimeout(function(){
							$('.fo-screen').addClass('hidden');
							
							$('.first-screen').removeClass('hidden');
							$('.first-screen').removeClass('opacity');
							
						}, 1000);
						$('#fin-result').replaceWith('<span id="fin-result">'+ ansverScore + '</span>');
						$('#fin-result__all').replaceWith('<span id="fin-result__all">'+ questionSum.length + '</span>');
			}

			// появление нового блока вопросов
			$('#' + questionNum).addClass('opacity');
					setTimeout(function(){
						$('#' + questionNum).addClass('hidden');
						questionNum++
						$('#' + questionNum).removeClass('hidden');
						$('#' + questionNum).removeClass('opacity');
						$('.qnumberCount').replaceWith('<span class="qnumberCount">'+ questionNum + '</span>');
					}, 1000);

			// добавление балла

			
	});



});








