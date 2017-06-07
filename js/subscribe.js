$(document).ready(function() {
	if(localStorage.getItem("serviceProvider")) {
		var provider = JSON.parse(localStorage.getItem("serviceProvider"));

		$(".wrapper h1.title")[0].innerHTML = provider.title;
		$(".wrapper p.description")[0].innerHTML = provider.description;
		$(".wrapper .footer .price")[0].innerHTML = "Price: " + provider.price + "Eth";

		$("#subscribeButton").attr("data-address", provider.address);
		$("#subscribeButton").on("click", subscribe);
	} else {
		$(".wrapper h1.title")[0].innerHTML = "No registered service providers";
	}
	
})

function subscribe(e, item) {
	var contract = getContract();
	var provider = getProvider();
	var userName = "Angel"
	contract.subscribe(
		userName, 
		web3.toWei(provider.price, "Ether"),
		function(err, transactionHash) {
			if(err) {
				alert(err);
			} else {
				addUser(userName);
				alert("Subscription submitted")
				console.log(transactionHash);
			}
		});
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

function addUser(userName) {
	if(!localStorage.getItem("users")){
		localStorage.setItem("users", JSON.stringify([]));
	} 
	var users = JSON.parse(localStorage.getItem("users"));
	users.push({name: userName, address: web3.eth.defaultAccount });
	localStorage.setItem("users", JSON.stringify(users));
}
