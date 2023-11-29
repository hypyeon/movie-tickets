# Movie Tickets 🎬
by [Hayeong Pyeon](https://www.hayeong.website)

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Description](#description)
3. [Setup Requirements](#setup-requirements)
4. [Link](#link)
5. [Tests](#tests)
6. [Known Bugs](#known-bugs)
7. [License](#license)

## Technologies used
- HTML5
- SCSS
- JavaScript
- Test Driven Development

## Description
- This is an in-class project provided by Epicodus. 
- This project is to review 'JS Objects' course. 
- This page contains 'Tests' section to practice TDD. 

## Setup Requirements
* Clone this repository to your desktop.
* Navigate to the top level of the directory. 
* Open `index.html` in your browser. 

## Link
https://hypyeon.github.io/movie-tickets/ 

## Tests
```
Describe: getMovieTitle(movie);  
 
Test: "The parameter, value of movie, will be returned as the movie title that's shown in UI. This title has also been stored in Movie object.";  
Code: getMovieTitle('marvels');  
Expected: 'The Marvels';  

Describe: getPrice(movie);

Test: "The parameter, value of movie, will be returned as the movie ticket price that's shown in UI. This title has also been stored in Movie object.";  
Code: getPrice('marvels');  
Expected: 12.75;  

Describe: getDiscount(time, age);

Test: "If value of time is 'morning', it will apply 10% discount, and 20% discount is applied if value of age is between 7 and 12. 40% discount is applied if value of age is 60 and above. The return value of this function will be both discount amount multiplied.";  
Code: getDiscount('morning', 10);  
Expected: 0.72;  

Test: "If time value is not 'morning' and the age is not between 7 and 12 nor 60 or above, the discount is not applied thus the return value will be 1.";  
Code: getDiscount('afternoon', 20);  
Expected: 1;   
```
## Known Bugs
- No issues found as of the last update. Feel free to [reach out](mailto:hayeong.pyeon@gmail.com) if encountered any.
- Last updated: November 29, 2023

## License
[MIT](/LICENSE.txt)  
Copyright © 2023 Hayeong Pyeon