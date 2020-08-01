const fetchMessages = () => {
  const expo = document.querySelector('#expoName').value || ''
  const url = `/message?expo=${expo}`
  fetch(url)
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
