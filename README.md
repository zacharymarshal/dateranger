dateranger
==========

jQuery UI date range implementation

```html
<div id="dateranger" data-start_date="1/25/2013" data-end_date="1/25/2013"></div>
```

```javascript
$('#dateranger').dateranger({
	onSelectStartDate: function() {},
	onSelectEndDate: function() {},
});
```

```javascript
$('#date_range_container').dateranger('setStartDate', '1/25/2013');
```

```javascript
$('#date_range_container').dateranger('setEndDate', '1/25/2013');
```