import Capsule from '../components/capsule.vue'

export default {
    component: Capsule,
    parameters: {
        layout: 'centered',
    },
    title: "Dashboard/capsule",
    argTypes: {
        color: {description:'字体颜色', control: { type: 'color', options: 'presetColors' } },
        bgColor: { control: { type: 'color', options: 'presetColors' } },
        bgColor2: { control: { type: 'color', options: 'presetColors' } },
        data: { control: { type: 'object' } },
    },

}

export const GreedOne = (args) => ({
    components: { Capsule },
    setup() {
        return { args }
    },
    template: '<Capsule v-bind="args"/>'
})
GreedOne.storyName = "capsule"

