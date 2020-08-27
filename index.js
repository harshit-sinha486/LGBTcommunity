function addnew(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.className="list-group-item";
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something to post!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

}
