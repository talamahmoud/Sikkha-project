console.log("hello")

const scrollToTop = document.querySelector('.scroll-to-top');
const about =document.querySelector('.about');
const loading = document.querySelector('.loading');
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

 window.addEventListener('load',function(){
    setTimeout(function(){
        loading.classList.add('opacity-0' , 'invisible');
        document.body.style.overflow = 'auto';
    } , 2000)
 })