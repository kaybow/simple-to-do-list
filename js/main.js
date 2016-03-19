var $input = $('#list-input');
var $list = $('.list');

$('form').on('submit', function (e) {

  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
});
