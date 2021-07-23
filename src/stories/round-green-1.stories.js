import RoundGreedOne from '../components/round-greed-1.vue'

export default {
    parameters: {
        layout: 'centered',
    },
    title: "Dashboard/round/round-greed-1",
    argTypes: {
        color: { control: { type: 'color', options: 'presetColors' } },
        side: { control: { type: 'number' } }
    },

}

export const GreedOne = (args) => ({
    components: { RoundGreedOne },
    setup() {
        return { args }
    },
    template: '<RoundGreedOne v-bind="args"/>'
})
GreedOne.storyName = "round-greed-1"

