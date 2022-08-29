import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  position: 'center-top',
  timeout: 3000,
  distance: '15px',

  width: '393px',
  fontSize: '12px',
  cssAnimationStyle: 'from-top',
  cssAnimationDuration: 600,

  failure: {
    background: 'rgba(0,0,0,0.1)',
    textColor: '#FF001B',
    notiflixIconColor: 'rgba(200,0,0,0.4)',
  },
  success: {
    background: 'rgba(0,0,0,0.7)',
    textColor: '#32c682',
    notiflixIconColor: 'rgba(50,200,130,0.4)',
  },
});

//  return Notify.failure('Search result not successful. Enter the correct movie name.');