let students = [];

function add() {

    let name = document.getElementById("name").value;

    if (name == "") {
        alert("Enter Name");
        return;
    }

    students.push(name);

    document.getElementById("list").innerHTML +=
        "<li>" + name + "</li>";

    document.getElementById("name").value = "";
}

function search() {

    let name = document.getElementById("search").value;

    if (students.includes(name)) {
        document.getElementById("result").innerHTML = "Found";
    }
    else {
        document.getElementById("result").innerHTML = "Not Found";
    }
}