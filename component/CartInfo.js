class CartInfo extends HTMLElement {
    constructor() {
        super();
        this.myRoot = this.attachShadow({ mode: "open" });
        this.productList = JSON.parse(localStorage.getItem("productList"));
        this.total = 0;
        this.#Render();
    }

    connectedCallback() {    
        this.myRoot.querySelector("i").addEventListener("click" , () => {
            this.style.display = "none";
        }) 
        this.myRoot.getElementById("totalItems").innerText = this.getTotalCount();
        this.myRoot.getElementById("totalPrice").innerText = this.getTotalPrice().toLocaleString();
    }


    addToCart = function(product) {
        let willAdd = true;
        for(let item of this.productList) {
            if(item?.productName === product?.productName) {
                willAdd = false;
                item.count += 1;
                break;
            }
        }
        if(willAdd) {
            this.productList.push(product);
        }
        localStorage.setItem("productList" , JSON.stringify(this.productList));
        this.#Render();
        document.getElementById("totalProduct").innerText = this.getTotalCount();
        this.myRoot.getElementById("totalItems").innerText = this.getTotalCount();
        this.myRoot.getElementById("totalPrice").innerText = this.getTotalPrice().toLocaleString();
    }

    deleteItem = function(product) {
        for(let i = 0; i < this.productList.length ; i++) {
            if(this.productList[i].productName === product.productName) {
                this.productList.splice(i , 1);
            }
        }
        localStorage.setItem("productList" , JSON.stringify(this.productList));
        this.#Render();
        document.getElementById("totalProduct").innerText = this.getTotalCount();
        this.myRoot.getElementById("totalItems").innerText = this.getTotalCount();
        this.myRoot.getElementById("totalPrice").innerText = this.getTotalPrice().toLocaleString();
    }

    getTotalCount() {
        let totalCount = 0;
        for(let item of this.productList) {
            totalCount += item.count;
        }
        return totalCount;
    }

    getTotalPrice = function() {
        let totalPrice = 0;
        for(let item of this.productList) {
            totalPrice += parseInt(item?.price) * item.count;
        }
        return totalPrice;
    }

    renderCartProduct = function() {
        for(let product of this.productList) {
            const addedProduct = `<added-product name="${product?.name}" price="${product?.totalAmount}" count="${product?.count}" img="${product?.hotelImg}"></added-product>`
            this.myRoot.querySelector("#productContainer").insertAdjacentHTML("beforeend" , addedProduct);
        }
    }

    #Render() {
        this.myRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
        <section id="templateSectionId" class="templateSection">
            <section class="mainCart">
                <article class="headerContainer">
                    <h2>Таны сагс</h2>
                    <i style="color: black;" id="closer" class="fa-solid fa-xmark fa-sm"></i>
                </article>
                    <article class="cartTotalData">  
                        <div style="display: flex; color: gray;">Барааны тоо: <p class="innerData" id="totalItems">${this.productList.length}</p></div>
                        <div style="display: flex; color: gray;">Нийт үнэ: <p style="color: red" class="innerData" id="totalPrice"> ${this.getTotalPrice.toLocaleString()} </p>₮ </div> 
                    </article>
                <section id="productContainer">

                </section>
            </section>
        </section>

        <style scoped>
            * {
                margin: 0;
                padding: 0;
            }

            .templateSection {
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: end;
                color: black;
                & .headerContainer {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    padding-top: 64px;
                    & i {
                        cursor: pointer;
                        padding: 17px 13px;
                        border-radius: 50%;
                    }
                    & i:hover {
                        background-color: orange;
                    }
                    & h2 {
                        font-size: 20px;
                    }
                }
            }

            .mainCart {
                height: 100vh;
                overflow-y: scroll;
                position: fixed;
                padding: 16px;
                background-color: white;
                z-index: 4;
                width: 400px;
                & h2 {
                    text-align: center;
                }
            }

            .cartContainer {
                display: flex;
                margin: 32px 0px;
                & img {
                    width: 200px;
                }

                & .dataContainer {
                    margin-left: 32px;
                    & p {
                        margin: 16px 0px;
                    }
                }
            }

            .cartTotalData {
                display: flex !important;
                justify-content: space-between;
                margin-top: 8px;
                & .innerData {
                    margin-left: 6px; 
                    color: black;
                    font-weight: 600;
                    font-size: 20px;g
                    margin-top: -4px;
                }
            }

            @media(max-width: 600px) {
                .mainCart {
                    width: 360px;
                }
            }
        </style>
    `;
    this.myRoot.querySelector("i").addEventListener("click" , () => {
        this.style.display = "none";
    }) 
    this.renderCartProduct();
    }

    // closeCartSection = function() {
    //     console.log(document.getElementsByClassName("templateSection"))
    // }
}   

window.customElements.define("cart-info", CartInfo);