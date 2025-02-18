$(document).ready(function() {
    // Event listener for gallery image click
    $('.gallery-item img').on('click', function() {
        // Get the source of the clicked image
        var imgSrc = $(this).attr('src');
        
        // Set the source of the modal image
        $('.modal-img').attr('src', imgSrc);
    });

    // Clear the modal image when modal is hidden
    $('#lightboxModal').on('hidden.bs.modal', function() {
        $('.modal-img').attr('src', '');
    });
});
