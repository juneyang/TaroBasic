const globalData = {}

export function set(key,val) {
    // console.log( 'val:::', val )
    globalData[key] = val
}

export function get(key){
    // console.log( key )
    return globalData[key]
}