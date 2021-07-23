import RoundPurple from '../components/round-purple.vue'

export default {
    parameters: {
        layout: 'centered',
    },
    title: "Dashboard/round/round-purple",
    argTypes: {
        color: { control: { type: 'color', options: 'presetColors' } },
        side: { control: { type: 'number' } }
    },

}
export const Yellow = (args) => ({
    components: { RoundPurple },
    setup() {
        return { args }
    },
    template: '<RoundPurple v-bind="args"/>'
})
Yellow.storyName = "round-purple"

