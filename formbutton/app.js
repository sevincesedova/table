
document.getElementById("button").addEventListener("click", function(e) {
    e.preventDefault();
    createRow();
});

function createRow() {
    const tbody = document.querySelector("#table tbody");
    const rowCount = tbody.children.length + 1;
    const tr = document.createElement("tr");
    const cell1 = document.createElement("td");
    cell1.textContent = rowCount;
    tr.append(cell1);

    const cell2 = document.createElement("td");
    const input1 = document.createElement("input");
    input1.type = "text";
    input1.placeholder = "Ad";
    cell2.append(input1);
    tr.append(cell2);

    const cell3 = document.createElement("td");
    const input2 = document.createElement("input");
    input2.type = "text";
    input2.placeholder = "Soyad";
    cell3.append(input2);
    tr.append(cell3);

   const cell4=document.createElement("td");
   const input3 =document.createElement("input");
   input3.type="number"
   input3.placeholder="yas"
   cell4.append(input3)
   tr.append(cell4)

    const cell5 = document.createElement("td");
    
    const saveButton = document.createElement("button");
    saveButton.textContent = "yadda saxla";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    
    
    
    saveButton.addEventListener("click", function() {
        const ad = input1.value;
        const soyad = input2.value;
        const yas=input3.value
        cell2.textContent = ad;
        cell3.textContent = soyad;
        cell4.textContent=yas
        saveButton.textContent = "edit";
      

       
    });
    deleteButton.addEventListener("click", function() {
        tr.remove(); 
    });
    cell5.append(saveButton);
    cell5.append(deleteButton);
    cell5.append(createEditButton());
    
    tr.append(cell5);

    tbody.append(tr);
    
}
function createEditButton() {
    const editButton = document.createElement("button");
    editButton.addEventListener("click", function() {
    
    });
    return editButton;
}
