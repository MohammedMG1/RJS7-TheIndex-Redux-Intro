import authors from "../data.js";
const initialState = {
    copyMe: "Remember to copy me!",
    authors: authors,
    newAuthorId: 5,
}
const reducer = (state = initialState, action) => {
    let newAuthors = state.authors
    switch (action.type) {
        case 'ADD_AUTHOR':
            newAuthors = newAuthors.concat(action.payload)
            return {
                ...state,
                authors: newAuthors,
                newAuthorId: state.newAuthorId + 1,
            }
        case 'DELETE_AUTHOR':
            newAuthors = newAuthors.filter(author => author !== action.payload)
            return {
                ...state,
                authors: newAuthors,
            }
        default:
            return {
                ...state,
                authors: newAuthors,
            }
    }
}

export default reducer;