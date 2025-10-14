let membersArray = [
    { id: 1, name: "Michael Palin" },
    { id: 2, name: "John Cleese" },
    { id: 3, name: "Eric Idle" },
    { id: 4, name: "Terry Gilliam" },
    { id: 5, name: "Terry Jones" },
    { id: 6, name: "Graham Chapman" }
];
document.getElementById("load").addEventListener("click", function () {

    membersArray.forEach(_member => {
        const xhr = new XMLHttpRequest(); // Creates a new request
        xhr.open("GET", "data.json", true); // Prepares the request above
        xhr.onload = function () {
            if (xhr.status === 200) {
                let membersArray = JSON.parse(xhr.responseText);
                document.getElementById("cards").innerHTML = membersArray.map(member =>
                    `<p><strong>${member.name}</strong> - ${member.relationship} - ${member.contact} - ${member.hobbies.join(", ")} - (${member.age} AGE)</p>`
                ).join('');
            }

        };
        xhr.send(membersArray);
    });
});