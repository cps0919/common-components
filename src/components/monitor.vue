<template>
  <div class="monitor" ref="Monitor">
    <div class="monitor-header" ref="MonitorHeader">{{ data.title }}</div>
    <div class="monitor-total" ref="MonitorTotal">
      <div class="item">
        <div class="count">{{ data.list.length - stateComputed }}</div>
        <div>在线设备</div>
      </div>
      <div class="item">
        <div class="count">{{ stateComputed }}</div>
        <div>离线设备</div>
      </div>
    </div>
    <div
      class="monitor-content"
      :style="contentStyleFuc()"
      v-for="(item, index) in data.list"
      :key="index"
    >
      <div class="item">
        <div>{{ item.name }}</div>
      </div>
      <div class="item">
        <div>
          <span v-if="item.state == 0" :style="[stateStyleFuc(item.state)]"
            >离线</span
          >
          <span v-else :style="[stateStyleFuc(item.state)]">在线</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  onMounted,
  PropType,
  computed,
  nextTick,
} from "vue";
interface DataProps {
  title: "升降机监控";
  list: Array<{ name: string; count: number; state: number }>;
}
export default defineComponent({
  props: {
    data: {
      type: Object as PropType<DataProps>,
      default: () => ({
        title: "升降机监控",
        list: [
          { name: "设备1", count: 200, state: 0 },
          { name: "设备2", count: 300, state: 1 },
        ],
      }),
    },
    color: {
      type: String,
      default: "white",
    },
    activeColor: {
      type: String,
      default: "#F56C6C",
    },
    headerBackground: {
      type: String,
      default: "rgba(69,162,255,.6)",
    },
    bodyBackground: {
      type: String,
      default: "rgba(69,162,255,.4)",
    },
  },
  setup(props) {
    const state = reactive({
      data: props.data,
    });
    const Monitor: any = ref(null);
    const MonitorHeader: any = ref(null);
    const MonitorTotal: any = ref(null);
    const stateComputed = computed(() => {
      let list = props.data.list;
      if (list.length != 0) {
        let group = list.filter((item) => item.state == 0);
        return group.length;
      }
      return 0;
    });
    onMounted(() => {
      nextTick(() => {
        Monitor.value.style.color = props.color;
        MonitorHeader.value.style.background = props.headerBackground;
        MonitorTotal.value.style.background = props.bodyBackground;

        let item: any = document.getElementsByClassName("item")[0];
        item.style.borderRight = `1px solid ${props.headerBackground}`;
      });
    });
    const contentStyleFuc = () => {
      return {
        background: props.bodyBackground,
      };
    };
    const stateStyleFuc = (state: number) => {
      if (state == 0)
        return {
          color: props.activeColor,
        };
      else
        return {
          color: props.color,
        };
    };
    return {
      ...toRefs(state),
      Monitor,
      MonitorHeader,
      MonitorTotal,
      contentStyleFuc,
      stateStyleFuc,
      stateComputed,
    };
  },
});
</script>
<style  scoped>
.monitor {
  width: 100%;
  min-width: 300px;
  font-size: 0.5em;
}
.monitor-header {
  text-align: center;
  padding: 1em 0;
  font-size: 2em;
  font-weight: 700;
}
.monitor-total {
  display: flex;
  flex-direction: row;
  padding: 0.5em 0;
}
.monitor-total .item {
  flex: 0 0 50%;
  text-align: center;
}

.monitor-total .item .count {
  font-size: 2.5em;
}
.monitor-content {
  background: red;
  display: flex;
  flex-direction: row;
  margin: 0.5em 0;
}
.monitor-content .item {
  flex: 0 0 50%;
  text-align: center;
  padding: 1em 0;
}
</style>