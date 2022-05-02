const getTaskReq = ({ body, user, params }) => {

    const payload = {

        title: body.title,

        status: body.status,

        userId: user.userId,

        taskId: params.taskId

    }

    return payload
}

module.exports = getTaskReq