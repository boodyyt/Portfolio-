const a= document.querySelector('.burger');
const b = document.querySelector('.nav');
const c = document.querySelector('.close');

a.addEventListener('click',()=>{
    b.classList.add('open');
   })
   c.addEventListener('click',()=>{
    b.classList.remove('open');
   })








   const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.classList.remove('show');
        }
    });
   });

   const h=document.querySelector('#about');
h.forEach((entry)=> observer.observe(entry));