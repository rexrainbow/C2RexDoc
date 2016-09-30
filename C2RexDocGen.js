var main = function()
{
    var configuration = {
        "C2Root": "d:/Construct 2",
        "output":"./c2rexpluginsACE",
        "filter": {
            "plugins": /rex_/gi,
            "behaviors": /rex_/gi,
        },
        "tmpl": "./tmpl",
    };

    var startTime = (new Date()).getTime();    
    console.log("Start...")
    var docGen = require("../C2DocGen/docGen");    
    var callback = function(err, result)
    {
        if (err)
            console.log(err)
        else
        {
            console.log("Done");
            //var open = require('open');
            //open(configuration["output"] + "/index.html");
        }
        
        var endTime = (new Date()).getTime();
        var elapsedTime = (endTime - startTime)/1000;
        console.log("Elapsed time= " + elapsedTime + " seconds")
    };
    docGen(configuration, callback);
};

main();