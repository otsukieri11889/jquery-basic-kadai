$(function(){
  $('#change-color').on('click',function(){ // ここが修正されました
    $('#target').css('color','red');
  });
  $('#change-text').on('click',function(){
    $('#target').text('Hello!');
  });
  $('#fade-out').on('click',function(){
    $('#target').fadeOut(); // ここが修正されました
  });
  $('#fade-in').on('click',function(){
    $('#target').fadeIn(); // ここが修正されました
  });
});