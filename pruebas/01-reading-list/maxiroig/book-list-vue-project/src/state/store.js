import data from '@/data/dataBooks.json'
import { createStore } from 'vuex'

const state = {
  allLibrary: data.library,
  bookToShowDetails: null,
  libraryBooks: [],
  myListBooks:[],
}

const mutations = {
  setAllBooksInLibrary(state){
    state.libraryBooks = data.library
  },
  updateBookToShow(state, payload){
    state.bookToShowDetails = payload
  },
  addBookToMyList(state, payload){
    let book = null;
    book = state.libraryBooks.filter(item => item.book.ISBN === payload)
    state.myListBooks.push(book[0].book)

    state.libraryBooks = state.libraryBooks.filter(item => item.book.ISBN !== payload) 
  },
  removeBookFromMyList(state, payload){
    let book = null;
    book = state.myListBooks.filter(item => item.ISBN === payload)
    state.libraryBooks.push({book: book[0]})

    state.myListBooks = state.myListBooks.filter(item => item.ISBN !== payload) 
  },
  
}

const actions = {
  setAllBooksInLibrary (context) {
    context.commit("setAllBooksInLibrary")
  },
  bookToShow (context, payload) {
    context.commit("updateBookToShow", payload)
  },
  addBookToMyList (context, payload) {
    context.commit("addBookToMyList", payload)
  },
  removeBookFromMyList (context, payload) {
    context.commit("removeBookFromMyList", payload)
  }
}

const getters = {
  getBookById: (state) => (id) => {
    return state.allLibrary.filter(item => item.book.ISBN === id)
  },
}

export default createStore({
  state,
  getters,
  actions,
  mutations
})