document.addEventListener('DOMContentLoaded', function () {
    // 获取扫码登录和账户登录按钮
    const qrCodeLogin = document.getElementById('qrCodeLogin');
    const accountLogin = document.getElementById('accountLogin');
    
    // 获取二维码和账户输入框的部分
    const qrCodeSection = document.getElementById('qrCodeSection');
    const accountSection = document.getElementById('accountSection');
    
    // 点击扫码登录按钮时，显示二维码，隐藏输入框
    qrCodeLogin.addEventListener('click', function () {
        qrCodeSection.style.display = 'block';
        accountSection.style.display = 'none';
    });
    
    // 点击账户登录按钮时，显示输入框，隐藏二维码
    accountLogin.addEventListener('click', function () {
        qrCodeSection.style.display = 'none';
        accountSection.style.display = 'block';
    });
});
