class Fetch{
    constructor(){
        this.fetch().then(data => {
            for(let i = 0; i < data.accounts.length; i++){
            }
        });
    }
    async fetch(){
        return fetch("data/data.json")
        .then(
            function(response){
                return response.json();
            }
        )
    }
}
class Scroll{
    constructor(){
        this.data = new Fetch();
        this.scrollAccount();
    }
    async scrollAccount(){
        const scroll = document.getElementById("js--scroll");
        const toBeAddedList = document.createElement("ul");
        scroll.appendChild(toBeAddedList);

        const dataUpload = function(){
            for(let i = 0; i < data.accounts.length; i++){
                const accountText = document.createElement('li');
                accountText.classList.add("scrollAccount");
                scroll.appendChild(accountText);

                const text = document.createElement("p");
                text.classList.add("scrollAccount__textText");
                text.innerText = data.accounts[i].text;
                accountText.appendChild(text);
    
                const image = document.createElement("img");
                image.classList.add("scrollAccount__img");
                image.setAttribute("src", data.accounts[i].img);
                accountText.appendChild(image);
    
                const articleElement = document.createElement("article");
                articleElement.classList.add("scrollAccount__text");
                accountText.appendChild(articleElement);
    
                const span = document.createElement("span");
                span.classList.add("scrollAccount__text--span");
                articleElement.appendChild(span);
    
                const username = document.createElement("h3");
                username.classList.add("scrollAccount__text");
                username.innerText = data.accounts[i].username;
                span.appendChild(username);

                const name = document.createElement("p");
                name.classList.add("scrollAccount__text--name");
                name.innerText = data.accounts[i].name;
                span.appendChild(name);
    
                if(i === data.accounts.length - 1){
                    observer.observe(accountText);
                }
            }
        }
        const data = await this.data.fetch();
        for(let i = 0; i < data.accounts.length; i++){
            this.toBeAddedLi = document.createElement("li");
            this.toBeAddedLi.classList.add("scrollAccount");
            toBeAddedList.appendChild(this.toBeAddedLi);

            this.text = document.createElement("p");
            this.text.classList.add("scrollAccount__textText");
            this.text.innerText = data.accounts[i].text;
            this.toBeAddedLi.appendChild(this.text);
    
            this.image = document.createElement("img");
            this.image.classList.add("scrollAccount__img");
            this.image.setAttribute("src", data.accounts[i].img);
            this.toBeAddedLi.appendChild(this.image);
    
            this.articleElement = document.createElement("article");
            this.articleElement.classList.add("scrollAccount__text");
            this.toBeAddedLi.appendChild(this.articleElement);
    
            this.span = document.createElement("span");
            this.span.classList.add("scrollAccount__text--span");
            this.articleElement.appendChild(this.span);
    
            this.username = document.createElement("h3");
            this.username.classList.add("scrollAccount__text");
            this.username.innerText = data.accounts[i].username;
            this.span.appendChild(this.username);

            this.name = document.createElement("p");
            this.name.classList.add("scrollAccount__text--name");
            this.name.innerText = data.accounts[i].name;
            this.span.appendChild(this.name);
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting && entry.target === scroll.lastElementChild){
                    dataUpload();
                }
            });
        });
        dataUpload();
    }
}
    
class App{
    constructor(){
        this.createScroll();
    }
    createScroll(){
            this.profile = new Scroll();
        
    }
}

let data = new App();
