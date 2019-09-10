## 简介
`Taro` 默认支持 `redux`，但是没有加入`reselect`的处理，从零开始略显麻烦。就配置了一个项目，把所有基础代码配置完成。下载项目后 `npm install` 就可以开始干活了

其实主要是为了自用

TODO: npm版本

## 安装

项目基于 [Taro](https://github.com/NervJS/taro)，Taro要求node版本 >= 8.0.0

推荐使用 [nvm](https://github.com/creationix/nvm) 来管理node版本

推荐使用 [nrm](https://github.com/Pana/nrm) 来管理npm源

### 安装Taro

```bash
# 设置node版本
$ nvm install vx.x.x
$ nvm use vx.x.x

# 推荐使用 .nvmrc 文件固定当前项目node版本
# 新建 .nvmrc 文件 输入 vx.x.x 保存
$ nvm use 

# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli

# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
```

### 克隆项目

```bash
# 克隆项目地址
$ git clone [https://github.com/juneyang/TaroBasic.git](https://github.com/juneyang/TaroBasic.git) YourProject && cd YourProject

# 使用 yarn 安装依赖
$ yarn
# OR 使用 npm 安装依赖
$ npm install
```

### 注意事项
值得一提再提的是，如果安装过程出现sass相关的安装错误，请在安装mirror-config-china后重试。
```bash
$ npm install -g mirror-config-china
```

## 进入开发

### 微信小程序
选择微信小程序模式，需要自行下载并打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，然后选择项目根目录进行预览。

微信小程序编译预览及打包（去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包）


```bash
# yarn
$ yarn dev:weapp
$ yarn build:weapp
# npm script
$ npm run dev:weapp
$ npm run build:weapp
# 仅限全局安装
$ taro build --type weapp --watch
$ taro build --type weapp
# npx 用户也可以使用
$ npx taro build --type weapp --watch
$ npx taro build --type weapp
```
