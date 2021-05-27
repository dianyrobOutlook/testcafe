import { t } from 'testcafe'
import login from '../pages/loginPage.js'
import home from '../pages/homePage.js'
import { 
  URLS, 
  CREDENTIALS,
  ERROR_MSGS,
  
} from '../data/constants.js'

fixture('Login Tests').page(URLS.BASE_URL)

test('1.Login with a valid user \n 3.Logout from products page', async t => {
  //1.Login with a valid user
  await login.doLogin(CREDENTIALS.USER, CREDENTIALS.PASS)
  await login.validateProductsPageDisplayed()
  //3.Logout from products page
  await home.doLogout()
  await login.validateLoginPageDisplayed()
})

test('2.Login with an invalid user', async t => {
  await login.doLogin(CREDENTIALS.INVALID_USER, CREDENTIALS.PASS)
  await login.validateErrorMessageDisplayed(ERROR_MSGS.INVALID_CRED_MSG)

})


