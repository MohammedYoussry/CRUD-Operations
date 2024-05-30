
var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var siteData =[];

if(localStorage.getItem("siteData")!= null) {
    siteData = JSON.parse(localStorage.getItem("siteData"));
    displayData(siteData);
}



function addSite(){

    var site = {
        name:siteName.value,
        url:siteUrl.value,
    }
    
    siteData.push(site);
    localStorage.setItem("siteData",JSON.stringify(siteData))

    displayData(siteData);
    clear();
    
}

function displayData(data){
    var cartona =``;

    for(var i=0 ; i<data.length ;i++){
        cartona += `<tr>
        <td>${data.indexOf(data[i])+1}</td>
        <td>${data[i].name}</td>
        <td><a href="${data[i].url}" target="_blank"><button onclick="visit(${i})" class="btn btn-visit btn-info text-white" ><i class="fa-regular fa-eye"></i>Visit</button></a></td>
        <td><button onclick="deletSite(${i})" class="btn btn-delete pe-2 btn-danger" ><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`;
    }
    document.getElementById("tableData").innerHTML =cartona;

}

function clear(){
    siteName.value = null;
    siteUrl.value =null;
}

 function deletSite(index){
    
    siteData.splice(index,1);
    localStorage.setItem("siteData",JSON.stringify(siteData));
    displayData(siteData);
}

function visit(){
    window.open(url);
}

function search(searchValue){
    
    var searchItem =[]
    for(var i=0 ; i<siteData.length ; i++ ){
        
        if(siteData[i].name.toLowerCase().includes(searchValue.toLowerCase())){

            searchItem.push(siteData[i])
        }
    }

    displayData(searchItem)

}



