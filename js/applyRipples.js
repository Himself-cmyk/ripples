$(document).ready(function () {
    // 为 body 元素应用水波纹效果
    $('body').ripples({
        resolution: 512,  // 水波纹的分辨率，值越大越精细，但性能消耗也越大
        dropRadius: 20,   // 水滴的半径，控制水波纹的大小
        perturbance: 0.04 // 扰动程度，控制水波纹的波动幅度
    });
});
