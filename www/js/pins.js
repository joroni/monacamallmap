$(document).ready(function() {
    var items = [];

    $.getJSON('js/pins.json', function(json) {
        $.each(json.levels, function(index, orders) {
            $.each(this, function() {
                $.each(this, function() {
                    //items.push('<div class="row">' + this.name + "\t" + this.strength + "\t" + this.dose + "\t" + this.route + "\t" + this.sig + "\t" + this.pillCount + "\t" + this.refills + '</div>' + "\n");
                    items.push('<div class="level level--' + this.level + '" aria-label="Level ' + this.level + '">' +
                        '<img class="' + this.image + '__maps" id="Level_' + this.level + '" src="img/' + this.image + '.svg" alt="Level ' + this.level + '" />' +
                        '<div id="Level' + this.image + '__Pins" class="level__pins">' +
                        '<a class="pin pin--1-1" data-category="1" data-space="1.01" href="#" aria-label="Pin for Apple Heart">' +
                        '<span class="pin__icon">' +
                        '<svg class="icon icon--pin"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pin"></use></svg>' +
                        '<svg class="icon icon--logo icon--appleheart"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-appleheart"></use></svg>' +
                        '</span>' +
                        '</a>' +
                        '</div>' +

                        this.name + "\t" + this.strength + "\t" + this.dose + "\t" + this.route + "\t" + this.sig + "\t" + this.pillCount + "\t" + this.refills + '</div>' + "\n");
                });
            });
        });

        $('<div>', {
            "class": 'levels',
            "ID": "Levelsss",
            html: items.join('')
        }).appendTo("#Mall");

    });
});
``