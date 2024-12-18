document.addEventListener("DOMContentLoaded", function() {
    // 获取所有的主菜单项
    const mainMenu = document.querySelectorAll('.nearly-three-month');

    mainMenu.forEach(function(menu) {
        // 获取当前菜单的主菜单项 (span)
        const menuTitle = menu.querySelector('span');
        const submenu = menu.querySelector('ol');

        // 监听鼠标悬停事件
        menuTitle.addEventListener('mouseenter', function() {
            submenu.style.display = 'block';  // 显示子菜单
        });

        // 监听鼠标离开事件
        menu.addEventListener('mouseleave', function() {
            submenu.style.display = 'none';  // 隐藏子菜单
        });
    });
});


// 动态加载商品列表
window.onload = function() {
    const productList = document.getElementById('product-list');

    // 使用 fetch 从服务器获取数据
    fetch('https://gist.githubusercontent.com/pangzikun/28fd36a259cb8f693ada358595076615/raw/6e07168cd9123a70247759a3a556a6ad276811d6/myorder') // 假设这是你的服务器端接口
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应失败');
            }
            return response.json(); // 解析为 JSON 数据
        })
        .then(data => {
            // 遍历返回的数据，生成商品项
            data.forEach(product => {
                const listItem = document.createElement('li');
                
                // 商品内容
                listItem.innerHTML = `
                    <h6>${product.name}</h6>
                    <p>${product.description}</p>
                    <div class="box">
                        <div class="bigbox">
                            <img src="${product.images[0]}" alt="">
                        </div>
                        <p><img src="${product.images[1]}" alt=""></p>
                        <p><img src="${product.images[2]}" alt=""></p>
                        <p>${product.views}</p>
                        <ul>
                            <li><span></span>关注 ${product.followers}</li>
                            <li class="good"><span></span>赞 ${product.likes}</li>
                        </ul>
                    </div>
                `;
                productList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('获取数据失败:', error);
            productList.innerHTML = `<p>加载失败，请稍后重试。</p>`;
        });
};
document.addEventListener("DOMContentLoaded", function () {
    // 获取搜索框元素
    const searchInput = document.getElementById("pang-search");

    // 给搜索框绑定点击事件
    searchInput.addEventListener("click", function () {
        // 这里编写点击事件触发后的操作
        alert("搜索框被点击了！");
    });
});
