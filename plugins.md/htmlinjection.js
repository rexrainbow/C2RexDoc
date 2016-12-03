var fs = require("fs");
var async = require("async");

// inject GoogleAnalytics
var ContentGA = `
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-88123342-1', 'auto');
  ga('send', 'pageview');

</script>
`;
function injectGoogleAnalytics(content)
{
    if (content.indexOf(ContentGA) !== (-1))
        return;
    
    var start = content.indexOf("</head>");
    content = content.slice(0, start) + ContentGA + content.slice(start, content.length);
    return content;
};
// inject GoogleAnalytics


// main
var names = fs.readdirSync(".");
names = names.filter(function(n)
{
    return (n.split(".")[1] === "html");
});

async.map(names, function(name, cb){

    var needWrite = false;
    var content = fs.readFileSync(name, 'utf8');
    var newContent = injectGoogleAnalytics(content);
    if (newContent)
    {
        content = newContent;
        needWrite = true;
    }
    
    if (needWrite)
    {
        console.log("Update " + name);        
        fs.writeFileSync(name, content);
    }
    else
    {
        console.log("Skip " + name);        
    }
}
);
// main
