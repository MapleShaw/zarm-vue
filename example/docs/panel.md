<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    handleClick() {
      alert('click me')
    }
  },
};
</script>


:::demo
```html
      <za-panel>
        <za-panel-header title='普通' ></za-panel-header>
        <za-panel-body>
          <za-cell>body</za-cell>
        </za-panel-body>
      </za-panel>

      <za-panel>
        <za-panel-header title='带更多按钮'>
          <a slot='more' @click='handleClick'>更多</a>
        </za-panel-header>
        <za-panel-body>
          <za-cell>body</za-cell>
        </za-panel-body>
      </za-panel>

      <za-panel>
        <za-panel-header title='带底部' ></za-panel-header>
        <za-panel-body>
          <za-cell>body</za-cell>
        </za-panel-body>
        <za-panel-footer title="左侧文案" more="右侧文案" />
      </za-panel>

```
:::

::: api
### API

#### panel

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-panel | | 类名前缀 |


#### panel-header

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-panel | | 类名前缀 |
| title | String | | | 标题，也可以用slot |
| more | String | | | 更多，也可以用slot |


#### panel-footer

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-panel | | 类名前缀 |
| title | String | | | 标题，也可以用slot |
| more | String | | | 更多，也可以用slot |
:::