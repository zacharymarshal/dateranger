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
				var start_date, end_date, $this, date_picker;

				$this = $(this);
				date_picker = $this.datepicker({
					numberOfMonths: 3,
					showButtonPanel: false,
					onSelect: function(date_text, inst) {
						if (start_date && end_date) {
							start_date = false;
							end_date = false;
						}
						if ( ! start_date) {
							start_date = $.datepicker.parseDate('mm/dd/yy', date_text);
							settings.onSelectStartDate(start_date);
							inst.settings.minDate = start_date;
							return;
						}
						if ( ! end_date) {
							end_date = $.datepicker.parseDate('mm/dd/yy', date_text);
							settings.onSelectEndDate(end_date);
							inst.settings.minDate = null;
							return;
						}
					},
					beforeShowDay: function(date) {
						if (date >= start_date && date <= end_date) {
							return [true, 'in_range'];
						} else {
							return [true, ''];
						}
					}
				});
			});
		},
		setStartDate: function(date_text) {
			return this.each(function(){
				$.datepicker._selectDate('#' + $(this).attr('id'), date_text);
			});
		},
		setEndDate: function(date_text) {
			return this.each(function(){
				$.datepicker._selectDate('#' + $(this).attr('id'), date_text);
			});
		},
	};

	$.fn.dateranger = function(method) {
		// Method calling logic
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' +  method + ' does not exist on jQuery.dateranger');
		}
	};
})( jQuery );