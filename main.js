function activatePage(value)
{
    let element = document.querySelectorAll(".Page")[value];
    
    document.querySelector(".ActivePage").classList.remove("ActivePage");
    element.classList.add("ActivePage");
}


document.getElementById("StartButton").addEventListener("click", () => {
    activatePage(1);
})

document.querySelectorAll("#page1 button").forEach(button => {
    button.onclick = () => {
        activatePage(2)
    }
})