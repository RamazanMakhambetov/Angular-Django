const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')


// add event

btn.addEventListener('click', (e)=>{
    if (input.value === '') return
    createDeleteElement(input.value)
    input.value = ''
})

function createDeleteElement(value){
    const li = document.createElement('li')
    const btn = document.createElement('button')

    li.className = 'li'
    li.textContent = value

    btn.className = 'btn'
    btn.textContent = 'DEL'
    li.appendChild(btn)

    btn.addEventListener('click', (e) =>{
        result.removeChild(li)
    })
    li.addEventListener('click', (e) =>{
        li.classList.toggle('li-active')
    })



    result.appendChild(li)
}

