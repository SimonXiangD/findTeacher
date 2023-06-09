import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'


export default {
    namespaced: true,
    state() {
        return {
            teachers: [
                {
                    id: 't1',
                    xing: '张',
                    ming: '三',
                    description: '一名有名的律师，据说有着神秘的过往。',
                    price: 200,
                    areas: ['法律', '反侦察', '刑法']

                }
            ]
        }
    },
    getters,
    actions,
    mutations,
}