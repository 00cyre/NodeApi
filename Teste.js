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