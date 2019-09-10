import Taro from '@tarojs/taro'
import { GET_INFO } from '../ActionTyps'
import { API } from '@/utils/constans'
import { GET, POST, encodeQuery } from '@/utils/request'

export function getInfo(){
    return ( dispatch, getState ) => {
        dispatch({
            type: GET_INFO,
            info: {
                name: (new Date()).toLocaleString(),
                id: '001'
            }
        })
    }
}

// export function getEventInfo( id ){
//     let url = `${API}/interface`;
//     return ( dispatch, getState ) => {
//         return new GET( url )
//         .cache(false)
//         .send()
//         .then( data  => {
//             dispatch({
//                 type: GET_INFO,
//                 eventInfo: data
//             })
//         })
//         .catch( res => {
//             console.log( 'error::', res )
//             dispatch({
//                 type: GET_INFO,
//                 eventInfo: {}
//             })
//         })
//     }
// }
