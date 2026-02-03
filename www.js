let form = document.getElementById("managementForm");
let tableBody = document.getElementById("tableBody");

let managementData = JSON.parse(localStorage.getItem("management")) || [];

displayData();

// CREATE & UPDATE
form.addEventListener("submit", function(e){
    e.preventDefault();

    let data = {
        goal: goal.value,
        budget: budget.value,
        theme: theme.value,
        price: price.value,
        permission: permission.value,
        risk: risk.value
    };

    let editIndex = document.getElementById("editIndex").value;

    if(editIndex === ""){
        managementData.push(data); // CREATE
    }else{
        managementData[editIndex] = data; // UPDATE
        editIndex.value = "";
    }

    localStorage.setItem("management", JSON.stringify(managementData));
    form.reset();
    displayData();
});

// READ
function displayData(){
    tableBody.innerHTML = "";
    managementData.forEach((item, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${item.goal}</td>
                <td>₹${item.budget}</td>
                <td>${item.theme}</td>
                <td>₹${item.price}</td>
                <td>${item.permission}</td>
                <td>${item.risk}</td>
                <td>
                    <button class="action-btn edit" onclick="editData(${index})">Edit</button>
                    <button class="action-btn delete" onclick="deleteData(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// EDIT
function editData(index){
    let item = managementData[index];
    goal.value = item.goal;
    budget.value = item.budget;
    theme.value = item.theme;
    price.value = item.price;
    permission.value = item.permission;
    risk.value = item.risk;
    document.getElementById("editIndex").value = index;
}

// DELETE
function deleteData(index){
    if(confirm("Are you sure?")){
        managementData.splice(index,1);
        localStorage.setItem("management", JSON.stringify(managementData));
        displayData();
    }
}
