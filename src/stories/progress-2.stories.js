import Progress from '../components/progress-2.vue'

export default {
    component: Progress,
    title: 'Dashboard/progress/progress-2',
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        title: { control: { type: 'text' } },
        progress: { control: { type: 'number' } },
        height: { control: { type: 'text' } },
        width: { control: { type: 'text' } },
        color: { control: { type: 'color', options: 'presetColors' } },
        bgColor: { control: { type: 'color', options: 'presetColors' } },
        progressBgColor: { control: { type: 'color', options: 'presetColors' } },
        progressVisible: { control: { type: 'boolean' } },
        titleVisible: { control: { type: 'boolean' } },
    }
}

export const One = (args) => ({
    components: { Progress },
    setup() {
        return { args }
    },
    template: '<Progress v-bind="args"></Progress>'
})
One.storyName = 'progress-2'