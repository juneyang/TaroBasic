import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions'

function mapStateToProps(props, state) {
    if (!props) return state
    if (typeof props === 'function') return props( state )

    if (typeof props === 'string') return { [props]: state[props] }

    if (Array.isArray(props)) {
        return props.reduce((prev, curr) => prev[curr] = state[curr], {})
    }

    return state
}

function mapDispatchToProps( actionsList = {}, dispatch) {

    // let filteredActions = actions

    // if(actionsList.length) {
    //     filteredActions = actionsList.reduce((prev:any, action) => {
    //         prev[action] = actions[action]
    //     }, {})
    // }

    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default (selector?, actionList?) => {
    return target => connect(
        mapStateToProps.bind(null, selector), 
        mapDispatchToProps.bind(null, actionList)
    )(target)
}