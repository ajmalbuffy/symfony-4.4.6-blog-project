function confirmation(){
    var result = confirm("Are you sure to delete?");
    console.log(result);
    if (result == true){
        $.ajax('{{ path("article_list") }}')
    } else{
        $.ajax('{{ path("article_list") }}')
    }
};