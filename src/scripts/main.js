document.addEventListener('DOMContentLoaded', function(){
    const heroSection = document.querySelector('.hero');
    const heroHeigt = heroSection.clientHeight;
    const button = document.querySelector('.header__links__item:nth-child(1)');
    
    window.addEventListener('scroll', showButton);
    
    
    
    
    function showButton(){
        const scrollPosition = window.scrollY;

        if(scrollPosition > heroHeigt){
            button.classList.add('visible');
        }else{
            button.classList.remove('visible');
        }
    }
})
