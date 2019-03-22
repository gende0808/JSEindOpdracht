$(document).ready(function () {
    $(".btn-floating").on("click", function (event) {
        event.preventDefault();
        let imageClass = $("i", this).attr("class");
        $("i", ".mainbutton").removeClass().addClass(imageClass);
        let category = $("i", this).attr('id');
        $(".mainbutton").attr('id', category);
    });
});


$(document).ready(function () {
    $("#search").on("submit", function (event) {
        event.preventDefault();
        let search = $("#searchFor").val();
        let type = $(".mainbutton").attr("id");
        let url = "browserHandler.php";
        $.ajax({
            url: url,
            cache: false,
            method: "POST",
            dataType: 'json',
            data: {
                search: search,
                type: type
            },
            success: function (response) {
                if (type === 'wiki') {
                    $("#panels").empty();
                    let counter = 0;
                    for (let o of response.search) {
                        if (isEven(counter)) {
                            $('#panels').append("<div class='row'>");
                        }
                        $("#panels").append("" +
                            "<div class='col s12 m12 l6'>" +
                            "<div class='card teal white-text'>" +
                            "<div class='card-header teal darken-3'>" +
                            "<span class='card-title'>" + type + "</span>" +
                            "</div>" +
                            "<div class='card-content'>" +
                            o.snippet +
                            "</div>" +
                            "</div>" +
                            "</div>");
                        if (!isEven(counter)) {
                            $('#panels').append("</div>");
                        }
                        counter++;
                    }
                }
                if (type === 'rune') {
                    $("#panels").empty();
                    let counter = 0;
                    $("#panels").append(
                        "<div class='col s12 m8 offset-m2 l6 offset-l3'>" +
                        "<div class='card teal white-text'>" +
                        "<div class='card-header teal darken-3'>" +
                        "<span class='card-title'> " + type + "</span>" +
                        "</div>" +
                        "<div class='card-content'>" +
                        response.item.name +
                        "<ul class='collapsible'>" +
                        "<li>" +
                        "<div class='collapsible-header black-text'>Moneys</div>" +
                        "<div class='collapsible-body'>stuff</div>" +
                        "</li>" +
                        "<li>" +
                        "<div class='collapsible-header black-text'>Moneys</div>" +
                        "<div class='collapsible-body'>stuff</div>" +
                        "</li>"+
                        "</ul>" +
                        "</div>" +
                        "</div>" +
                        "</div>"
                    );

                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'left',
        hoverEnabled: false
    });
});


//Used to check if a number is even/divisible by two.
function isEven(value) {
    if (value % 2 == 0)
        return true;
    else
        return false;
}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
});