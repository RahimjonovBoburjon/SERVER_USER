const body = document.querySelector('#body');
const select = document.querySelector('#name');
const temp = document.querySelector('#temp').content;
const row = temp.querySelector("#row");
const URL = "https://jsonplaceholder.typicode.com/users"

const getDate = async function (link) {
    const resp = await fetch(link);
    const data = await resp.json();

    data.forEach((user) => {
        const rowClone = row.cloneNode(true);
        const userId = rowClone.querySelector(".user-id");
        const userNames = rowClone.querySelector(".user-name");
        const userEmails = rowClone.querySelector(".user-email");
        const userWebs = rowClone.querySelector(".user-web");
        userId.textContent = user.id;
        userNames.textContent = user.name;
        userEmails.textContent = user.email;
        userWebs.textContent = user.website;
        const option = document.createElement("option") 
        option.classList.add("option")
        option.textContent = user.id;
        select.appendChild(option)
        userEmails.setAttribute("href", `mailto:${user.email}`);
        userWebs.setAttribute("href", `https://${user.website}`);
        body.appendChild(rowClone);

        function numbers(user) {
            select.addEventListener("change", () => {
                if (select.value == user) {
                    body.innerHTML = ""
                    body.appendChild(rowClone);
                } else if (select.value == "all") {
                    body.appendChild(rowClone);
                }
            });
        }
        numbers(user.id)

        select.addEventListener("change", value);
        function value() {
            console.log(select.value);
        };
    });
};
getDate(URL);