// Init User obj
const usersTest = new Users()
let usersTestArr = []

// let usersPromiseTest = usersTest.getUsers()

// usersPromiseTest
//   .then(prom => {
//     let data = prom.results
//     console.log('inside then 1: ', data)
//   // return data
//   })
//   .catch(err => console.log(err))

// Test only
// Checking that data inside usersPromiseTest is the same that we have had in first variant
// usersPromiseTest
//   .then(prom => {
//     let data = prom.results
//     console.log('inside then 2: ', data)
//     // return data
//   })
//   .catch(err => console.log(err))

// Test only
// Checking that data inside usersPromiseTest is the same that we have had in first variant
// usersPromiseTest
//   .then(prom => {
//     let data = prom.results
//     console.log('inside then 3: ', data)
//     // return data
//   })
//   .catch(err => console.log(err))

// // Fetch individual user with setTimeout
// usersTest.getUser('2127f867a4341c2b')
//   .then(setTimeout(data => {
//     usersTestArr.push(data)
//   },
//   0)
//   )
//   .catch(err => console.log(err))

// // Fetch individual user with setTimeout
// usersTest.getUser('2127f867a4341c2b')
//   .then(data => {
//     usersTestArr.push(data)
//   }
//   )
//   .catch(err => console.log(err))

// // Fetch all users and push them to the array
usersTest.getUsers()
  .then(data => {
    usersTestArr.push(data)
    console.log(data)
  }
  )
  .catch(err => console.log(err))

// console.log('userData:', userData)

// IIFE throw error
// (
//   async function () {
//     const userData = await usersTest.getUser('2127f867a4341c2b')
//     console.log('Iside IIFE userData:', userData)
//   }
// )()

console.log('usersTestArr:', usersTestArr)
