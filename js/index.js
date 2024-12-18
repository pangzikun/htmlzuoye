// 获取轮播图的所有图片、小圆点等元素
const images = document.querySelectorAll('.slider-images img');
const dots = document.querySelectorAll('.small .dot');

// 当前显示的图片索引
let currentIndex = 0;

// 切换到指定图片的函数
function goToSlide(index) {
    // 更新轮播图显示的图片
    document.querySelector('.slider-images').style.transform = `translateX(-${index * 100}%)`;

    // 更新小圆点的活动状态
    dots.forEach((dot, idx) => {
        if (idx === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    currentIndex = index;  // 更新当前图片索引
}

// 自动切换到下一个图片
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;  // 循环到第一张
    goToSlide(currentIndex);
}

// 设置自动切换（每 3 秒切换一次）
let autoSlide = setInterval(nextSlide, 2000);

// 点击小圆点时切换图片
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);  // 跳转到点击的小圆点对应的图片
        clearInterval(autoSlide);  // 停止自动切换
        autoSlide = setInterval(nextSlide, 3000);  // 重启自动切换
    });
});

// 初始更新轮播图
goToSlide(currentIndex);


// 使用 AJAX 获取数据并渲染页面
window.onload = function () {
  // 使用 fetch 获取 JSON 数据
  fetch('https://gist.githubusercontent.com/pangzikun/96bb6597e318057cd3562aeca3ba3f02/raw/8cbb754c5d8f73fe739e152225c3a680f619e56d/index') // 替换为实际后端 API 地址
    .then(response => {
      if (!response.ok) {
        throw new Error('网络响应失败');
      }
      return response.json(); // 将响应解析为 JSON 数据
    })
    .then(pangzikun => {
      // 渲染 `find` 部分内容
      document.getElementById("logo").src = pangzikun.good2.find.logo;
      document.getElementById("text").textContent = pangzikun.good2.find.text;

      // 渲染商品列表
      const productList = document.getElementById("product-list");
      pangzikun.good2.lun.items.forEach(item => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = item.image;
        li.appendChild(img);

        const description = document.createElement("p");
        description.textContent = item.description;
        li.appendChild(description);

        productList.appendChild(li);
      });

      // 复制商品列表内容，实现无缝滚动
      const clone = productList.innerHTML;
      productList.innerHTML += clone; // 追加复制的内容
    })
    .catch(error => {
      console.error('获取数据失败:', error);
      const errorMsg = document.createElement("p");
      errorMsg.textContent = "加载数据失败，请稍后再试！";
      document.body.appendChild(errorMsg);
    });
};
// 添加点击事件
document.querySelector('.pang-a').addEventListener('click', () => {
  alert('客服功能尚未实现！'); // 示例：弹出提示
});

document.querySelector('.pang-b').addEventListener('click', () => {
  alert('感谢您的反馈！'); // 示例：弹出提示
});

