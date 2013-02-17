(function() {

  $(function() {

    var $dateranger = $('#dateranger');

    var $selectable_options = $('#dateranger-selectable_options');
    var $start_date = $('#dateranger-start_date');
    var $end_date = $('#dateranger-end_date');

    placeholder = function() {
      return $('#dateranger-date_range_placeholder').html("" + ($start_date.val()) + " - " + ($end_date.val()));
    };

    applyDateRange = function(start_date, end_date) {
      $dateranger.dateranger('setStartDate', start_date);
      return $dateranger.dateranger('setEndDate', end_date);
    };

    placeholder();
    
    $('#dateranger-apply').click(function() {
      return placeholder();
    });

    $dateranger.dateranger({
      numberOfMonths: 3,
      onSelectStartDate: function(e, obj) {
        $end_date.addClass('selected');
        return $start_date.removeClass('selected').val(obj.date_text);
      },
      onSelectEndDate: function(e, obj) {
        $start_date.addClass('selected');
        $end_date.removeClass('selected').val(obj.date_text);
        return $selectable_options.val("" + ($start_date.val()) + "-" + ($end_date.val()));
      }
    });
    $start_date.change(function() {
      return applyDateRange($start_date.val(), $end_date.val());
    });
    $end_date.change(function() {
      return applyDateRange($start_date.val(), $end_date.val());
    });
    return $selectable_options.change(function() {
      return applyDateRange.apply(null, $(this).val().split('-'));
    });
  });

}).call(this);
