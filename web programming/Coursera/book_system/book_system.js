let books = [];

function addBook(){
    const bookname = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pageNumber = document.getElementById('pagesNumber').value;

    if(bookname && authorName && bookDescription && !isNaN(pageNumber)){
    const book = {
        bookname : bookname,
        authorName : authorName,
        bookDescription : bookDescription,
        pageNumber : pageNumber,

    }
    books.push(book);
    displayBooks().

    clearInputs();
    
}
    else {
        alert("please fill all fields")
    }
}

function displayBooks(){
    const bookList = books.map((book, index) => 
        `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>`
    
    );
    
    document.getElementById('books').innerHTML = bookList;

}
function clearInputs() {
            document.getElementById('bookName').value = '';
            document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
 }
function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // Remove old entry
    showbooks(); // Refresh list
  }
