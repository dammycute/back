const unchecked = document.querySelector('div.field-input > .unchecked')
const checked = document.querySelector('#checked')
const todoText = document.querySelector('div.field-input > p')
const completedList = document.querySelector('#completed-list')
const fieldInput = document.querySelector('.field-input')
    span = document.querySelector('.span')
    moon = document.querySelector('.moon')
    sun = document.querySelector('.sun')
    todoBody = document.querySelector('.body')
    todoForm = document.querySelector('.f')
    cross = document.querySelector('.cross')

    
todoText.onmouseover = () => {
    cross.style.display = 'block'
}

cross.onclick = () => {
    fieldInput.style.display = 'none'
}


unchecked.onclick = () => {
        unchecked.style.display='none'
        checked.style.display= 'block'
        todoText.style.textDecoration = 'line-through'
        todoText.style.color = 'var(--vdgb)'
        todoText.className += ` completed`
    }

checked.onclick = () => {
    unchecked.style.display='block'
    checked.style.display= 'none'
    todoText.style.textDecoration = 'none'
    todoText.style.color = 'var(--vdgb)'
    todoText.className += ``
}

completedList.onclick = () => {
    if (todoText.className = 'active'){
        fieldInput.style.display = 'none'
        todoText.style.textDecoration = 'none'
    }
}

moon.onclick = () => {
    moon.style.display = 'none';
    sun.style.display = 'block';
    document.body.style.backgroundColor = 'hsl(235, 21%, 11%)'
    span.className = "dark"
    fieldInput.style.color = '#fff'
    todoBody.className = 'tbody'
    todoForm.className = 'form'

}

sun.onclick = () => {
    sun.style.display = 'none';
    moon.style.display = 'block';
    document.body.style.backgroundColor = '#fff'
    span.className = "span"
    fieldInput.style.color = 'var(--vdgb)'
    todoBody.className = 'body'
    todoForm.className = 'f'
}

// activeList.onclick = () => {
//     if (todoText.className = 'completed' && 'active'){
//         fieldInput.style.display = 'none'
//     }
// }


// switch(btn){
//     case 'All':
//       setImages(List);
//       break;
//     case 'Web Design':
//       setImages(List.filter(item => item.category === 'web'));
//       break;
//     case 'Mobile Design':
//       setImages(List.filter(item => item.category === 'mobile'));
//       break;
//     default:
//       return;
//   }


// list = [
//     {p: 'Go to sch'},
//     {p: 'Go to sch'},
//     {p: 'Go to sch'},
//     {p: 'Go to sch'},
//     {p: 'Go to sch'}
// ]

// const listed = list.map(item =>(
//     `
//         <i class="bi bi-circle unchecked" id="unchecked"></i>
//         <i class="bi bi-check-circle-fill" id="checked"></i>
//         <p>${item.p}</p>

//     `
// ))

// fieldInput.innerHTML =
