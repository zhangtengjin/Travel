/*
* @Author: 12574
* @Date:   2018-06-22 16:21:59
* @Last Modified by:   12574
* @Last Modified time: 2018-06-22 16:25:24
*/
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
