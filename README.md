# React Memo
Example at [memo.surge.sh](https://memo.surge.sh)  
Based on [create-react-app](https://github.com/facebookincubator/create-react-app)  
## Description
The simple game for training your memory...
Thanks to latest CRA [updates](https://github.com/jevakallio/redux-offline/blob/master/README.md#progressive-web-apps), this app works in offline. Furthermore you can add it on the mobile desktop on Android device and play in offline too 👍
## Use
```bash
git clone https://github.com/EddiG/cra-memo.git
cd cra-memo
yarn install
```
start the development server
```bash
yarn start
```
build for production
```bash
yarn build
```
run tests
```bash
yarn test
```
### Deploy with [Surge](http://surge.sh)
Install `surge`
```bash
yarn global add surge
```
Build
```bash
yarn build
```
Deploy
```bash
surge -p ./build
```
