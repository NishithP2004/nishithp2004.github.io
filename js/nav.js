document.getElementById("arrow").addEventListener("click", () => {
    let activeStyle =
        `
@media all and (min-width: 320px) and (max-width: 426px) {
.nav-links {
display: block;
flex-direction: column;
}

.dropbtn {
display: block;
font-size: 16px;
border: none;
outline: none;
color: white;
padding: 14px 16px;
background-color: inherit;
font-family: inherit;
margin: 0;
}

#arrow {
padding-left: 20px;
}

header {
display: block; 
}

.title {
border-right: none;
border-bottom: 1px solid white;
}
}
`

    let inactiveStyle = `
@media all and (min-width: 320px) and (max-width: 426px) {
.nav-links {
display: none;
flex-direction: row;
}

header {
display: flex;
}

title {
border-bottom: none;
border-right: 1px solid white;
}

#arrow {
padding-left: 0px;
}
}

`
    let element = document.getElementById("arrow").classList;
    var stylesheet = document.getElementById('js-inject');

    if (element.contains("fa-caret-down")) {
        stylesheet.innerText = activeStyle;
        element.replace("fa-caret-down", "fa-caret-up")
    } else if (element.contains("fa-caret-up")) {
        stylesheet.innerText = inactiveStyle;
        element.replace("fa-caret-up", "fa-caret-down")
    }

    document.head.appendChild(stylesheet);

})