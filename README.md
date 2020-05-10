# Trash Talk Generate
一個使用 Node.js + Express 打造的登入網站，此專案提供網站登入功能。

## 功能列表
- 使用者可輸入e-mail與密碼來登入網站。
- 點選"Sing in"紐，若登入成功跳轉畫面，若登入失敗則會在下方顯示提示文字。
- 點選"Sing out"紐，可登出帳號跳回登入頁面。
- 點擊"Example Web",若登入狀態則畫面顯示使用者頁面，若無登入狀態則顯示登入頁面

### 啟動方式
- 將專案clone到本地端
  ```
  git clone https://github.com/irissung/restaurant_list.git
  ```

- 進入到專案資料夾後，安裝packages
  ```
  cd restaurant
  npm install
  ```

- 透過nodemon啟動專案
  ```
  npm run dev
  ```
  或
  ```
  npm start
  ```

- 在terminal可以看到 Express is listening on localhost : 3000，開啟瀏覽器在網址列輸入localhost:3000

### Test Account
您可使用下列帳號做測試：
```
email: 'test@test.com'
password: '1234'
```
或
```
email: 'tony@stark.com'
password: 'iamironm

email: 'captain@hotmail.com'
password: 'icandothisalld

email: 'peter@parker.com'
password: 'enajyram'

email: 'natasha@gamil.com'
password: '*parol#@$!'

email: 'nick@shield.com'
password: 'password'
```

### 開發環境
- Node.js: v10.15.0
- Express: v4.17.1
- Express-Handlebars: v4.0.4
- Body-parser: v1.19.0
- express-session": v1.17.1