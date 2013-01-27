dateranger
==========

jQuery UI date range implementation

```html
<div id="dateranger"></div>
```

```javascript
$('#dateranger').dateranger({
	defaultStartDate: '1/25/2013',
	defaultEndDate: '1/25/2013',
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