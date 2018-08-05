$(document).ready(function() {
    var items = [];

    $.getJSON('api/pinsL1.json', function(json) {
        $.each(json.pins, function(index, orders) {
            $.each(this, function() {
                $.each(this, function() {
                    //items.push('<div class="row">' + this.name + "\t" + this.strength + "\t" + this.dose + "\t" + this.route + "\t" + this.sig + "\t" + this.pillCount + "\t" + this.refills + '</div>' + "\n");
                    items.push(
                        '<a class="pin pin--' + this.level + '-1" data-category="1" data-space="1.01" href="#" aria-label="Pin for Apple Heart">' +
                        '<span class="pin__icon">' +
                        '<svg class="icon icon--pin"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pin"></use></svg>' +
                        '<svg class="icon icon--logo icon--appleheart"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-appleheart"></use></svg>' +
                        '</span>' +
                        '</a>' + "\n");
                });
            });
        });

        $('<div>', {
            "class": 'levelsPins',
            html: items.join('')
        }).appendTo("#Level_1__Pins");

    });
});
``