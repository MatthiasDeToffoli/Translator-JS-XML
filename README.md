# Translator-JS-XML
Translator js french/english using xml it translate texts and titles. It works in IFrames without integrate the script in there. It also help to create simple buttons for launch the translation.

First you have to include the script in your page if you want to change the xml or js location please change constants in localization.js

you can also chose the default language and if you want to use a default language.

<hr>

For use it for a text you have to add the class Translatable in the container of your text. And add an attribute "key" which is the key to search in your xml

Example : <pre><code><span><</span>div class="Translatable" key="mytrad"<span>><</span>/div<span>></span></code></pre>

in your two xml you have to put this key

Example EN.xml :
  <pre><code>          
  <span><</span>?xml version="1.0" encoding="utf-8"?<span>></span>
  <span><</span>translation<span>></span>
    <span><</span>mytrad<span>></span>Hello World<span><</span>/mytrad<span>></span>
  <span><</span>/translation<span>></span>
  </pre></code>

Example FR.xml :
  <pre><code>          
  <span><</span>?xml version="1.0" encoding="utf-8"?<span>></span>
  <span><</span>translation<span>></span>
    <span><</span>mytrad<span>></span>Bonjour Monde<span><</span>/mytrad<span>></span>
  <span><</span>/translation<span>></span>
  </pre></code>

<hr>

For translate a title you have to use the class TitleTranslatable.

Example : <pre><code><span><</span>div class="TitleTranslatable" key="mytrad"<span>><</span>/div<span>></span></code></pre>

<hr>

For add different href link with localization you have to use the class HrefTranslatable.

Example : <pre><code><span><a </span> class="HrefTranslatable" key="mytrad"<span>><</span><span>></span><span>link<</span><span>/a></span></code></pre>

you can also use download for change a download link it's useful if you have a document in some languages.
<hr>

For create a button you have to add a class in your element (FRBtn for french, ENBtn for english)

Example EN : <pre><code><span><</span>div class="ENBtn"<span>><</span>/div<span>></span></code></pre>
Example FR : <pre><code><span><</span>div class="FRBtn"<span>><</span>/div<span>></span></code></pre>

<hr>

For use the script in iFrame child (you need it parent has localization.js) you have to insert the script iFrameLocalization.js and add the class TranslatableIFrame to your iframe

Example : <pre><code><span><</span>iframe class="TranslatableIFrame" src="iframe.html"<span>><</span>/iframe<span>></span></code></pre>

After that use same class than it parent in your iframe page. You can create buttons also in there.

<hr>

The repository contain an example of the using of this.

Enjoy :)
