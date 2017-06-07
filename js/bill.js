$( document ).ready(function() {
    if(localStorage.getItem("serviceProvider")) {
        var provider = JSON.parse(localStorage.getItem("serviceProvider"));

        $(".wrapper h1.title")[0].innerHTML = provider.title;
        $(".wrapper p.description")[0].innerHTML = provider.description;

        if(localStorage.getItem("users")) {
            var users = JSON.parse(localStorage.getItem("users"));
            users.forEach(createItem);
        }
    } else {
        $(".wrapper h1.title")[0].innerHTML = "No registered service providers";
    }
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
    console.log("Address: ", );
    var contract = getContract();
    var address = $(e.target).attr('id');
    contract.bill(address, 
        function(err, transactionHash) {
            if(err) {
                alert(err);
            } else {
                alert("Billing submitted")
                console.log(transactionHash);
            }
        }
    );
}

function getProvider() {
    var provider = JSON.parse(localStorage.getItem("serviceProvider"));
    return provider;
}

function getContract() {
    var abi = JSON.parse(localStorage.getItem("abi"));
    var provider = getProvider();
    var sampleContract = web3.eth.contract(abi);
    var contract = sampleContract.at(provider.address);
    return contract;
}
