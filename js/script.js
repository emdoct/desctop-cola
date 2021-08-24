
	
$(function(){
	
	let questionSum = document.querySelectorAll('.question-btn');
	let pageNum = 1;
	let questionNum = 1;
	let ansverScore = 0;
	$('input[type=radio]').prop('checked', false);

	
	// анимация попап


	$('.menu-btn').click(function(){
		
		let pop = document.querySelector('.pop-up');

		setTimeout(remove, 100);
		pop.classList.remove('hidden');
		function remove() {
			pop.classList.remove('opacity');
		}
	});

	// Закрытие попапа при нажатии на крестик

	// $('.pop-up__cross').click(function(){
	// 	let pop = document.querySelector('.pop-up');
	// 	setTimeout(add, 1000);
	// 	pop.classList.add('opacity');
		

	// 	function add() {
			
	// 		pop.classList.add('hidden');
	// 	}
	// });

	// Закрытие попапа при нажатии на нет

	$('#pop-up__no').click(function(){
		let pop = document.querySelector('.pop-up');
		setTimeout(add, 1000);
		pop.classList.add('opacity');
		

		function add() {
			
			pop.classList.add('hidden');
		}
	});

	

	// показываем подсказку при нажатии кнопки

	$('.custom-radio').click(function(){
		
		let block = $('input[name=qblock' + questionNum  +']');
		$('#help'+ questionNum).removeClass('hidden');
		

		

		// блокируем все кнопки
		
		for (var i = block.length - 1; i >= 0; i--) {
			block[i].disabled = true;
		}
	});
		

		$('.custom-radio.score').click(function(){
			let value = $('input[name=qblock' + questionNum  +']:checked').val();
			if (value === 'true') {
				$('#help-pos'+ questionNum).removeClass('hidden');
				$('#help'+ questionNum).addClass('hidden');
			}

			
		});

		$('.custom-radio.sec').click(function(){
			let value = $('input[name=qblock' + questionNum  +']:checked').val();
			if (value === 'false') {
				$('#help'+ questionNum).removeClass('hidden');
			}

			
		});




	$('.all-question').replaceWith('<span class="all-question">'+ questionSum.length + '</span>');

	// функционал кнопки далее

	


	$('.next-btn').click(function(){
		let value = $('input[name=qblock' + questionNum  +']:checked').val();
		let countRotate = $('.game-arrow').css('transform');
		let curentRotate;
		event.preventDefault();
		if (($('input[type=radio]').is(':checked'))) {

			
				if (value === 'true') {
			++ansverScore;
			
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
		}
	

		


	
	});

	// Викторина

	



	$('.quiz-next__btn').click(function(){
			let value = $('input[name=qblock' + questionNum  +']:checked').val();
			event.preventDefault();

			// проверка нажатой кнопки варианта ответа

			if (($('input[type=radio]').is(':checked'))) {

				if (value === 'true') {
					++ansverScore;
					console.log(value);
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
				}

			});

			
				
			

			
			
			

			
	


	// маркировка мусора

	if (pageNum === 1) {
				$('.prev').addClass('opacity');
	}

	

	

	

	// действие по нажатию кнопки назад

	$('.prev').click(function(){
		event.preventDefault();
		let page = $('.mark-page').attr('id');
		$('#' + pageNum).addClass('opacity');
						
			
			setTimeout(function(){
						$('#' + pageNum).addClass('hidden');
						--pageNum;

						$('#' + pageNum).removeClass('hidden');
						$('#' + pageNum).removeClass('opacity');
						if ( pageNum < 16 ) {
							$('.next').removeClass('opacity');
							$('.close').addClass('opacity');
						}
						if (pageNum === 1) {
							$('.prev').addClass('opacity');
							
						}
						
					}, 1000);


		
	});

	$('.next').click(function(){
		event.preventDefault();
		let page = $('.mark-page').attr('id');
		
		
			
			$('#' + pageNum).addClass('opacity');
						
	
			setTimeout(function(){
						$('#' + pageNum).addClass('hidden');
						++pageNum;

						$('#' + pageNum).removeClass('hidden');
						$('#' + pageNum).removeClass('opacity');
						if (pageNum > 1) {
							$('.prev').removeClass('opacity');
						}
						if (pageNum === 16) {
							$('.next').addClass('opacity');
							$('.next').attr('disabled');
							$('.close').removeClass('opacity');
						}
						
					}, 1000);

						

			

		
	});

});








