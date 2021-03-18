// code
const BASE_URL = 'https://api.paperquotes.com/apiv1/quotes/'
const API_KEY = '271a0e585e81a539860056fbfdf20127b30fb051'

const getQuote = async (ele) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        'Authorization': `Token ${API_KEY}`
      }
    })
    const number = Math.floor(Math.random() * 5)
    const quote = response.data.results[number].quote
    const author = response.data.results[number].author
    createQuote(quote, author, ele)
  } catch (error) {
    console.log(`This is your error: ${error}`)
  }
}

const createQuote = (quote, author, container) => {
  const quoteText = document.createElement('p')
  const authorText = document.createElement('p')
  quoteText.innerHTML = quote
  authorText.innerHTML = author
  container.append(quoteText)
  container.append(authorText)
}

const removeQuote = () => {
  const quote = document.querySelector('.quote').getElementsByTagName('p')[0]
  const author = document.querySelector('.quote').getElementsByTagName('p')[1]

  quote.remove()
  author.remove()
}

const quoteContainer = document.querySelector('.quote')
const buttonEvent = document.getElementsByTagName("button")

buttonEvent[0].addEventListener('click', function () {
  // removes existing quote on page render, will not render quote unless it deletes existing quote first
  // removeQuote()
  // getQuote(quoteContainer)
})

// getQuote(quoteContainer)

