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
