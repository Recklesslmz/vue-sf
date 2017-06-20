/**
 * Created by limuzi on 2017/6/20.
 */
import * as types from './sf-type'
const mutations = {
  [types.MENU_TAB_LIST](state,info){
    state.menuList = info
  }

}
export default mutations
