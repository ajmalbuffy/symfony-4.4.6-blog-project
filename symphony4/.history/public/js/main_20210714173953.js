function confirmation(){
    var result = confirm("Are you sure to delete?");
    if (result == true){
        $.ajax('{{ path('delete') }}', {
    } else{

    }
}