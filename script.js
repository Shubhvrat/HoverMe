const container = document.getElementById('container')
const colors = ['#008000','#FF0000','#800080','#FF7F50','#F0F8FF']
const square = 700

for(let i=0;i<square;i++)
{
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=>addColor(square))
   
    square.addEventListener('mouseout',()=>removeColor(square))
    
    container.appendChild(square)
}


function addColor(element)
{
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 3px ${color},0 0 10px ${color}`
}

function removeColor(element)
{
   element.style.background = '#1d1d1d';
   element.style.boxShadow = '0 0 2px black';
}

function getRandomColor()
{
    return colors[Math.floor(Math.random()*colors.length)]
}

