const apiProductUrl = "https://api.jsonbin.io/v3/b/6660a42ead19ca34f874b3f8"
 
class Product {
    constructor(product) {
        this.name = product.name;
        this.hotelImg = product.img;
        this.views = product.views;
        this.totalAmount = product.price;
        this.totalRoad = product.totalRoad;
    }
    render = function() {
        return `
        <script type="module" src="./components/productCard.js"></script>
        <product-card img="${this.hotelImg}" name="${this.name}" price="${this.totalAmount}"></product-card>
        `
    }
}


class App {
    constructor(target) {
        this.target = target;
        this.apiProductUrl = apiProductUrl;
    }
    
    init = function(productType) {
        fetch(apiProductUrl).then(response => response.json()).then(data => {
            let productsInfo = data.record;
            let selectedSection = document.getElementById(this.target);
            for(let i = 0 ; i < productsInfo.length ; i++) {
                if(productsInfo[i].type === productType) {
                    const product = new Product(productsInfo[i]);
                    selectedSection.insertAdjacentHTML('afterbegin' , product.render());
                }
            }
        })

    }
}

function clickedButton() {
    console.log("clicked");
}


moveToItemDetails = function(name) {
    const nowUrl = window.location.href;
    let newUrl = nowUrl.replace("hotel.html" , "itemDetails.html");
    newUrl += `?name=${name}`;
    window.location.href = newUrl; 
}