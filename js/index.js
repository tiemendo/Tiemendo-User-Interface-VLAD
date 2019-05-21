
class DropDownLink{
    constructor (element){
        this.element = element;
        this.button = this.element.querySelector(".dropDownButton");
        this.content = this.element.querySelector(".links");
        this.button.addEventListener ("click", () => {
            this.toggleContent();
        })
    }
    toggleContent(){
        //this.content.classList.toggle("show"); //broken variation
        //this.content.style.display = "flex"; //functional but insufficient variation\
        if(this.content.style.display === "flex"){
            console.log("if fork valid, code ineffective")
            this.content.style.display = "none";
        }else{
            this.content.style.display = "flex";
        }
    }
}



let dropDown = document.querySelectorAll(".navFunctional");
dropDown.forEach(function(element){
    return new DropDownLink(element);
})
