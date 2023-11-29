function Movie(title, price) {
    this.title = title;
    this.price = price;
}
function Time(time) {
    this.time = time;
}
Time.prototype.discount = () => {
    if (this.time === 'moring') {
        return 0.9;
    } else {
        return 1;
    }
};
function Age(age) {
    this.age = age;
}
Age.prototype.discount = () => {
    if (this.age >= 7 && this.age <= 12) {
        return 0.8; 
    } else if (this.age <= 60) {
        return 0.6;
    } else {
        return 1;
    }
};

function getMovie() {
    const movies = document.querySelectorAll('input[type="radio"]');
    let selectedMovie;
    for (const movie of movies) {
        if (movie.checked) {
            selectedMovie = movie.value;
            break;
        }
    }
    return selectedMovie;
}
function getTime() {
    const times = document.getElementById("time");
    let selectedOption = times.options[times.selectedIndex];
    if (selectedOption) {
        return selectedOption.value;
    } else {
        return null;
    }
}
function getAge() {
    const age = document.getElementById("age").value;
    return age;
}
function getNumOfTicket() {
    const numOfTicket = document.getElementById("ticket").value;
    return numOfTicket;
}
function getDiscount() {
    const time = getTime();
    const age = getAge();
    const timeObj = new Time(time);
    const timeDiscount = timeObj.discount();
    const ageObj = new Age(age);
    const ageDiscount = ageObj.discount();
    return timeDiscount * ageDiscount;
}
function discountEligibility() {
    const discountAmount = getDiscount();
    if (discountAmount !== 1) {
        return 'Yes';
    } else {
        return 'No';
    }
};

function Ticket(movie, time, discount, price) {
    this.movie = movie;
    this.time = time;
    this.discount = discount;
    this.price = price;
}
Ticket.prototype.orderSummary = () => {
    return `This is your ticket summary: \n
    ${this.movie} | ${this.time} | Discount: ${this.discount} \n
    Final Price: ${this.price}`;
}

const marvels = new Movie('The Marvels', 12.75);
const minions = new Movie('Minions', 10.75);
const notebook = new Movie('Notebook', 8.50);

function getInfo() {
    const movie = getMovie();
    const time = getTime();
    const discount = getDiscount();
}