import { Selector, t } from 'testcafe'
import home from '../pages/homePage.js'
import { 
    CREDENTIALS, 
  } from '../data/constants.js'
class LoginPage {
  constructor() {
    this.login_btn = Selector('#login-button')
    this.username_input = Selector('#user-name')
    this.password_input = Selector('#password')
    this.errorMsgContainer = Selector('h3')
  }

  async doLogin(user = '', pass = ''){
    await t
      .typeText(this.username_input,user, {paste:true})
      .typeText(this.password_input,pass, {paste:true})
      .click(this.login_btn)
  }

  async doSuccessfulLogin(){
    await t
      .typeText(this.username_input, CREDENTIALS.USER, {paste:true})
      .typeText(this.password_input, CREDENTIALS.PASS, {paste:true})
      .click(this.login_btn)
      this.validateProductsPageDisplayed()
  }

  async validateProductsPageDisplayed(){
    await t
      .expect(home.shoppingCart_Icon.exists).ok()
      .expect(home.hamburger_Button.exists).ok()
  }

  
  validateErrorMessageDisplayed = async (errorMsg = '') => {
    await t
      .expect(this.errorMsgContainer.exists).ok()
      .expect(this.errorMsgContainer.innerText).eql(errorMsg)
    
  }
  validateLoginPageDisplayed = async (errorMsg = '') => {
    await t.expect(this.login_btn.exists).ok()
    
  }
}

export default new LoginPage()