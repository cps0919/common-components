import axios from 'axios'
import { ElMessage, ElNotification } from 'element-plus'

export let exportAxios = (url: string, name: string, data = {}) => {
    let msg: any = ElNotification({
        title: '提示',
        dangerouslyUseHTMLString: true,
        message: `<div> <span class='el-icon-loading'></span>&ensp;${name}导出中...</div>`,
        type: 'warning',
        duration: 0,
        customClass: 'atlas'
    })
    axios.post(url, data, {
        responseType: 'blob', onDownloadProgress(progress) {
            console.log(progress);

        }
    })
        .then(res => {
            let blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            let downloadElement = document.createElement('a');
            let href = window.URL.createObjectURL(blob); // 创建下载的链接
            downloadElement.href = href;
            downloadElement.download = name + '.xls'; // 下载后文件名
            document.body.appendChild(downloadElement);
            downloadElement.click(); // 点击下载
            document.body.removeChild(downloadElement); // 下载完成移除元素
            window.URL.revokeObjectURL(href); // 释放掉blob对象
            msg.close()
        })
        .catch(error => {
            ElNotification({
                title: '提示',
                dangerouslyUseHTMLString: true,
                message: `<div>${name}导出失败！</div>`,
                type: 'warning',
                duration: 3000,
                customClass: 'atlas'
            })
            ElMessage({ type: 'error', message: "请求错误！" });
        });
}
export default exportAxios