var page
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  page = parseInt(e.target.attributes['tab'].value);
  if( page == 1){
    $('#prev').addClass("disabled");
  } else if (page == max_page) {
    $('#next').addClass("disabled");
  }
  oldpage = parseInt(e.relatedTarget.attributes['tab'].value) // previous active tab
  if(oldpage == 1){
    $('#prev').removeClass("disabled");
  } else if (oldpage == max_page) {
    $('#next').removeClass("disabled");                                                                                                                 
  }
  $('#prev a')[0].attributes['tab'].value = page - 1;
  $('#next a')[0].attributes['tab'].value = page + 1;
})

function gotoNext(){
  nextPage = $('#next a')[0].attributes['tab'].value;
  if(nextPage > max_page){
    return;
  }
  tab_finder = '#tabnavigation a[aria-controls='+nextPage+']';
  $(tab_finder).tab('show')
}

function gotoPrev(){
  prevPage = $('#prev a')[0].attributes['tab'].value;
  if(prevPage == 0){
    return;
  }
  tab_finder = '#tabnavigation a[aria-controls='+prevPage+']';
  $(tab_finder).tab('show')
}

document.onkeyup = function (e) {
  e = e||window.event;
  if (e.keyCode == "37") { // Left arrow key press
    gotoPrev();
  } else if (e.keyCode == "39") { // Right arrow key press
    gotoNext();
  }
}
