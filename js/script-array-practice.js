//STEP 1
// Create an array of movies
let favoriteMovies = ['Inception', 'The Matrix', 'Interstellar', 'The Dark Knight', 'Pulp Fiction']
// Display the second movie in the array
console.log(favoriteMovies[1])



//STEP 2
// Declare an array called 'movies' with a length of 5
let movies = new Array(5)
// Assign favorite movies to each index
movies[0] = 'Inception'
movies[1] = 'The Matrix'
movies[2] = 'Interstellar'
movies[3] = 'The Dark Knight'
movies[4] = 'Pulp Fiction'
// Display the first movie in the array
console.log(movies[0])



//STEP 3
// Declare an array called 'movies' with a length of 5
let movies = new Array(5)
// Assign favorite movies to each index
movies[0] = 'Inception'
movies[1] = 'The Matrix'
movies[2] = 'Interstellar'
movies[3] = 'The Dark Knight'
movies[4] = 'Pulp Fiction'
// Add a new movie into the 3rd position
movies.splice(2, 0, 'The Godfather')
// Display the first movie in the array
console.log(movies[0])



//STEP 4
// Declare an array called 'movies' using literal notation
let movies = ['Inception', 'The Matrix', 'Interstellar', 'The Dark Knight', 'Pulp Fiction']
// Use the delete operator to remove the first movie in the array
delete movies[0]
// Use the console to display the contents of the array
console.log(movies)




//STEP 5
// Declare an array called 'movies' using literal notation
let movies = ['Inception', 'The Matrix', 'Interstellar', 'The Dark Knight', 'Pulp Fiction', 'The Godfather', 'The Lord of the Rings']
// Use a for/in loop to iterate through the array and display each movie
for (let index in movies) {
  console.log(movies[index])
}





//STEP 6
// Declare an array called 'movies' using literal notation
let movies = ['Inception', 'The Matrix', 'Interstellar', 'The Dark Knight', 'Pulp Fiction', 'The Godfather', 'The Lord of the Rings']
// Use a for/of loop to iterate through the array and display each movie
   for (let movie of movies) {
    console.log(movie)}




//STEP 7
// Declare an array called 'movies' using literal notation
let movies = ['Inception', 'The Matrix', 'Interstellar', 'The Dark Knight', 'Pulp Fiction', 'The Godfather', 'The Lord of the Rings']
// Sort the array
movies.sort()
// Use a for/of loop to iterate through the array and display each movie
for (let movie of movies) {
    console.log(movie)}






//STEP 8
// Declare an array called 'movies' using literal notation
let movies = ['Inception', 'The Matrix', 'Interstellar', 'The Dark Knight', 'Pulp Fiction', 'The Godfather', 'The Lord of the Rings']
// Declare a new array called 'leastFavMovies'
let leastFavMovies = ['Movie 43', 'The Room', 'Birdemic']
// Display both arrays in the console window with the specified formatting
console.log('Movies I like:\n')
for (let movie of movies) {
  console.log(movie)
}
console.log('\nMovies I regret watching:\n')
for (let movie of leastFavMovies) {
  console.log(movie)}




//STEP 9
// Declare an array called 'movies' using literal notation
let movies = ['Inception', 'The Matrix', 'Interstellar', 'The Dark Knight', 'Pulp Fiction', 'The Godfather', 'The Lord of the Rings']
// Declare a new array called 'leastFavMovies'
 leastFavMovies = ['Movie 43', 'The Room', 'Birdemic']
// Merge the two arrays into a single array called 'movies'
movies = movies.concat(leastFavMovies)
// Sort the array in reverse order
movies.sort().reverse()
// Use the console to display the list in reverse sorted order
console.log(movies)




//STEP 10
// Declare an array called 'movies' using literal notation
let movies = ['Inception', 'The Matrix', 'Interstellar', 'The Dark Knight', 'Pulp Fiction', 'The Godfather', 'The Lord of the Rings']
// Declare a new array called 'leastFavMovies'
 leastFavMovies = ['Movie 43', 'The Room', 'Birdemic']
// Merge the two arrays into a single array called 'movies'
movies = movies.concat(leastFavMovies)
// Sort the array in reverse order
movies.sort().reverse()
// Use an array function to return just the last item in the array
let lastMovie = movies[movies.length - 1]
// Display it within the console window
console.log(lastMovie)



//STEP 11
// Declare an array called 'movies' using literal notation
let movies = ['Inception', 'The Matrix', 'Interstellar', 'The Dark Knight', 'Pulp Fiction', 'The Godfather', 'The Lord of the Rings']
// Declare a new array called 'leastFavMovies'
 leastFavMovies = ['Movie 43', 'The Room', 'Birdemic']
// Merge the two arrays into a single array called 'movies'
movies = movies.concat(leastFavMovies)
// Sort the array in reverse order
movies.sort().reverse()
// Use a method to return just the first item in the array
let firstMovie = movies[0]
// Display it within the console window
console.log(firstMovie)





//STEP 12
// Declare an array called 'movies' using literal notation
let movies = ['Inception', 'The Matrix', 'Interstellar', 'The Dark Knight', 'Pulp Fiction', 'The Godfather', 'The Lord of the Rings']
// Declare a new array called 'leastFavMovies'
 leastFavMovies = ['Movie 43', 'The Room', 'Birdemic']
// Merge the two arrays into a single array called 'movies'
movies = movies.concat(leastFavMovies)
// Sort the array in reverse order
movies.sort().reverse()
// Array of liked movies to replace the not liked ones
let likedMoviesReplacement = ['The Grand Budapest Hotel', 'Whiplash', 'Moonlight', 'La La Land', 'Her']
// Find the indices of the movies that are not liked
let notLikedMovieIndices = []
for (let i = 0; i < movies.length; i++) {
  if (leastFavMovies.includes(movies[i])) {
    notLikedMovieIndices.push(i)
  }
}
// Replace the not liked movies with liked ones using the indices
for (let i = 0; i < notLikedMovieIndices.length; i++) {
  if (i < likedMoviesReplacement.length) {
    movies[notLikedMovieIndices[i]] = likedMoviesReplacement[i]
  }
}
// Display the updated array
console.log(movies)





//STEP 13
// Create a multi-dimensional array with favorite movies and their rankings
let movies = [
    ['Inception', 1]
    ['The Matrix', 2]
    ['Interstellar', 3]
    ['The Dark Knight', 4]
    ['Pulp Fiction', 5]
  ]
  // Function to filter out movie names based on their primitive data type (string)
  function filterMovieNames(item) {
    return typeof item[0] === 'string'
  }
  // Filter out and display only the movie names
  let movieNames = movies.filter(filterMovieNames).map(movie => movie[0])
  // Display the movie names
  console.log(movieNames)



  
  
//STEP 14
// Create a string array called 'employees' using literal notation
let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally']
// Create an anonymous function called 'showEmployee'
let showEmployee = function(employeesArray) {
  console.log("Employees:\n")
  for (let employee of employeesArray) {
    console.log(employee.toUpperCase())
  }
}
// Call the function, passing in the 'employees' array
showEmployee(employees)




//STEP 15
function filterValues(arr) {
    return arr.filter(value => value || value === true)
  }
  // Test the function
  console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
  


//STEP 16
function getRandomItem(arr) {
  // Get a random index value
  const randomIndex = Math.floor(Math.random() * arr.length)
  // Return the array item at the random index
  return arr[randomIndex]
}
// Example usage:
 numericArray = [5, 9, 15, 34, 48, 64, 79, 101, 150, 200]
let randomItem = getRandomItem(numericArray)
console.log(randomItem)




//STEP 17
function getLargestNumber(arr) {
    return Math.max(...arr)
  }
  
  // Example usage:
  let numericArray = [5, 9, 15, 34, 48, 64, 79, 101, 150, 200]
  let largestNumber = getLargestNumber(numericArray)
  console.log(largestNumber)
  