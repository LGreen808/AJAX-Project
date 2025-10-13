document.getElementById("load").addEventListener("click", function(){
 const xhr = new XMLHttpRequest(); // Creates a new request
 xhr.open("GET","data.JSON", true); // Prepares the request above
    xhr.onload = function(){
        if (xhr.status === 200) {
            const members[] members = JSON.parse(xhr.responseText);
            console.log(members);
            document.getElementById("output").innerHTML = 
            `<p><strong>${members.name}</strong> - ${members.relationship} - ${members.contact} - ${members.hobbies} - (${members.age} AGE)</p>`;
        }
    };









    xhr.send();
});