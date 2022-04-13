const createEventReqPayload = (req) => {

    const payload = {

        title: req.body.title,

        description: req.body.description,

        date: req.body.date,

        user: req.user.userId,

        is_past: req.body.is_past

    }

    return payload
}

module.exports = createEventReqPayload