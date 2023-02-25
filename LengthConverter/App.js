
class App extends HTMLElement{
    constructor(){
        super()

        this.innerHTML ="Hello World "

}

    
}   
customElements.define("app-element",App    )