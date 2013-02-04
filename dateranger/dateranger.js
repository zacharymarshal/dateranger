(function( $ ) {
	$.widget( "ui.dateranger", {
 
		// Default options
		options: { 
			defaultStartDate: new Date(),
			defaultEndDate: new Date()
		},

		start_date: null,
		end_date: null,
		date_picker: null,
	 
		// Set up the widget
		_create: function() {
			var self = this;

			self.date_picker = self.element.datepicker({
				numberOfMonths: 3,
				showButtonPanel: false,
				onSelect: function(date_text, inst) {
					if (self.start_date && self.end_date) {
						self.start_date = false;
						self.end_date = false;
					}
					if ( ! self.start_date) {
						self.start_date = $.datepicker.parseDate('mm/dd/yy', date_text);
						self.onSelectStartDate(self.start_date);
						inst.settings.minDate = self.start_date;
						return;
					}
					if ( ! self.end_date) {
						self.end_date = $.datepicker.parseDate('mm/dd/yy', date_text);
						self.onSelectEndDate(self.end_date);
						inst.settings.minDate = null;
						return;
					}
				},
				beforeShowDay: function(date) {
					if (date >= self.start_date && date <= self.end_date) {
						return [true, 'in_range'];
					} else {
						return [true, ''];
					}
				}
			});
		},
	 
		// Use the _setOption method to respond to changes to options
		_setOption: function( key, value ) {
			switch( key ) {
			case "defaultStartDate":
				break;
			case "defaultEndDate":
				break;
			}
	 
			// In jQuery UI 1.8, you have to manually invoke the _setOption method from the base widget
			$.Widget.prototype._setOption.apply( this, arguments );
			// In jQuery UI 1.9 and above, you use the _super method instead
			this._super( "_setOption", key, value );
		},

		setStartDate: function(date_text) {
			return this.datepicker._selectDate('#' + $(this).attr('id'), date_text);
		},
		
		setEndDate: function(date_text) {
			return this.datepicker._selectDate('#' + $(this).attr('id'), date_text);
		},

		onSelectStartDate: function() {},

		onSelectEndDate: function() {},
	 
		// Use the destroy method to clean up any modifications your widget has made to the DOM
		destroy: function() {
			// In jQuery UI 1.8, you must invoke the destroy method from the base widget
			$.Widget.prototype.destroy.call( this );
			// In jQuery UI 1.9 and above, you would define _destroy instead of destroy and not call the base method
		}
	});
}( jQuery ) );
