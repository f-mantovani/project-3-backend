const getTaskReq = ({ body, user, params }) => {

    const payload = {

        title: body.title,
        
        userId: user.userId,
        
        taskId: params.taskId,

        status: params.status || body.status,
        
    }

    return payload
}

module.exports = getTaskReq