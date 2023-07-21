import data from '@/data/dataBooks.json'
import { createStore } from 'vuex'

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  library: data.library,
  bookToShowDetails: null,
  booksInTheLibrary: data.library,
  booksInMyList:[],
}

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  setBooksInLibrary(state, payload){
    state.bookToShowDetails = payload
  },
  updateBookToShow(state, payload){
    state.bookToShowDetails = payload
  },
  addBookToList(state, payload){
    state.booksInMyList = state.booksInMyList.push(payload)
  },
  removeBookFromList(state, payload){
    state.booksInMyList = state.booksInMyList.filter(item => item.book.ISBN !== payload) 
  },
  
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  setBookInLibrary (context) {
    context.commit("setBooksInLibrary")
  },
  bookToShow (context, payload) {
    context.commit("updateBookToShow", payload)
  },
  addBookToList (context, payload) {
    context.commit("addBookToList", payload)
  },
  removeBookFromList (context, payload) {
    context.commit("removeBookFromList", payload)
  }
}

// getters are functions.
const getters = {
  getBookById: (state) => (id) => {
    return state.library.filter(item => item.book.ISBN === id)
  },
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state,
  getters,
  actions,
  mutations
})