const mainBtn = document.querySelector("#all");
const topBtn = document.querySelector("#top-btn");
const bottomBtn = document.querySelector("#bottom-btn");
const shoesBtn = document.querySelector("#shoes-btn");
const accBtn = document.querySelector("#acc-btn");


const allBtn = document.querySelectorAll("button");
const allCards = document.querySelectorAll(".card");

const allTopWear = document.querySelectorAll(".item-top");
const allBottomWear = document.querySelectorAll(".item-bottom");
const allShoes = document.querySelectorAll(".item-shoes");
const allAcc = document.querySelectorAll(".item-acc");


mainBtn.addEventListener("click", function(e){
    allBtn.forEach((ele) =>{
        ele.classList.remove("bg-orange-400")
    });
    e.target.classList.add("bg-orange-400");

    allCards.forEach((ele) =>{
        ele.classList.remove("hidden")
    });

})

topBtn.addEventListener("click", function(e){
    allBtn.forEach((ele) =>{
        ele.classList.remove("bg-orange-400")
    });
    e.target.classList.add("bg-orange-400");

    allCards.forEach((ele) =>{
        ele.classList.add("hidden")
    });

    allTopWear.forEach((ele) =>{
        ele.classList.remove("hidden");
    })    

});


bottomBtn.addEventListener("click", function(e){
    allBtn.forEach((ele) =>{
        ele.classList.remove("bg-orange-400")
    });
    e.target.classList.add("bg-orange-400");

    allCards.forEach((ele) =>{
        ele.classList.add("hidden")
    });

    allBottomWear.forEach((ele) =>{
        ele.classList.remove("hidden");
    })    

})


shoesBtn.addEventListener("click", function(e){
    allBtn.forEach((ele) =>{
        ele.classList.remove("bg-orange-400")
    });
    e.target.classList.add("bg-orange-400");

    allCards.forEach((ele) =>{
        ele.classList.add("hidden")
    });

    allShoes.forEach((ele) =>{
        ele.classList.remove("hidden");
    })    

})


accBtn.addEventListener("click", function(e){
    allBtn.forEach((ele) =>{
        ele.classList.remove("bg-orange-400")
    });
    e.target.classList.add("bg-orange-400");

    allCards.forEach((ele) =>{
        ele.classList.add("hidden")
    });

    allAcc.forEach((ele) =>{
        ele.classList.remove("hidden");
    })    

})