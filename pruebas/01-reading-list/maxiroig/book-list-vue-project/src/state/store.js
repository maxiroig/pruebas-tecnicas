import data from '@/data/dataBooks.json'
import { createStore } from 'vuex'
import createMultiTabState from 'vuex-multi-tab-state';

const state = {
  allLibrary: data.library,
  bookToShowDetails: null,
  libraryBooks: [],
  myListOfBooks:[],
  filteredLibraryBooks: [],
}

const mutations = {
  setStateByDefault(state){
    let library = [];
    data.library.forEach(item => {library.push(item.book)})
    state.libraryBooks = library
    state.allLibrary = library
    state.myListOfBooks = []
    state.filteredLibraryBooks = []
  },
  addBookToMyList(state, payload){
    let book = null;
    book = state.libraryBooks.filter(item => item.ISBN === payload)
    state.myListOfBooks.push(book[0])
    state.libraryBooks = state.libraryBooks.filter(item => item.ISBN !== payload) 
    state.filteredLibraryBooks = state.filteredLibraryBooks.filter(item => item.ISBN !== payload) 
  },
  removeBookFromMyList(state, payload){
    let book = null;
    book = state.myListOfBooks.filter(item => item.ISBN === payload)
    state.libraryBooks.push(book[0])
    state.filteredLibraryBooks.push(book[0])
    state.myListOfBooks = state.myListOfBooks.filter(item => item.ISBN !== payload) 
  },
  updateBookToShow(state, payload){
    state.bookToShowDetails = payload
  },
  updateFilteredLibraryBooks(state, payload){
    console.log("payload", payload);
    state.filteredLibraryBooks = [];
    payload.forEach(item => {
      state.filteredLibraryBooks.push(item);
    });
  },
  resetFilters(state){
    state.filteredLibraryBooks = []
  },
}

const actions = {
  setStateByDefault (context) {
    context.commit("setStateByDefault")
  },
  bookToShow (context, payload) {
    context.commit("updateBookToShow", payload)
  },
  addBookToMyList (context, payload) {
    context.commit("addBookToMyList", payload)
  },
  removeBookFromMyList (context, payload) {
    context.commit("removeBookFromMyList", payload)
  },
  updateFilteredLibraryBooks (context, payload) {
    context.commit("updateFilteredLibraryBooks", payload)
  },
  resetFilters (context) {
    context.commit("resetFilters")
  }
}

const getters = {
  getBookById: (state) => (id) => {
    return state.libraryBooks.filter(item => item.ISBN === id)
  },
  getBookToShowDetails: (state) => {
    return state.bookToShowDetails
  },
  getLibraryBooks: (state) => {
    return state.libraryBooks
  },
  getMyListOfBooks: (state) => {
    return state.myListOfBooks
  },
  getFilteredLibrary: (state) => {
    return state.filteredLibraryBooks
  },
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
  plugins: [
    createMultiTabState(),
  ],
})