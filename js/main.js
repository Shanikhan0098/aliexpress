let buttton = document.getElementById('closer');
let second = document.getElementById('closer');
buttton.addEventListener('mouseover', function () {
        let h = document.getElementById('inner');
        h.style.display = 'block'

})
second.addEventListener('mouseleave', function () {
        let h = document.getElementById('inner');
        h.style.display = 'none'


})

let card = document.getElementById('end');
card.addEventListener('click', function(){
        let first = document.getElementById('first');
        first.style.display = 'none'
})

let c = document.getElementById('sideClose');
c.addEventListener("click", function(){
        let sidebttn = document.getElementById('sideBtn');
        sidebttn.style.transform = 'translateX(-100%)'
        
})
let togle = document.getElementById('tog');
togle.addEventListener("click", function(){
        let toglst = document.getElementById('toglist');
        toglst.style.display = 'block'

})

