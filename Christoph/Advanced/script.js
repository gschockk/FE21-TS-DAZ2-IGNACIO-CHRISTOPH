// @ts-check
var imgPath = 'img/gtr.png';
var date = new Date();
var Vehicles = /** @class */ (function () {
    function Vehicles(brand, typ, kilometers, number_of_seats, year_of_production) {
        this.brand = brand;
        this.typ = typ;
        this.kilometers = kilometers;
        this.number_of_seats = number_of_seats;
        this.year_of_production = year_of_production;
    }
    Vehicles.prototype.msg = function () {
        // a card with a nested accordion --> Bootstrap
        return "\n        <div class=\"card mycard\">\n            <img src=\"" + imgPath + "\" class=\"card-img-top\" alt=\"" + this.brand + "\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">" + this.brand + " " + this.typ + "</h5>\n                <p class=\"card-text\"></p>\n                <div id=\"accordion\">\n                    <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingOne\">\n                        <h5 class=\"mb-0\">\n                            <button class=\"btn btn-primary collapsed\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                            More Details\n                            </button>\n                        </h5>\n                        </div>\n                        <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                        <div class=\"card-body\">\n                            <p class=\"card-text\">Kilometers: <strong>" + nissan.kilometers + "</strong></p>\n                            <p class=\"card-text\">Seats: <strong>" + nissan.number_of_seats + "</strong></p>\n                            <p class=\"card-text\">Year of production: <strong>" + nissan.year_of_production + "</strong></p>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>";
    };
    return Vehicles;
}());
var nissan = new Vehicles('Nissan', 'GT-R', 125000, 4, date);
document.getElementById('demo').innerHTML += "" + nissan.msg();
