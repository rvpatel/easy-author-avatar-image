(function ($) {
    'use strict';

    var uploader;
    $(document).on('click', '.easy-author-avatar-image-upload', function () {

        var attachment;
        var currentThis = $(this);
        var img = $("#easy-author-avatar-image-custom");
        var inputId = $('#easy-author-avatar-image-id');
        var deleteBtn = $("#easy-author-avatar-image-delete-btn");
        var currentThisParent = $(currentThis).parents();

        if (uploader) {
            uploader.open();
            return;
        }

        uploader = wp.media.frames.file_frame = wp.media({
            title: easy_author_avatar_image._media_title,
            button: {
                text: easy_author_avatar_image._media_button_title
            },
            multiple: false
        });

        uploader.on('select', function () {

            img.removeClass( 'easy-author-avatar-image-hide' );
            deleteBtn.removeClass( 'easy-author-avatar-image-hide' );

            attachment = uploader.state().get( 'selection' ).first().toJSON();
            currentThis.text( easy_author_avatar_image.change_button_text );
            currentThisParent.find( img ).attr( 'src', attachment.url );
            currentThisParent.find( inputId ).attr( 'value', attachment.id );
        });

        uploader.open();
    });

    // remove button 
    $( document ).on( 'click', '.easy-author-avatar-image-remove', function () {

        var confirm_answer = confirm( easy_author_avatar_image._delete_button_conform );
        var currentThis = $( this );
        var img = $( '#easy-author-avatar-image-custom' );
        var inputId = $( '#easy-author-avatar-image-id' );
        var deleteBtn = $( '#easy-author-avatar-image-delete-btn' );
        var uploadBtn = $( '#easy-author-avatar-image-upload' );
        var currentThisParent = $( currentThis ).parents();

        if ( confirm_answer ) {

            currentThisParent.find( uploadBtn ).text( easy_author_avatar_image.upload_button_text );
            currentThisParent.find( img ).attr( 'src', '' );
            currentThisParent.find( inputId ).attr( 'value', '' );
            deleteBtn.addClass( 'easy-author-avatar-image-hide' );
            img.addClass( 'easy-author-avatar-image-hide' );
        }

        return false;
    });

})( jQuery );
