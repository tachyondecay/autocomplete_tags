/*
 * Autocomplete Tags
 * Uses the jQuery UI Autocomplete plugin
 * 
 * Much of this comes from the "multiple values" example on the jQuery UI doc page:
 * http://jqueryui.com/demos/autocomplete/#multiple
 */

jQuery(document).ready(function($) {
	function split(val) {
		return val.split(/,\s*/);
	}

	function extractLast(term) {
		return split(term).pop();
	}

	// Iterate over the tag list fields and initialize the autocomplete
	$('.field-taglist input, .field-enhancedtaglist input').each(function() {
		// Grab the available tags and put them into an array
		var suggestionsList = $(this).parent().next();
		var suggestions = suggestionsList.children().map(function() {
			return $(this).text();
		}).get();
		
		// Prevent the field from losing focus when TAB pressed while selecting an option
		$(this).bind( "keydown", function(event) {
				if (event.keyCode === $.ui.keyCode.TAB && $(this).data("autocomplete").menu.active) {
					event.preventDefault();
				}
			})
			.autocomplete({
				minLength: 0,
				source: function( request, response ) {
					// delegate back to autocomplete, but extract the last term
					response( $.ui.autocomplete.filter(
						suggestions, extractLast( request.term ) ) );
				},
				focus: function() {
					// prevent value inserted on focus
					return false;
				},
				select: function(event, ui) {
					var terms = split(this.value);
					// remove the current input
					terms.pop();
					// add the selected item
					terms.push(ui.item.value);
					// add placeholder to get the comma-and-space at the end
					terms.push("");
					this.value = terms.join(", ");
					return false;
				}
			});
		// Lastly, we hide Symphony's default list of suggested tags.
		suggestionsList.hide();
	});
});