//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

setInterval(() => {
    var texto = document.getElementById('h1');
    var textNode = texto.childNodes[0];
    var text = textNode.nodeValue;
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.nodeValue = text;   
}, 1000);