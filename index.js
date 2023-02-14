// валидация формы


    const validationInputArr = []

    // валидация формы
    class ValidationForm {
        constructor(wrapper) {
            this.input = wrapper.querySelector('.js-check-empty')
            this.errorTextElem = wrapper.querySelector('.error-text')
            this.errorEmailElem = wrapper.querySelector('.js-error-email')

            this.addListeners()
            this.changeInput()
        }

        addListeners() {
            this.input.addEventListener('input', this.removeClasses.bind(this))
        }

        changeInput() {
            this.input.addEventListener('change', () => {
                this.validateInput()
            })
        }

        validateInput() {
            this.emptyValidate(this.input, this.errorTextElem)

            if (this.input.type === 'email')
                this.emailValidation(this.input, this.errorEmailElem)
        }

        emptyValidate(input, textErrorElem) {
            input.value === ''
                ? this.addClasses(input, textErrorElem)
                : this.removeClasses(input, textErrorElem)
        }

        emailValidation(input, textErrorElem) {
            const regForEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

            if (regForEmail.test(input.value) == false && input.value !== '')
                this.addClasses(input, textErrorElem)
            else
                this.errorEmailElem.classList.remove('error-text--active')
        }

        addClasses(input, textErrorElem) {
            input.classList.add('input-error')
            textErrorElem.classList.add('error-text--active')
        }

        removeClasses(input, textErrorElem) {
            if (input.value !== undefined) {
                input.classList.remove('input-error')
                textErrorElem.classList.remove('error-text--active')
            }
        }
    }

    // disabled кнопки
    class DisableObjectsController {
        constructor(wrapper) {
            this.wrapper = wrapper
            this.controlCheckbox = this.wrapper.querySelector('.js-open-checkbox')
            this.disableTarget = this.wrapper.querySelector('.js-object-checkbox')

            this.init()
        }

        init() {
            this.controlCheckbox.addEventListener('click', this.changeObjectState.bind(this))
        }

        changeObjectState() {
            this.disableTarget.disabled = !this.disableTarget.disabled
            this.disableTarget.value = ''
        }
    }

    document.querySelectorAll('.js-checkbox-input').forEach(
        item => new DisableObjectsController(item))

    document.querySelectorAll('.js-validation-input').forEach(
        item => validationInputArr.push(new ValidationForm(item)))

    const buttonsSubmitFormOrder = document.querySelectorAll('.js-submit-form-order')

    // отправка формы оформления заказа
    buttonsSubmitFormOrder.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()

            validationInputArr.forEach(item => item.validateInput())

            const errors = document.querySelectorAll('.error-text--active')
            const scrollElem = document.getElementById('scroll-form');

            if (errors.length !== 0)
                scrollElem.scrollIntoView({behavior: "smooth", block : "center"});
        })
    })



