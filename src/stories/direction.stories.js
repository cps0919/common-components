import DirectionControl from '../components/direction.vue'

export default {
    component: DirectionControl,
    parameters: {
        layout: 'centered',
    },
    title: "Video/direction-control",
    argTypes: {
        bgColor: {control:{type:'color',options:'presetColors'}},
        acBgColor: {control:{type:'color',options:'presetColors'}},
    }

}
const Template = (args) => ({
    components: { DirectionControl },
    setup() {
        return { args }
    },
    template: '<DirectionControl v-bind="args"/>'
})

export const One = Template.bind({})
One.storyName = "direction-control"
