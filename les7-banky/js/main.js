

class GetDataFromApi{
    url = "";
    data = null;
    constructor(newURL){
        this.url = newURL;
    }
    async getData(){
        if(this.data === null ){
            await fetch(this.url)
            .then( function(response){
                return response.json();
            }).then((data) => {
                this.data = data;

            });
            
        }
        return this.data;
    }
        
}

//const frits = new Getdatafromapi("/data/transactions.json");
//frits.getdata().then(function(data){console.log(data)})

class Header{
    headerElement;
    figureElement;
    logoIElement;
    logoHeadingElement;
    avatarElement;
    avatarWrapperElement;
    avatarBodyElement;
    avaterHeadElement;
    placetoRenderHeader;

    constructor(placetoRenderHeader){
        this.placetoRenderHeader = document.getElementsByTagName(placetoRenderHeader)[0];
        this.headerElement = document.createElement("header");
        this.headerElement.classList = "header";
        
        this.figureElement = document.createElement("figure");
        this.figureElement.classList = "header__logo";

        this.logoIElement = document.createElement("i");
        this.logoIElement.classList = "fa-solid fa-money-bill-transfer";

        this.logoHeadingElement = document.createElement("h1");
        this.logoHeadingElement.classList = "header__banky";
        this.logoHeadingElement.innerText = "Banky"; //innerText

        this.avatarWrapperElement = document.createElement("div");
        this.avatarWrapperElement.classList = "avatarWrapper";

        this.avatarElement = document.createElement("figure");
        this.avatarElement.classList = "avatar";

        this.avatarHeadElement = document.createElement("div");
        this.avatarHeadElement.classList = "avatar__head";

        this.avatarBodyElement = document.createElement("div");
        this.avatarBodyElement.classList = "avatar__body";
    }
    render(){
        this.placetoRenderHeader.appendChild(this.headerElement);
        this.headerElement.appendChild(this.figureElement);
        this.figureElement.appendChild(this.logoIElement);
        this.figureElement.appendChild(this.logoHeadingElement);
        this.headerElement.appendChild(this.avatarWrapperElement);
        this.avatarWrapperElement.appendChild(this.avatarElement);
        this.avatarElement.appendChild(this.avatarHeadElement);
        this.avatarElement.appendChild(this.avatarBodyElement);

        //<header class="header">
        //<figure class="header__logo">
            //<i class="fa-solid fa-money-bill-transfer"></i>
            //<h2 class="header__banky">Banky</h2>
        //</figure>
        //<div class="avatarwrapper">
            //<figure class="avatar">
                //<div class="avatar__head"></div>
                //<div class="avatar__body"></div>
            //</figure>
            
        //</div>
        //</header>
    }
    

    
}
class BankyMain{
    placeToRenderBankyMain;
    leftSection;
    rightSection;


    constructor(placeToRenderBankyMain){
        this.placeToRenderBankyMain = document.getElementsByTagName(placeToRenderBankyMain)[0];
        // this.leftSection = new BankyLeftSection();
        this.mainElement = document.createElement("main");
        this.mainElement.classList = "banky";

        this.leftSection = new BankyLeftSection(this.mainElement);
        this.rightSection = new BankyRightSection(this.mainElement);
    
      
    }

    makeButtonsFromData(data){
        this.rightSection.makeButtonsFromData("company bank account", data);
      
    }

    makeTransactionsFromData(data){
        
        this.leftSection.makeTransactionsFromData("personal bank account", data);
    }
    render(){
        this.placeToRenderBankyMain.appendChild(this.mainElement);
        this.leftSection.render();
        this.rightSection.render();
    }
}




class BankyLeftSection{
    mainElement;
    constructor(mainElement)    {
        this.mainElement = mainElement;


        this.leftSectionElement = document.createElement("section");
        this.leftSectionElement.classList = "banky__section banky__section--left";

        this.bankyHeaderElement = document.createElement("header");
        this.bankyHeaderElement.classList = "banky__header";

        this.bankyHeaderWrapElement = document.createElement("div");

        this.bankyLogoElement = document.createElement("figure");
        this.bankyLogoElement.classList = "banky__logo";

        this.bankyLogoIElement = document.createElement("i");
        this.bankyLogoIElement.classList = "fa-solid fa-house";

        this.bankyLogoText = document.createElement("h1");
        this.bankyLogoText.classList = "banky__money";
        this.bankyLogoText.innerText = "Saldo: $100 ";


        this.eyeButton = document.createElement("button");
        this.eyeButton.classList = "banky__eyeButton";

        this.eyeFigure = document.createElement("figure");
        this.eyeFigure.classList = "banky__eye";

        this.eyeI = document.createElement("i");
        this.eyeI.classList = "fa-solid fa-eye";

        this.transactionsElement = document.createElement("ul");
        this.transactionsElement.classList = "banky__transactions";

 

    }
    makeTransactionsFromData(accountToShow, data){
        let totalMoney = 0; 
        for(let i = 0; i < data[accountToShow].length; i++ ){
            totalMoney += data[accountToShow][i]["amount"];
        }

        this.bankyLogoText.innerText = "Saldo:" + " $"  + totalMoney;

        


        for(let i = 0; i < data[accountToShow].length; i++){
            this.transactionElement = document.createElement("li");
            this.transactionElement.classList = "banky__transaction";
    
            this.transactionFrom = document.createElement("h3");
            this.transactionFrom.classList = "banky__name";
            this.transactionFrom.innerText = data[accountToShow][i]["from/to"];
    
    
            this.transactionAmount = document.createElement("h3");
            this.transactionAmount.classList = "banky__amount";
            this.transactionAmount.innerText = data[accountToShow][i]["amount"];

            
    

            this.transactionsElement.appendChild(this.transactionElement);
            this.transactionElement.appendChild(this.transactionFrom);
            this.transactionElement.appendChild(this.transactionAmount);
      
        }
        this.transferButton = document.createElement("button");
        this.transferButton.classList = "banky__transferButton";
        this.transferButton.innerText = "Transfer Funds";
        this.leftSectionElement.appendChild(this.transferButton);
   

    }
    render(){
        this.mainElement.appendChild(this.leftSectionElement);

        this.leftSectionElement.appendChild(this.bankyHeaderElement);
        this.bankyHeaderElement.appendChild(this.bankyHeaderWrapElement);
        this.bankyHeaderWrapElement.appendChild(this.bankyLogoElement);
        this.bankyLogoElement.appendChild(this.bankyLogoIElement);
        this.bankyHeaderWrapElement.appendChild(this.bankyLogoText);
        this.bankyHeaderWrapElement.appendChild(this.eyeButton);
        this.eyeButton.appendChild(this.eyeFigure);
        this.eyeFigure.appendChild(this.eyeI);
        this.leftSectionElement.appendChild(this.transactionsElement);
        
    }
}


class BankyRightSection{
    mainElement;
    constructor(mainElement) {
        this.mainElement = mainElement;

        this.rightSectionElement = document.createElement("section");
        this.rightSectionElement.classList = "banky__section banky__section--right";

        this.accountsElement = document.createElement("ul");
        this.accountsElement.classList = "banky__accounts";

      


    }
    makeButtonsFromData(data){
        Object.entries(data).forEach((entry) => {
            
            this.accountElement = document.createElement("li");
            this.accountElement.classList = "banky__account";
            this.accountElement.onClick = () => {
                console.log(entry);
            }
    
            this.bankySwitchButton = document.createElement("button");
            this.bankySwitchButton.classList = "banky__switchaccount";
    
            this.bankySwitchAccountFigure = document.createElement("figure");
            this.bankySwitchAccountFigure.classList = "banky__logo";
    
            this.bankySwitchI = document.createElement("i");
            this.bankySwitchI.classList = "fa-solid fa-house";
    
            this.bankyNameOfAccount = document.createElement("h4");
            this.bankyNameOfAccount.classList = "banky__nameofaccount";
            this.bankyNameOfAccount.innerText = entry[0];
    
            this.accountsElement.appendChild(this.accountElement);

            this.accountsElement.appendChild(this.accountElement);
            this.accountElement.appendChild(this.bankySwitchButton);
            this.bankySwitchButton.appendChild(this.bankySwitchAccountFigure);
            this.bankySwitchAccountFigure.appendChild(this.bankySwitchI);
            this.accountElement.appendChild(this.bankyNameOfAccount);
        
        })

       
    }

    
    render(){
        this.mainElement.appendChild(this.rightSectionElement);
        this.rightSectionElement.appendChild(this.accountsElement);

    }
}





class App{
    bankyHeader;
    bankyMain;
    getDataFromApi;


    constructor(){
        this.header = new Header("body");
        this.bankyMain = new BankyMain("body");

        this.getDataFromApi = new GetDataFromApi("./data/transactions.json");

        this.getDataFromApi
            .getData()
            .then().then( (data) => {
                this.bankyMain.makeTransactionsFromData(data);
                this.bankyMain.makeButtonsFromData(data);
        });
        


        this.header.render();
        this.bankyMain.render();

    }
}


const app = new App();














