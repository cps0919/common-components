import Monitor from '../components/monitor.vue'

export default {
    parameters: {
        layout: 'centered',
    },
    title: "Order/monitor",
    argTypes: {
        color: { control: { type: 'color', options: 'presetColors' } },
        activeColor: { control: { type: 'color', options: 'presetColors' } },
        bodyBackground: { control: { type: 'color', options: 'presetColors' } },
        headerBackground: { control: { type: 'color', options: 'presetColors' } },
        data: { control: { type: 'object' } },
    }
}

export const Template = (args) => ({
    components: { Monitor },
    setup() {
        return { args }
    },
    template: '<Monitor v-bind="args"></Monitor>'
})
Template.storyName = "monitor"