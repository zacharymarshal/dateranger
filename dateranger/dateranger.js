(function( $ ) {
	$.widget( "ui.dateranger", {
 
		// Default options
		options: { 
			start_date: new Date(),
			end_date: new Date(),
			numberOfMonths: 3,
			dateFormat: 'mm/dd/yy',
			onSelectStartDate: function(e, obj) {},
			onSelectEndDate: function(e, obj) {}
		},
	 
		// Set up the widget
		_create: function() {
			var self = this;

			self.element.datepicker({
				numberOfMonths: self.options.numberOfMonths,
				dateFormat: self.options.dateFormat,
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


		setStartDate: function(date) {
			if ( !(date instanceof Date) ) {
				date = $.datepicker.parseDate(this.options.dateFormat, date);
			}

			this._setOption('start_date', date);
			this.element.datepicker('option', 'minDate', date);
			this._trigger('onSelectStartDate', null, {date_text: $.datepicker.formatDate(this.options.dateFormat, date), inst: this.element});
		},

		setEndDate: function(date) {
			if ( !(date instanceof Date) ) {
				date = $.datepicker.parseDate(this.options.dateFormat, date);
			}

			this._setOption('end_date', date);
			this.element.datepicker('option', 'minDate', null);
			this._trigger('onSelectEndDate', null, {date_text: $.datepicker.formatDate(this.options.dateFormat, date), inst: this.element});
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
