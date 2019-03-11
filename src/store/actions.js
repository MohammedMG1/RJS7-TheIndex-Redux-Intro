const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";


export const add_author = () => {
    let auth = {
        id: 5,
        first_name: "ayyy",
        last_name: "Rowling",
        imageUrl:
            "https://nation.com.pk/digital_images/large/2015-05-10/jk-rowling-believes-in-standing-up-to-bullies-1431261222-3596.jpeg",
        books: [
            {
                title: "Harry Pottere",
                color: "blue"
            },
        ]
    }
    return {
        type: ADD_AUTHOR,
        payload: auth
    }
}

export const delete_author = (author) => {
    return {
        type: DELETE_AUTHOR,
        payload: author,
    }
}