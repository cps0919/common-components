import Progress from '../components/progress-1.vue'

export default {
    component: Progress,
    title: 'Dashboard/progress/progress-1',
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        data: { control: { type: 'object' } },
        bgColor: { control: { type: 'color', options: 'presetColors' } },
        color: { control: { type: 'color', options: 'presetColors' } },
        progressColor: { control: { type: 'color', options: 'presetColors' } },
    }
}

export const One = (args) => ({
    components: { Progress },
    setup() {
        return { args }
    },
    template: '<Progress v-bind="args"></Progress>'
})
One.storyName = 'progress-1'