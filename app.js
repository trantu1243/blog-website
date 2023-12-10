import express from "express";
import bodyParser from "body-parser";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

var blogList = [{title:"Home", path:"home", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}, {title:"Day 1", path: "day1",content:"Ultrices gravida dictum fusce ut placerat. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Egestas diam in arcu cursus euismod quis viverra. Amet dictum sit amet justo donec enim diam vulputate. Non arcu risus quis varius quam. Non consectetur a erat nam at lectus. Elit at imperdiet dui accumsan sit amet nulla. Pellentesque eu tincidunt tortor aliquam nulla. Nunc sed augue lacus viverra vitae congue. Enim facilisis gravida neque convallis a cras semper auctor. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Vestibulum rhoncus est pellentesque elit ullamcorper."}];
var about = [{title:"About", content:"Neque egestas congue quisque egestas diam in. Mauris augue neque gravida in fermentum et sollicitudin ac. Ligula ullamcorper malesuada proin libero nunc consequat. Massa tempor nec feugiat nisl pretium fusce id velit. Pretium viverra suspendisse potenti nullam ac tortor vitae. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Vitae tempus quam pellentesque nec. Molestie at elementum eu facilisis sed odio. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Tempor id eu nisl nunc mi ipsum. Tortor posuere ac ut consequat. Nulla at volutpat diam ut venenatis tellus in metus. Vulputate odio ut enim blandit volutpat maecenas. Suspendisse sed nisi lacus sed viverra tellus in hac."}];
var contact = [{title:"Contact", content:"Cras sed felis eget velit aliquet. Morbi tincidunt ornare massa eget. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Integer eget aliquet nibh praesent tristique magna sit. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Lacus sed viverra tellus in hac. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Risus nec feugiat in fermentum posuere urna nec tincidunt. Quam viverra orci sagittis eu volutpat odio facilisis. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Senectus et netus et malesuada fames ac. Porttitor massa id neque aliquam vestibulum morbi blandit. Sem fringilla ut morbi tincidunt augue. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Vel turpis nunc eget lorem dolor sed."}];


app.get("/", function(req,res){
    res.render("index",{
        webTitle:"Blog Website",
        blogs:blogList
    });
})


app.get("/about", function(req,res){
    res.render("index",{
        webTitle:"About us",
        blogs:about
    })
})

app.get("/contact", function(req,res){
    res.render("index",{
        webTitle:"Contact",
        blogs:contact
    })
})

app.get("/add", function(req,res){
    res.render("index",{
        webTitle:"Add blog",
        
    })
})



app.post("/", function(req,res){
    console.log(req.body);
    const page = req.body.submit;
    if(page === "home"){
        res.redirect("/");
    }
    else if(page === "about"){
        res.redirect("/about");
    }
    else if(page === "contact"){
        res.redirect("/contact");
    }
    else if(page === "add"){
        res.redirect("/add");
    }
    else {
        console.log(page);
        res.redirect("/posts/"+page);
    }

})

app.get("/posts/:topic",function(req, res){

    
    for(let i = 0; i < blogList.length; i++)
        if (req.params.topic === blogList[i].path) {
            res.render("posts",{
                webTitle:blogList[i].title,
                
                blogContent:blogList[i].content
            });
          
            break;
        }
    
})

app.post("/add", function(req,res){
    
    blogList.push({
        title: req.body.title,
        path: req.body.title.replace(/\s/g, "").toLowerCase(),
        content: req.body.content
    })
    res.redirect("/"); 
})

 

app.listen(3000, function(){
    console.log("Sever is running on port 3000!");
})

