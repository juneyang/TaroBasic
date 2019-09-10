import { createSelector } from 'reselect'

const getInfo = state => state.home.info

export default createSelector(
    getInfo, 
    ( info ) => {
        return {
            info,
        }
    }
)
