// 1 每
// 2 周期
// 3 循环
// 4 指定
// 5 不指定

// 6 指定日期最近的工作日（MDay）
// 7 本月最后一天（MDay）
// 10 本月最后一个工作日（MDay）
// 11 月底前几天（MDay）

// 8 指定第几周的周几（Wday）
// 9 本月最后一个周几（WDay）

export const cronMixin = {
  props:{
    valueArr: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    // dateValue(){
    //   return this.value[3]
    // },

    // dayValue(){
    //   return this.value[5]
    // },

    value() {
      let value = ''
      const {
        type,
        type2from, type2to,
        type3from, type3space,
        type4value,
        type6value,
        type8week, type8day,
        type9value,
        type11value
      } = this
      switch (type) {
        case 1:
          value = '*'
          break
        case 2:
          value = `${type2from}-${type2to}`
          break
        case 3:
          value = `${type3from}/${type3space}`
          break
        case 4:
          value = type4value.join(',')
          break

        case 5:
          value = '?'
          break
        case 6:
          value = `${type6value}W`
          break
        case 7:
          value = 'L'
          break
        case 10:
          value = 'LW'
          break
        case 11:
          value = `L-${type11value}`
          break
        
        case 8:
          value = `${type8week}#${type8day}`
          break
        case 9:
          value = `${type9value}L`
          break
      }
      return value
    }
  },

  watch: {
    type(value) {
      // 指定 值取数组第一条
      if (value !== 4) {
        return
      }
      const { type4range, type4value, valueIndex, dayList } = this
      if (!type4value || type4value.length === 0) {
        this.type4value = valueIndex === 5 ? [dayList[0].value] : [type4range[0]]
      }
    },

    type2from(value){
      // 周期值联动
      const  {type2to}  =this
      if(value > type2to){
        this.type2to = value
      }
    },

    type2to(value){
      // 周期值联动
      const  {type2from}  =this
      if(value < type2from){
        this.type2from = value
      }
    },

    value(value) {
      this.$emit('change', {
        index: this.valueIndex,
        value
      })
    }
  }
}

export const dayListMixin = {
  data() {
    return {
      dayList: [
        { value: 1, label: '周日' },
        { value: 2, label: '周一' },
        { value: 3, label: '周二' },
        { value: 4, label: '周三' },
        { value: 5, label: '周四' },
        { value: 6, label: '周五' },
        { value: 7, label: '周六' },
      ]
    }
  }
}