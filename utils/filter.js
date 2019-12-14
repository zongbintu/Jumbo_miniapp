function isEmpty(obj) {
    if (obj === undefined) {
        return true;
    }
    if (obj === null) {
        return true;
    }
    if (obj === '') {
        return true;
    }
    return false;
}

function identity() {
    wx.getStorage({
        key: 'userInfo',
        success: (result) => {
            console.log(result);
            let userInfo = result.data;
            // 缺少openId或者手机号 
            if (isEmpty(userInfo) || isEmpty(userInfo.openId) || isEmpty(userInfo.purePhoneNumber)) {
                // 跳转至登录页
                wx.redirectTo({
                    url: '/pages/login/login'
                });
            }
        },
        fail: () => {
            // 跳转至登录页
            wx.redirectTo({
                url: '/pages/login/login'
            });
        },
        complete: () => {
            wx.hideLoading();
        }
    });
}

export default {
    identity
}