export default {



    async registerTeacher(context, data) {

        const userId = context.rootGetters.userId;

        // console.log(data)
        const teacherData = {
            ...data,
            // id: userId,
        }
        // console.log(teacherData)
        context.commit('registerTeacher',
            {
                ...teacherData,
                id: userId,
            })

        const token = context.rootGetters.token;

        await fetch('https://findteacher-d6866-default-rtdb.firebaseio.com/teachers/' + userId + '.json' + '?auth='
            + token,
            {
                method: 'PUT',
                body: JSON.stringify(teacherData)
            })
            .then(response => {
                return response.json()
            })
            .catch(e => { console.log(e) })

    },

    async loadTeachers(context) {
        let teachersData;
        await fetch('https://findteacher-d6866-default-rtdb.firebaseio.com/teachers.json')
            .then(res => res.json())
            .then(data => {
                teachersData = data;
            })
            .catch(e => {
                console.log(e)
            })
        // console.log(context)

        const teachersList = []
        for (const key in teachersData) {
            teachersList.push({
                id: key,
                ...teachersData[key]
            })
        }

        context.commit('setTeachers', teachersList)
    }
}