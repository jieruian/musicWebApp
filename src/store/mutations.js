import * as tyeps from './mutation-types'



const mutations = {
    
    [tyeps.SET_SINGER](state,singer){
        state.singer = singer
    },
    [tyeps.SET_TEST](state,test){
        state.test = test
    },
    [tyeps.SET_PLAYING_STATE](state,flag){
        state.playing = flag
    },
    [tyeps.SET_FULL_SCREEN](state,flag){
        state.fullScreen = flag
    },
    [tyeps.SET_PLAYLIST](state,list){
        state.playlist = list
    },
    [tyeps.SET_SEQUENCE_LIST](state,list){
        state.sequenceList = list
    },
    [tyeps.SET_PLAY_MODE](state,mode){
        state.mode = mode
    },
    [tyeps.SET_CURRENT_INDEX](state,index){
        state.currentIndex = index
    }
    
}

export default mutations