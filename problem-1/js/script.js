$(document).ready(function() {
  $('button').click(function() {
    $('#list').append(
      '<ul>' + $('input[name=item]').val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>"
    );
  });
});
