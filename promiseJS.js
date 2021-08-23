const i_am_promise = (i_am_boolean) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (i_am_boolean) {
                return resolve();
            } else {
                return reject();
            }
        }, 3000)
    })
}

i_am_promise(true)
    .then(() => {
        console.log("PromiseResolved")
        i_am_promise(false)
            .then(() => {
                console.log("PromiseResolved")
            })
            .catch(() => console.log("PromiseRejected"))
    })
    .catch(() => console.log("PromiseRejected"))

