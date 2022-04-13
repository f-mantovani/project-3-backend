const confirmEventStatus = (date) => {

    let is_past

    let today = new Date()

    if(new Date(date) < today) {

        is_past = true

    } else {

        is_past = false

    }

    return is_past
}

module.exports = confirmEventStatus