$(document).ready(function() {
  addItem()
  removeItem()
});

function addItem() {
  $("button").click(function() {
    $("#list").append(
      '<ul>' + $('input[name=item]').val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>");
  });
}

function removeItem() {
  $("body").on("click", "#list a", function() {
    $(this).closest("ul").remove();
  })
}
