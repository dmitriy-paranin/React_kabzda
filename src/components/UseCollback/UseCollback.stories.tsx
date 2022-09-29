import React, {useMemo, useState} from "react";

export default {
    title: 'React.memo demo',
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: {users: Array<string>}) => {
    console.log("USERS")
    return <div>{
        props.users.map((u,i)=><div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const LikeUseCollback = () => {
    console.log("LikeUseCollback");
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "HTML"])

    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])

    const addBooks = () => {
        const newUsers = [...books, 'Angular ' + new Date().getTime()];
        setBooks(newUsers)
    }
    return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        {counter}
        <Book books={newArray} addBook={addBooks}/>
    </>
}

type BookSecretPropsType = {
    books: Array<string>
    addBook: () => void
}

const BookSecret = (props: BookSecretPropsType) => {
    console.log('BookSecret')
    return <div>
        <button onClick={() => props.addBook}>add book</button>
    </div>
}

const Book = React.memo(BookSecret)