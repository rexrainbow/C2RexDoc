var tmpl = `
doctype 5
html
    head
        title Deprecated Plugins
        meta(name='viewport', content='width=device-width, initial-scale=1.0')

        link(rel='stylesheet', href='bootstrap.min.css')   
        link(rel='stylesheet', href='main.css')     
        
        script(src="jquery-3.1.0.min.js")                          
        script(src="bootstrap.min.js")          
        
    body
        .container
            h1 Deprecated Plugins
            ul
                each item, i in items
                    - var ns = item.split(".")            
                    if (ns.length == 2) && (ns[1] == "7z")
                        - var url = "./" + item    
                        li 
                            a(href=url) #{item}`;
            
var fs = require("fs");
var items = {
    "items": fs.readdirSync("./")
}
var pug = require("pug");
var genFn = pug.compile(tmpl, {"pretty": true});
var html = genFn(items);
fs.writeFileSync("index.html", html);