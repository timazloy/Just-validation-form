class CustomSelect {
    constructor(wrapper) {
        this.wrapper = wrapper
        this.selectHeader = this.wrapper.querySelector('.custom-select__header')
        this.selectItems = this.wrapper.querySelectorAll('.custom-select__item')
        this.selectIcon = this.wrapper.querySelector('.custom-select__icon')
        this.currentSelect = this.wrapper.querySelector('.custom-select__current')
        this.selectValue = this.wrapper.querySelector('.custom-select__value');

        this.eventListener()
    }

    eventListener() {
        this.selectHeader.addEventListener('click', this.selectToggle.bind(this))
        this.selectItems.forEach(item => {
            item.addEventListener('click', () => {
                this.selectChoose(item)
            })
        })
    }

    selectToggle() {
        this.wrapper.classList.toggle('is-active');
        this.selectIcon.classList.toggle('custom-select__icon--active')
    }

    selectChoose = (item) => {
        this.deleteActiveClasses()

        this.currentSelect.textContent = item.textContent
        this.wrapper.classList.remove('is-active');

        item.classList.add('custom-select__item--active')
        this.selectValue.value = item.textContent
    }

    deleteActiveClasses() {
        const selectItems = document.querySelectorAll('.custom-select__item')
        selectItems.forEach((item, index) => {
            item.classList.remove('custom-select__item--active')
        });
    }
}

document.querySelectorAll('.js-custom-select').forEach(
    item => new CustomSelect(item))
