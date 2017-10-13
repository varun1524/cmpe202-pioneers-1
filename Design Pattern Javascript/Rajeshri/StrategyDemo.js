/********************************************************************
 * Strategy design pattern
 ********************************************************************/ 

var SortArray = {};

var Bubble_Sort = Object.create(SortArray);
var Merge_Sort = Object.create(SortArray);
var Quick_Sort = Object.create(SortArray);

var DataArray = [];
DataArray.push(1);
DataArray.push(58);
DataArray.push(44);
DataArray.push(26);
DataArray.push(11);
DataArray.push(99);
DataArray.push(35);

console.log("Array elements before sorting : " + DataArray);

var l = 0;
var r = DataArray.length - 1;

var StrategyPrototype = {
	initialize : function(type) {
		if (type === 'bubble') {
			this.sortAlgorithm = Bubble_Sort;
		} else if (type === 'merge') {
			this.sortAlgorithm = Merge_Sort;
		} else if (type === 'quick') {
			this.sortAlgorithm = Quick_Sort;
		}
	},
	doSort : function(data) {
		return this.sortAlgorithm.sort(data, l, r);
	}
};

Bubble_Sort.sort = function(data, l, r) {
	var flag;
	do {
		flag = false;
		for (var i = 0; i < r; i++) {
			if (data[i] > data[i + 1]) {
				var temp = data[i];
				data[i] = data[i + 1];
				data[i + 1] = temp;
				flag = true;
			}
		}
		r--;
	} while (flag);
	return data;
};

Merge_Sort.sort = function(data, l, r) {
	if (data.length < 2) {
		return data;
	}

	/*
	 * Partition the list into two lists and sort them recursively
	 */
	var middle = parseInt(data.length / 2);
	var left = data.slice(0, middle);
	var right = data.slice(middle, data.length);

	/*
	 * Merge the two sorted lists
	 */
	return Merge(Merge_Sort.sort(left), Merge_Sort.sort(right));
};

function Merge(left, right) {
	var result = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while (left.length) {
		result.push(left.shift());
	}

	while (right.length) {
		result.push(right.shift());
	}

	return result;
}

function SwapNum(data, i, j) {
	var temp = data[i];
	data[i] = data[j];
	data[j] = temp;
}

function Partition(data, pivot, left, right) {
	var pivotValue = data[pivot], partition_Index = left;

	for (var i = left; i < right; i++) {
		if (data[i] < pivotValue) {
			SwapNum(data, i, partition_Index);
			partition_Index++;
		}
	}
	SwapNum(data, right, partition_Index);
	return partition_Index;
}

Quick_Sort.sort = function(data, l, r) {
	var left = l;
	var right = r;
	var len = data.length, pivot, partition_Index;

	if (left < right) {
		pivot = right;

		partition_Index = Partition(data, pivot, left, right);

		// sort left and right
		Quick_Sort.sort(data, left, partition_Index - 1);
		Quick_Sort.sort(data, partition_Index + 1, right);
	}
	return data;
};

var s1 = Object.create(StrategyPrototype);
s1.initialize('bubble');
console.log("Bubble Sort : ");
console.log(s1.doSort(DataArray, l, r));

var s2 = Object.create(StrategyPrototype);
s2.initialize('merge');
console.log("Merge Sort : ");
console.log(s2.doSort(DataArray, l, r));

var s3 = Object.create(StrategyPrototype);
s3.initialize('quick');
console.log("Quick Sort : ");
console.log(s3.doSort(DataArray, l, r));