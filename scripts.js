document.addEventListener("DOMContentLoaded", function() {
    const postButton = document.getElementById("postButton");
    const postInput = document.getElementById("postInput");
    const imageUpload = document.getElementById("imageUpload");
    const newsFeed = document.getElementById("newsFeed");
    const navbarLinks = document.querySelectorAll("#navbar nav a");
    const pages = document.querySelectorAll(".page");

    function createPost(content, imageSrc) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const postContent = document.createElement("div");
        postContent.classList.add("content");
        postContent.textContent = content;

        const postTimestamp = document.createElement("div");
        postTimestamp.classList.add("timestamp");
        postTimestamp.textContent = new Date().toLocaleString();

        const postActions = document.createElement("div");
        postActions.classList.add("actions");

        const likeButton = document.createElement("button");
        likeButton.textContent = "Like";
        likeButton.addEventListener("click", function() {
            likeButton.textContent = likeButton.textContent === "Like" ? "Unlike" : "Like";
        });

        const commentButton = document.createElement("button");
        commentButton.textContent = "Comment";
        commentButton.addEventListener("click", function() {
            const comment = prompt("Enter your comment:");
            if (comment) {
                const commentElement = document.createElement("div");
                commentElement.classList.add("comment");
                commentElement.textContent = comment;
                commentsSection.appendChild(commentElement);
            }
        });

        const shareButton = document.createElement("button");
        shareButton.textContent = "Share";

        postActions.appendChild(likeButton);
        postActions.appendChild(commentButton);
        postActions.appendChild(shareButton);

        const commentsSection = document.createElement("div");
        commentsSection.classList.add("comments");

        postElement.appendChild(postContent);
        postElement.appendChild(postTimestamp);
        if (imageSrc) {
            const postImage = document.createElement("img");
            postImage.classList.add("image");
            postImage.src = imageSrc;
            postElement.appendChild(postImage);
        }
        postElement.appendChild(postActions);
        postElement.appendChild(commentsSection);

        return postElement;
    }

    postButton.addEventListener("click", function() {
        const content = postInput.value.trim();
        const file = imageUpload.files[0];
        let imageSrc = "";

        if (file) {
            const reader = new FileReader();
            reader.onloadend = function() {
                imageSrc = reader.result;
                if (content || imageSrc) {
                    const post = createPost(content, imageSrc);
                    newsFeed.prepend(post);
                    postInput.value = "";
                    imageUpload.value = "";
                }
            };
            reader.readAsDataURL(file);
        } else {
            if (content) {
                const post = createPost(content, imageSrc);
                newsFeed.prepend(post);
                postInput.value = "";
            }
        }
    });

    navbarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            pages.forEach(page => {
                if (page.id === targetId) {
                    page.classList.remove("hidden");
                } else {
                    page.classList.add("hidden");
                }
            });
        });
    });
});
