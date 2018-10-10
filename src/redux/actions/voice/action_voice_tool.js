export const UPDATE_UNIVERSE_DATA =  "vocie_tool/UPDATE_UNIVERSE_DATA"
export const UPDATE_PLANET_DATA =  "vocie_tool/UPDATE_PLANET_DATA"
export const SET_CONTROLLER_BAR_MODE =  "vocie_tool/SET_CONTROLLER_BAR_MODE"
export const UPDATE_PLANET_POSITION =  "vocie_tool/UPDATE_PLANET_POSITION"

function updateUniverseData(data){
    return {
        type: UPDATE_UNIVERSE_DATA,
        data: data
    }
}

export function updatePlanetData(val,galaxy_seq,planet_seq){
    return {
        type: UPDATE_PLANET_DATA,
        val: val,
        planet_seq: planet_seq,
        galaxy_seq: galaxy_seq
    }
}
export function updatePlanetPosition(ratio){
    // console.log(ratio)
    return {
        type: UPDATE_PLANET_POSITION,
        val: ratio
    }
}
export function setControllerBarMode(mode,info){
    return {
        type: SET_CONTROLLER_BAR_MODE,
        mode: mode,
        info: info
    }
}

export function getUniverseData(){
    const unidata = [
        {
            attr: "age",
            name: "姓名",
            list: [
                {
                    start: 0,
                    end: 20,
                    val: "test1"
                },
                {
                    start: 30,
                    end: 50,
                    val: "test2"
                },
                {
                    start: 55,
                    end: 90,
                    val: "test3"
                }
            ]
        },
        {
            attr: "sex",
            name:"性别",
            list: [
                {
                    start: 0,
                    end: 30,
                    val: "test"
                },
                {
                    start: 30,
                    end: 40,
                    val: "test"
                },
                {
                    start: 40,
                    end: 80,
                    val: "test"
                }
            ]
        },
        {
            attr: "content",
            name:"内容",
            list: [
                {
                    start: 0,
                    end: 60,
                    val: "test"
                },
                {
                    start: 60,
                    end: 80,
                    val: "test"
                },
                {
                    start: 80,
                    end: 90,
                    val: "test"
                }
            ]
        }
    ]
    return function (dispatch) {
        return new Promise((resolve, reject) => {
            dispatch(updateUniverseData(unidata))
            resolve()
        })
    }
}
