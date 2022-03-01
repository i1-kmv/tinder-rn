const getMatchedUserInfo = (users, userLoggedIn) => {
    const newUser = { ...users}
    delete newUsers[userLoggedIn]

    const [id, user] = Object.entries(newUser).flat()
    return {id, ...user}
}

export default getMatchedUserInfo
