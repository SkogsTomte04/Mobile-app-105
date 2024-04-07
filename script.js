getJsonData();

function $(x){
    return document.getElementById(x);
}

function getJsonData(){
    fetch('./Assets/data.json')
        .then((respond) => {
            if (!respond.ok){
                throw new Error('HTTP error! Status: ${respond.status}');
            }
            return respond.json();
        }).then(function (obj) {
            let list = $("dataFeed");


            for(i = 0; i < obj.post.length; ++i){
                let div = document.createElement('div');
                div.classList.add("container");

                let header = document.createElement('div');
                header.classList.add("header");
                let profile = document.createElement('img');
                profile.src=obj.post[i].profilepic;
                header.appendChild(profile);
                let ul = document.createElement('ul');
                ul.classList.add("userdata")

                let li = document.createElement('li');
                li.classList.add("username");
                li.innerText = obj.post[i].username;
                let loc = document.createElement('li');
                loc.classList.add("location");
                loc.innerText = obj.post[i].location;
                ul.appendChild(li);
                ul.appendChild(loc);
                header.appendChild(ul);
                div.appendChild(header);

                let imgcontainer = document.createElement('div');
                imgcontainer.classList.add("content")
                let content = document.createElement('img');
                content.src=obj.post[i].content;
                let like = document.createElement('img');
                like.classList.add("like");
                like.src="Assets/icons/heart0.svg";
                like.addEventListener("click", (event) =>{
                    if(event.target.classList.contains("like-yes")){
                        event.target.classList.toggle("like-yes");
                        event.target.src="Assets/icons/heart0.svg";
                        console.log("Removing like");
                    }else{
                        event.target.classList.toggle("like-yes");
                        event.target.src="Assets/icons/heart1.svg";
                        console.log("IT WORKS");
                    }
                    
                });
                imgcontainer.appendChild(content);
                imgcontainer.appendChild(like);
                div.appendChild(imgcontainer);



                let footer = document.createElement('ul');
                footer.classList.add("footer");
                let title = document.createElement('li');
                title.classList.add("title");
                title.innerText = obj.post[i].title
                footer.appendChild(title);
                let desc = document.createElement('li');
                desc.innerText = obj.post[i].description;
                footer.appendChild(desc);
                div.appendChild(footer);

                list.appendChild(div);
            };
            
        }).catch(function (error) { 
            console.error("Unable to fetch data", error);
        })
}


const likebutton = () => {
    const likes = document.querySelectorAll(".like");
    likes.forEach(like => {
        like.addEventListener("click", (event) =>{
            
            event.target.classList.toggle("like-yes");
            event.target.src="Assets/icons/heart1.svg";
            console.log("Adding like");
        })
    })
}
