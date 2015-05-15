jasmine.array = {};

  /**
     * Checks whether or not the specified item exists in the array.
     * Array.prototype.indexOf is missing in Internet Explorer, unfortunately.
     * We always have to use this static method instead for consistency
     * @param {Array} array The array to check
     * @param {Mixed} item The item to look for
     * @param {Number} from (Optional) The index at which to begin the search
     * @return {Number} The index of item in the array (or -1 if it is not found)
     */
jasmine.array.indexOf = function(array, item, from){
    if (array.indexOf) {
        return array.indexOf(item, from);
    }
        
    var i, length = array.length;

    for (i = (from < 0) ? Math.max(0, length + from) : from || 0; i < length; i++){
    if (array[i] === item) {
                return i;
            }
    }

    return -1;
};

 /**
  * Removes the specified item from the array. If the item is not found nothing happens.
  * @param {Array} array The array
  * @param {Mixed} item The item to remove
  * @return {Array} The passed array itself
  */
jasmine.array.remove = function(array, item) {
    var index = this.indexOf(array, item);

    if (index !== -1) {
        array.splice(index, 1);
    }
    
    return array;
};