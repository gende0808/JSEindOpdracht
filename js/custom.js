function isEven(l) {
    return l % 2 == 0
}

$(document).ready(function () {
    $(".btn-floating").on("click", function (l) {
        l.preventDefault();
        let e = $("i", this).attr("class");
        $("i", ".mainbutton").removeClass().addClass(e);
        let a = $("i", this).attr("id");
        $(".mainbutton").attr("id", a)
    })
}), $(document).ready(function () {
    $("#search").on("submit", function (l) {
        l.preventDefault();
        let e = $("#searchFor").val(), a = $(".mainbutton").attr("id");
        $.ajax({
            url: "browserHandler.php",
            cache: !1,
            method: "POST",
            dataType: "json",
            data: {search: e, type: a},
            success: function (l) {
                if ("wiki" === a) {
                    $("#panels").empty();
                    let e = 0;
                    for (let a of l.search) isEven(e) && $("#panels").append("<div class='row'>"), $("#panels").append("<div class='col s12 m12 l6'><div class='card teal white-text'><div class='card-header teal darken-3'><span class='card-title'>" + a.title + "</span></div><div class='card-content'>" + a.snippet + "</div></div></div>"), isEven(e) || $("#panels").append("</div>"), e++
                }
                if ("rune" === a) {
                    $("#panels").empty();
                    let e = 0;
                    for (let a of l) isEven(e) && $("#panels").append("<div class='row'>"), $("#panels").append("<div class='col s12 m12 l6'><ul class='collapsible'><li><div class='collapsible-header'>" + a.name + "</div><div class='collapsible-body'><ul class='collection'><li class='collection-item'>low alch: " + a.lowalch + "</li><li class='collection-item'>high alch: " + a.highalch + "</li><li class='collection-item'>GE Price: " + a.cost + "</li></ul></div></li></ul></div>"), isEven(e) || $("#panels").append("</div>"), e++;
                    $(".collapsible").collapsible()
                }
            }
        })
    })
}), document.addEventListener("DOMContentLoaded", function () {
    var l = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(l, {direction: "left", hoverEnabled: !1})
}), $(document).ready(function () {
    $(".collapsible").collapsible(), $(".modal").modal()
});
