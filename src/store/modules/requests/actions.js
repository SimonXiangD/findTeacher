export default {
    async contactTeacher(context, data) {

        const newRequest = {
            email: data.email,
            message: data.message,
        }

        // const responseData = await fetch('https://findteacher-d6866-default-rtdb.firebaseio.com/requests.json', {
        const responseData = await fetch('https://findteacher-d6866-default-rtdb.firebaseio.com/requests/' + data.teacherId + '.json', {
            method: 'POST',
            body: JSON.stringify(newRequest)
        }).then(
            res => res.json()
        ).catch(e => {
            console.log(e)

        })

        // console.log(responseData)

        newRequest.id = responseData.name
        newRequest.teacherId = data.teacherId

        context.commit('pushRequest', newRequest)

    },



    async loadRequests(context) {
        const teacherId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        console.log(token)
        console.log(context.rootGetters)
        // const responseData = await fetch('https://findteacher-d6866-default-rtdb.firebaseio.com/requests.json')
        const responseData = await fetch('https://findteacher-d6866-default-rtdb.firebaseio.com/requests/' + teacherId + '.json'
            + '?auth=' + token)
            .then(res => res.json())
            .then((d) => {
                console.log(d)
                if (d && d.error) {
                    return Promise.resolve({
                        error: true,
                    })
                }
                return d;
            })
            .catch(e => {
                console.log(e);

            })
        const requestsList = []
        if (responseData && responseData.error) return responseData
        console.log(responseData)
        for (const key in responseData) {
            requestsList.push({
                id: key,
                ...responseData[key]
            })
        }
        console.log(requestsList)
        context.commit('setRequests', requestsList)


    }
}