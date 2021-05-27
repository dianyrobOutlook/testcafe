import dotenv from 'dotenv'
dotenv.config()
export const URLS = {
    BASE_URL: 'https://www.saucedemo.com/'
}
export const CREDENTIALS = {
    USER: process.env.USER1,
    PASS: process.env.PASS1,
    INVALID_USER: 'actorruc12312@gmail.com'
}

export const ERROR_MSGS = {
    INVALID_CRED_MSG: 'Epic sadface: Username and password do not match any user in this service',
    MSG_REQUIRED_FIRST_NAME: 'Error: First Name is required',
    MSG_REQUIRED_LAST_NAME: 'Error: Last Name is required',
    MSG_REQUIRED_POSTAL_CODE: 'Error: Postal Code is required',
    EMPTY_CREDENTIALS_ERROR_MSG: 'Epic sadface: Username is required'
}
export const PRODUCT = {
    ITEM_NAME1: 'Sauce Labs Backpack',
    ITEM_NAME2: 'Sauce Labs Bike Light',
    ITEM_NAME3: 'Sauce Labs Bolt T-Shirt',
    ITEM_NAME4: 'Sauce Labs Fleece Jacket',
    ITEM_NAME5: 'Sauce Labs Onesie',
    ITEM_NAME6: 'Test.allTheThings() T-Shirt (Red)'    
}

export const USER_INFO = {
    FIRST_NAME: 'DIANA',
    LAST_NAME: 'HERNANDEZ',
    POSTAL_CODE: '54567'
}



