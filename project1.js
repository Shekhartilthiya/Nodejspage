const url=require('url')
const http=require("http");
const fs=require("fs");

http.createServer((req,res) =>{
// request 
// index
// about
// servies

const path=req.url
if(path=='/about'){
    console.log('about page')

        res.writeHead(200,{
            "content-type":"text/html"
        })
        const aboutpage= fs.readFileSync("./views/about.html");
        res.write(aboutpage);

}else if(path=='/home'){
    console.log("home page ");

        res.writeHead(200,{
            "content-type":"text/html"

        })
        const fileContent = fs.readFileSync("./views/home.html");
        res.write(fileContent);

}
else if(path=='/services'){


    console.log("servies");
    res.writeHead(200,{
        "content-type":"text/html"
    })

    const servicespage=fs.readFileSync("./views/servi.html");
    res.write(servicespage);
    res.end();
}else{
    res.write("<h1> SORRY ITS NOT VALID URL</h1>");
}



}).listen(8082);