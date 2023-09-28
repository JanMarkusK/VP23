//elagu mu veebileht
const url = require ("url");
const http = require("http");
const pageHead ='<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title>JMK</title>\n</head><body>'
const pageBanner = '\n\t<img src="vp_banner_23.png" alt="Kursuse bänner"</img>'
const pageBody = '\n\t<h1>JMK</h1>\n<p>See veebileht on tehtud <a href="https://www.tlu.ee/" target="_blank">TLÜ</a> digitehnoloogiate instituudi informaatika eriala õppetöö käigus</p>'
const pageFoot = '\n\t<hr></body></html>'
http.createServer (function(req, res){
    let currentURL = url.parse(req.url, true)
    //console.log(currentURL);
    if (currentURL.pathname === "/") {
        res.writeHead (200, {"content-type": "text.html"});
        res.write(pageHead);
        res.write(pageBody);
        res.write(pageBanner);
        res.write('\n\t<hr>\n\t<p>Lisa oma nimi!</p>');
        //res.write('\n\t<img src="https://greeny.cs.tlu.ee/~rinde/media/pics/banner/vp_banner_2023.png" alt="veebiprogrammeerimise kursuse banner"></img>')
        res.write(pageFoot);
        console.log('keegi vaatab');
    }
    else if (currentURL.pathname === "/addname") {
        res.writeHead (200, {"content-type": "text.html"});
        res.write(pageHead);
        res.write(pageBody);
        res.write(pageBanner);
        res.write('\n\t<hr>\n\t<p> Palun lisa oma nimi!</p>');
        //res.write('\n\t<img src="https://greeny.cs.tlu.ee/~rinde/media/pics/banner/vp_banner_2023.png" alt="veebiprogrammeerimise kursuse banner"></img>')
        res.write(pageFoot);
        console.log('keegi vaatab');

    }
    else if (currentURL.pathname === "/vp_banner_23.png") {
        console.log("Tahame pilti)");
        let bannerPath = path.join(__dirname, "public", "banner");
        fs.readFile (bannerPath + currentURL.pathname, (err, data)=>{
            if (err) {
                throw err;
            }
            else {
                res.writeHead (200, {"content-type": "img/png"});
                res.end(data);
            }
        });
    }
    else {
        res.end ("error 404")
    }   

    //valmis, ole hea saada ära
    //return res.end(currentURL.pathname === "/banner.png");
}).listen(5119);


//rinde .listen(5100)