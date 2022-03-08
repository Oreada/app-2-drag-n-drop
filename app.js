const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

//! когда начали перетаскивать - dragstart:
item.addEventListener('dragstart', function (event) {
	// console.log('dragstart');
	event.target.classList.add('hold');
	setTimeout(() => event.target.classList.add('hide'), 0);
	//! задержка 0, но хватает, чтобы "обмануть" браузер: чтобы сначала создалась визуальная копия элемента (то, что мы тянем),
	//! и только после этого скрылся сам элемент, который был на исходной позиции
	//! без setTimeout элемент скрывается ДО того, как создастся его визуальная копия, которая тоже будет в связи с этим скрытой
});

//! когда закончили перетаскивать - dragend:
item.addEventListener('dragend', function (event) {
	// console.log('dragend');
	event.target.classList.remove('hold');
	event.target.classList.remove('hide');
});

for (const placeholder of placeholders) {

	placeholder.addEventListener('dragenter', function (event) {
		// console.log('dragenter');
		event.target.classList.add('hovered');
	});

	placeholder.addEventListener('dragover', function (event) {
		// console.log('dragover');
		event.preventDefault();  //! убираем поведение по умолчанию, оно мешает нам "кинуть" элемент в нужном месте
	});

	placeholder.addEventListener('dragleave', function (event) {
		// console.log('dragleave');
		event.target.classList.remove('hovered');
	});
	placeholder.addEventListener('drop', function (event) {
		// console.log('drop');
		event.target.classList.remove('hovered');
		event.target.append(item); //! добавляем элемент в тот placeholder, где "бросили" этот элемент, при этом он удаляется со старого места
	});

};



