document.getElementById("load1").addEventListener("click", function(){
 const xhr = new XMLHttpRequest(); // Creates a new request
 xhr.open("GET","data.json", true); // Prepares the request above
    xhr.onload = function(){
        if (xhr.status === 200) {
            const membersArray = JSON.parse(xhr.responseText);
            console.log(membersArray);
            document.getElementById("output1").innerHTML = membersArray.map(members => 
                `<p><strong>${members.name}</strong> - ${members.relationship} - ${members.contact} - ${members.hobbies} - (${members.age} AGE)</p>`
            ).join('');
        }
    };
    document.getElementById("load2").addEventListener("click", function(){
 const xhr = new XMLHttpRequest(); // Creates a new request
 xhr.open("GET","data.json", true); // Prepares the request above
    xhr.onload = function(){
        if (xhr.status === 200) {
            const membersArray = JSON.parse(xhr.responseText);
            console.log(membersArray);
            document.getElementById("output2").innerHTML = membersArray.map(members => 
                `<p><strong>${members.name}</strong> - ${members.relationship} - ${members.contact} - ${members.hobbies} - (${members.age} AGE)</p>`
            ).join('');
        }
    };
document.getElementById("load3").addEventListener("click", function(){
 const xhr = new XMLHttpRequest(); // Creates a new request
 xhr.open("GET","data.json", true); // Prepares the request above
    xhr.onload = function(){
        if (xhr.status === 200) {
            const membersArray = JSON.parse(xhr.responseText);
            console.log(membersArray);
            document.getElementById("output3").innerHTML = membersArray.map(members => 
                `<p><strong>${members.name}</strong> - ${members.relationship} - ${members.contact} - ${members.hobbies} - (${members.age} AGE)</p>`
            ).join('');
        }
    };
    
});