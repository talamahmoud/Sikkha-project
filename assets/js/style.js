console.log("hello")

const scrollToTop = document.querySelector('.scroll-to-top');
const about =document.querySelector('.about');

window.addEventListener("scroll" , function(){
    if(window.scrollY > about.offsetTop){
        scrollToTop.classList.remove('opacity-0' , "invisible");
    }
    else{
        scrollToTop.classList.add('opacity-0' , "invisible");
    }
})

scrollToTop.addEventListener('click' , function(){
    window.scroll({
     top: 0,
     behavior: 'smooth',
     })
    
 })