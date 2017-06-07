$( document ).ready(function() {
	document.getElementById("submitButton").addEventListener("click", submit);
});

function submit() {
    var title = document.getElementById("titleInput").value;
    var description = document.getElementById("descriptionTextarea").value;

    //submit
    console.log(title, description);
}
