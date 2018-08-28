function Review() {
    Container.call(this);
    this.id = 'review';
    this.reviews = [];
}
Review.prototype = Object.create(Container.prototype);
Review.prototype.constructor = Review;
Review.prototype.render = function () {
    var self = this;
    var review = $('#review');
    review.html('');
    var name = $('<input/>', {
        type: 'text'
        , placeholder: 'Your name'
        , id: this.id + 'name'
    });
    var email = $('<input/>', {
        type: 'email'
        , placeholder: 'Your email'
        , id: this.id + 'email'
    });
    var message = $('<textarea/>', {
        id: this.id + 'message'
        , placeholder: 'Your review'
        , });
    var button = $('<button/>', {
        id: this.id + 'button'
        , text: 'Оставить отзыв'
        , click: function () {
            self.reviews.push({
                id_comment: new Date().getTime()
                , text: name.val()+':' + email.val()+':'+ message.val(),
                allow: false
            });
            self.render();
        }
    });
    review.append($('<h3/>',{text: 'Оставьте отзыв'}));
    review.append(name, email, $('<br>'), message, $('<br>'), button, $('<hr>'));
    review.append($('<h3/>',{text: 'Отзывы'}));
    var allowed = this.reviews.filter(function(val){
        return val.allow;
    });
    var moderated = this.reviews.filter(function(val){
        return !val.allow;
    });
    allowed.forEach(function(val){
        review.append('<p/>',{
            id: val.id_comment,
            text: val.text
        })
    });
    review.append($('<h3/>',{text: 'На модерации'}));
    moderated.forEach(function(val){
        review.append($('<p/>',{
            id: val.id_comment,
            text: val.text
        }));
        var all = $('<button/>', {
            text: 'Одобрить',
            id: val.id_comment
            , click: function () {
                self.reviews.filter(function(item){
                    return val.id_comment == item.id_comment;
                })[0].allow = true;
                self.render();
            }
        });
        var del = $('<button/>', {
            text: 'Удалить',
            id: val.id_comment
            , click: function () {
                self.reviews.pop(self.reviews.filter(function(item){
                    return val.id_comment == item.id_comment;
                })[0]);
                console.log(self.reviews.filter(function(item){
                    return val.id_comment == item.id_comment;
                })[0]);
                self.render();
            }
        });
        review.append(all, del);
        //console.log(moderated);
    });
}