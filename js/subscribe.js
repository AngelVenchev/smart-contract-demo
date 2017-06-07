$(document).ready(function() {
	var data = {
		address: "0x123123123",
	    title: "Title 123",
	    description: "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eleifend elementum. Vestibulum at lectus sollicitudin orci elementum luctus.",
	    price: 12
	};

	$(".wrapper h1.title")[0].innerHTML = data.title;
	$(".wrapper p.description")[0].innerHTML = data.description;
	$(".wrapper .footer .price")[0].innerHTML = "Price: " + data.price + "Eth";

	$("#subscribeButton").attr("data-address", data.address);
	$("#subscribeButton").on("click", subscribe);
})

function subscribe(e, item) {
    console.log("Address: ", $(e.target).attr('data-address'));
}
