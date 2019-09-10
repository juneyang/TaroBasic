import Taro from '@tarojs/taro'
import {
    API, LOCALTOKEN
} from './constans'

import * as GlobalData from './globaldata'

function encodeQuery(url, data = {}) {
    if (!data || !Object.keys(data).length) {
        return url
    }

    url = url.indexOf('?') === -1 ? `${url}?` : `${url}&`

    let query = Object.keys(data).map(key => `${key}=${data[key]}`).join('&')
    return `${url}${query}`
}

function FETCH(url, options, no_headers = false) {

    let { headers, data, method, ...others } = options

        // !no_headers && (headers = { 'X-Request-Id': GUID(), ...headers })

    return new Promise( (resolve, reject) => {
        return Taro.request({
            url,
            method,
            data,
            header: headers,
            success: res => {
                let { errMsg, data } = res;
                if( errMsg == 'request:ok' ){
                    let { data: resultdata, ret } = data
                    if( ret === 0 ){
                        // console.log(`${url}::::`, resultdata )
                        resolve( resultdata )
                    } else {
                        reject( data )        
                    }
                }
            },
            fail: res => {
                reject( res )
            }
        })
    })
}

function GET(url, data = {}, options:any = {}) {
    let useCache = true

    const LOCAL_LOGIN_TOKEN = Taro.getStorageSync( LOCALTOKEN )

    this.cache = (shouldCache = true, type = 'memory', expire = 0 ) => {
        useCache = shouldCache

        if (!useCache) {
            data = {...data, _: Date.now() }
        }
        return this
    }
    this.send = () => {

        // data = Object.assign({}, data, {
        //     channelId: 3
        // })
        let _url = encodeQuery(url, data);

        let cacheData = useCache && GlobalData.get(_url)
        // let expireTime = cacheType == 'store' && (Date.now() + 86400 * 1000);
        if (cacheData) {
            return new Promise(resolve => resolve(cacheData))
        }

        let headers = <any>{
            "Authorization": LOCAL_LOGIN_TOKEN,
        }
        
        let { headers: header, ...others } = options
    
        if( header ){
            headers = { ...headers, ...header }
        }

        // if (typeof showLoading === 'function') {
        //     showLoading()
        // } else {
        //     showLoading && Loading.show(loadingText)
        // }

        return FETCH(_url, {
            method: 'GET',
            headers,
            data,
            ...options,
        }).then(res => {
            useCache && GlobalData.set( _url, res )
            // showLoading && Loading.hide()
            return res
        }).catch(error => {
            // showLoading && Loading.hide()
            throw error
        })
    }
}

function POST(url, data = {}, options:any = {}) {


    // this.loading = (loading) => {
    //     showLoading = loading
    //     return this
    // }

    // should not cache post
    this.cache = () => {
        return this
    }

    const LOCAL_LOGIN_TOKEN = Taro.getStorageSync( LOCALTOKEN )

    // let headers = {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     "Authorization": LOCAL_LOGIN_TOKEN
    // }

    let headers = <any>{
        "Authorization": LOCAL_LOGIN_TOKEN,
    }
    
    let { headers: header, ...others } = options

    if( header ){
        headers = { ...headers, ...header }
    }

    this.send = () => {
        return FETCH(url, {
                method: 'POST',
                headers,
                data,
                ...others,
            })
            .then(resp => {
                return resp
            })
            .catch(error => {
                throw error
            })
    }

}

export {
    GET,
    POST,
    FETCH,
    encodeQuery,
}