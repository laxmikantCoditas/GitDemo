/** 
Analytics statement that would power this chart
**/


var columnStatement = 'RETURN NumCases AS SELECT ' + 
					  'AVG("Unit Sale Price ($)") AS "Avg Sales Price",' + 
					  'AVG("Product Avg National Sales Price ($)") AS "Avg National Sales Price"' +
					  'GROUP BY "Payment Month" ORDER BY "Payment Month"';

/* 
Representation of old portlet's grid model:
[Series:Avg National Sales Price 
	(Category:October-Metric:283.266213) 
	(Category:January-Metric:279.011987) 
	(Category:April-Metric:285.578614) 
	(Category:February-Metric:291.838828) 
	(Category:August-Metric:287.891469) 
	(Category:June-Metric:281.153440) 
	(Category:November-Metric:269.902480) 
	(Category:July-Metric:278.753754) 
	(Category:May-Metric:273.122443) 
	(Category:December-Metric:276.609108) 
	(Category:March-Metric:290.075916) 
	(Category:September-Metric:291.385679)
]
[Series:Avg Sales Price 
	(Category:October-Metric:247.217493) 
	(Category:January-Metric:245.901976) 
	(Category:April-Metric:250.554505) 
	(Category:February-Metric:258.567179) 
	(Category:August-Metric:254.302098) 
	(Category:June-Metric:248.852938) 
	(Category:November-Metric:239.898922) 
	(Category:July-Metric:245.315083) 
	(Category:May-Metric:241.545747) 
	(Category:December-Metric:244.435373) 
	(Category:March-Metric:256.455452) 
	(Category:September-Metric:257.432922)
]


*/

Ext.define('SalesPricesByMonth', {
	extend: 'Ext.data.Model',
	fields: [
	 		{name: 'metric-name', type: 'String'},
			{name: 'category-name', type: 'String'},
			{name: 'avg-sales-price', type: 'double'},
			{name: 'avg-nat-sales-price', type: 'double'}
	]
});

var lineChartStore = Ext.create('Ext.data.JsonStore', {
    model: 'SalesPricesByMonth',
	data: [
			{'metric-name' : 'avg-sales-price', 'category-name' : 'January', 'avg-sales-price' : 245.901976, 'avg-nat-sales-price' : 279.011987},
			{'metric-name' : 'avg-sales-price', 'category-name' : 'February', 'avg-sales-price' : 258.567179, 'avg-nat-sales-price' : 285.578614},
			{'metric-name' : 'avg-sales-price', 'category-name' : 'March', 'avg-sales-price' : 256.455452, 'avg-nat-sales-price' : 290.075916},
			{'metric-name' : 'avg-sales-price', 'category-name' : 'April', 'avg-sales-price' : 250.554505, 'avg-nat-sales-price' : 285.600000},
			{'metric-name' : 'avg-sales-price', 'category-name' : 'May', 'avg-sales-price' : 241.545747, 'avg-nat-sales-price' : 273.122443},
			{'metric-name' : 'avg-sales-price', 'category-name' : 'June', 'avg-sales-price' : 248.852938, 'avg-nat-sales-price' : 281.153440},
			{'metric-name' : 'avg-sales-price', 'category-name' : 'July', 'avg-sales-price' : 245.315083, 'avg-nat-sales-price' : 278.753754},
			{'metric-name' : 'avg-sales-price', 'category-name' : 'August', 'avg-sales-price' : 254.302098, 'avg-nat-sales-price' : 287.891469},
			{'metric-name' : 'avg-sales-price', 'category-name' : 'September', 'avg-sales-price' : 257.432922, 'avg-nat-sales-price' : 291.385679},
			{'metric-name' : 'avg-sales-price', 'category-name' : 'October', 'avg-sales-price' : 247.217493, 'avg-nat-sales-price' : 283.266213},
			{'metric-name' : 'avg-sales-price', 'category-name' : 'November', 'avg-sales-price' : 239.898922, 'avg-nat-sales-price' : 269.902480},
			{'metric-name' : 'avg-sales-price', 'category-name' : 'December', 'avg-sales-price' : 244.435373, 'avg-nat-sales-price' : 276.609108}
	]
});