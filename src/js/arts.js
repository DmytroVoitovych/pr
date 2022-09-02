
export const funcControlArts = (title) => {
  const body = document.querySelector('body');
  console.log(body);
  if (body.classList.contains('section-night')) {
  // const title = document.querySelectorAll('.gallery__title .them');
       document.querySelector('.form__input').style.color = '#fff'; 
      document.querySelector('.form__input').style.backgroundColor = '#2D2A2A'; 
      document.querySelector('.modal-pagination').style.backgroundColor = '#751D1D'; 
      document.querySelectorAll('.team-list__text').forEach(e=> e.style.color = '#ff6b01');     
      document.querySelectorAll('.team-list__item').forEach(e=> e.style.background = '#251c1cf3'); 
      document.querySelector('.team-container').style.backgroundColor = 'rgba(107, 18, 18, 0.907)';   
      document.querySelector('footer').style.backgroundColor = '#751D1D'; 
      document.querySelector('.footer-block').style.color = '#f7f7f7';
  return  title.forEach(t =>  t.style.color = '#fff');

    }
     document.querySelector('.form__input').style.color = '#000'; 
    document.querySelector('.form__input').style.backgroundColor = '#fff'; 
    document.querySelector('.modal-pagination').style.backgroundColor = '#fff'; 
    document.querySelectorAll('.team-list__text').forEach(e=> e.style.color = '#ff6b01'); 
    document.querySelectorAll('.team-list__item').forEach(e=> e.style.background = '#fff'); 
    document.querySelector('.team-container').style.backgroundColor = '#fff';  
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