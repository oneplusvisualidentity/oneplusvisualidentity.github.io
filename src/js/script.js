var display = function(block_name, title) {
  // Toogle Block
  $('.middleBlock').css('display', 'none');
  $('#' + block_name + '').css('display', 'block');

  // Change Title Color
  $('.menu').removeClass('active');
  $(title).addClass('active');
}

$('#subScription').on('click', function() {
  display('firstBlock', $(this));
});

$('#inStore').on('click', function() {
  display('secondBlock', $(this));
});

$('#onLine').on('click', function() {
  display('thirdBlock', $(this));
});