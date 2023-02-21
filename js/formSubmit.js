
const buttonsSubmitFormOrder = document.querySelectorAll('.js-submit-form-order')

// отправка формы оформления заказа
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
