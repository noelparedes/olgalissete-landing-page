/*--------------------------------------------------------------
# Copyright (C) joomla-monster.com
# License: http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
# Website: http://www.joomla-monster.com
# Support: info@joomla-monster.com
---------------------------------------------------------------*/

//Set Module's Height script
function setModulesHeight() {
	var regexp = new RegExp("_mod([0-9]+)$");
	var jmmodules = jQuery(document).find('.jm-module') || [];
	if (jmmodules.length) {
		jmmodules.each(function(index,element){
			var match = regexp.exec(element.className) || [];
			if (match.length > 1) {
				var modHeight = parseInt(match[1]);
				jQuery(element).find('.jm-module-content').css('height', modHeight + 'px');
			}
		});
	}
}

// responsive tabs on product page
jQuery(document).on('show', '.nav-tabs-responsive [data-toggle="tab"]', function(e) {
	var $target = jQuery(e.target);
	var $tabs = $target.closest('.nav-tabs-responsive');
	var $current = $target.closest('li');
	var $next = $current.next();
	var $prev = $current.prev();
	$tabs.find('>li').removeClass('next prev');
	$prev.addClass('prev');
	$next.addClass('next');
});

//dom ready
jQuery(document).ready(function(){

	//module height
	setModulesHeight();

	//search
	function searchRender(e) {
		var searchTarget = e;
		if (searchTarget.length === 0) {
			return;
		}

		if (searchTarget.hasClass('locationcategory-ms') || searchTarget.hasClass('location-ms') || searchTarget.hasClass('category-ms')) {
			searchTarget.each(function() {
				var searchForm = jQuery(this).find('.dj_cf_search > form');
				if (searchTarget.hasClass('locationcategory-ms')) {
					var searchElems = searchForm.children('.search_regions, .search_ex_fields, .search_type, .search_time, .search_price, .search_only_images, .search_only_video, .search_also_18, .search_only_auctions, .search_only_buynow, .search_radius_range');
				}
				if (searchTarget.hasClass('location-ms')) {
					var searchElems = searchForm.children('.search_cats, .search_regions, .search_ex_fields, .search_type, .search_time, .search_price, .search_only_images, .search_only_video, .search_also_18, .search_only_auctions, .search_only_buynow, .search_radius_range');
				}
				if (searchTarget.hasClass('category-ms')) {
					var searchElems = searchForm.children('.search_radius, .search_regions, .search_ex_fields, .search_type, .search_time, .search_price, .search_only_images, .search_only_video, .search_also_18, .search_only_auctions, .search_only_buynow, .search_radius_range');
				}
				var searchWrapper = jQuery('<div class="search-wrapper clearfix" />');
				searchForm.append(searchWrapper);
				searchWrapper.append(searchElems);
			});

		}

		searchTarget.show();
	}

	//search
	var searchModule = jQuery('.search-ms');
	searchModule.each(function() {
		searchRender(jQuery(this));
	});

	//classifeds prev/next
	jQuery('.nav-tabs-responsive li.active').next().addClass('next');
});