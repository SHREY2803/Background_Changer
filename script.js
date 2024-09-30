//generate random color 

const randomColor = function(){
    const hex = "ABCDEF0123456789";
    let color = '#';
    for (let i = 0; i<6;i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

//start btn
let intervalId; //undefined falsy
document.querySelector('#start').addEventListener('click',function(){
    if(!intervalId){ //truthy
        intervalId = setInterval(()=>{
            document.body.style.backgroundColor = randomColor();
        },1000)
        console.log(`color changing started`);
        
    }
})

//stop btn
document.querySelector('#stop').addEventListener('click',function(){
    if(intervalId){
        clearInterval(intervalId);
        intervalId = null;
        console.log(`color changing stopped`);
        
    }
})

