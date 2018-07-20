const FR_XML_PATH = "../xml/fr.xml";
const EN_XML_PATH = "../xml/en.xml";
const DEFAULT_LANGUAGE = "EN";
const USE_DEFAULT_LANGUAGE = true;
const FR = "FR";
const EN = "EN";

var frXML, enXML;
var xmlhttpFR = new XMLHttpRequest();

  xmlhttpFR.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      frXMLGet(this);
    }
  };

    var xmlhttpEN = new XMLHttpRequest();

      xmlhttpEN.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          enXMLGet(this);
        }
      };
  $(document).ready(function(){
    xmlhttpFR.open("GET", FR_XML_PATH, true);
    xmlhttpFR.send();
    xmlhttpEN.open("GET", EN_XML_PATH, true);
    xmlhttpEN.send();
  });


  function frXMLGet(xml) {
    frXML = xml.responseXML;

    if(DEFAULT_LANGUAGE === FR && USE_DEFAULT_LANGUAGE)
      Translate(FR);

      $(".FRBtn").click(function(){
        Translate(FR);
      });
  }

    function enXMLGet(xml) {
      enXML = xml.responseXML;
      if(DEFAULT_LANGUAGE === EN && USE_DEFAULT_LANGUAGE)
        Translate(EN);

        $(".ENBtn").click(function(){
          Translate(EN);
        });

    }

function Translate(language){
  var xml;
  switch (language) {
    case "FR":
      xml = frXML;
      break;
    case "EN":
      xml = enXML;
      break;
    default:
      xml = frXML;
  }

  $(".Translatable").each(function(){
    var xmlElement = xml.getElementsByTagName($(this).attr("key"));
    if(xmlElement != null && xmlElement.length > 0)
      this.innerHTML = xmlElement[0].innerHTML;
  });
}
