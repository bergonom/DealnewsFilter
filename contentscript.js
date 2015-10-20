var sitesToBlock = ["Walmart","SheIn","Groupon","Talbots","Micro","Perfumania","A4C","Venus","Ashford","Jos.","FreedomPop","Sponsored","Outback","Logan's","Ann Taylor", "Men's Wearhouse", "Vitamin Shoppe","Adorama","Olive Garden","via eBay","Gymboree"];
var $itemTexts = $(".size1of2 .content-body");

var sitesToBlockLower = $.map(sitesToBlock, function(n,i){return n.toLowerCase();});
console.log("$itemTexts = " + $itemTexts.length);
$itemTexts.each(function() {
	var $currentEl = $(this);
	var thisText = $(this).text().trim().toLowerCase();
	var firstWords = thisText.split(" ");
	var $outerBox, dealTitle;
	
	$.each(sitesToBlockLower, function(index, value) {	
		if(thisText.indexOf(sitesToBlockLower[index]) >= 0) {
			$outerBox = $currentEl.closest(".content-box");
			dealTitle = $outerBox.find(".headline-xlarge").html();
			$outerBox.wrapInner("<div style='display:none'></div>");
			$outerBox.prepend("Filtered (" + sitesToBlock[index] + "): " + dealTitle + "");
			$outerBox.css("height", "16px").css("padding", "8px");
			return false;
		}
	});
});