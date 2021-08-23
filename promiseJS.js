const i_am_promise = (i_am_boolean) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (i_am_boolean) {
                return resolve("String");
            } else {
                return reject("Error");
            }
        }, 3000)
    })
}

i_am_promise(true)
    .then((str) => {
        console.log("PromiseResolved")
        console.log(str)
    })
    .catch((err) => {
        console.log("PromiseRejected");
        console.log(err)
    })

i_am_promise(false)
    .then((str) => {
        console.log("PromiseResolved")
        console.log(str)
    })
    .catch((err) => {
        console.log("PromiseRejected");
        console.log(err)
    })