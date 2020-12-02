document.addEventListener('DOMContentLoaded', function() {

    let nome = document.querySelector('.adicionar_estat')

    function update() {
        submit = document.querySelector('input[type="submit"]')
        if (nome.value == '') {
            submit.disabled = true
        } else {
            submit.disabled = false
        }
        }

    nome.addEventListener('input', function() {
        update()
    })

    update()
})