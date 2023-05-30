
let roll = document.querySelector('.roll');
let ro = document.querySelector('.hold')

let p1currentscore = document.querySelector('.cs');
let p1score = document.querySelector('.s1');
let p2currentscore = document.querySelector('.cs2');
let p2score = document.querySelector('.s2');
let newgame = document.querySelector('.b');
const winner = (payler)=>{
  ro.classList.add('hide')
  roll.classList.add('hide')
  document.querySelector('.win').classList.remove('hide')
  document.querySelector('.win').textContent = `winner${payler}`
}


const d = ()=>{

  document.querySelector('.im').classList.remove('hide')
}

const imgset = function(x){
  d();

    if(x===1){
        document.querySelector('.im').style.backgroundImage = 'url(img/one.png)';
   }
   else if (x===2){
    document.querySelector('.im').style.backgroundImage = 'url(img/two.png)';
   }
   else if (x===3){
    document.querySelector('.im').style.backgroundImage = 'url(img/three.png)';
   }
   else if(x===4){
    document.querySelector('.im').style.backgroundImage = 'url(img/four.png)';
   }
   else if (x===5){
    document.querySelector('.im').style.backgroundImage = 'url(img/five.png)';
   }
   else if (x===6){
    document.querySelector('.im').style.backgroundImage = 'url(img/six.png)';
   
   }
}
let score =[0,0];
let acpt = 0;
let current= 0
let switchpyler = ()=>{
  document.getElementById(`cf--${acpt}`).textContent=0;
  current =0;
  acpt = acpt===0?1:0

}


    


   roll.addEventListener('click',function(){
            
                
                
            let dice = Math.trunc(Math.random()*6)+1;
        imgset(dice)
        if(dice!=1){
          current +=dice
          document.getElementById(`cf--${acpt}`).textContent=current

        

        }else{
      switchpyler();

        
          
        }

     
      }  )

      ro.addEventListener('click',function(){
        
       score[acpt]=score[acpt]+current;
       console.log(score)

       document.getElementById(`total--${acpt}`).textContent=score[acpt]

        if(score[acpt]>=20){
          if(score[0]>=20){
          winner(' is Player1')
        }else{
          winner(' is Player2')
        }
      }

       switchpyler();

      })
   

newgame.addEventListener('click',function(){
  document.querySelector('.win').classList.add('hide')
  ro.classList.remove('hide')
  roll.classList.remove('hide');
  score =[0,0];
  acpt = 0;
   current= 0;
   
   document.getElementById(`total--${acpt}`).textContent=score[acpt]
   document.getElementById(`total--1`).textContent=0
   document.getElementById(`cf--${acpt}`).textContent=current
   document.querySelector('.im').classList.add('hide')
   

})










