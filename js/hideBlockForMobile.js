document.addEventListener('scroll', function () {
    const scroll = Number(window.pageYOffset.toFixed(0))
    const mobileSection = document.querySelector('.js-section-mobile')
    const heighiOfDevice = document.documentElement.clientHeight

    let heightOfPage = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    if (scroll + heighiOfDevice > heightOfPage - 250)
        mobileSection.classList.add('active')
    else
        mobileSection.classList.remove('active')
})