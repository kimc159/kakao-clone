function chat_more_open(thisobj){
    var $this = $(thisobj);
    var parent = $this.closest(".chat_inner");

    $this.find("i").toggleClass("fa-times fa-plus",);
    parent.find(".background_black").toggleClass("active");
    parent.find(".chat_more_list").toggleClass("active");
}