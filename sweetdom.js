
// function removeCLASS(ele,remove) {
//     return ele.classList.remove(remove)
// }
// function select(ele){
//     return document.querySelector(ele)
// }
// function selectALL(ele) {
//    return document.querySelectorAll(ele)
// }
// function create(ele,apender) {
//     let create = document.createElement(ele)
//      apender.appendChild(create)
//      return create
// }

 
const SweetDOM = {
    removeCLASS(ele, remove) {
        return ele.classList.remove(remove);
    },

    select(ele) {
        return document.querySelector(ele);
    },

    selectALL(ele) {
        return document.querySelectorAll(ele);
    },

    create(ele,text,apender) {
        let create1 = document.createElement(ele);
        create1.textContent = text
        apender.appendChild(create1);
        return create1;
    }
};
