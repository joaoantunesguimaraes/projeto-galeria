import $ from 'jquery'

// parent --> 
function loadIncludes(parent) {
    if(!parent) parent = 'body'

    $(parent).find('[wm-include').each(function(i, e) {
        //JQuery
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadIncludes(e)
            }
        })
    })
}

// vai usar o boby como argumento
loadIncludes()
