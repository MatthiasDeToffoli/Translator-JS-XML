$(document).ready(function(){
  TranslateByParents();
});

function TranslateByParents(){
  if(window !== null && window !== undefined)
    if(window.parent !== null && window.parent !== undefined)
      if($(window.parent).length > 0)
        if($(window.parent)[0].myXML !== undefined && $(window.parent)[0].myXML !== null){
          $(".Translatable").each(function(){
              this.innerHTML = $(window.parent)[0].GetTranslation($(window.parent)[0].myXML,$(this).attr("key"));
          });

          $(".TitleTranslatable").each(function(){
              $(this).attr("title",$(window.parent)[0].GetTranslation($(window.parent)[0].myXML,$(this).attr("key")));
          });
        }
}
