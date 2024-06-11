document.addEventListener("DOMContentLoaded", function() {
    const postButton = document.getElementById("postButton");
    const postInput = document.getElementById("postInput");
    const imageUpload = document.getElementById("imageUpload");
    const newsFeed = document.getElementById("newsFeed");
    const navbarLinks = document.querySelectorAll("#navbar nav a");
    const pages = document.querySelectorAll(".page");
    const settingsForm = document.getElementById("settingsForm");
    const settingsMessage = document.getElementById("settingsMessage");
    const shareProfileButton = document.getElementById("shareProfileButton");
    
    // Function to handle profile sharing
    function shareProfile() {
        const profileLink = window.location.href;
        navigator.clipboard.writeText(profileLink).then(function() {
            alert("Profile link copied to clipboard!");
        }, function() {
            alert("Failed to copy profile link to clipboard!");
        });
    }

    // Event listener for the share profile button
    shareProfileButton.addEventListener("click", shareProfile);
});
