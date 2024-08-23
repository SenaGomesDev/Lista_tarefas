$(document).ready(function (e) {
    $('#formulario').on('submit',function (e) {
        e.preventDefault();

    const tarefa = $('#inputdados').val().trim();

    if (tarefa) {
        const li = $('<li></li>').text(tarefa);
        $('#ulformulario').append(li);
        
        $('#inputdados').val('');

    }
});

$('#ulformulario').on('click', 'li', function(){
    $(this).toggleClass('completed');

});

});
