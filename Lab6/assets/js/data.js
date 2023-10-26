fetch("https://randomuser.me/api?results=5")
    .then(response => response.json())
    .then(data => {
        const users = data.results;
        users.forEach((user, index) => {
            const userDiv = document.createElement("div");
            userDiv.classList.add("user-info");

            const pictureUrl = user.picture.large;
            const firstName = user.name.first;
            const lastName = user.name.last;
            const country = user.location.country;
            const postcode = user.location.postcode;
            const phone = user.phone;

            userDiv.innerHTML = `
                        <img src="${pictureUrl}" class="opacity-animation w-100" alt="User Picture">
                        <p class="icon-animation">Name: ${firstName} ${lastName}</p>
                        <p>Country: ${country}</p>
                        <p>Postcode: ${postcode}</p>
                        <p>Phone: ${phone}</p>`;
            console.log(index);
            document.getElementById(`user${index}`).appendChild(userDiv);
        });
    })
    .catch(error => {
        console.error("Помилка отримання даних: ", error);
    });