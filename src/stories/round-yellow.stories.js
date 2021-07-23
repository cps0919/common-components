import RoundYellow from '../components/round-yellow.vue'
import RoundGreedOne from '../components/round-greed-1.vue'
import RoundGreedTwo from '../components/round-greed-2.vue'

export default {
    parameters: {
        layout: 'centered',
    },
    title: "Dashboard/round/round-yellow",
    argTypes: {
        color: { control: { type: 'color', options: 'presetColors' } },
        side: { control: { type: 'number' } }
    },

}
export const Yellow = (args) => ({
    components: { RoundYellow },
    setup() {
        return { args }
    },
    template: '<RoundYellow v-bind="args"/>'
})
Yellow.storyName = "round-yellow"

