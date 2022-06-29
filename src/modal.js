const modalF = () => {
    const modal = document.querySelector('.service-modal')
    const cross = document.querySelector('.cross')

    const trigger = document.querySelector('.services')

    const body = document.body;


    trigger.addEventListener('click', showModal)
    cross.addEventListener('click', hideModal)

    document.addEventListener('click', e => {
        if (e.target == modal) {
            hideModal()
        }
    })

    document.addEventListener('keyup', e => {
        if (e.key == 'Escape') {
            hideModal()
        }
    })


    function showModal() {
        modal.classList.remove('hide')
        body.classList.add("noscroll");
    }

    function hideModal() {
        modal.classList.add('hide')
        body.classList.remove("noscroll")

    }
}

modalF()