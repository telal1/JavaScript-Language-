const books = ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice'];

function arrayToBookObjects(bookTitles) {
    return bookTitles.reduce((acc, title, index) => {
        acc[index] = title;
        return acc;
    }, {});
    }


const bookObject = arrayToBookObjects(books);

console.log(bookObject);

    for(let i=0; i<books.length;i++)
{
  console.log(`Book title at index ${i}: ${bookObject[i]}`);
}
