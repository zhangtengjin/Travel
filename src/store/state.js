/*
* @Author: 12574
* @Date:   2018-06-22 16:19:38
* @Last Modified by:   12574
* @Last Modified time: 2018-06-22 16:26:00
*/

let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
