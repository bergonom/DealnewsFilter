var sitesToBlock = ["Walmart","SheIn","Groupon","Talbots","Micro","Perfumania","A4C","Venus","Ashford","Jos.","FreedomPop","Sponsored"];
var $itemTexts = $(".size1of2 .content-body");
var numWordsToCheck = 15;

// For some reason there are a lot of blank tokens in each DN description
var numBlankStrings = 20;
numWordsToCheck += numBlankStrings;

$itemTexts.each(function() {
	var $currentEl = $(this);
	var thisText = $(this).text().trim();
	var firstWords = thisText.split(" ");
	var $outerBox, dealTitle;
	
	$.each(sitesToBlock, function(index, value) {
		if(thisText.indexOf(sitesToBlock[index]) >= 0) {
			$outerBox = $currentEl.closest(".content-box");
			dealTitle = $outerBox.find(".headline-xlarge").html();
			$outerBox.wrapInner("<div style='display:none'></div>");
			$outerBox.prepend("Blocked: " + dealTitle + "");
			$outerBox.css("height", "16px").css("padding", "8px");
			return false;
		}
	});
});