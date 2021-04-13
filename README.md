# algorithms
algorithms and some questions from leetcode

## Install

clone the repo and install dependence
```shell
git clone git@github.com:zhouytforever/algorithms.git
cd algorithms
npm i
```
## Usage
### test
```shell
cd `some module in src or just in the root dir`
npm test [sub-dir] // this will run the test file in **./** or **./sub-dir**
```
### performance
```shell
cd `some module in src or just in the root dir`
npm run pfms [sub-dir] // this will run the performance file(end with `.pfms.js`) in **./** or **./sub-dir**
```
### add question
```shell
cd `some module in src`
npm run aq `some-module` // this will create a dir contains `desc.md` `some-module.js` `some-module.test.js`
```
