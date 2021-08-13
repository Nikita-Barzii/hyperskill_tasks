function $get(id){
    return document.getElementById(id);
}

function UPPERCASE(){
    var strInputText = $get( "txt1" ).value;
    strInputText = strInputText.toUpperCase();
    $get('txt1').value = strInputText;
}

function lowercase(){
    var strInputText = $get( "txt1" ).value;
    strInputText = strInputText.toLowerCase();
    $get('txt1').value = strInputText;
}

function firstLetterUpper(theString) {
    var newString = $get( "txt1" ).value.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
    return newString;
}

function sentenceCase() {
    var theString = $get( "txt1" ).value;
    //alert(theString);
    var newString = firstLetterUpper(theString);
    //console.log("Converted: "+newString);
    document.getElementById('txt1').value = newString;
    $get( "txt1" ).value = newString;
}

function Propcase() {
    var strInputText = $get( "txt1" ).value;
    strInputText = strInputText.toLowerCase().split(' ');
    for (var i = 0; i < strInputText.length; i++) {
        strInputText[i] = strInputText[i].charAt(0).toUpperCase() + strInputText[i].slice(1);
    }
    $get( "txt1" ).value = strInputText.join(' ');

}

function download(filename, text) {
    var text = $get("txt1").value;
    var filename = "text.txt";
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

$get("save-text-file").addEventListener("click", function(){
    download(filename, text);
}, false);
