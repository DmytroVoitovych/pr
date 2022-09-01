export function btnDayNight() {
  const btnDAndN = document.querySelector('.switch-btn');
  const section = document.querySelector('body');
  console.log(section);

  if (localStorage.getItem('btn')) {
    btnDAndN.classList.add(localStorage.getItem('btn'));
    section.classList.add(localStorage.getItem('section'));
  }

  btnDAndN.addEventListener('click', () => {
    if (localStorage.getItem('btn')) {
      localStorage.removeItem('section');
      localStorage.removeItem('btn');

      btnDAndN.classList.remove('switch-on');
      section.classList.remove('section-night');
    } else {
      toggleNightMode();
    }
  });
}

const toggleNightMode = () => {
  const section = document.querySelector('body');

  document.querySelectorAll('.switch-btn').forEach(btn => {
    btn.classList.toggle('switch-on');
    localStorage.setItem('btn', 'switch-on');
  });

  section.classList.toggle('section-night');
  localStorage.setItem('section', 'section-night');
};


/////////////////////// control style/////////////////

export const funcControlArts = () => {
  const body = document.querySelector('body');
  const title = document.querySelectorAll('.gallery__title');
  if (body.classList.contains('section-night') || window.localStorage.getItem('section-night')) {
  return  title.forEach(t =>  console.log(t));

  }
  return  'провал ';
  
};

