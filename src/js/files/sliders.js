/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Thumbs} from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	bildSliders()
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.grand__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.grand__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			loop: true,


		
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.arrow-left',
				nextEl: '.arrow-right',
			},

		});
	}

	const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
		let swiper;
  
		breakpoint = window.matchMedia(breakpoint);
  
		const enableSwiper = function(className, settings) {
		  swiper = new Swiper(className, settings);
  
		  if (callback) {
			 callback(swiper);
		  }
		}
  
		const checker = function() {
		  if (breakpoint.matches) {
			 return enableSwiper(swiperClass, swiperSettings);
		  } else {
			 if (swiper !== undefined) swiper.destroy(true, true);
			 return;
		  }
		};
  
		breakpoint.addEventListener('change', checker);
		checker();
	 }
  
	 resizableSwiper(
		'(max-width: 1280px)',
		'.galery__slider',
		{
			modules: [Navigation],
		  loop: true,
		  spaceBetween: 10,
		  slidesPerView: 2,
		  speed: 800,
		  loop:true,
		  	navigation: {
				prevEl: '.arrow-g-left',
				nextEl: '.arrow-g-right',
			},
		},
	 );

	 resizableSwiper(
		'(max-width: 1280px)',
		'.swiper-thumbs__slider',
		{
			modules: [Navigation, Thumbs],
		  loop: true,
		  spaceBetween: 10,
		  slidesPerView: 1,
		  speed: 800,
		  loop:true,
		  thumbs: {
			swiper: swiper,
		},
		  	navigation: {
				nextEl: '.swiper-button-next',
		 		prevEl: '.swiper-button-prev',
			},
		},
	 );

	 resizableSwiper(
		'(max-width: 1280px)',
		'.swiper-thumbs__slidertwo',
		{
			modules: [Navigation, Thumbs],
		  loop: true,
		  spaceBetween: 10,
		  slidesPerView: 1,
		  speed: 800,
		  loop:true,
		  thumbs: {
			swiper: galleryThumbs,
		},
		  	navigation: {
				nextEl: '.swiper-button-next',
		 		prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1500: {
					slidesPerView: 3,
					spaceBetween: 10,
				}
			},
		},
	 );


	if (document.querySelector('.otzv__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.otzv__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, ],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			loop: true,


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.arrow-o-left',
				nextEl: '.arrow-o-right',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1500: {
					slidesPerView: 4,
					spaceBetween: 36,
				}
			},
			
			// События
			on: {

			}
		});
	}

		// Создаем слайдер
		// var galleryThumbs = new Swiper('.swiper-thumbs__slidertwo', { // Указываем скласс нужного слайдера
		
		// 	modules: [Navigation, Thumbs],
		// 	// observer: true,
		// 	// observeParents: true,
		// 	slidesPerView: 'auto',
		// 	spaceBetween: 10,
		// 	// autoHeight: true,
		// 	speed: 800,
		// 	loop: true,
		// 	slideToClickedSlide: true,
			
		
		// 	breakpoints: {
		// 		320: {
		// 			slidesPerView: 1,
		// 			spaceBetween: 10,
		// 		},
		// 		768: {
		// 			slidesPerView: 2,
		// 			spaceBetween: 10,
		// 		},
		// 		992: {
		// 			slidesPerView: 3,
		// 			spaceBetween: 10,
		// 		},
		// 		1500: {
		// 			slidesPerView: 3,
		// 			spaceBetween: 10,
		// 		}
		// 	},
		// });
		
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});