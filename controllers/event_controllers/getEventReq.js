const getEventReq = ({ body, user, params }) => {

    const payload = {

        title: body.title,

        local: body.local,

        details: body.details,

        date: body.date,
        
        is_past: body.is_past,
        
        user: user.userId,

        eventId: params.eventId

    }

    return payload
    
}

module.exports = getEventReq