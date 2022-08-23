let containers = Array.from(document.querySelectorAll('.container'));


const scroll = function(){
  window.addEventListener('scroll', (e) => {
    let arr = containers.filter(el => el.getBoundingClientRect().y < el.clientHeight / 2)
    // console.log(arr[arr.length-1])
    resolve(arr[arr.length-1])
  })
}

function resolve(el){
  return el
}



export {scroll}