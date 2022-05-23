// Import all plugins
import * as bootstrap from 'bootstrap';

import Attempt from './js/attempt';

// Coin Flip

jQuery(document).ready(function($){

  $('#results').on('DOMNodeInserted', function(){
    document.querySelectorAll('.coin').forEach((attr)=> {
      if (attr.classList.contains('right'))
        attr.classList.add('bg-green', 'heads');
      else
        attr.classList.add('drops');
    })
    setTimeout(()=>
      $('.coin').removeClass('coin')
    , 3000)
  });
});