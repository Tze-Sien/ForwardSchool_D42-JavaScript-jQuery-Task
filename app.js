$(document).ready(function() {
    $('#addTask').hide();
    
});

$('#addBtn').on('click', function() {

    if($('#addBtn').html() == 'Add Task'){
        $('#addBtn').html("Close");
    }else{
        $('#addBtn').html("Add Task");
    }
    $('#addTask').toggle();
});

$('#taskForm').submit(function(e) {
    e.preventDefault();
    let newTask = $('#addTask').val();
    if(newTask != ""){
        $('ul#list').append(`<li class="list-group-item"><span>${newTask}</span><button class="deleteBtn btn btn-danger">Delete</button></li>`)
        $("#addTask").val("");
        $('.deleteBtn').hide();
    }else{
        alert('Please Enter Somethings Lah');
    }
    
});

$('#list').on('mouseover','li', function(e) {
    $(this).children('.deleteBtn').show();
})

$('#list').on('mouseleave','li', function(e) {
    $(this).children('.deleteBtn').hide();
})

$('#list').on('click', '.deleteBtn', function(e) {
    $(this).parent().remove();
})


