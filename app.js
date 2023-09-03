// craete a empty array 
var bucketlist = []

// var listcontainer = document.getElementById("list-container")
var listcontainer = document.querySelector("#list-container")//select id and class with this method also

function addValues(){
    console.log("button click");
    var value = document.getElementById("input-field").value
    // console.log("values:", values)
    bucketlist.push(value)
    console.log("bucketlist:", bucketlist);
    displaylist()
}
function displaylist(){
    //clearing the previous list
    listcontainer.innerHTML=""
    for(let i=0;i<bucketlist.length;i++){
        var li= document.createElement("li")
        li.innerHTML = bucketlist[i] + `<span><img onclick="remove(`+i+`)" src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png"</span>`
        // console.log("li:",li)
        listcontainer.append(li)
    }
    
}
function reset(){
    bucketlist=[]
    displaylist()
}
function remove(idx){
    bucketlist.splice(idx,1)
    displaylist()
}