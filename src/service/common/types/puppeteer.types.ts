export interface ScrollOptions {
    minDistance?: number;     // 最小滚动距离（像素），默认200
    maxDistance?: number;     // 最大滚动距离（像素），默认1000
    duration?: number;        // 滚动持续时间（毫秒），默认1000
    step?: number;            // 每次滚动步长（像素），默认20
    direction?: 'up'|'down';  // 滚动方向，默认向下
    times?: number;           // 滚动次数（不传则无限循环）
    waitAfterScroll?: number; // 每次滚动后的等待时间（毫秒），默认0
}

/**
// 示例1：向下滚动5次（每次滚动距离300-800px）
await scrollPage(page, {
    minDistance: 300,
    maxDistance: 800,
    times: 5
});

// 示例2：向上缓慢滚动（每次200-400px，持续2秒）
await scrollPage(page, {
    direction: 'up',
    minDistance: 200,
    maxDistance: 400,
    duration: 2000
});

// 示例3：无限滚动（带1秒等待）
await scrollPage(page, {
    waitAfterScroll: 1000
});
 */