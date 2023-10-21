const books = [
    {title: 'Book One', genre: 'Comics', publish: 2010, edition: 2010},
    {title: 'Book Two', genre: 'Non-fiction', publish: 1989, edition: 2010},
    {title: 'Book Three', genre: 'fiction', publish: 1989, edition: 2010},
    {title: 'Book Four', genre: 'Non-fiction', publish: 2001, edition: 2010},
    {title: 'Book Five', genre: 'History', publish: 1989, edition: 2010},
    {title: 'Book Six', genre: 'History', publish: 1989, edition: 2010},
    {title: 'Book Seven', genre: 'Non- fiction', publish: 2005, edition: 2000}
]

let userBooks = books.filter( (bk) => bk.genre === 'History' )

// userBooks = books.filter( (bk) => bk.publish >= 2000 )
// console.log(userBooks);

userBooks = books.filter( (bk) => (bk.publish >= 2000 && bk.genre === 'Comics') )

console.log(userBooks);



