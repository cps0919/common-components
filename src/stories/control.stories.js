import Control from '../components/control.vue'

export default {
    component: Control,
    parameters: {
        layout: 'centered',
    },
    title: "Video/control",
    decorators: [() => ({ template: '<div style="text-align:center;padding: 2em;box-shadow:0 0 10px 1px rgb(69 162 255 / 80%) inset;background:radial-gradient(#092744, #020627);"><story /></div>' })],
    argTypes: {
        borderColor: { control: { type: 'color', options: 'presetColors' } },
        acColor: { control: { type: 'color', options: 'presetColors' } },
    }
}

export const Template = (args) => ({
    components: { Control },
    setup() {
        return { args }
    },
    template: '<Control v-bind="args"></Control>'
})
Template.storyName = "control"