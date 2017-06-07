$(document).ready(function() {
	if(localStorage.getItem("serviceProvider")) {
        var contract = getContract();
        contract.subscribers(web3.eth.defaultAccount,
        	function(err, subscriber) {
				var provider = JSON.parse(localStorage.getItem("serviceProvider"));

		        $(".wrapper h1.title")[0].innerHTML = provider.title;
		        $(".wrapper p.description")[0].innerHTML = provider.description;


    			var price = web3.fromWei(subscriber[0].toString())
        		$(".wrapper .footer .price")[0].innerHTML = "Debt: " + price + "Eth";

        		$("#payButton").attr("data-address", provider.address);
				$("#payButton").on("click", pay);
        	});

    } else {
        $(".wrapper h1.title")[0].innerHTML = "No registered service providers";
    }
});

function pay(e, item) {
	var contract = getContract();
	contract.subscribers(web3.eth.defaultAccount,
    	function(err, subscriber) {
			var debt = web3.fromWei(subscriber[0].toString())
			contract.pay.sendTransaction(
				{ 
					from: web3.eth.defaultAccount, 
					value: web3.toWei(debt) 
				},
				function(err, txHash) {
					if(err) {
						alert(err);
					} else {
						console.log(txHash);
						alert("Successful payment");
					}
				})
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