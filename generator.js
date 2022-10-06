let answer = document.querySelector('.ask');

let picture = document.querySelector('.img-main');

let comment = document.querySelector('.comment');



answer.addEventListener('click', function(){
    let random = Math.round(Math.random());
    let proceed = " Click the button again if you have another question.";
    if(random<=0.5){
    comment.innerText = "The answer in YES!" + proceed
}else{
comment.innerText = "The answer in NO!" + proceed
}

})
