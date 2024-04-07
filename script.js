function $(x){
    return document.getElementById(x);
}

function getJSONData(){
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
                header.appendChild(ul)
                div.appendChild(header)

                let imgcontainer = document.createElement('div');
                imgcontainer.classList.add("content")
                let content = document.createElement('img');
                content.src=obj.post[i].content;
                imgcontainer.appendChild(content);
                div.appendChild(imgcontainer)



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
getJSONData();
