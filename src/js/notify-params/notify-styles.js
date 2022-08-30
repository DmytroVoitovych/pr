import { Notify } from 'notiflix/build/notiflix-notify-aio';

const paramsNotify = {
  position: 'center-top',
  timeout: 3000,
  distance: '15px',
  // fontAwesomeIconSize: '10px', //
  width: '390px',

  fontSize: '14px', //
  cssAnimationStyle: 'from-top',
  cssAnimationDuration: 600,
  showOnlyTheLastOne: true,

  useIcon: false,
  clickToClose: true,
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
};
export { paramsNotify };
//  return Notify.failure('Search result not successful. Enter the correct movie name.');
