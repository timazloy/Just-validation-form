import DisableObjectsController from "./js/DisableObjectsController.js";
import maskPhone from "./js/phone-mask.js";
import ValidationForm from "./js/ValidataonForm.js";
import CustomSelect from "./js/CusomSelect.js";
import hideBlockForMobile from "./js/HideBlockForMobile.js";
import formSubmit from "./js/formSubmit.js";

// чекбокс показать/скрыть
document.querySelectorAll('.js-checkbox-input').forEach(
    item => new DisableObjectsController(item))

// маска телефона
$(document)
    .on('input', '.js-input-phone', maskPhone)
    .on('focus', '.js-input-phone', maskPhone)
    .on('blur', '.js-input-phone', maskPhone)
    .on('keydown', '.js-input-phone', maskPhone)


// валидация формы
const validationInputArr = []

document.querySelectorAll('.js-validation-input').forEach(
    item => validationInputArr.push(new ValidationForm(item)))


// отправка формы оформления заказа
const buttonsSubmitFormOrder = document.querySelectorAll('.js-submit-form-order')


buttonsSubmitFormOrder.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault()

        validationInputArr.forEach(item => item.validateInput())

        const errors = document.querySelectorAll('.error-text--active')
        const scrollElem = document.getElementById('scroll-form');

        if (errors.length !== 0)
            scrollElem.scrollIntoView({ behavior: "smooth", block: "center" });
    })
})

// селект
document.querySelectorAll('.js-custom-select').forEach(
    item => new CustomSelect(item))

// скрытие блока на адаптиве при прокрутке
hideBlockForMobile()

// отправка формы
formSubmit()