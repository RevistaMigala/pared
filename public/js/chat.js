const socket = io()
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


socket.on('broadcast', (message) => {
    const chat = document.querySelector('.messages')
    chat.insertAdjacentHTML('afterbegin', `<li>${message}</li>`)
})

const form = document.querySelector('.author')

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const username = document.querySelector('#username').value
    const message = document.querySelector('#message').value
    const expo = document.querySelector('#expoName').value

    socket.emit('increment', `${username}: ${message}`)

    document.querySelector('#message').value = ''

    await saveMessage({ username, message, expo })
})

const saveMessage = async (message) => {
  const url = '/message'
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(message),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => {
      console.log(res)
      return res.json()})
    .then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error))
}
