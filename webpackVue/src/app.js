import m1 from '@/module/m1'
import common from 'common'
import './static/reset.css'
import '@/static/scss/base.scss'

console.log(common)
m1.fn()
a
const aa = () => {
  console.log(this)
}
console.log(2)
console.log(3)
aa()

if(module.hot){
  module.hot.accept()
}