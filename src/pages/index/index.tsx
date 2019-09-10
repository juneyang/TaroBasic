import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import connect from '@/utils/connect'
import HomeSelector from '@/store/selectors/home'

import './index.scss'

interface IProps {
  [keyname: string]: any
}

interface IState {
  [keyname: string]: any
}

@connect(HomeSelector)
export default class Home extends Component<IProps, IState> {
    config: Config = {
        navigationBarTitleText: '首页'
    }
    
    componentWillMount(){
        let { actions } = this.props
        actions.getInfo()
    }

    render () {
        let { info } = this.props
        let { id, name } = info 

        if( !id ){
            return null
        }

        return (
            <View className='index'>
                <Text>{ id } :: </Text>
                <Text>{ name }</Text>
            </View>
        )
    }
}
