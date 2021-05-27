import { Selector, t } from 'testcafe'

class HomePage {
  constructor() {
    this.shoppingCart_Icon = Selector('#shopping_cart_container')
    this.hamburger_Button = Selector('#react-burger-menu-btn')
    this.logout_Button = Selector('#logout_sidebar_link')
    this.sauceLabsBackpack_add_btn = Selector('#add-to-cart-sauce-labs-backpack')
    this.sauceLabsBikeLight= Selector('#add-to-cart-sauce-labs-bike-light')
    this.sauceLabsBoltTShirt = Selector('#add-to-cart-sauce-labs-bolt-t-shirt')
    this.sauceLabsFleeceJacket = Selector('#add-to-cart-sauce-labs-fleece-jacket')
    this.SauceLabsOnesie = Selector('#add-to-cart-sauce-labs-onesie')
    this.AllThingsTShirt = Selector('button[id*="allthethings"]')
  }

  async doLogout(taskName){
    await t
      .click(this.hamburger_Button)
      .click(this.logout_Button)
  }
  async addSingleItem(){
    await t
      .expect(this.sauceLabsBackpack_add_btn.exists).ok()
      .click(this.sauceLabsBackpack_add_btn)
      
  }
  async addMultipleItems(){
    await t
      .expect(this.sauceLabsBackpack_add_btn.exists).ok()
      .click(this.sauceLabsBackpack_add_btn)
      .expect(this.sauceLabsBikeLight.exists).ok()
      .click(this.sauceLabsBikeLight)
      .expect(this.sauceLabsBoltTShirt.exists).ok()
      .click(this.sauceLabsBoltTShirt)
      .expect(this.sauceLabsFleeceJacket.exists).ok()
      .click(this.sauceLabsFleeceJacket)
      .expect(this.SauceLabsOnesie.exists).ok()
      .click(this.SauceLabsOnesie)
      .expect(this.AllThingsTShirt.exists).ok()
      .click(this.AllThingsTShirt)
      
  }
  async navigateToShoppingCart(taskName){
    await t
      .click(this.shoppingCart_Icon)
  }
  

  
  
}

export default new HomePage()