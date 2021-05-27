import { Selector, t } from 'testcafe'
import home from '../pages/homePage.js'
import { 
    USER, PASS, 
    ITEM_NAME1,
  } from '../data/constants.js'
class ShopingCartPage {
  constructor() {
    this.checkout_btn = Selector('#checkout')
    this.singleItem1 = Selector('#item_4_title_link > div.inventory_item_name')
    this.singleItem2 = Selector('#item_0_title_link > div.inventory_item_name')
    this.singleItem3 = Selector('#item_1_title_link > div.inventory_item_name')
    this.singleItem4 = Selector('#item_5_title_link > div.inventory_item_name')
    this.singleItem5 = Selector('#item_2_title_link > div.inventory_item_name')
    this.singleItem6 = Selector('#item_3_title_link > div.inventory_item_name')
  }

  async validateShoppingCartPageDisplayed(){
    await t
      .expect(this.checkout_btn.exists).ok()
  }
  

  async validateSingleItemAddedToShoppingCart(itemName = ''){
    await t
      .expect(this.singleItem1.exists).ok()
      .expect(this.singleItem1.innerText).eql(itemName)
  }
  async validateMultipleItemsAddedToShoppingCart(itemName1 = '',itemName2 = '',itemName3 = '',itemName4 = '',itemName5 = '',itemName6 = ''){
    await t
      .expect(this.singleItem1.exists).ok()
      .expect(this.singleItem1.innerText).eql(itemName1)
      .expect(this.singleItem2.exists).ok()
      .expect(this.singleItem2.innerText).eql(itemName2)
      .expect(this.singleItem3.exists).ok()
      .expect(this.singleItem3.innerText).eql(itemName3)
      .expect(this.singleItem4.exists).ok()
      .expect(this.singleItem4.innerText).eql(itemName4)
      .expect(this.singleItem5.exists).ok()
      .expect(this.singleItem5.innerText).eql(itemName5)
      .expect(this.singleItem6.exists).ok()
      .expect(this.singleItem6.innerText).eql(itemName6)
  }
  
  async clickCheckoutButton(itemName = ''){
    await t
      .click(this.checkout_btn)
      
  }
}

export default new ShopingCartPage()