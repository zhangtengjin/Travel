/*
* @Author: 12574
* @Date:   2018-06-22 16:21:59
* @Last Modified by:   12574
* @Last Modified time: 2018-06-23 09:44:16
*/
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
