console.log("Hello World!")

window.onload = () => {
    document.getElementById('more').addEventListener("click", () => {
        const navBar = document.getElementsByTagName("nav")[0]
        const ul = document.getElementsByTagName("ul")[0]
        if(navBar.style.height == 0 || navBar.style.height == '0px') {
            navBar.style.height = '100vh'
            ul.style.height = '30vh'
        } else {
            navBar.style.height = '0'
            ul.style.height = '0'
        }
    })

    document.getElementsByTagName("nav")[0].onclick = () => {
        window.innerWidth <= 600 &&
        document.getElementById('more').click()
    }
}