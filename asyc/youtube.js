// promise可以保证命令执行的order

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location === 'Google'){
            resolve('Google say hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing responce')
        resolve(`Extra Information + ${response}`)
    })
}

makeRequest('Google').then(response => {
    console.log('Response Received')
    return processRequest(response)
})

