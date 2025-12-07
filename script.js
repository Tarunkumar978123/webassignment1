$(document).ready(function () {
    $("#biodataForm").submit(function (event) {
        event.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        let gender = $("#gender").val();
        let address = $("#address").val();

        $("#output").html(`
            <h2>Submitted Bio-Data</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Address:</strong> ${address}</p>
        `);
    });
});