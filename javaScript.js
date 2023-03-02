//var todo = $('#todo').val(); 
//console.log(todo);

$("#addTodo").click(function () {
    var inputString = $("#todo").val();
    //alert(inputString);
    $("ul").append(`<li> ${inputString} </li>`)
});
