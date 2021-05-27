import { t } from 'testcafe'
import login from '../pages/loginPage.js'
import home from '../pages/homePage.js'
import shop from '../pages/shoppingCartPage.js'
import checkout from '../pages/checkoutPage.js'
import overview from '../pages/overviewPage.js'
import confirm from '../pages/confirmationPage.js'
import { 
  URLS, 
  PRODUCT,
  ERROR_MSGS,
  USER_INFO,
  
} from '../data/constants.js'

fixture('Login feature')
  .page(URLS.BASE_URL)
  .beforeEach(async t  => {
    await login.doSuccessfulLogin()
    await home.addSingleItem()
    await home.navigateToShoppingCart()
    await shop.validateSingleItemAddedToShoppingCart(PRODUCT.ITEM_NAME1)
    await shop.clickCheckoutButton()
  })

test('7.Continue with missing information', async t => {
    await checkout.doCheckoutMissingInformation()
    await checkout.validateErrorMessageMissingData(ERROR_MSGS.MSG_REQUIRED_FIRST_NAME)
    
  })

  test('8.Fill users information \n 9.Final order items \n 10.Complete a purchase', async t => {
    //8.Fill users information
    await checkout.doCheckout(USER_INFO.FIRST_NAME, USER_INFO.LAST_NAME, USER_INFO.POSTAL_CODE)
    await overview.validateOverviewPageDisplayed()
    //9.Final order items
    await overview.validateOrderItems(PRODUCT.ITEM_NAME1)
    //10.Complete a purchase
    await overview.doCompletePurchase()
    await confirm.validateConfirmationPageDisplayed()
    
  })