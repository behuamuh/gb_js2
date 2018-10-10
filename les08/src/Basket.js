function Basket(userId){
    //this.url = 'behuamuh.github.io';
    Container.call(this);
    this.id = 'basket';
    this.userId = userId;
    this.items = [];
    this.amount = 0;
}
Basket.prototype = Object.create(Container.prototype);
Basket.prototype.constructor = Basket;
Basket.prototype.render = function(){
    var self = this;
    var $basket = $('#'+ this.id);
    $basket.html('<p>Товаров в корзине : ' + this.items.length + '<p/>' + '<p>На сумму : ' + this.amount + '<p/>'
    );
    var buttonBuy = $('<button/>',{
        class: 'btn btn-dark',
        id: this.id + 'button',
        text: 'Перейти'
    });
    var buttonClr = $('<button/>',{
        class: 'btn btn-dark',
        id: this.id + 'button',
        text: 'Очистить'
    });
    buttonClr.click(function () {
        self.clear();
    });
    $basket.append(buttonBuy);
    $basket.append(buttonClr);
    $basket.addClass('mt-4 mb-4')

};
Basket.prototype.get = function(){
    $.get({
        url: './json/get.json',
        context: this,
        dataType: 'json',
        success: function(data) {
	       if(data.result == 0){
               console.error(data.error_message);
	       }else {
               this.amount = data.amount;
               this.items = data.basket;
               //console.log(this);
               this.render();
           }
	    }
    });

};
Basket.prototype.add = function(item, quant){
    $.get({   //ajax
        url: './json/add.json',
        //method: 'POST',
        context: this,
        /*data: { user_id : this.user_id,
                product_id : item.id,
                price: item.price,
                quantity : quant
                },*/
        dataType: 'json',
        success: function(data) {
            if(data.result == 0){
                console.error(data.error_message);
            }else {
                for (var i = 0; i < quant; i++){
                    this.items.push(item);
                    this.amount += item.price;
                }
                //console.log(this);
                this.render();
            }
        }
    });

};

Basket.prototype.clear = function(){
    $.get({   //ajax
        url: './json/add.json',
        //method: 'POST',
        context: this,
        /*data: {
                    "id_product" : 123,
                    "full_price" : 321
                },*/
        dataType: 'json',
        success: function(data) {
            if(data.result == 0){
                console.error(data.error_message);
            }else {
                //console.log(this);
                this.amount = 0;
                this.items = [];
                this.render();
            }
        }
    });

};

