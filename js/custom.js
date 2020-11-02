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
                            "<span class='card-title'>" + o.title + "</span>" +
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
                    for(let o of response) {
                        if (isEven(counter)) {
                            $('#panels').append("<div class='row'>");
                        }
                        $("#panels").append("" +
                            "<div class='col s12 m12 l6'>" +
                            "<ul class='collapsible'>" +
                            "<li>" +
                            "<div class='collapsible-header'>" +o.name +
                            "</div>" +
                            "<div class='collapsible-body'>" +
                            "<ul class='collection'>" +
                            "<li class='collection-item'>low alch: "+o.lowalch+"</li>" +
                            "<li class='collection-item'>high alch: "+o.highalch+"</li>" +
                            "<li class='collection-item'>GE Price: "+o.cost+"</li>" +
                            "</ul>" +
                            "</div>" +

                            "</li>"+
                            "</ul>" +
                            "</div>");
                        if (!isEven(counter)) {
                            $('#panels').append("</div>");
                        }
                        counter++;
                    }
                    $('.collapsible').collapsible();
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
$(document).ready(function(){
    $('.collapsible').collapsible();
    $('.modal').modal();
});
