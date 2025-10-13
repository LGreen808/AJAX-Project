document.getElementById("load").addEventListener("click", function(){
 const xhr = new XMLHttpRequest(); // Creates a new request
 xhr.open("GET","data.JSON", true); // Prepares the request above
    xhr.onload = function(){
        if (xhr.status === 200) {
            const membersArray = JSON.parse(xhr.responseText);
            console.log(membersArray);
            document.getElementById("output").innerHTML = membersArray.map(members => 
                `<p><strong>${members.name}</strong> - ${members.relationship} - ${members.contact} - ${members.hobbies} - (${members.age} AGE)</p>`
            ).join('');
        }
    };
    xhr.send();
});