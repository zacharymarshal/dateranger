$ ->
  $dateranger = $('#dateranger')
  $selectable_options = $('#dateranger-selectable_options')
  $start_date = $('#dateranger-start_date')
  $end_date = $('#dateranger-end_date')

  placeholder = ->
    $('#dateranger-date_range_placeholder').html("#{$start_date.val()} - #{$end_date.val()}");

  applyDateRange = (start_date, end_date) ->
    $dateranger.dateranger('setStartDate', start_date)
    $dateranger.dateranger('setEndDate', end_date)

  placeholder()

  $('#dateranger-apply').click ->
    placeholder()

  $dateranger.dateranger
    onSelectStartDate: (date) ->
      $end_date.addClass('selected')
      $start_date
        .removeClass('selected')
        .val($.datepicker.formatDate('mm/dd/yy', date))
    onSelectEndDate: (date) ->
      $start_date.addClass('selected')
      $end_date
        .removeClass('selected')
        .val($.datepicker.formatDate('mm/dd/yy', date))
      $selectable_options.val("#{$start_date.val()}-#{$end_date.val()}")

  $start_date.change ->
    applyDateRange($start_date.val(), $end_date.val())
  $end_date.change ->
    applyDateRange($start_date.val(), $end_date.val())

  $selectable_options.change ->
    applyDateRange $(this).val().split('-')...