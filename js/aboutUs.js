class Member {
    contructor (element) {
        this.element = element;
        this.data = document.querySelector(`.role[data-member = '${this.element.dataset.member}']`);
        console.log(this.data);
    }
}


let members = document.querySelectorAll(".role");
members.forEach(function(member){
    return new Member(member);
})