// @ts-check
const imgPath: String = 'img/gtr.png';
const date = new Date()

class Vehicles {
    brand: String;
    typ: String;
    kilometers: Number;
    number_of_seats: Number;
    year_of_production: Date;

    constructor(brand:String, typ:String, kilometers:Number, number_of_seats:Number, year_of_production:Date) {
        this.brand = brand;
        this.typ = typ;
        this.kilometers = kilometers;
        this.number_of_seats = number_of_seats;
        this.year_of_production = year_of_production;
    }

    msg() {
        // a card with a nested accordion --> Bootstrap
        return `
        <div class="card mycard">
            <img src="${imgPath}" class="card-img-top" alt="${this.brand}">
            <div class="card-body">
                <h5 class="card-title">${this.brand} ${this.typ}</h5>
                <p class="card-text"></p>
                <div id="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-primary collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            More Details
                            </button>
                        </h5>
                        </div>
                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            <p class="card-text">Kilometers: <strong>${nissan.kilometers}</strong></p>
                            <p class="card-text">Seats: <strong>${nissan.number_of_seats}</strong></p>
                            <p class="card-text">Year of production: <strong>${nissan.year_of_production}</strong></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
}

var nissan = new Vehicles('Nissan', 'GT-R', 125000, 4, date);
document.getElementById('demo').innerHTML += `${nissan.msg()}`;