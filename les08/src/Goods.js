function Goods(id, name, price, basket) {
    Container.call(this);
    this.basket = basket;
    this.name = name;
    this.price = price;
    this.id = 'good' + id;
}

Goods.prototype = Object.create(Container.prototype);
Goods.prototype.constructor = Goods;

Goods.prototype.render = function () {
    var self = this;
    var good = $('<div/>',{
        id: this.id
    });
    good.append($('<h3/>',{
        text: this.name
    }));
    good.append($('<p/>',{
        text: 'Цена: ' + this.price
    }));

    var input = $('<input/>',{
        class:"form-control",
        type: 'text',
        id: this.id + 'input'
    });
    var button = $('<button/>',{
        class: 'btn btn-dark',
        type: 'text',
        id: this.id + 'button',
        text: 'В корзину'
    });
    button.click(function () {
        var quantity = input.val() * 1;
        if (quantity != quantity){
            alert("Неверное колличество!");
            return;
        }
        //console.log(quantity);
        self.basket.add({
            "id_product" : self.id,
            "price" : self.price
        }, quantity)
        input.val('');
    });
    good.append(input,$('<br>'), button, $('<br>'));
    $('#goods').append(good);
};