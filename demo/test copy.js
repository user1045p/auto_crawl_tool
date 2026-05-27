const { launch, getStream, wss } = require("puppeteer-stream");
const fs = require("fs");

const file = fs.createWriteStream(__dirname + "/test.webm");

//爬取房价信息
//https://www.anjuke.com/fangjia/guangzhou2024/gzfygc/
async function test() {
	const browser = await launch({
		executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
		// or on linux: "google-chrome-stable"
		// or on mac: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
		defaultViewport: {
			width: 1920,
			height: 1080,
		},
	});

	const page = await browser.newPage();
	await page.goto("https://www.bilibili.com/video/BV1ix4y1t7Gi/?spm_id_from=333.1007.tianma.1-3-3.click&vd_source=e74a720407387f37b25506189c523ca0");
	const stream = await getStream(page, { audio: true, video: true });
	console.log("recording");

	stream.pipe(file);
	setTimeout(async () => {
		await stream.destroy();
		file.close();
		console.log("finished");

		await browser.close();
		(await wss).close();
	}, 1000 * 10);
}

// function test1() {
// 	console.log(Math.floor(Math.random() * 2000) + 1000);
// }
// test1();

const { BloomFilter } = require('bloom-filters');
// const fs = require('fs');

// 创建一个布隆过滤器
const filter = new BloomFilter(1000, 0.01); // 1000 个元素，1% 的误判率

// 添加一些元素
filter.add('example1');
filter.add('example2');
filter.add('example3');

// 将布隆过滤器序列化为 JSON
const jsonData = filter.saveAsJSON();

// 保存 JSON 数据到文件
// fs.writeFileSync('bloomfilter.json', JSON.stringify(jsonData, null, 2), 'utf8');
// console.log('Bloom filter saved to file.',jsonData);