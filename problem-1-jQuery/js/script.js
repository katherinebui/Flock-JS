$(document).ready(function() {
  addItem();
  removeItem();
});

function addItem() {
  $("button").click(function() {
    $(".table").append(
      "<tr><td>" + $('input[name=name]').val() +  "</td><td>" +  $('input[name=topic]').val() + "</td><td>" +  $('input[name=due]').val() + "</td><td>" +  $('input[name=completed]').val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></td></tr>"
      );
    $("form").trigger("reset");
  });
}

function removeItem() {
  $("body").on("click", ".table a", function() {
    $(this).closest("tr").remove();
  })
}
