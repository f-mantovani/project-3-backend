const getEventReq = ({ body, user, params }) => {

    const payload = {

        title: body.title,

        description: body.description,

        date: body.date,
        
        is_past: body.is_past,
        
        user: user.userId,

        eventId: params.eventId

    }

    return payload
    
}

module.exports = getEventReq