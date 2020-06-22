let endpoint = "https://api.github.com/users/fakeboyas";
let options = {
    method: "GET",
    headers: {
        "Content-type": "applications/json",
    },
};

async function getUserData() {
    try {
        let response = await fetch(endpoint, options);
        let results = await response.json();
        console.log(results);
        let text = document.createElement("h2");
        let addText = document.createTextNode("User id : " + results.id);
        text.appendChild(addText);
        let text3 = document.createElement("h3a");
        let addText3 = document.createTextNode("Url : " + results.html_url);
        text3.appendChild(addText3);
        let text2 = document.createElement("h2");
        let addText2 = document.createTextNode("Username : " + results.login);
        text2.appendChild(addText2);
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.setAttribute("src", results.avatar_url);
        let display = document.getElementById("display");
        li.appendChild(img);
        li.appendChild(text2);
        li.appendChild(text);
        li.appendChild(text3);
        display.appendChild(li);
    } catch (error) {
        console.log(error);
    }
}

getUserData();
