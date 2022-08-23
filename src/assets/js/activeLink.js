let containers = Array.from(document.querySelectorAll('.container'));
// containers.forEach(el => console.log(el.getBoundingClientRect().bottom + ' ' + el.clientHeight))
// console.log(containers)
// containers = containers.map(el => {
//   return {
//     el: el.id,
//     top: el.offsetTop
//   }
// })
// console.log(containers)

const scroll = function(){
  window.addEventListener('scroll', (e) => {
    let arr = containers.filter(el => el.getBoundingClientRect().y < el.clientHeight / 2)
    console.log(arr[arr.length-1])
  })
}



function resolve(num){
  // console.log(containers.filter(el => num - el.top <= 50 && num - el.top >= 0))
}

export {scroll}