const getTaskReq = ({ body, user, params }) => {

    const payload = {

        title: body.title,

        userId: user.userId,

        taskId: params.taskId

    }

    return payload
}

module.exports = getTaskReq