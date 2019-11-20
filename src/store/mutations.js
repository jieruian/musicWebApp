import * as tyeps from './mutation-types'

const mutations = {
    [tyeps.SET_SINGER](state,singer){
        state.singer = singer
    }
}

export default mutations