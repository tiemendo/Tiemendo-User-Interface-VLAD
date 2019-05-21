
class DropDownLink{
    constructor (element){
        this.element = element;
        this.button = this.element.querySelector(".dropDownButton");
        this.content = this.element.querySelector(".links");
        this.button.addEventListener ("click", () => {
            this.toggleContent();
        })
        this.addEventListener("resize", () => {
            this.hideContent();
        })
    }
    toggleContent(){
        this.content.classList.toggle("show"); // <<didn't work until !important added to .show class
        //##########################################

        //this.content.style.display = "flex"; // functional but insufficient variation

        //###########################################

        // if(this.content.style.display === "flex"){
        //     this.content.style.display = "none";     // << works but nav stays hidden on resize
        // }else{
        //     this.content.style.display = "flex";
        // }
        
        //###########################################
    }
    hideContent(){
        this.content.classList.remove("show");
    }
}



let dropDown = document.querySelectorAll(".navFunctional");
dropDown.forEach(function(element){
    return new DropDownLink(element);
})


document.addEventListener("resize", function(){

})