function confirmation(){
    var result = confirm("Are you sure to delete?");
    if (result == true){
        $.ajax('{{ path('delete') }}', data: { 
            // you can pass some parameters to the controller here
    },
    success: function(data) {
            // change button color
    },
    error: function() {
            // show alert or something
    }
});
return false; // this stops normal button behaviour from executing;