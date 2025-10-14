document.getElementById("load").addEventListener("click", function () {
    const xhr = new XMLHttpRequest(); // Creates a new request
    xhr.open("GET", "data.json", true); // Prepares the request above
    xhr.onload = function () {
        if (xhr.status === 200) {
            const membersArray = JSON.parse(xhr.responseText);
            document.getElementById("output").innerHTML = membersArray.map(member =>
                `<p><strong>${member.name}</strong> - ${member.relationship} - ${member.contact} - ${member.hobbies.join(", ")} - (${member.age} AGE)</p>`
            ).join('');
        }
    
    };
     xhr.send();
});