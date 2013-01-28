(function( $ ) {
	var methods = {
		init : function(options) { 
			var settings = $.extend({
				defaultStartDate: new Date(),
				defaultEndDate: new Date(),
				onSelectStartDate: function() {},
				onSelectEndDate: function() {},
			}, options);

			return this.each(function(){
				var $this = $(this);
				var date_picker = $this.datepicker();
			});
		},
		setStartDate: function() {
			
		},
		setEndDate: function() {
			
		},
	};

	$.fn.dateranger = function(method) {
		// Method calling logic
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}
	};
})( jQuery );