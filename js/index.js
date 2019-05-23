
class DropDownLink{
    constructor (element){
        this.element = element;
        this.button = this.element.querySelector(".dropDownButton");
        this.content = this.element.querySelector(".links");
        this.button.addEventListener ("click", () => {
            this.toggleContent();
        })
        this.button.addEventListener("resize", () => {
            this.hideContent();
        })
    }
    toggleContent(){
        this.content.classList.toggle("show"); 
        
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

//=================================================================================



class Member {
    constructor (member) {
        this.member = member;
        this.data = document.querySelector(`.role[data-member = '${this.member.dataset.member}']`);
        this.data = document.querySelector(`.role[data-member = '${this.member.dataset.member}']`);
        this.image = document.querySelector(`.profileImage[data-member = '${this.member.dataset.member}']`);
        this.profile = document.querySelector(`.profile[data-member = '${this.member.dataset.member}']`);
        this.information = new Information(this.profile, this.image);
        this.member.addEventListener("click", () => this.select());
    }
    select(){
        let members = document.querySelectorAll(".role");
        members.forEach(function(member){
            member.style.color = "#313715";
            member.style.fontSize = "2rem";
        });
        this.member.style.color = "#D16014";
        this.member.style.fontSize = "2.5rem";
        this.information.select(); 
    }
}

class Information {
    constructor (profile, profileImage){
        this.profileImage = profileImage;
        this.profile = profile;
    }
    select() {
        let profileImages = document.querySelectorAll(".profileImage");
        profileImages.forEach(function(profileImage){
            profileImage.classList.add("hidden");
        });
        this.profileImage.classList.remove("hidden");

        let profiles = document.querySelectorAll(".profile");
        profiles.forEach(function(profile){
            profile.classList.add("hidden");
        });
        this.profile.classList.remove("hidden");
    }
}

let members = document.querySelectorAll(".role");
members.forEach(function(member){
    return new Member(member);
})