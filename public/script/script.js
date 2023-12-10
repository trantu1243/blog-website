
var pList = document.getElementsByClassName("paragraph");

var list = [];

for(let i = 1; i < pList.length; i++){
    if (pList[i].innerHTML.length > 100){
        let paragraph = pList[i].innerHTML;
        list.push({number:i, paragraph:paragraph});
        pSlice = paragraph.slice(0,100);
        pList[i].innerHTML = pSlice + "...  <span class=\"readMore\">Read more</span>";
        
    }
}

let readMoreList = document.getElementsByClassName("readMore");


showHide();


function showHide(){

    for(let i = 0; i < readMoreList.length; i++){
        readMoreList[i].addEventListener("click", function(){
            let selector = pList[list[i].number];
            if (readMoreList[i].innerHTML === "Read more"){
                selector.innerHTML = list[i].paragraph + "   <span class=\"readMore\">--Hide--</span>";
                
            }   
            else {
                selector.innerHTML = list[i].paragraph.slice(0,100) + "...  <span class=\"readMore\">Read more</span>";
                
            }
            readMoreList = document.getElementsByClassName("readMore");
            showHide();
        
    })
}
    
}
