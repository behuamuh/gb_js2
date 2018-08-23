function Basket(id) {
    this.id = id;
    this.countGoods = 0;
    this.amount = 0;
    this.basketItems = [];

    this.getBasket()
}


Basket.prototype.render = function (root) {
    var basketDiv = $('<div />', {
        id: this.id,
        text: 'Корзина'
    });

    var basketItemsDiv = $('<div />', {
        id: this.id + '_items'
    });

    basketItemsDiv.appendTo(basketDiv);
    basketDiv.appendTo(root);
};


Basket.prototype.getBasket = function () {
    var appendId = '#' + this.id + '_items';

    $.get({
        url: './basket.json',
        dataType: 'json',
        context: this,
        success: function (data) {
            var basketData = $('<div />', {
                id: 'basket_data'
            });

            this.countGoods = data.basket.length;
            this.amount = data.amount;
            this.basketItems = data.basket;

            basketData.appendTo(appendId);

            this.refresh();
        },
        error: function (error) {
            console.error('Ошибка получения корзины', error.status, error.statusText);
        }
    });
};


Basket.prototype.add = function (idProduct, price) {
    var basketItem = {
        id_product: idProduct,
        price: price
    };

    this.countGoods++;
    this.amount += price;
    this.basketItems.push(basketItem);

    this.refresh();
};

Basket.prototype.refresh = function () {
    var basketDataDiv = $('#basket_data');

    basketDataDiv.empty();
    basketDataDiv.append('<p>Всего товаров: ' + this.countGoods + '</p>');
    basketDataDiv.append('<p>Сумма: ' + this.amount + '</p>');
};

Basket.prototype.remove = function (idProduct, price) {
    if (!this.countGoods) {
        return;
    }

    for (let i = this.countGoods - 1; i >= 0; i--) {
        if (this.basketItems[i].id_product !== idProduct) {
            continue;
        }

        this.basketItems.splice(i, 1);
        this.countGoods--;
        this.amount -= price;

        this.refresh();

        break;
    }

    return this.countGoods;
};