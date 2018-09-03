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
    var form = $('<form/>');


    var name = $('<div/>', {class: "form-group"}).append(
        $('<input/>', {
        class:"form-control",
        type: 'text'
        , placeholder: 'Your name'
        , id: this.id + 'name'
    }));
    var email = $('<div/>', {class: "form-group"}).append(
        $('<input/>', {
        class:"form-control",
        type: 'email'
        , placeholder: 'Your email'
        , id: this.id + 'email'
    }));
    var message = $('<div/>', {class: "form-group"}).append(
        $('<textarea/>', {
        class:"form-control",
        id: this.id + 'message'
        , placeholder: 'Your review'
        , }));
    var button = $('<button/>', {
        class: "btn btn-dark",
        id: this.id + 'button'
        , text: 'Оставить отзыв'
        , click: function () {
            var newReview = new Review(count++, name.val()+':' + email.val()+':'+ message.val());
        }
    });
    var buttonOldReview = $('<button/>', {
        class: "btn btn-dark",
        id: this.id + 'oldReview'
        , text: 'Загрузить отзывы'
        , click: function () {
            $.get({   //ajax
                url: './json/list.json',
                //method: 'POST',
                context: this,
                dataType: 'json',
                success: function(data) {
                    try {
                        console.log(data);
                        for (var i = 0; i < data.length; i++){
                            new Review(data[i].id_comment, data[i].text);
                        }
                        $(this).hide();
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

