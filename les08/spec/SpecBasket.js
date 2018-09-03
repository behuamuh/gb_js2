describe('Тестирование корзины', function () {
    var basket = new Basket(1);
    basket.basket_items = [
        {
            "id_product": 123
            , "price": 100
        }
    ];
    it('тест сборки содержимого корзины 1', function () {
        expect(basket.basket_items.length).
        toBe(1);
    });
    it('тест сборки содержимого корзины 2', function () {
        expect(basket.basket_items[0]).toEqual({
            "id_product": 123
            , "price": 100
        });
    });
});