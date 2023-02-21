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

document.querySelectorAll('.js-validation-input').forEach(
    item => validationInputArr.push(new ValidationForm(item)))