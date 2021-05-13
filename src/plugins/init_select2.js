// import plugin
import $ from 'jquery';
import 'select2';

// create function
const initSelect2 = () => {
  const options = {
    width: '100%'
  };
  $('#states').select2(options);
}

// export function
export { initSelect2 }