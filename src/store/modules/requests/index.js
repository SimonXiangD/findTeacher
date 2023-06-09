import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";


export default {
    namespaced: true,
    state() {
        return {
            requests: [
                {
                    teacherId: 't1',
                    message: '希望研究法律',
                    email: '123455@police.com'
                }
            ]
        }
    },
    mutations,
    getters,
    actions,
}