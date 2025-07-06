// GitHub Repo: https://github.com/jonathandodson12-prog/cs81-module4a-reviewtracker

// Weekly reading log
// Each object represents one day's reading data with book title and time spent
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/**
 * Adds a new book entry to the reading log.
 * Inputs: day (string), book (string), minutes (number)
 * Output: adds the new entry to the readingLog array.
 */
function addReadBook(day, book, minutes) {
  // Create an object with the new reading data
  const newEntry = { day, book, minutes };
  // Add the object to the readingLog array
  readingLog.push(newEntry);
}

/**
 * Calculates the total number of minutes read during the week.
 * Input: the reading log array.
 * Output: returns the total sum of minutes from all entries.
 */
function totalReadingMinutes(log) {
  let total = 0;
  // Loop through each entry in the reading log
  for (let entry of log) {
    // Add the minutes for each entry to the total
    total += entry.minutes;
  }
  return total;
}

/**
 * Finds the book read the most number of times.
 * Input: reading log array.
 * Output: the name of the most frequently read book.
 */
function mostReadBook(log) {
  const bookCounts = {};
  // Count how many times each book appears
  for (let entry of log) {
    // If it's not in bookCounts yet, start at 1
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      // Otherwise, increment the count
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  // Find the book with the highest count
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }

  // SUGGESTION: Consider handling ties in case two books are read equally often
  return maxBook;
}

/**
 * Displays a summary of reading activity for each day.
 * Input: reading log array.
 * Output: console.logs each entry showing the day, book, and minutes.
 */
function printDailySummary(log) {
  // Print each day's reading data in a readable format
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
// Add a reading entry for Saturday
addReadBook("Saturday", "Dune", 50);

// Print all daily reading entries
printDailySummary(readingLog);

// Show total minutes read
console.log("Total minutes read:", totalReadingMinutes(readingLog));

// Show the most frequently read book
console.log("Most read book:", mostReadBook(readingLog));

// TEST CASE: Add a new Sunday entry and print summary again
addReadBook("Sunday", "The Hobbit", 35);
printDailySummary(readingLog);
