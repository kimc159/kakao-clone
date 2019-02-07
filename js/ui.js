function chat_more_open(thisobj){
    var $this = $(thisobj);
    var parent = $this.closest(".chat_inner");

    $this.find("i").toggleClass("fa-times fa-plus",);
    parent.find(".background_black").toggleClass("active");
    parent.find(".chat_more_list").toggleClass("active");
}
function preview_show() {
    var preview = $(".chat_preview_wrap");
    var user = $(".chat_user_wrap");
    var search = $(".search");
    var view_more = $(".chat_view_more");
    var search_text = $(".search_text");
    var search_btn = $(".search_sort");

    preview.addClass("on");
    search.addClass("on");
    search_btn.addClass("on");
    user.removeClass("on");
    view_more.removeClass("on");

    search_text.attr("placeholder", "채팅방 이름, 참여자 검색");
}
function user_show(){
    var preview = $(".chat_preview_wrap");
    var user = $(".chat_user_wrap");
    var view_more = $(".chat_view_more");
    var search = $(".search");
    var search_text = $(".search_text");
    var search_btn = $(".search_sort");

    user.addClass("on");
    search.addClass("on");
    preview.removeClass("on");
    search_btn.removeClass("on");
    view_more.removeClass("on");

    search_text.attr("placeholder", "이름검색");
}
function view_more_show() {
    var preview = $(".chat_preview_wrap");
    var user = $(".chat_user_wrap");
    var view_more = $(".chat_view_more");
    var search = $(".search");

    view_more.addClass("on");
    user.removeClass("on");
    preview.removeClass("on");
    search.removeClass("on");
}