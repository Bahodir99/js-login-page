let elForm = document.querySelector('.form')
let elEmail = document.querySelector('.email')
let elPass = document.querySelector('.epass')
let elModal = document.querySelector('.modal')
let elSub = document.querySelector('.sub')


elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let a = elPass.value.trim().toLowerCase()
    let b = elEmail.value
    if (a.length < 8 || elEmail.value == '') {
        console.log('xato');
        elSub.textContent = 'xato'
        let a = 2
        let set = setInterval((i) => {
            elModal.classList.add('open')        
            a-=1
            if (a <= -1){
                clearInterval(set)
                elModal.classList.remove('open')
                console.log('ok');
            }

        }, 1000)
    }
    else {
        fetch('https://63e542a8c04baebbcdb7065c.mockapi.io/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ UserName: b, UserPassword: a })
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
        
        elSub.textContent = 'Sizni malumotingiz bazaga kiritildi !'

        let a = 3
        let set = setInterval((i) => {
            elModal.classList.add('open')            
            a-=1
            if (a <= -1){
                clearInterval(set)
                elModal.classList.remove('open')
                console.log('ok');
            }

        }, 1000)
    }


})
