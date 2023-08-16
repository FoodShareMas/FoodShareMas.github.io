(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')]; /*Se ponen los 3 puntos para convertirla en una raid */
    console.log(titleQuestions)
    
    titleQuestions.forEach(questions =>{
        questions.addEventListener('click', () =>{
            let height = 0; //Calculamos el alto de el elemento
            let answer = questions.nextElementSibling;
            let addPadding = questions.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            questions.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight; //Alto minimo para que el elemento se muestre
            }

            answer.style.height = `${height}px`;
        })
    })
})();