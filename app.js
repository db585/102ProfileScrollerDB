// Init User obj
const users = new Users()
// let usersArr = []

let usersPromise = users.getUsers()

usersPromise
  .then(prom => {
    let data = prom.results
    // console.log('inside then 1: ', data)
    // return data

    const profiles = profileIterator(data)
    // console.log(profiles)

    // Load first profile
    nextProfile()

    // Event listener
    document.querySelector('#next').addEventListener('click', nextProfile)

    function nextProfile () {
      const currentProfile = profiles.next().value

      if (currentProfile !== undefined) {
        // Define bindings for innerHTML
        let name = `${currentProfile.name.first} ${currentProfile.name.last}`
        let location = `${currentProfile.location.city}`

        document.getElementById('profileDisplay').innerHTML = `
          <ul class="list-group">
            <li class="list-group-item" style="text-transform: capitalize;">Name: ${name} </li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Age: ${currentProfile.dob.age}</li>
            <li class="list-group-item" style="text-transform: capitalize;">Location: ${location}</li>
          </ul>
        `

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.picture.large}">`
      } else {
        // No more profiles
        window.location.reload()
      }
    }
  })
  .catch(err => console.log(err))

// Profile Iterator
function profileIterator (profiles) {
  let nextIndex = 0

  return {
    next: () => {
      return nextIndex < profiles.length
        ? {
          value: profiles[nextIndex++],
          done: false
        }
        : {
          done: true
        }
    }
  }
}
