var DYNAMICMASK = {
    margin: 20
};

$(function(){
    
    DMSPEED = (DMSPEED == undefined)? 250 : DMSPEED;

});

$(".dynamic-mask").mouseenter(function(e){
    var width = $(this).width();
    var height = $(this).height();
    var offset = $(this).offset(); 
    var x = e.pageX - offset.left;
    var y = e.pageY - offset.top;

    cover = $(this).find(".dm-cover");
    
    if(x < DYNAMICMASK['margin']){
        cover.css("margin-top", "0px");
        cover.css("margin-left", "-"+width+"px");
        cover.animate({'margin-left':'0px'}, DMSPEED, 'swing');
    }else if(x > width - DYNAMICMASK['margin']){
        cover.css("margin-top", "0px");
        cover.css("margin-left", width+"px");
        cover.animate({'margin-left':'0px'}, DMSPEED, 'swing');
    }else if(y < DYNAMICMASK['margin']){
        cover.css("margin-left", "0px");
        cover.css("margin-top", "-"+height+"px");
        cover.animate({'margin-top':'0px'}, DMSPEED, 'swing');
    }else if(y > height - DYNAMICMASK['margin']){
        cover.css("margin-left", "0px");
        cover.css("margin-top", height+"px");
        cover.animate({'margin-top':'0px'}, DMSPEED, 'swing');
    }

    cover.css("visibility", "visible");
});

$(".dynamic-mask").mouseleave(function(e){
    var width = $(this).width();
    var height = $(this).height();
    var offset = $(this).offset(); 
    var x = e.pageX - offset.left;
    var y = e.pageY - offset.top;

    cover = $(this).find(".dm-cover");

    if(x < DYNAMICMASK['margin']){
        cover.animate({'margin-left':"-"+width+"px"}, DMSPEED, 'swing');
    }else if(x > width - DYNAMICMASK['margin']){
        cover.animate({'margin-left': width+'px'}, DMSPEED, 'swing');
    } else if(y < DYNAMICMASK['margin']){
        cover.animate({'margin-top':"-"+height+"px"}, DMSPEED, 'swing');
    }else if(y > height - DYNAMICMASK['margin']){
        cover.animate({'margin-top':height+"px"}, DMSPEED, 'swing');
    }

});
