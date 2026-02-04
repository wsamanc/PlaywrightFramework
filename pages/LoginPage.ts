import {Page,expect,Locator} from '@playwright/test';

export class LoginPage {        
  readonly page: Page;  

  // locators
  readonly userName: Locator;
  readonly password: Locator;
  readonly loginButton: Locator; 
  readonly txtLoginErrorMessage: Locator;

  // constructor
    constructor(page: Page) {   
    this.page = page;    
    // initialize locators
    this.userName = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');     
    this.loginButton = page.locator('button[type="submit"]');
    this.txtLoginErrorMessage = page.locator(':text-is("Invalid credentials")');

  } 

  // action methods
  async isLoginPageExists() {
    let pageTitle:string = await this.page.title();
    if(pageTitle.includes("OrangeHRM")) {
      return true;
    }else {
      return false;
    }      
  }

  // enter username
    async enterUserName(username: string) {  
        try{
            await this.userName.fill(username);
          
        }catch(error){
            console.error("Error during entering username: ", error);
            throw error;
        }
    }

    // enter password
      async enterPassword(password: string) {  
        try{            
            await this.password.fill(password);  
            
        }catch(error){
            console.error("Error during entering password: ", error);
            throw error;
        }
    }

    // click login button
      async clickLoginButton() {  
        try{                
            await this.loginButton.click();
        }catch(error){
            console.error("Error during clicking login button: ", error);
            throw error;
        }
    }

    async getLoginErrorMessage(): Promise<null | string> {
      return(this.txtLoginErrorMessage.textContent());
    }
}

