function getFlowers(username, result){
    const url = "https://api.github.com/users/"+username+"/followers";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = ()=>{
        let data = JSON.parse(xhr.response);
        result = data.length;
    }
}

function getMembers(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/orgs/Torin-Project/members");
    xhr.onload = ()=>{
        const data = JSON.parse(xhr.responseText);
        const members = document.getElementById("members");
        members.innerHTML = "";
        for(let user of data){
            // let folowers = 0;
            // getFlowers(user['login'], folowers);
            // for(let i = 0;i < 100000; i++);
            let div = document.createElement("div");
            let img = document.createElement("img");
            let name = document.createElement("h4");
            // let folowers_ = document.createElement("p");

            img.src = user["avatar_url"];
            img.classList.add("MemberProfile");

            name.innerText = user["login"];
            name.classList.add("MemberName");
            name.classList.add("text-2xl");
            name.style = "margin-left: 2%;margin-top:2.5%";

            // folowers_.innerText = folowers.toString() + " folowers";

            div.className = "flex justify-between shadow rounded bg-gray-900 cursor-pointer";
            div.addEventListener("click", ()=>{
                window.open(user["html_url"]);
            })

            div.appendChild(name);
            // div.appendChild(folowers_);
            div.appendChild(img);

            members.appendChild(div);
        }
    }
    xhr.send();
}

document.addEventListener("DOMContentLoaded", ()=>{
    getMembers();
})