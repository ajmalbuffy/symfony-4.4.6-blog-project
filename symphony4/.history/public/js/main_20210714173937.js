function confirmation(){
    var result = confirm("Are you sure to delete?");
    if (result == true){
        $.ajax('{{ path('your_action_route') }}', {
    } else{

    }
}