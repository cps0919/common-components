
import mqtt from 'mqtt'

let Client: any

const mqttConnect: (url: string, theme: string[], option?: { username: string, password: string }) => any = (url: string, theme: string[], option?: { username: string, password: string }) => {
    const SERVICE = url
    const options = {
        connectTimeout: 10000,
        clean: true,
        keepAliveInterval: 10,
        ...option
    };
    Client = mqtt.connect(SERVICE, options);
    //连接状态
    Client.on('connect', () => {
        for (let i = 0; i < theme.length; i++) {
            Client.subscribe(theme[i], {
                qos: 1
            })
        }
    })
    // 断开发起重连
    Client.on("reconnect", () => {
        // console.log('断开重连')
    });
    // 链接异常处理
    Client.on("error", (error: any) => {
        console.log("连接失败:", error);
    });
    return Promise.resolve(true)
}

export { Client, mqttConnect }