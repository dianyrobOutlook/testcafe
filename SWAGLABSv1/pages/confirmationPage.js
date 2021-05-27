import { Selector, t } from 'testcafe'

class ConfirmationPage {
  constructor() {
    this.backHome_btn = Selector('#back-to-products')
    
  }

  async validateConfirmationPageDisplayed(firstName = '', lastName = '', postalCode = ''){
    await t
      .expect(this.backHome_btn.exists).ok()
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

  async clickFinishButton(itemName = ''){
    await t
      .click(this.finish_btn)
      
  }

  
  
}

export default new ConfirmationPage()