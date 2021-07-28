import StretchMenu from '../components/stretch-menu.vue'

export default {
    component: StretchMenu,
    title: 'Dashboard/strech-menu',
    parameters: {
        layout: 'centered',
    },
    decorators: [() => ({ template: '<div ><story /></div>' })],
    argTypes: {
        data: { control: { type: 'object' } },
        color: { control: { type: 'color', options: 'presetColors' } },
        bgColor: { control: { type: 'color', options: 'presetColors' } },
        acColor: { control: { type: 'color', options: 'presetColors' } },
        borderColor: { control: { type: 'color', options: 'presetColors' } },
        visible: { control: { type: 'boolean' } },
    }
}

export const StretchM = (args) => ({
    components: { StretchMenu },
    setup() {
        return { args }
    },
    template: '<StretchMenu v-bind="args" />'
})
StretchM.storyName = "strech-menu"