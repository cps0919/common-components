import MorePlayer from '../components/more-player.vue'


export default {
    component: MorePlayer,
    title: "Video/more-player",
    decorators: [() => ({ template: '<div style="text-align:center;padding: 2em;box-shadow:0 0 10px 1px rgb(69 162 255 / 80%) inset;background:radial-gradient(#092744, #020627);"><story /></div>' })],
    argTypes: {
        model: { description: "宫格数", control: { type: 'select', options: [1, 4, 9, 16] } },
        backgroundColor: { control: { type: 'color', options: 'presetColors' } },
        textColor: { control: { type: 'color', options: 'presetColors' } },
        borderColor: { control: { type: 'color', options: 'presetColors' } },
        activeColor: { control: { type: 'color', options: 'presetColors' } },
        equipment: { description: '播放视频时的设备信息', control: { type: 'object' } },
    },
}
const Template = (args) => ({
    components: { MorePlayer },
    setup() {
        return { args }
    },
    template: '<MorePlayer v-bind="args" ><template #option0>删除</template><template #option-1>截屏</template><template #option1>一宫格</template><template #option4>四宫格</template><template #option9>九宫格</template><template #option16>十六宫格</template></MorePlayer>'
})

export const One = Template.bind({})
One.args = {
    height: '270px',
    width: '480px',
    model: 1
}
One.storyName = "one-grid"
export const Four = Template.bind({})
Four.args = {
    height: '270px',
    width: '480px',
    model: 4
}
Four.storyName = "four-grid"
export const Nine = Template.bind({})
Nine.args = {
    height: '270px',
    width: '480px',
    model: 9
}
Nine.storyName = "nine-grid"
export const Sixteen = Template.bind({})
Sixteen.args = {
    height: '270px',
    width: '480px',
    model: 16
}
Sixteen.storyName = "siteen-grid"

