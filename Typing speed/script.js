const words = ["I am a Web devloper.","I learn HTMl and CSS","I am also larn Java script","i am from India and world famous place.",
"i can not wait for a sucesful devloper","i am thinkig you ae right ","Engeenier banana koi haathori hi na hai",
"I am show that te word, i am bigge han you", "i am web developer"];

const msg = document.getElementById('msg');

const typeWords = document.getElementById('mywors');
const btn = document.getElementById('btn');
let startTime , endTime;

const playgame = ()  =>{
    let randomNumber = Math.floor(Math.random()*words.length);
    msg.innerText = words[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText ="Done";
}
const endplay = () =>{
    let date = new Date();
    endTime = date.getTime(); 
    let totalTime = ((endTime - startTime) / 1000 );
    console.log(totalTime);
    let totalstr =  typeWords.value;
    let wordCount = wordCounter(totalstr);
    let speed = Math.round((wordCount / totalTime) * 60);
     
    let finalMsg = " You typed total  at " +speed+ "  words per minutes ";
    finalMsg += compareWords(msg.innerText,totalstr);
    msg.innerText = finalMsg;
}

const compareWords = (str1,str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function(item,index){
        if(item == words2[index]){
            cnt++;
        }
    })
    let errorWords = (words1.length - cnt);
    return(cnt + " correct out of " + words1.length + " words and  the total number of error are "+ 
    errorWords + " .");

}

    const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
    }

btn.addEventListener('click', function(){
    // console.log(this);
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playgame();
    }else if (this.innerText == 'Done'){
        typeWords.disabled = true; 
        endplay();
    }else{

    }
})