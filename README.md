# puppeteer 实现爬虫

npm install

# 修改代码不会热更新
npm run start

# 修改代码会热更新
npm run start:dev

# node版本
18.17.0

# 需要更新浏览器
npx puppeteer browsers install chrome

# 使用pkg，将index.js打包为exe可执行文件

# 全局安装pkg，执行命令
npm i -g pkg

# 把node项目，先打包成单个的js文件，然后再用pkg打包
npm run build

# package.json文件中，添加bin路径
{
  // 此处添加bin路径
  "bin": "./index.js"
}

# 执行打包命令，pkg . --target win --output main.exe 此时，在打包node为二进制文件
pkg . --target win --output main.exe

# 本项目构建exe命令
pkg -t win ./dist/main.js --public

# 项目修改内容（新增前端页面）
npm add @nestjs/serve-static



# app端命令
# 查找应用的package名称和Activity信息
D:\software-home\androidsdk\build-tools\29.0.3\aapt.exe dump badging C:\Users\Mr.Feng\Downloads\job.apk | find "package: name="
D:\software-home\androidsdk\build-tools\29.0.3\aapt.exe dump badging C:\Users\Mr.Feng\Downloads\job.apk | find "launchable-activity"

//com.zhaopin.social
//com.zhaopin.social.SplashActivity
D:\software-home\androidsdk\build-tools\29.0.3\aapt.exe dump badging C:\Users\Mr.Feng\Downloads\zhilian.apk | find "package: name="
D:\software-home\androidsdk\build-tools\29.0.3\aapt.exe dump badging C:\Users\Mr.Feng\Downloads\zhilian.apk | find "launchable-activity"


# sqlite3数据库命令
sqlite3 job.db

.tables

select * from tablename;

delete from tablename;



boss平台容易发生认证错误，需要加强延时
zhaopin平台,比较稳定，不容易发生异常
liepin平台,多次打开就会提示手机验证码认证（麻烦）,要超长延时才行，太容易验证了
job51平台,容易发生认证错误，需要加强延时