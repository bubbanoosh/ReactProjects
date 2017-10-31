
// Action Creators:
    // Need to return an ACTION
    // Are an object with a TYPE property

// selectBook is an ActionCreator
export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
    //console.log('Book selected:', book.title);
}