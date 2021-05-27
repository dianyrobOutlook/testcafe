import { Selector, t } from 'testcafe'

class OverviewPage {
  constructor() {
    this.finish_btn = Selector('#finish')
    this.item1 = Selector('#item_4_title_link > div')
  }

  async doCheckout(firstName = '', lastName = '', postalCode = ''){
    await t
      .typeText(this.firstName_field,firstName, {paste:true})
      .typeText(this.lastName_field,lastName, {paste:true})
      .typeText(this.postalCode_field,postalCode, {paste:true})
      .click(this.continue_btn)
  }
  async doCheckoutMissingInformation(firstName = '', lastName = '', postalCode = ''){
    await t
      .click(this.continue_btn)
  }
  
  
  async validateOverviewPageDisplayed(){
    await t
      .expect(this.finish_btn.exists).ok()
      
  }
  async validateOrderItems(itemName1 = ''){
    await t
      .expect(this.item1.exists).ok()
      .expect(this.item1.innerText).eql(itemName1)

      
  }

  async doCompletePurchase(itemName = ''){
    await t
      .click(this.finish_btn)
      
  }

  
  
}

export default new OverviewPage()