let requestHandler = {
    url: '',
    data: {},
    method: '',
    success: res => {

    },
    fail: function () {

    },
    complete: function () {

    }
};

// let baseUrl = "http://localhost:8088/api/miniapp";
let baseUrl = "http://203.195.152.121/api/miniapp";

/**
 * 发送网络请求，默认POST
 * @param {*} requestHandler 
 */
function send(requestHandler) {
    let url = baseUrl + requestHandler.url;
    let data = requestHandler.data;
    let method = requestHandler.method;
    if (method == null) {
        method = "POST";
    }
    wx.showLoading({
        title: "加载中"
    })
    wx.request({
        url,
        data,
        method,
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success: res => {
            wx.hideLoading();
            requestHandler.success(res);
        },
        fail: () => {
            wx.hideLoading();
            if (requestHandler.fail) {
                requestHandler.fail();
            }
        },
        complete: () => {
            if (requestHandler.complete) {
                requestHandler.complete();
            }
        }
    })
};

export default {
    send
}