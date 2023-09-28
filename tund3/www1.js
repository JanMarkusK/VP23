//elagu mu veebileht

const http = require("http")
http.createServer (function(req, res){
    res.writeHead (200, {"content-type": "text.html"});
    res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>JMK</title><script src="first.js" defer></script></head><body>');
    res.write('<h1>JMK</h1><p>See veebileht on tehtud <a href="https://www.tlu.ee/" target="_blank">TLÜ</a> digitehnoloogiate instituudi informaatika eriala õppetöö käigus</p>');
    res.write('<hr></body></html>');
    console.log('keegi vaatab')
    //valmis, ole hea saada ära
    return res.end();
}).listen(5124);


//rinde .listen(5100)