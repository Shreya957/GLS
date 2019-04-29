$(document).ready(function(){
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("static/guide.json", function(text){
    var data = [];
    data = JSON.parse(text);
    console.log(data.steps[0].content);
    $(".myClass1 span").attr('title',data.steps[0].content);
    $(".myClass2 span").attr('title',data.steps[1].content);
    $(".myClass3 span").attr('title',data.steps[2].content);
    $(".myClass1 span").tooltip();
    $(".myClass2 span").tooltip();
    $(".myClass3 span").tooltip();
});
  
  
});