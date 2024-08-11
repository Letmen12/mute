class AddedProduct extends HTMLElement {
    constructor() {
        super();
        this.myRoot = this.attachShadow({ mode: "open" });
        this.hotelImg = this.getAttribute("img") ?? "https://i.ibb.co/9hLBbbc/ichigo-figure.webp"
        this.name = this.getAttribute("name")
        this.totalAmount = this.getAttribute("price");
        this.count =  this.getAttribute("count");
    }

    connectedCallback() {
        this.#Render();
        let deleteButton = this.myRoot.querySelectorAll("button");
        deleteButton[0].addEventListener("click" , ()=> {
            let cartInfo = document.querySelector("cart-info");
            console.log(cartInfo);
            for(let item of cartInfo.productList) {
                if(item.name === this.name) {
                    item.count = 1;
                    break;
                }
            }
            cartInfo.deleteItem(this);
        })
    }


    #Render() {
        this.myRoot.innerHTML = `
            <article class="cartContainer">
            <img src="${this.hotelImg}" alt="">
                <div class="dataContainer">
                    <p style="color: gray;">${this.name}</p>
                    <p style="font-weight: bold;">${parseInt(this.totalAmount).toLocaleString()}₮</p>
                    <p style="color: gray;"> Тоо ширхэг: <em style="font-weight: bold; color: black;">${this.count}</em></p>
                    <hr>
                    <p style="color: gray;">Total: <em style="color: black; font-weight: bold; font-size: 20px; color: red;">${parseInt(this.totalAmount * this.count).toLocaleString()}</em> ₮</p>
                    <button class="deleteProduct">Бараа хасах</button>
                </div>
            </article>

            <style scoped>
            .cartContainer {
                display: flex;
                border: 2px solid black;
                border-radius: 8px;
                padding: 8px;
                margin: 32px 0px;
                & img {
                    width: 200px;
                }

                & .dataContainer {
                    margin-left: 32px;
                    & p {
                        margin: 16px 0px;
                    }
                    .deleteProduct {
                        padding: 8px;
                        border-radius: 8px;
                        background-color: #DB504A;
                        color: #141434;
                        font-size: 14px;
                        font-weight: bolder;
                        border: none;
                        cursor: pointer;
                        margin-top: 12px;
                        margin-bottom: 4px;
                    }
                }
            }
            </style>
        `
    }
}

window.customElements.define("added-product" , AddedProduct);