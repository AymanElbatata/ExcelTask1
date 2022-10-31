let addresscounter = 0;
$("#addnewaddress").on("click", function(){
    addresscounter++;
  var newrow = `
  <tr>
  <td>
      <input class="form-control" type="text" id="address${addresscounter}" name="address" placeholder="Enter Address">
  </td>
  <td><button class="btn btn-success" onclick="editaddress(${addresscounter})">Edit</button> <button class="btn btn-danger" onclick="deleteaddress(${addresscounter})">Delete</button></td>
</tr>
  `
  let mytbody = document.getElementById("mytbody").innerHTML += newrow;
})


function editaddress(rowid){
 alert(rowid);
}

function deleteaddress(rowid){
    alert(rowid);
}
