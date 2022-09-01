
export const funcControlArts = (title) => {
  const body = document.querySelector('body');
  console.log(body);
  if (body.classList.contains('section-night') ) {
  // const title = document.querySelectorAll('.gallery__title .them');  
      document.querySelector('footer').style.backgroundColor = '#751D1D'; 
      document.querySelector('.footer-block').style.color = '#f7f7f7';
  return  title.forEach(t =>  t.style.color = '#fff');

    }
    document.querySelector('footer').style.backgroundColor = '#f7f7f7'; 
    document.querySelector('.footer-block').style.color = '#545454';
    
  return  title.forEach(t =>  t.style.color = '#000');
  
};



export const funcControlModalArts = (t, mod, pv) => {
  const body = document.querySelector('body');
  console.log(body);
    if (body.classList.contains('section-night')) {
        // const title = document.querySelectorAll('.gallery__title .them');  
        mod.style.background = 'brown';
        pv.forEach(p => p.style.color = '#d4d4d4');
      return  t.forEach(t => t.style.color = '#fff');

    }
    
        pv.forEach(p => p.style.color = '#8c8c8c');
        mod.style.backgroundColor = '#fff';
       return  t.forEach(t => t.style.color = '#000');
    
};