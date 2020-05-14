import './a.scss'
import './assets/avatar.png'
function testDecorator(target,name, descriptor) {
  let originMethod = descriptor.value;
  descriptor.value = function() {
    console.log('我是Func的修饰器')
    return originMethod.apply(this,arguments)
  }
}
class Button {
  // @testDecorator
  onClick() {
    console.log('我是点击事件')
    console.log('测试一下是不是动态加载')
  }
}
const button = new Button()
button.onClick()
let app = document.querySelector('#app')
let div = document.createElement('div')
div.innerText = 'hello world'
div.className = 'test'
app.appendChild(div)