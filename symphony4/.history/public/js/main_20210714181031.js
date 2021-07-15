function confirmation(){
    var result = confirm("Are you sure to delete?");
    console.log(result);
    if (result == false){
        "{{path('article_list')}}
    } else{
        $.ajax('{{ path("article_list") }}')
    }
};