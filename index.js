const ham = document.getElementById('hamburger');
const link = document.querySelector('.nav-links');
const navBtn = document.querySelector('.nav-button');
const hamlink = document.querySelector('.ham-links');
const capbox = document.querySelectorAll('.one');
const hide = document.querySelectorAll('.hide');
const show = document.querySelectorAll('.show');

ham.addEventListener('click',()=>{
    hamlink.classList.toggle('none');
   hamlink.style.transform="translateY(0%)";
});


capbox[0].addEventListener('mouseover',()=>{
   for(let i=0 ; i<2;i++){
      hide[i].style.display="none";
   }
   capbox[0].style.backgroundColor="#1560BD";
   for(let i=0 ; i<3;i++){
      show[i].style.display="block";
   }
});

capbox[0].addEventListener('mouseout',()=>{
   for(let i=0 ; i<2;i++){
      hide[i].style.display="flex";
   }
   capbox[0].style.backgroundColor="rgb(231, 229, 229)";
   for(let i=0 ; i<3;i++){
      show[i].style.display="none";
   }
});

capbox[1].addEventListener('mouseover',()=>{
   for(let i=2 ; i<4;i++){
      hide[i].style.display="none";
   }
   capbox[1].style.backgroundColor="#1560BD";
   for(let i=3 ; i<6;i++){
      show[i].style.display="block";
   }
});

capbox[1].addEventListener('mouseout',()=>{
   for(let i=2 ; i<4;i++){
      hide[i].style.display="flex";
   }
   capbox[1].style.backgroundColor="rgb(231, 229, 229)";
   for(let i=3 ; i<6;i++){
      show[i].style.display="none";
   }
});

capbox[2].addEventListener('mouseover',()=>{
   for(let i=4 ; i<6;i++){
      hide[i].style.display="none";
   }
   capbox[2].style.backgroundColor="#1560BD";
   for(let i=6 ; i<9;i++){
      show[i].style.display="block";
   }
});

capbox[2].addEventListener('mouseout',()=>{
   for(let i=4 ; i<6;i++){
      hide[i].style.display="flex";
   }
   capbox[2].style.backgroundColor="rgb(231, 229, 229)";
   for(let i=6 ; i<9;i++){
      show[i].style.display="none";
   }
});


capbox[3].addEventListener('mouseover',()=>{
   for(let i=6 ; i<8;i++){
      hide[i].style.display="none";
   }
   capbox[3].style.backgroundColor="#1560BD";
   for(let i=9 ; i<12;i++){
      show[i].style.display="block";
   }
});

capbox[3].addEventListener('mouseout',()=>{
   for(let i=6 ; i<8;i++){
      hide[i].style.display="flex";
   }
   capbox[3].style.backgroundColor="rgb(231, 229, 229)";
   for(let i=9 ; i<12;i++){
      show[i].style.display="none";
   }
});


capbox[4].addEventListener('mouseover',()=>{
   for(let i=8 ; i<10;i++){
      hide[i].style.display="none";
   }
   capbox[4].style.backgroundColor="#1560BD";
   for(let i=12 ; i<15;i++){
      show[i].style.display="block";
   }
});

capbox[4].addEventListener('mouseout',()=>{
   for(let i=8 ; i<10;i++){
      hide[i].style.display="flex";
   }
   capbox[4].style.backgroundColor="rgb(231, 229, 229)";
   for(let i=12 ; i<15;i++){
      show[i].style.display="none";
   }
});

capbox[5].addEventListener('mouseover',()=>{
   for(let i=10 ; i<12;i++){
      hide[i].style.display="none";
   }
   capbox[5].style.backgroundColor="#1560BD";
   for(let i=15 ; i<18;i++){
      show[i].style.display="block";
   }
});

capbox[5].addEventListener('mouseout',()=>{
   for(let i=10; i<12;i++){
      hide[i].style.display="flex";
   }
   capbox[5].style.backgroundColor="rgb(231, 229, 229)";
   for(let i=15 ; i<18;i++){
      show[i].style.display="none";
   }
});












  
