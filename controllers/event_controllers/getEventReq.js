const getEventReq = (req) => {

    const payload = {

        title: req.body.title,

        description: req.body.description,

        date: req.body.date,

        user: req.user.userId,

        is_past: req.body.is_past,

        eventId: req.params.eventId

    }

    return payload
}

module.exports = getEventReq