Ext.define( 'YelpExtplorer.model.Business', {
		extend : 'Ext.data.Model',

		config : {
			fields : [
				{  name : 'name', type : 'string' },
				{  name : 'review_count', type : 'int', defaultValue : 0 },
				{  name : 'avg_rating', type : 'float', defaultValue : 0 },

				{ name : 'categories', defaultValue : [] },
				{ name : 'schools', defaultValue : [] },
				
				{  name : 'rating_img_url_small', type : 'string', /* 5x10 */
					convert : function convert_rating_img_url_small$Business( value, record ) {
						if ( value ) { return value; }
						var rating = record.get( 'avg_rating' ) || 0;
						var fileName = record.ratingToSmallStarsImageFileName( rating );
						return 'resources/images/' + fileName;
					}
				},

				{  name : 'rating_img_url', type : 'string', /* 84x17 */
					convert : function convert_rating_img_url$Business( value, record ) {
						if ( value ) { return value; }
						var rating = record.get( 'avg_rating' ) || 0;
						var fileName = record.ratingToStarsImageFileName( rating );
						return 'resources/images/' + fileName;
					}
				}
			]
		},
		
		ratingToStarsImageFileName : function ( rating ) {
			switch ( rating ) {
				case 0 :
					return 'stars_0.png';
				case 1 :
					return 'stars_1.png';
				case 1.5 :
					return 'stars_1_half.png';
				case 2 :
					return 'stars_2.png';
				case 2.5 :
					return 'stars_2_half.png';
				case 3 :
					return 'stars_3.png';
				case 3.5 :
					return 'stars_3_half.png';
				case 4 :
					return 'stars_4.png';
				case 4.5 :
					return 'stars_4_half.png';
				case 5 :
					return 'stars_5.png';
			}
		},

		ratingToSmallStarsImageFileName : function ( rating ) {
			switch ( rating ) {
				case 0 :
					return 'stars_small_0.png';
				case 1 :
					return 'stars_small_1.png';
				case 1.5 :
					return 'stars_small_1_half.png';
				case 2 :
					return 'stars_small_2.png';
				case 2.5 :
					return 'stars_small_2_half.png';
				case 3 :
					return 'stars_small_3.png';
				case 3.5 :
					return 'stars_small_3_half.png';
				case 4 :
					return 'stars_small_4.png';
				case 4.5 :
					return 'stars_small_4_half.png';
				case 5 :
					return 'stars_small_5.png';
			}
		}
	}
);
