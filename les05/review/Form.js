function Form() {
    Container.call(this);

    this.id = 'form';
}

Form.prototype = Object.create(Container.prototype);
Form.prototype.constructor = Form;

Form.prototype.render = function () {
    var count = 0;
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
            var newReview = new Review(count++, name.val()+':' + email.val()+':'+ message.val());
        }
    });
    var buttonOldReview = $('<button/>', {
        id: this.id + 'oldReview'
        , text: 'Загрузить отзывы'
        , click: function () {
            $.get({   //ajax
                url: './list.json',
                //method: 'POST',
                context: this,
                dataType: 'json',
                success: function(data) {
                    try {
                        console.log(data);
                        for (var i = 0; i < data.length; i++){
                            new Review(data[i].id_comment, data[i].text);
                        } 
                    } catch (e) {
                        alert(e.message);
                    }
                }
            });
        }
    });
    review.append($('<h3/>',{text: 'Оставьте отзыв'}));
    review.append(name, email, $('<br>'), message, $('<br>'), button, $('<hr>'));
    review.append($('<h3/>',{text: 'Отзывы'}), buttonOldReview, $('<hr>'));
}

