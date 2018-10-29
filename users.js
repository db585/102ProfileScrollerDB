class Users {
  constructor () {
    this.count = 100
  }
  // Fetch users from API
  async getUsers () {
    // Fetch data
    // units=metric temp in celcius
    const response = await window.fetch(`https://randomuser.me/api/?results=${this.count}`)

    const respData = await response.json()
    // console.log(respData)
    return respData
  }

  // Fetch a user from API
  async getUser (id) {
    // Fetch data
    // units=metric temp in celcius
    const response = await window.fetch(`https://randomuser.me/api/?seed=${id}`)

    const respObj = await response.json()
    const userData = await respObj.results

    // Devs only Explore data
    // console.log('Inside Users obj: ', userData)
    return userData
  }
}
