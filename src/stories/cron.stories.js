

export default {
    title: "Order/cron",
    argTypes: {
        showValue: { control: { type: 'boolean' }},
        useSeconds: { control: { type: 'boolean' } },
        useYears: { control: { type: 'boolean' } },
        val: { control: { type: 'text' } },
    },
   
}

export const Cron = (args) => ({
    setup() {
        return { args }
    },
    template: '<div style="color:white">cron表达式控件基于element-ui封装，源码请查看<span style="color:rgba(69, 162, 255, 0.8)">src/components/cron</span>下文件夹</div>'
})
Cron.storyName = "cron"