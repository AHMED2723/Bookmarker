var bookmarkName=document.getElementById("name");
var bookmarkUrl=document.getElementById("url");
var sitesArray=[];

        
function getValues(){
    
     var info = {
            siteName: bookmarkName.value,
            siteUrl: bookmarkUrl.value,
        };
        clearform();
        sitesArray.push(info);
        displayUrls();
}
       





function displayUrls(){
    var sitesBody="";
    for(var i=0;i<sitesArray.length;i++)
    {
        sitesBody+=`<tr>
        
        <td class="tds px-5">`+sitesArray[i].siteName+`</td>
        
        <td>
        <a class="btn btn-primary"href="`+bookmarkUrl.value+`" >visit</a>
        </td>
        <td>
            <button onclick="Deleteform(${i})" type="button" class="btn btn-danger">Delete</button>
        </td>

    </tr>`
}
document.getElementById("tableBody").innerHTML=sitesBody;

}










function clearform(){
    bookmarkName.value="";
    bookmarkUrl.value="";
}
function Deleteform(index){
    sitesArray.splice(index,1);
    displayUrls();
}
