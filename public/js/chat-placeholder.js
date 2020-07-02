const fetchMessages = () => {
    fetch('/message')
        .then(res => res.json())
        .then(publishMessages)
        .catch(error => console.error('Error:', error))
}
const publishMessages = (messages) => {
    const chat = document.querySelector('.messages')
    for (let message of messages) {
        chat.insertAdjacentHTML('afterbegin', `<li>${message.username}: ${message.message}</li>`)
    }
}
fetchMessages()
