import { t } from 'testcafe'
import login from '../pages/loginPage.js'
import home from '../pages/homePage.js'
import shop from '../pages/shoppingCartPage.js'
import { 
  URLS, 
  PRODUCT,
  
} from '../data/constants.js'

fixture('Login feature')
  .page(URLS.BASE_URL)
  .beforeEach(async t  => {
    await login.doSuccessfulLogin()
  })

test('4.Navigate to the shopping cart', async t => {
  await home.navigateToShoppingCart()
  await shop.validateShoppingCartPageDisplayed()
})

test('5.Add a single item to the shopping cart', async t => {
    await home.addSingleItem()
    await home.navigateToShoppingCart()
    await shop.validateSingleItemAddedToShoppingCart(PRODUCT.ITEM_NAME1)
  })

test('6.Add a multiple items to the shopping cart', async t => {
    await home.addMultipleItems()
    await home.navigateToShoppingCart()
    await shop.validateMultipleItemsAddedToShoppingCart(PRODUCT.ITEM_NAME1,PRODUCT.ITEM_NAME2,PRODUCT.ITEM_NAME3,PRODUCT.ITEM_NAME4,PRODUCT.ITEM_NAME5,PRODUCT.ITEM_NAME6)
  })