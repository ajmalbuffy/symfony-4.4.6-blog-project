function confirmation(){
    var result = confirm("Are you sure to delete?");
    console.log(result);
    if (result == false){
        $.ajax('{{ path("article_list") }}')
    } else{
        $.ajax('{{ path("article_list") }}')
    }
};