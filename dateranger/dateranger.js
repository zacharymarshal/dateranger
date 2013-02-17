(function( $ ) {
	$.widget( "ui.dateranger", {
 
		// Default options
		options: { 
			start_date: new Date(),
			end_date: new Date(),
			numberOfMonths: 3,
			onSelectStartDate: function(e, obj) {},
			onSelectEndDate: function(e, obj) {}
		},

		_datepicker: null,
	 
		// Set up the widget
		_create: function() {
			var self = this;

			self._datepicker = self.element.datepicker({
				numberOfMonths: self.options.numberOfMonths,
				showButtonPanel: false,
				onSelect: function(date_text, inst) {
					self._onSelect(date_text, inst);
				},
				beforeShowDay: function(date) {
					if (date >= self.options.start_date && date <= self.options.end_date) {
						return [true, 'ui-dateranger-selected'];
					} else {
						return [true, ''];
					}
				}
			});
		},
	 
		// Use the _setOption method to respond to changes to options
		_setOption: function( key, value ) {

			switch( key ) {
				case "start_date":
					value = $.datepicker.parseDate('mm/dd/yy', value);
					this._datepicker.minDate = value;
					this._trigger('onSelectStartDate', null, {date_text: value, inst: this._datepicker});
					break;

				case "end_date":
					value = $.datepicker.parseDate('mm/dd/yy', value);
					this._datepicker.minDate = null;
					this._trigger('onSelectEndDate', null, {date_text: value, inst: this._datepicker});
					break;
			}
	 
			// In jQuery UI 1.8, you have to manually invoke the _setOption method from the base widget
			$.Widget.prototype._setOption.apply( this, arguments );
			// In jQuery UI 1.9 and above, you use the _super method instead
			this._super( "_setOption", key, value );
		},


		_onSelect: function(date_text, inst) {

			if (this.options.start_date && this.options.end_date) {
				this.options.start_date = false;
				this.options.end_date = false;
			}
			if ( ! this.options.start_date) {
				this.setStartDate(date_text);
				return;
			}
			if ( ! this.options.end_date) {
				this.setEndDate(date_text);
				return;
			}
		},


		setStartDate: function(date_text) {
			this._setOption('start_date', date_text);
		},

		setEndDate: function(date_text) {
			this._setOption('end_date', date_text);
		},

	 
		// Use the destroy method to clean up any modifications your widget has made to the DOM
		destroy: function() {
			// In jQuery UI 1.8, you must invoke the destroy method from the base widget
			$.Widget.prototype.destroy.call( this );
			// In jQuery UI 1.9 and above, you would define _destroy instead of destroy and not call the base method
		},

		_constraintDate: function(date) {

		}
	});
}( jQuery ) );
