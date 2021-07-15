function confirmation(){
    var result = confirm("Are you sure to delete?");
    console.log(result);
    if (result == false){
        "{{path('app_bundle_route')}}";
    } else{
        $.ajax('{{ path("article_list") }}')
    }
};