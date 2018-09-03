describe('Тестируем создание формы', function(){
    var form = new Form();
    
    it('Проверяем id формы', function(){
        expect(form.id).toEqual('form');
    });
});