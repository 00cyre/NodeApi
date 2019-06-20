const http = require('http');
var express = require('express');
var fileHelper = require('./classes/fileHelper')
const hostname = '192.168.0.9';
const port = 3000;
var app = express();
app.use(express.static('assets'))
var jei = 
{ 
    User:[
        {
            name:"joao",
            age:32,
            followers:200,
            photos:
            [
                "",
                "",
                "",
            ],
            website:"huron.pw",
            uid: 0,
            likedpages:[
                
            ]

        },
    ],
    //parametrized so you search only for user specific info.
    //example hes logging into the page, i dont want to keep repeating posts
    VisInfo:
    [
        {
            uid:0,
            postsinfo:
            [
                {
                    id:1,
                    visualized:false,
                    liked:false 
                },
                {
                    id:2,
                    visualized:true,
                    liked:false 
                },
                {
                    id:3,
                    visualized:true,
                    liked:true 
                },
            ]
        },
        {
            uid:1,
            postsinfo:
            [
                {
                    id:4,
                    visualized:false,
                    liked:false 
                },
                {
                    id:5,
                    visualized:false,
                    liked:false 
                },
                {
                    id:6,
                    visualized:true,
                    liked:false 
                },
            ]
        }
    ],
    Post:[
        {
            postid:9238,
            ownerid:"0",
            title:"azideia mermao",
            photos:[
                "",
                ""
            ],
            description:"doideira"
        }
    ],
    Comment:[
        {
            postid:9238,
            //User.id
            ownerid:"0",
            commentid:"cc120983",
            content:"Gostei muito do post",
            likes:33,
            

        }
    ]
}
app.get("/",function(req,res){
    console.log("Received request from: " + req.ip)
    res.send(jei)
});
app.get("/images",function(req,res){
    
    console.log("Received request from: " + req.ip)
    let json;
    if (req.query.type == null){
        json = jsonConstructor(__dirname + "/assets/images/");
    }
    else
    {

    }
    res.send(json)
});
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
function jsonConstructor(dir){
    let json = {};
    json.files = [];
    let array = new Array();
    let eobrad = fileHelper.returnFiles(dir).forEach(function(element){
        json.files.push(element);
    })
    if (json.files.length > 0){
        json.status = "Successfully got files"
    }
    else
    {
        json.status = "Failed to get files"
    }
    return json
}
class Costumers
{
    constructor(Name)
    {
        var name = Name;
    }
    getNames()
    {
        return name;
    }
}