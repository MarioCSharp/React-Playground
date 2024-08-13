
function Message() {
    const user_name = 'Mario';
    
    if (user_name){
        return <h1>Hello {user_name}!</h1>;
    }

        return <h1>Hello World!</h1>
}

export default Message;