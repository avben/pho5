$(document).ready(function () {
	$(".posts li").hide();	
    size_li = $(".posts li").size();
    x=3;
    $('.posts li:lt('+x+')').show();
    $('#loadMore').click(function () {
        x= (x+1 <= size_li) ? x+1 : size_li;
        $('.posts li:lt('+x+')').show();
		swiperNested3.reInit();
        if(x == size_li){
            $('#loadMore').hide();
			$('#showLess').show();
        }
    });
	
	
	
	
	jQuery('img.svg').each(function(){
		alert("ss");
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
		
});
