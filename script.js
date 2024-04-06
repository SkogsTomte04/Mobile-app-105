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

                let li = document.createElement('li');
                li.classList.add("username")
                li.innerText = obj.post[i].username;
                div.appendChild(li)

                let imgcontainer = document.createElement('div');
                imgcontainer.classList.add("content")
                let img = document.createElement('img');
                img.src=obj.post[i].content;
                imgcontainer.appendChild(img);
                div.appendChild(imgcontainer)

                let footer = document.createElement('ul');
                footer.classList.add("footer");
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
