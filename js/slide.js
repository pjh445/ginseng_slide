document.addEventListener("DOMContentLoaded" , () => {

    const slide = document.getElementById('slide');
    const btn_left = document.querySelector('#buttonArea button:first-child');
    const btn_right = document.querySelector('#buttonArea button:last-child');

    const callback_R = ()=> {       
        slide.style.transition= 'none';
        slide.style.left = '-300px';
        slide.prepend(  slide.lastElementChild );
        btn_right.disabled = false;
    }
    const callback_L = ()=> {               
        slide.style.transition= 'none';
        slide.style.left = '-300px';
        slide.append(  slide.firstElementChild );
        btn_left.disabled = false;
    }

    const rightSlide = ()=>{
        btn_right.disabled = true;
        slide.style.transition= 'left 0.5s';
        slide.style.left = 0;
        setTimeout(  callback_R  , 500 );                   
    }
    const leftSlide = ()=>{
        slide.style.transition= 'left 0.5s';
        slide.style.left = '-600px';
        setTimeout(  callback_L  , 500 );  
        btn_left.disabled = true;         
    }

    btn_right.addEventListener('click' , rightSlide  );
    btn_left.addEventListener('click' ,  leftSlide  );

}); /////////all end.................