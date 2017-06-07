$( document ).ready(function() {
	$("#submitButton").on("click", withdraw);
});

function withdraw() {
	var contract = getContract();
	contract.withdraw(
		function(err, txHsh) {
			if(err) {
				alert(err);
			} else {
				alert("Successful withdraw");
			}
		});
}

function getContract() {
    var abi = JSON.parse(localStorage.getItem("abi"));
    var provider = getProvider();
    var sampleContract = web3.eth.contract(abi);
    var contract = sampleContract.at(provider.address);
    return contract;
}

function getProvider() {
    var provider = JSON.parse(localStorage.getItem("serviceProvider"));
    return provider;
}
