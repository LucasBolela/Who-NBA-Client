let resultsContainer = document.querySelector('#results');

// setInterval(
const insert = (name)=>{
  resultsContainer.innerHTML += `
  <div class="info col-md-8 col-lg-6 px-0 flex flex-wrap py-2">
          
    <div class="name col-12 text-center">
      <h2>${name ||'Lebron James'}</h2>
    </div>

    <div class="col-2 atributes">
      <div class="coin circle m-auto mb-3">

      </div>
      <h3>Nat</h3>
    </div>

    <div class="col-2 atributes">
      <div class="coin circle m-auto mb-3">

      </div>
      <h3>Win</h3>
    </div>

    <div class="col-2 atributes">
      <div class="coin circle m-auto mb-3">

      </div>
      <h3>Team</h3>
    </div>

    <div class="col-2 atributes">
      <div class="coin circle m-auto mb-3">

      </div>
      <h3>Pos</h3>
    </div>

    <div class="col-2 atributes">
      <div class="coin circle m-auto mb-3 right">
        <h1>37</h1>
      </div>
      <h3>Age</h3>
    </div>
  </div>
  `
}
// , 15000)

setTimeout(()=>
  insert()
, 3000)

// Select Search input

$(document).on('dblclick', 'input[list]', function(event){
  event.preventDefault();
  var str = $(this).val();
  $('div[list='+$(this).attr('list')+'] span').each(function(k, obj){
    if($(this).html().toLowerCase().indexOf(str.toLowerCase()) < 0){
      $(this).hide();
    }
  })
  $('div[list='+$(this).attr('list')+']').toggle(100);
  $(this).focus();
})

$(document).on('blur', 'input[list]', function(event){
  event.preventDefault();
  var list = $(this).attr('list');
  setTimeout(function(){
    $('div[list='+list+']').hide(100);
  }, 100);
})

$(document).on('click', 'div[list] span', function(event){
  event.preventDefault();
  var list = $(this).parent().attr('list');
  var item = $(this).html();
  insert(item)
  $('input[list='+list+']').val(item);
  $('div[list='+list+']').hide(100);
  $('input')[0].value = '';
})

$(document).on('keyup', 'input[list]', function(event){
  event.preventDefault();
  var list = $(this).attr('list');
  var divList =  $('div[list='+$(this).attr('list')+']');
  if(event.which == 27){ // esc
    $(divList).hide(200);
    $(this).focus();
  }
  else if(event.which == 13){ // enter
    if($('div[list='+list+'] span:visible').length == 1){
      var str = $('div[list='+list+'] span:visible').html();
      insert(str)

      $('input[list='+list+']').val(str);
      $('div[list='+list+']').hide(100);
      $('input')[0].value = '';
    }
  }
  else if(event.which == 9){ // tab
    $('div[list]').hide();
  }
  else {
    $('div[list='+list+']').show(100);
    var str  = $(this).val();
    $('div[list='+$(this).attr('list')+'] span').each(function(){
      if($(this).html().toLowerCase().indexOf(str.toLowerCase()) < 0){
        $(this).hide(200);
      } else {
        $(this).show(200);
      }
    })
  }
})