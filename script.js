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
    // console.log(response)
    const quote = response.data.results[0].quote
    const author = response.data.results[0].author
    // console.log(quote)
    // console.log(author)
    const quoteText = document.createElement('p')
    const authorText = document.createElement('p')
    quoteText.innerHTML = quote
    authorText.innerHTML = author
    ele.append(quoteText)
    ele.append(authorText)
  } catch (error) {
    console.log(`This is your error: ${error}`)
  }
}

const quoteContainer = document.querySelectorAll('.quote')
quoteContainer.forEach(ele => {
  getQuote(ele)
})

getQuote()