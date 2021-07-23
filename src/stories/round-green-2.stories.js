import RoundGreedTwo from '../components/round-greed-2.vue'

export default {
    parameters: {
        layout: 'centered',
    },
    title: "Dashboard/round/round-greed-2",
    argTypes: {
        color: { control: { type: 'color', options: 'presetColors' } },
        side: { control: { type: 'number' } }
    },

}

export const GreedTwo = (args) => ({
    components: { RoundGreedTwo },
    setup() {
        return { args }
    },
    template: '<RoundGreedTwo v-bind="args"/>'
})
GreedTwo.storyName = "round-greed-2"
