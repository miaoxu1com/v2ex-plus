
//——————————————————————————————————双击回到顶部——————————————————————————————————
chrome.runtime.sendMessage({get_allSetting: 't'}, function(response) {
    if (response.dblclickToTop){
        $('body').dblclick(function () {
            window.getSelection().removeAllRanges();
            $('html, body').animate({scrollTop: 0}, 300);
        });
    }
});

/*
$('.avatar').each(function(){
    var $this = $(this);
    if ($this.attr('src').indexOf('gravatar') != -1){
        $this.css('display', 'none')
    }
});
*/

//——————————————————————————————————双击回到顶部——————————————————————————————————
