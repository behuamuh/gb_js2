var myBasket = new Basket(1);
myBasket.render();
myBasket.get();
myGood1 = new Goods('1', 'Sony xperia Z', 1000, myBasket);
myGood1.render();
myGood2 = new Goods('2', 'iPhone 6', 600, myBasket);
myGood2.render();
myGood1 = new Goods('3', 'Samsung s9', 1200, myBasket);
myGood1.render();
myGood2 = new Goods('4', 'iPhone 7', 1200, myBasket);
myGood2.render();
myGood1 = new Goods('5', 'Alkatel', 100, myBasket);
myGood1.render();
myGood2 = new Goods('6', 'iPhone X', 2000, myBasket);
myGood2.render();
var myForm = new Form();
myForm.render();
$('.multiple-items').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
});