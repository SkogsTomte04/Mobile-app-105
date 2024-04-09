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
                let post = createPost(obj);
                list.appendChild(post);
            };
            
        }).catch(function (error) { 
            console.error("Unable to fetch data", error);
        })
}

function createPost(obj){
    let post = document.createElement('div');
    post.classList.add("container");

    let header = createHeader(obj);
    let contentContainer = createContentContainer(obj);
    let footer = createFooter(obj);

    post.appendChild(header);
    post.appendChild(contentContainer);
    post.appendChild(footer);

    return post;
}

function createHeader(obj){
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
    return header;
}

function createContentContainer(obj){
    let imgcontainer = document.createElement('div');
    imgcontainer.classList.add("content")
    let imgslider = document.createElement('div');
    imgslider.classList.add("slider")

    obj.post[i].content.forEach(imgAdress => {
        let img = document.createElement('img');
        img.src=imgAdress;
        img.alt="404 image not found";
        imgslider.appendChild(img);
    })
    imgcontainer.appendChild(imgslider);
    let like = createLikeButton(obj);
    imgcontainer.appendChild(like);
    let CommentSection = createCommentSection(obj);
    imgcontainer.appendChild(CommentSection)
    let commentButton = createCommentButton(CommentSection);
    imgcontainer.appendChild(commentButton);

    return imgcontainer;
}

function createCommentButton(div) {
    let comment = document.createElement('img');
    comment.classList.add("comment");
    comment.src="Assets/icons/comment.svg";
    comment.addEventListener("click", () => {
        div.classList.toggle("active");
    })
    return comment;
}

function createCommentSection(obj){
    let div = document.createElement('div');
    div.classList.add("comment-section");
    let ul = document.createElement('ul');
    ul.classList.add("comment-list");
    obj.post[i].comments.forEach(commentobject => {
        let commentContainer = document.createElement('div');
        commentContainer.classList.add("comment-container");

        let img = document.createElement('img');
        img.classList.add('userpfp');
        img.src=commentobject.userpfp;
        commentContainer.appendChild(img);

        let div = document.createElement('div');
        div.classList.add("comment-content");

        let li = document.createElement('li');
        li.classList.add("comment-id");
        li.textContent = commentobject.userid;
        div.appendChild(li);
        

        let content = document.createElement('li');
        content.classList.add("comment-text");
        content.textContent = commentobject.comment;
        div.appendChild(content);
        commentContainer.appendChild(div);
        let likebutton = createLikeButton(obj);
        commentContainer.appendChild(likebutton);
        
        ul.appendChild(commentContainer);
    })
    div.appendChild(ul);
    
    return div;
}

function createLikeButton(obj){
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
            console.log("Adding like");
        }
        
    });
    
    return like;
}

function createFooter(obj){
    let footer = document.createElement('ul');
    footer.classList.add("footer");
    let title = document.createElement('li');
    title.classList.add("title");
    title.innerText = obj.post[i].title
    footer.appendChild(title);
    let desc = document.createElement('li');
    desc.innerText = obj.post[i].description;
    footer.appendChild(desc);
    return footer;
}
