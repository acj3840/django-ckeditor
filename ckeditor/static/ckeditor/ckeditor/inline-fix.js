(function ($) {
    var onRowCreated = function (row) {
        var targetTextArea = $('#id_' + row.attr('id') + '-text');
        var targetP = $(targetTextArea.parent());
        targetP.children('#cke_id_' + row.attr('id') + '-text').remove();

        var newScript = $('<script />');
        newScript.prop('type', 'text/javascript');
        newScript.html('CKEDITOR.replace("id_' + row.attr('id') + '-text", {"filebrowserWindowWidth": 940, "toolbar_Basic": ' +
            '[["Source", "-", "Bold", "Italic"]], "language": "en-us", "toolbar_Full": ' +
            '[["Styles", "Format", "Bold", "Italic", "Underline", "Strike", "SpellChecker", "Undo", "Redo"], ' +
            '["Image", "Flash", "Table", "HorizontalRule"], ["TextColor", "BGColor"], ["Smiley", "SpecialChar"], ' +
            '["Source"]], "filebrowserUploadUrl": "/ckeditor/upload/", "height": 291, "width": 835, ' +
            '"filebrowserBrowseUrl": "/ckeditor/browse/", "skin": "moono", "filebrowserWindowHeight": 725, ' +
            '"toolbar": "Full"});');

        targetP.append(newScript);
    };


    $(window).bind('row-created', function (e, data) {
        if (data.row != undefined) {
            onRowCreated(data.row);
        }
    });
})(django.jQuery);