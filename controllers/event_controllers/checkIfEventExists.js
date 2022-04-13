const checkIfEventExists = (event) => {

    if (!event) {
    
    const error = new Error

    error.status = 400

    error.message = "Event does not exist"

    throw error

    }

}

module.exports = checkIfEventExists