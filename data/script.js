function replace_t_co_links() {
    $('.twitter-timeline-link').each(function(){

        if (!$(this).attr('data-url-expanded')) {
        data_expanded_url = $(this).attr('data-expanded-url');

        if (data_expanded_url) {
        $(this).attr('href', data_expanded_url);
        $(this).attr('data-url-expanded', '1');
            $('> .js-display-url', this).html(data_expanded_url); }}
    });
}

$(document).ready(function(){
    replace_t_co_links();

    var observer = new MutationObserver(function(mutations){
        replace_t_co_links();
    });

    var config = { attributes: true, childList: true, characterData: true, subtree: true };
    observer.observe(document.body, config);

});
