import {
    UPDATE_UNIVERSE_DATA,
    UPDATE_PLANET_DATA,
    SET_CONTROLLER_BAR_MODE,
    UPDATE_PLANET_POSITION
} from "../../actions/voice/action_voice_tool"

const initState = {
    unidata: [],
    controller_bar_mode: false,
    controller_bar_mode_info : null
}
export default function reducer(state=initState,action){
    switch(action.type) {
        case UPDATE_UNIVERSE_DATA:
            return {
                ...state,
                unidata: action.data
            }
        case UPDATE_PLANET_DATA:
            //console.log("galaxy_seq:"+action.galaxy_seq+" planet_seq:"+action.planet_seq)
            let object = JSON.parse(JSON.stringify(state.unidata))
            object[action.galaxy_seq].list[action.planet_seq].val = action.val
            return {
                ...state,
                unidata: object
            }
        case UPDATE_PLANET_POSITION:
            let obj = JSON.parse(JSON.stringify(state.unidata))
            let galaxy_seq = state.controller_bar_mode_info.galaxy_seq
            let planet_seq = state.controller_bar_mode_info.planet_seq
            let type = state.controller_bar_mode_info.type
            let both = state.controller_bar_mode_info.both
            let both_flag = false
            let val = action.val

            if(both){
                if(type==1){
                    if((planet_seq != obj[galaxy_seq].list.length-1) && (obj[galaxy_seq].list[planet_seq].end == obj[galaxy_seq].list[planet_seq+1].start)){
                        both_flag = true
                    }
                }
                else{
                    if((planet_seq != 0) && (obj[galaxy_seq].list[planet_seq].start == obj[galaxy_seq].list[planet_seq-1].end)){
                        both_flag = true
                    }
                }
            }
            if(both_flag){
                if(type){
                    obj[galaxy_seq].list[planet_seq].end = val
                    obj[galaxy_seq].list[planet_seq+1].start = val
                }
                else{
                    obj[galaxy_seq].list[planet_seq].start = val
                    obj[galaxy_seq].list[planet_seq-1].end = val
                }
            }
            else{
                if(type){
                    if(val < obj[galaxy_seq].list[planet_seq].start){
                        val = obj[galaxy_seq].list[planet_seq].start
                    }
                    if((planet_seq != obj[galaxy_seq].list.length-1) && (val > obj[galaxy_seq].list[planet_seq+1].start)){//拖动不超过下一个planet
                        val = obj[galaxy_seq].list[planet_seq+1].start
                    }
                    obj[galaxy_seq].list[planet_seq].end = val
                }
                else{
                    if(val > obj[galaxy_seq].list[planet_seq].end){
                        val = obj[galaxy_seq].list[planet_seq].end
                    }
                    if((planet_seq != 0) && (val < obj[galaxy_seq].list[planet_seq-1].end)){
                        val = obj[galaxy_seq].list[planet_seq-1].end
                    }
                    obj[galaxy_seq].list[planet_seq].start = val
                }
            }
            return {
                ...state,
                unidata: obj
            }
        case SET_CONTROLLER_BAR_MODE:
            return {
                ...state,
                controller_bar_mode: action.mode,
                controller_bar_mode_info: action.mode? action.info: null
            }
        default:
            return state
    }
}
