const colors = document.querySelectorAll(".colors");

colors.forEach((c) =>{
    c.addEventListener("click", (e) =>{
        window.alert("Note: this is only temp 1refresh and it gone");
        document.body.style.background = e.target.id;
        localStorage.setItem("backgroundTheme", e.target.id);
    })
})

const getTheme = () => {
    let theme = localStorage.getItem("backgroundTheme");
    document.body.style.background = theme;
    console.log(theme)
} 


getTheme();

