$(document).ready(function() {
	var data = {
		address: "0x123123123",
	    title: "Title 123",
	    description: "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eleifend elementum. Vestibulum at lectus sollicitudin orci elementum luctus.",
	    debt: 7
	};

	$(".wrapper h1.title")[0].innerHTML = data.title;
	$(".wrapper p.description")[0].innerHTML = data.description;
	$(".wrapper .footer .price")[0].innerHTML = "Debt: " + data.debt + "Eth";

	$("#payButton").attr("data-address", data.address);
	$("#payButton").on("click", pay);
});

function pay(e, item) {
	console.log("Address: ", $(e.target).attr('data-address'));
}
