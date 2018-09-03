describe('Прототип всех объектов', function(){
    var container = new Container();
    container.htmlCode = 'somecode';
    it('Тест метода рендер контейнера', function(){
        expect(container.render()).toEqual('somecode');
    });
});