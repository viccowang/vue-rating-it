# 基于Vue 2.x的<星星评分>组件

预览

![demo](http://i63.tinypic.com/sav21c.png)

[在线demo](https://codepen.io/vicco/pen/XGxrZr)

## 功能:
- 集成了SVG矢量星图
- 可自定义评分星星的数量
- 可传入预设评分
- 可自定义评分星图的颜色
- 可自定义评分星图的大小
- 可自定义是否为只读模式

## Usage:
通过 npm 指令安装:
> npm i vue-rating-it --save

在组件中加载:
```javascript
 import VueRatingIt from 'vue-rating-it'
```

注册评分组件:
```javascript
component: {
  VueRatingIt
}
```

接着，在模版文件中定义组件
```html
<vue-rating-it :score="score" @rating="rate => score = rate" ></vue-rating-it>
```

## 文档:

### 属性
| 属性 | 描述 | 默认值 |
| -- | -- | -- |
| total | 一共显示多少颗星星进行评级，默认为5颗星 | 5 |
| score | 默认初始化时的评分，小数点根据四舍五入显示评分，如果是3.2则显示3颗星高亮，如果是3.7则是4颗 | 0 |
| color | 配置星星的颜色 | #FFD600 |
| size | 配置星星的大小，可以使用常用的单位 'rem','px'等，根据个人要求 | '2rem' |
| disabled | 如果设置为true，则不可点击也没有悬停事件 | false |

### 事件
| 事件 | 描述 | 参数 |
| -- | -- | -- |
| rating | 点击星星后触发的事件，会返回一个整数（目前还不支持小数模式） | 评分数 |

---

## 特别感谢
SVG 图标支持: Yuki
