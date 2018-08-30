function Review(id, message) {
    Container.call(this);
    this.id = 'review' + id;
    this.message = message;
    this.allowed = false;

    $.get({   //ajax
        url: './json/add.json',
        //method: 'POST',
        context: this,
        data: { id_user : this.id,
                text: this.message
                },
        dataType: 'json',
        success: function(data) {
            if (data.result == 0){
                alert(data.error_message);
            } else {
                console.log(data.userMessage);
                this.render();
            }
        }
    });
}

Review.prototype = Object.create(Container.prototype);
Review.prototype.constructor = Review;
Review.prototype.render = function () {
    var self = this;
    var $review = $('#review');
    var div = $('<div/>', {id: this.id});
    var message = $('<p/>',{
        text: this.message
    });
    if (this.allowed) {
        div.append(message, $('<hr>'));
    } else {
        var allow = $('<button/>', {
            class: "btn btn-dark",
            text: 'Одобрить'
            , click: function () {
                $.get({   //ajax
                    url: './json/submit.json',
                    //method: 'POST',
                    context: self,
                    data: { id_comment : this.id,
                    },
                    dataType: 'json',
                    success: function(data) {
                        if (data.result == 0){
                            alert(data.error_message);
                        } else {
                            self.allowed = true;
                            self.remove();
                            self.render();
                        }
                    }
                });

            }
        });
        var del = $('<button/>', {
            class: "btn btn-dark",
            text: 'Удалить'
            , click: function () {
                self.remove();
            }
        });
        div.append(message,allow, del, $('<hr>'));
        //console.log(moderated);
    }
    $review.append(div);
};
Review.prototype.remove = function () {
    $.get({   //ajax
        url: './json/delete.json',
        //method: 'POST',
        context: this,
        data: { id_comment : this.id,
        },
        dataType: 'json',
        success: function(data) {
            if (data.result == 0){
                alert(data.error_message);
            } else {
                $('#' + this.id).detach();
            }
        }
    });

}