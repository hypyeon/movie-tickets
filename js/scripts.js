function Movie(title, price) {
    this.title = title;
    this.price = price;
}
const marvels = new Movie('The Marvels', 12.75);
const minions = new Movie('Minions', 10.50);
const notebook = new Movie('Notebook', 9.25);

function Time(time, discount) {
    this.time = time;
    this.discount = discount;
}

const morning = new Time('9:30AM', 0.9);
const afternoon = new Time('4:15PM', 1);
const evening = new Time('7:00PM', 1)

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
function getMovieTitle(movie) {
    let movieTitle;
    if (movie === 'marvels') {
        movieTitle = marvels.title;
    } else if (movie === 'minions') {
        movieTitle = minions.title;
    } else if (movie === 'notebook') {
        movieTitle = notebook.title;
    }
    return movieTitle;
}
function getPrice(movie) {
    let price;
    if (movie === 'marvels') {
        price = marvels.price;
    } else if (movie === 'minions') {
        price = minions.price;
    } else if (movie === 'notebook') {
        price = notebook.price;
    }
    return price;
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
function getDiscount(time, age) {
    let timeDiscount;
    let ageDiscount;
    if (time === 'morning') {
        timeDiscount = 0.9;
    } else {
        timeDiscount = 1;
    }
    if (age <= 12) {
        ageDiscount = 0.8;
    } else if (age >= 60) {
        ageDiscount = 0.6;
    } else {
        ageDiscount = 1;
    }
    return timeDiscount * ageDiscount;
}
function discountEligibility(discountAmount) {
    if (discountAmount !== 1) {
        return 'Yes';
    } else {
        return 'No';
    }
};

function getSummary() {
    const movie = getMovie();
    const movieTitle = getMovieTitle(movie);
    const price = getPrice(movie);

    const time = getTime();
    const timeTitle = time.charAt(0).toUpperCase() + time.substr(1);

    const age = getAge();

    const discountAmount = getDiscount(time, age);
    const discount = discountEligibility(discountAmount);
    const totalPrice = price * discountAmount;
    const totalPriceFixed = parseFloat(totalPrice).toFixed(2);

    return `Your movie ticket summary: \n
    ${movieTitle} | ${timeTitle} | Discount: ${discount} \n
    Ticket Price: ${totalPriceFixed}`;
}

function formHandler() {
    const form = document.querySelector("form");
    const final = document.getElementById("final");
    const finalInfo = document.getElementById("finalInfo");
    form.addEventListener("submit", e => {
        e.preventDefault();
        final.classList.remove("hidden");
        finalInfo.innerText = getSummary();
    })
}

window.onload = () => {
    formHandler();
}