
const domain = 'http://127.0.0.1:8000/'


const drawBook = (book) => {
    return `
        <div class='book'>
            <p>Id: ${book.id}</p>
            <p>Название: ${book.name}</p>
            <p>Автор: ${book.author}</p>
            <p>Год: ${book.year}</p>
            <p>Цена: ${book.price}</p>
            <p>Кол-во: ${book.count}</p>
        </div>
    `
}


const getBooks = async () => {

    const booksBlock = document.querySelector('.books')


    let response = await fetch(domain + 'api/v1/getCreate/', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })

    let data = await response.json()
    booksBlock.innerHTML = data.map(e => drawBook(e)).join('')
    
} 


const createBook = async (event) => {
    event.preventDefault()

    const bookData = {
        name: document.getElementById('name').value,
        author: document.getElementById('author').value,
        year: document.getElementById('year').value,
        price: document.getElementById('price').value,
        count: document.getElementById('count').value,
    }

    let response = await fetch(domain + 'api/v1/getCreate/', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookData)
    })

    let data = await response.json()
    console.log(data)
}

const updateBook = async (event) => {
    event.preventDefault()

    const bookId = document.getElementById('updateId').value;

    const bookData = {
        name: document.getElementById('updateName').value,
        author: document.getElementById('updateAuthor').value,
        year: document.getElementById('updateYear').value,
        price: document.getElementById('updatePrice').value,
        count: document.getElementById('updateCount').value,
    }

    let response = await fetch(domain + 'api/v1/updateDelete/' + bookId + '/', {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookData)
    })

    if(response.status == 200){
        let data = await response.json()
        console.log(data)
    }
    else{
        console.log('При изменении данных книги произошла ошибка')
    }
} 


const deleteBook = async (event) => {
    event.preventDefault()

    const bookId = document.getElementById('deleteId').value;

    let response = await fetch(domain + 'api/v1/updateDelete/' + bookId + '/', {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    })

    if(!response.ok){
        console.log('ошибка при удалении книги')
    }
}