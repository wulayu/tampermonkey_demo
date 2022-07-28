// @require      https://cdn.bootcss.com/vue/2.5.20/vue.min.js




// for Chrome test(import js)
var script=document.createElement("script");  
script.type="text/javascript";  
script.src="https://code.jquery.com/jquery-3.6.0.min.js"; 
document.getElementsByTagName('head')[0].appendChild(script);

var script=document.createElement("script");  
script.type="text/javascript";  
script.src="https://cdn.bootcss.com/vue/2.5.20/vue.min.js"; 
document.getElementsByTagName('head')[0].appendChild(script);




// // save to local
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
download(content, 'json.txt', 'text/plain');