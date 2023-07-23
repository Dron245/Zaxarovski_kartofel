<footer class="footer">
			<div class="footer__container">
				<a href="#" class="footer__logo eader__logo">Захаровский картофель</a>
				<a href="#" class="footer__politicy">политика конфеденциальности</a>
				<div class="footer__social">
					<a href="tel:+74912990669" class="footer__link">
						<img src="img/footer/phone.svg" alt="телефон">
						<span class="social__footer-link">+7 (4912) 99-06-69</span>
					</a>
					<a href="mailto:990669@mail.ru" class="footer__link">
						<img src="img/footer/mail.svg" alt="Электронная почта">
						<span class="social__footer-span">990669@mail.ru</span>
					</a>
				</div>
				<div class="footer__links">
					<a href="#" class="footer__link">
						<picture><source srcset="img/footer/metric.webp" type="image/webp"><img src="img/footer/metric.jpg" alt="Метрика"></picture>
					</a>
					<a href="#" class="footer__link footer__link_studio">
						<picture><source srcset="img/footer/logo_studio.webp" type="image/webp"><img src="img/footer/logo_studio.png" alt="логотип"></picture>
						<span class="footer__text">Создание сайта —<br> студия «Галактика»</span>
					</a>
				</div>
			</div>
		</footer>
	</div>
	<div id="formOne" aria-hidden="true" class="popup">
		<div class="popup__wrapper">
			<div class="popup__content">
				<button data-close type="button" class="popup__close">X</button>
				<div class="popup__body">
					<h3 class="popup__title title">Купить картофель</h3>
					<form action="#" class="popup__form">
						<input required autocomplete="off" type="text" name="form[]" data-error="Ошибка" placeholder="Имя *" class="input form__input">
						<input required autocomplete="off" type="tel" name="form[]" data-error="Ошибка" placeholder="Телефон *" class="input form__input">
						<textarea autocomplete="off" name="form[]" placeholder="Сообщение" data-error="Ошибка" class="input"></textarea>
						<span class="popup__text">Поля отмеченные * обязательны для заполнения.</span>
						<div class=" checkbox popup__checkbox">
							<input checked id="c_1" data-error="Ошибка" class="checkbox__input" type="checkbox" value="1" name="form[]">
							<label for="c_1" class="checkbox__label">
								<div class="checkbox__body"></div>
								<span class="checkbox__text">
									Нажимая на кнопку "Отправить", я соглашаюсь с политикой конфиденциальности
								</span>
							</label>
						</div>
						<button class="popup__button button">Отправить</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	<script src="js/app.min.js?_v=20230722125632">

	</script>
	<!-- <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js?_v=20230722125632"></script> -->
</body>

</html>