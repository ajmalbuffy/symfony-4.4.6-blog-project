function confirmation(){
    var result = confirm("Are you sure to delete?");
    if (result == true){
        $.ajax('{{ path("delete") }}'
});
return false; // this stops normal button behaviour from executing;