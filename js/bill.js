$( document ).ready(function() {
    // Get from local data storage
    var data = {
        title: "Title 123",
        description: "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eleifend elementum. Vestibulum at lectus sollicitudin orci elementum luctus."
    };
    $(".wrapper h1.title")[0].innerHTML = data.title;
    $(".wrapper p.description")[0].innerHTML = data.description;

    var users = [
        { name: "Alice", address: "0x123" }, 
        { name: "Carol", address: "0x456" }
    ];
    users.forEach(createItem);
    
});

function createItem(item) {
    $("#usersList ul")[0].innerHTML +=
        '<li class="user list-group-item">' +
            item.name +
            '<button id=' + 
            item.address +
            ' class="btn bill">Bill</button>' +
        '</li>';
        
    setTimeout(function() { $("#" + item.address.toString()).on("click", billUser); }, 0);
}

function billUser(e, item) {
    console.log("Address: ", $(e.target).attr('id'));
}
