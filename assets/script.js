$(Document).ready(function() {

    $('#intro').fadeIn(1000).delay(2000).fadeOut(function() {

        $('#load').fadeIn(1000)
        $('#close').fadeIn(1000)

    });



});

function finished() {

    $('#load').fadeOut(function() {

        $(".loader").fadeOut();
        $('#done').fadeIn(1000).delay(2000).fadeOut(function() {

            $('#close').fadeIn(1000)

        });

    });

};

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}