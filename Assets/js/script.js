let search = document.querySelector(".search")
let form_input = document.querySelector('#search')

search.addEventListener('click', pop = () => {
    if(form_input.classList == 'active')
    {
        form_input.classList.remove('active')
    }else{
        form_input.classList.add('active')
    }
}
)
