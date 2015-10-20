var sitesToBlock = ["Walmart","SheIn","Groupon","Talbots","Micro","Perfumania","A4C","Venus","Ashford","Jos.","FreedomPop","Sponsored"];
var $itemTexts = $(".size1of2 .content-body, .size1of2 .sponsored-by");

sitesToBlock = $.map(sitesToBlock, function(n,i){return n.toLowerCase();});

$itemTexts.each(function() {
	var $currentEl = $(this);
	var thisText = $(this).text().trim().toLowerCase();
	var firstWords = thisText.split(" ");
	var $outerBox, dealTitle;
	
	$.each(sitesToBlock, function(index, value) {
		console.log("sitesToBlock[index] = " + sitesToBlock[index]);
		console.log("thisText = " + thisText);
		if(thisText.indexOf(sitesToBlock[index]) >= 0) {
			$outerBox = $currentEl.closest(".content-box");
			dealTitle = $outerBox.find(".headline-xlarge").html();
			$outerBox.wrapInner("<div style='display:none'></div>");
			$outerBox.prepend("Filtered: " + dealTitle + "");
			$outerBox.css("height", "16px").css("padding", "8px");
			return false;
		}
	});
});