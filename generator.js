

let answer = document.querySelector('.ask');

let picture = document.querySelector('.img-main');


let comment = document.querySelector('.comment');

let fon = document.querySelector('body');



answer.addEventListener('click', function(){
    let random = Math.round(Math.random());
    let proceed = " Click the button again if you have another question.";
    picture.setAttribute("class", "pic_size");
    
    if(random<=0.5){
    comment.innerText = "The answer in YES!" + proceed;
    picture.src = "./images/small_yes.png";
    fon.style.backgroundColor = "#dd79ccad";
    
   
}else{
comment.innerText = "The answer in NO!" + proceed;
picture.src = "./images/small_no.png";

fon.style.backgroundColor = "#cadeff";

}

})
