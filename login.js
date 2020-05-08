function accountLogin(options) {
  //定義使用者資料
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  //先利用使用者輸入的email來尋找users內有沒有相同的資料並存入account
  let account = users.find(user => user.email === options.email)

  //比對options 與 users 是否有相同資訊
  if (!account || (account.password !== options.password)) {
    return '你的 Mail 或 密碼 錯誤囉! 請重新輸入'
  } else {
    return account.firstName
  }

}
module.exports = accountLogin