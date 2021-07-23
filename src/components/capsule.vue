<template>
  <div class="capsule" ref="Capsule">
    <div class="lft" ref="CapsuleLft">{{ data.name }}</div>
    <div class="rgt">
      {{ data.value }}&ensp;
      <slot name="company">kW·h</slot>
    </div>
  </div>
</template>
<script lang='ts'>
import {
  defineComponent,
  nextTick,
  onMounted,
  PropType,
  reactive,
  ref,
  toRefs,
} from "vue";

export default defineComponent({
  name: "capsule",
  props: {
    data: {
      type: Object as PropType<{ name: string; value: string | number }>,
      default: () => ({ name: "当日用电", value: "1076" }),
    },
    color: {
      type: String,
      default: "white",
    },
    bgColor: {
      type: String,
      default: "rgba(180, 163, 233, 0.1)",
    },
    bgColor2: {
      type: String,
      default: "#2dc4d9",
    },
  },
  setup(props) {
    const Capsule: any = ref(null);
    const CapsuleLft: any = ref(null);
    const state = reactive({
      data: props.data,
    });
    onMounted(() => {
      nextTick(() => {
        Capsule.value.style.background = props.bgColor;
        Capsule.value.style.color = props.color;
        CapsuleLft.value.style.background = props.bgColor2;
      });
    });
    return {
      ...toRefs(state),
      Capsule,
      CapsuleLft,
    };
  },
});
</script>
<style  scoped>
.capsule {
  display: flex;
  flex-direction: row;
  line-height: 3em;
  min-width: 250px;
  border-radius: 10px;
  overflow: hidden;
}
.capsule .lft {
  flex: 0 0 40%;
  text-align: center;
}
.capsule .rgt {
  flex: 0 0 60%;
  text-align: center;
  position: relative;
}
.capsule .rgt .company {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
}
</style>