import teachersModule from "./modules/teachers";
import requestsModule from "./modules/requests";
import userAuthModule from "./modules/userAuth";

import { createStore } from "vuex";

const store = createStore({
    modules: {
        teachers: teachersModule,
        requests: requestsModule,
        auth: userAuthModule,
    }
})

export default store;