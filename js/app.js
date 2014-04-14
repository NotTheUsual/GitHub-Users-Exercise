/*jslint browser: true, sloppy: true, indent: 2 */

function createOutput(data) {
  $('.output').html('<img src="' + data.avatar_url + '"/>');
  $('.output').append('<div class="media-body"></div>');
  $('.media-body').append('<h1>' + data.name + '</h1>');
  $('.media-body').append('<p>' + data.bio + '</p>');
  $('.output').addClass('show');
}

//$(function() {
//  $('#search').click(function(event) {
//    event.preventDefault();
//    var username = $('#username-input').val();
//    $.get('https://api.github.com/users/'+username, function(data) {
//      $('.output').removeClass('show');
//      $('.output').html('<img src="'+data['avatar_url']+'"/>');
//      $('.output').append('<div class="media-body"></div>');
//      $('.media-body').append('<h1>'+data['name']+'</h1>');
//      $('.media-body').append('<p>'+data['bio']+'</p>');
//      $('.output').addClass('show');
//    });
//  });
//  
//  $('#close').click(function(event) {
//    event.preventDefault();
//    $('.output').removeClass('show');
//  });
//});

$(function () {
  $('#search').click(function (event) {
    event.preventDefault();
    var username = $('#username-input').val();
    $.get('https://api.github.com/users/' + username, function (data) {
      $('.output').removeClass('show');
      window.setTimeout(createOutput, 100, data);
    });
  });

  $('#close').click(function (event) {
    event.preventDefault();
    $('.output').removeClass('show');
  });
});

//window.setTimeout(createOutput(data), 100);