describe('Тестируем создание товара', function(){
    var good = new Goods('');
    
    it('Проверяем id ', function(){
        expect(good.id).toEqual('good');
    });
    
});