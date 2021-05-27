import { Selector, t } from 'testcafe'

class CheckoutPage {
  constructor() {
    this.firstName_field = Selector('#first-name')
    this.lastName_field = Selector('#last-name')
    this.postalCode_field = Selector('#postal-code')
    this.continue_btn = Selector('#continue')
    this.errorMsgContainer = Selector('h3')

  }

  async doCheckout(firstName = '', lastName = '', postalCode = ''){
    await t
      .typeText(this.firstName_field,firstName, {paste:true})
      .typeText(this.lastName_field,lastName, {paste:true})
      .typeText(this.postalCode_field,postalCode, {paste:true})
      .click(this.continue_btn)
  }
  doCheckoutMissingInformation = async (firstName = '', lastName = '', postalCode = '') => {
    await t
      .click(this.continue_btn)
  }
  
  
  async validateErrorMessageMissingData(errorMsg = ''){
    await t
      .expect(this.errorMsgContainer.exists).ok()
      .expect(this.errorMsgContainer.innerText).eql(errorMsg)
  }
  

  
  
}

export default new CheckoutPage()