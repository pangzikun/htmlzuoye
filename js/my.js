// 使用 AJAX 加载用户信息
window.onload = function () {
    // 获取用户基本信息
    fetch('https://gist.githubusercontent.com/pangzikun/0ddd37e05e5249f1d2ea45c1c4d06fe5/raw/138dabc07c49fa79809003232fd4283f2ee6c76c/my') // 替换为实际的后端 API 地址
        .then(response => {
            if (!response.ok) {
                throw new Error('获取用户信息失败');
            }
            return response.json(); // 解析响应为 JSON 数据
        })
        .then(pangzikun => {
            // 渲染用户信息
            document.getElementById('avatar').src = pangzikun.userInfo.avatar;
            document.getElementById('username').textContent = `用户名: ${pangzikun.userInfo.username}`;
            document.getElementById('email').textContent = `邮箱: ${pangzikun.userInfo.email}`;
            document.getElementById('phone').textContent = `电话: ${pangzikun.userInfo.phone}`;

            // 渲染地址信息
            document.getElementById('address-street').textContent = `地址: ${pangzikun.address.street}`;
            document.getElementById('address-phone').textContent = `电话: ${pangzikun.address.phone}`;
            document.getElementById('postal-code').textContent = `邮政编码: ${pangzikun.address.postalCode}`;

            // 渲染订单信息
            const orderList = document.getElementById('order-list');
            pangzikun.orders.forEach(order => {
                const listItem = document.createElement('li');
                listItem.textContent = `订单号: ${order.orderNumber} | 日期: ${order.date} | 状态: ${order.status}`;
                orderList.appendChild(listItem);
            });

            console.log('用户信息:', pangzikun);
        })
        .catch(error => {
            console.error('加载用户信息时发生错误:', error);
            document.body.innerHTML = '<p>加载用户信息失败，请稍后再试。</p>';
        });

    // 获取钱包信息
    fetch('http://rap2api.taobao.org/app/mock/321994/dazuoye3') // 替换为实际的后端 API 地址
        .then(response => {
            if (!response.ok) {
                throw new Error('获取钱包信息失败');
            }
            return response.json();
        })
        .then(pangzikun2 => {
            // 渲染钱包信息
            document.getElementById('wallet-balance').textContent = `余额: ¥${pangzikun2.balance}`;
            document.getElementById('wallet-coupons').textContent = `优惠券: ${pangzikun2.coupons} 张`;
            document.getElementById('wallet-jdBeans').textContent = `京豆: ${pangzikun2.jdBeans} 个`;
            document.getElementById('wallet-giftCards').textContent = `礼品卡: ${pangzikun2.giftCards} 张`;
            document.getElementById('wallet-redPackets').textContent = `红包: ${pangzikun2.redPackets} 个`;

            console.log('钱包信息:', pangzikun2);
        })
        .catch(error => {
            console.error('加载钱包信息时发生错误:', error);
            document.body.innerHTML += '<p>加载钱包信息失败，请稍后再试。</p>';
        });
};
