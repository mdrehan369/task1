console.log("Hello World!");

window.onload = () => {
  let timeoutId = null;

  document.getElementById("more").addEventListener("click", () => {
    const navBar = document.getElementsByTagName("nav")[0];
    const ul = document.getElementsByTagName("ul")[0];
    if (navBar.style.height == 0 || navBar.style.height == "0px") {
      navBar.style.height = "100vh";
      ul.style.height = "30vh";
    } else {
      navBar.style.height = "0";
      ul.style.height = "0";
    }
  });

  document.getElementsByTagName("nav")[0].onclick = () => {
    window.innerWidth <= 600 && document.getElementById("more").click();
  };

  const sentPopupMessage = (type) => {
    const popup = document.getElementsByClassName(type)[0];
    popup.style.display = "flex";
    if (timeoutId != null) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      popup.style.display = "none";
    }, 4000);
  };

  document.getElementsByTagName("form")[0].onsubmit = async (e) => {
    e.preventDefault();
    const endpoint =
      "https://getform.io/f/e3854e68-4296-42f3-9dcf-a1a0a7cb20b8";
    const formData = new FormData(e.target);
    const email = formData.get("Email");

    if (
      !email.match(
        new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$")
      )
    ) {
      sentPopupMessage("error");
      return;
    }

    try {
      document.getElementById("submit").setAttribute("disabled", true);
      await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      sentPopupMessage("success");
    } catch (error) {
      console.log(error);
      sentPopupMessage("server-error");
    } finally {
      document.getElementById("submit").removeAttribute("disabled");
    }
  };
};
