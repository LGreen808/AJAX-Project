document.getElementById("load").addEventListener("click", function(){
 const xhr = new XMLHttpRequest(); // Creates a new request
 xhr.open("GET","data.JSON", true); // Prepares the request above
    xhr.onload = function(){
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            document.getElementById("output").innerHTML = 
            `<p><strong>${data.name}</strong> - ${data.relationship} - ${data.contact} - ${data.hobbies} - (${data.age} AGE)</p>`;
        }
    };
    xhr.send();
});