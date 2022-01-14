// Ejemplo1.
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('✅')
    } else {
      reject(new Error('❎'))
    }
  })
}

somethingWillHappen()
  .then(console.log)
  .catch(console.log)

// Ejemplo2.
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('⏳✅')
      }, 3000)      
    } else {
      reject(new Error('❎'))
    }
  })
}

somethingWillHappen2()
  .then(console.log)
  .catch(console.log)

// Ejemplo3.
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(console.log)
  .catch(console.log)