//elagu mu veebileht
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const dateTime = require('./dateTimeET');
const pageHead ='<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title>JMK</title>\n</head><body>'
const pageBanner = '\n\t<img src="banner.png" alt="Kursuse bänner">';
const pageBody = '\n\t<h1>JMK</h1>\n<p>See veebileht on tehtud <a href="https://www.tlu.ee/" target="_blank">TLÜ</a> digitehnoloogiate instituudi informaatika eriala õppetöö käigus</p>'
const pageFoot = '\n\t<hr></body></html>'

const semester = '\n\t<hr><p><a href="semesterprogress">Infot 2023 sügissemestri kohta</a></p>';
const semesterBegin = new Date('08/28/2023');   // semestri alguse kuupaev
const semesterEnd = new Date('01/28/2024');     // semestri lopu kuupaev
const today = new Date();
let semesterLasted = Math.floor((today.getTime() - semesterBegin.getTime()) / 86.4e6);
let semesterStill = Math.floor((semesterEnd.getTime() - today.getTime()) / 86.4e6);
const semesterDuration = Math.floor((semesterEnd - semesterBegin) / 86.4e6);


http.createServer(function(req, res){
	let currentURL = url.parse(req.url, true);
	//console.log(currentURL);
	if (currentURL.pathname === "/"){
		res.writeHead(200, {"Content-type": "text/html"}); // 200 = leht töötab
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write('\n\t<hr>\n\t<p><a href="addname">Lisa oma nimi</a>!</p>');
		res.write(pageFoot);
		res.write('<p>Täna on ' + dateTime.dateOfToday() + ', ' + dateTime.dayOfToday() + '</p>');
		//console.log("Keegi vaatab!");
		return res.end();
	}
	
	else if (currentURL.pathname === "/addname"){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write('\n\t<hr>\n\t<h2>Lisa palun oma nimi</h2>');
		res.write('\n\t<p>Edaspidi lisame siia asju!</p>');
		res.write(pageFoot);
		return res.end();
	}
	else if (currentURL.pathname === '/semesterprogress'){
		res.writeHead(200, {'Content-type': 'text/html'});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		const dateFormat = {day: 'numeric', month: 'numeric', year: 'numeric'};
		const startFormat = semesterBegin.toLocaleDateString('et-EE', dateFormat);
		const endFormat = semesterEnd.toLocaleDateString('et-EE', dateFormat);
		if (semesterBegin <= today && today <= semesterEnd){
				res.write('<hr><p>Semester algas: ' + startFormat + '</p>');
				res.write('<p>Semester lõpeb: ' + endFormat + '</p>');
				res.write('<p>Kokku kestab: ' + semesterDuration + ' päeva</p>');
				res.write('<p>läbitud on ' + semesterLasted + ' päeva ja veel on ees ' + semesterStill + ' päeva</p>');
				res.write(`<meter min="0" max="${semesterDuration}" value="${semesterLasted}"></meter>`);
				}
		else if (semesterBegin > today){
				res.write('<p>Semester pole alanud! Veel on aega ' + Math.floor((semesterBegin.getTime() - today.getTime()) / 86.4e6) + ' päeva!</p>');
		}
		else if (semesterEnd < today){
				res.write('<p>Semester on kahjuks läbi!!!</p>');
		}
		res.write(pageFoot);
		return res.end();

	}
	
	else if (currentURL.pathname === "/banner.png"){
		console.log("Tahame pilti!");
		let bannerPath = path.join(__dirname, "public", "banner");
		//console.log(bannerPath + currentURL.pathname);
		fs.readFile(bannerPath + currentURL.pathname, (err, data)=>{
			if (err) {
				throw err;
			}
			else {
				console.log("Tuli ära!");
				res.writeHead(200, {"Content-type": "image/png"});
				res.end(data);
			}
		});

	if (currentURL.pathname === "/semesterprogress"){
		sisu = 0 

	};
	}
	else {
		res.end("ERROR 404");
	}
	//valmis, saada ära
}).listen(5119);


    //rinde .listen(5100)