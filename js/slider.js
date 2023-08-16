(function(){

    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1); /*Si presionamos siguiente sumara uno*/ 
    })

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1); /*Si presionamos hacia atras sumara menos uno*/ 
    })

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add; 
        

        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;   
        }

        sliders[value-1].classList.add('testimony__body--show'); /*Es la clase que hace que los elementos se muestren */



    }

})();