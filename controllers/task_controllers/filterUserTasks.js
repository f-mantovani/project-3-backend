const filterUserTasks = (user, status) => {
  return user.tasks.filter((task) => {return task.status !== status})
}

module.exports = filterUserTasks