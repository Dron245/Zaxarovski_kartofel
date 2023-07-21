// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//import { Fancybox } from '@fancyapps/ui';
//import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Fancybox.bind('[data-fancybox="gallery"]', {
// 	// Your custom options
//  });
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox="gallery"]', {
// Your custom options
});

Fancybox.bind('[data-fancybox="galleryv"]', {
	// Your custom options
	});
//console.log(Fancybox)