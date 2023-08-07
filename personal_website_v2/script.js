let profiles = document.getElementsByClassName("profile");
for(let i=0; i<profiles.length; i++) {
    let img = profiles[i].getElementsByTagName("img")[0]; // Get the first image inside the profile div
    img.style.width = "300px";
    img.style.height = "300px";
    img.style.border = "7px dashed blue";
    img.style.borderRadius = "20px";
}
let header = document.querySelector("h2");
header.style.textDecoration = "underline";
header.style.fontSize = "50px";