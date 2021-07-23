## 方向控制盘
    基于vue3.x、typescript封装的多屏播放组件
### 依赖
    -Vue3.x
    -typescript
### 安装插件
```
npm install direction-control --save
```
### 引入方式
````javascript
import { createApp } from 'vue'
import App from './App.vue'
import DirectionControl from 'direction-control'
import "direction-control/more-player.css"

const app = createApp(App)
app.use(DirectionControl)
app.mount('#app')
````
### 事例

````javascript
<template>
  <direction-control @direction="directionClick" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const directionClick = (e: { mouse: string; direction: number }) => {
      console.log(e);
    };
    return {
      directionClick,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```
### 参数
  #### 1.属性
    -bgColor：背景颜色
    -acBgColor：激活背景颜色
  #### 2.方法
    -direction(e)：点击方向返回的参数
        -参数e：mouse当前激活窗口；direction:方向代表的数组，从上顺时针 1,2,3,4,5,6,7,8

