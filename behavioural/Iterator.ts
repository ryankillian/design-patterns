/*

The Iterator design pattern is useful in situations where you need to provide a way to traverse through a collection of objects without exposing the underlying implementation. Here are some examples of where the Iterator pattern could be used:

Navigating through different types of collections: You may have various types of collections (arrays, linked lists, trees, etc.), and you want to provide a consistent way to traverse through the elements in each collection, regardless of the underlying data structure.

Filtering elements in a collection: You can create an iterator that filters elements based on certain conditions, allowing you to traverse only the elements that meet those conditions.

Accessing elements in a specific order: The iterator can be designed to traverse elements in a specific order, such as alphabetical, numerical, or based on any other custom sorting logic.

Paginating a large dataset: When dealing with a large dataset, you can create an iterator that retrieves and processes a certain number of elements at a time, allowing you to efficiently manage memory and performance.

Traversing a complex data structure: If you have a complex data structure like a graph or a tree, an iterator can provide a convenient way to traverse the elements while encapsulating the traversal logic.

These examples highlight situations where the Iterator pattern can be useful in providing a consistent, easy-to-use interface for traversing collections or complex data structures.

*/

interface MyIterator<T> {
  next(): T;
  hasNext(): boolean;
}

interface Aggregator<T> {
  createIterator(): MyIterator<T>;
}

class Book {
  constructor(public title: string, public author: string) {}
}

class BookCollection implements Aggregator<Book> {
  private books: Book[] = [];

  constructor(books: Book[]) {
    this.books = books;
  }

  createIterator(): MyIterator<Book> {
    return new BookIterator(this);
  }

  getItems(): Book[] {
    return this.books;
  }
}

class BookIterator implements MyIterator<Book> {
  private position: number = 0;
  constructor(private bookCollection: BookCollection) {}

  next(): Book {
    return this.bookCollection.getItems()[this.position++];
  }
  hasNext(): boolean {
    return this.position < this.bookCollection.getItems().length;
  }
}

const books: Book[] = [
  new Book("Book 1", "Author 1"),
  new Book("Book 2", "Author 2"),
];
const bookCollection: BookCollection = new BookCollection(books);
const bookIterator: MyIterator<Book> = bookCollection.createIterator();

while (bookIterator.hasNext()) {
  const book: Book = bookIterator.next();
  console.log(`Book: ${book.title}, Author: ${book.author}`);
}
