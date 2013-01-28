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
	onSelectStartDate: function(date_text) {},
	onSelectEndDate: function(date_text) {},
});
```

```javascript
$('#date_range_container').dateranger('setStartDate', new Date());
```

```javascript
$('#date_range_container').dateranger('setEndDate', new Date());
```