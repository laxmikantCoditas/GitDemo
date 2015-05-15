<?php

header('Content-Type: application/json');

function create_array($start, $limit) {
	$result = array();
	foreach(range($start, ($start+$limit-1)) as $number) {
		$result[] = array(
			"col1" => $number,
			"col2" => "Test",
			"col3" => "4",
			"col4" => "2.3",
			"col5" => "Testing",
			"col6" => "."
		);
	}

	return $result;
}

$data = array(
			"total" => $_GET['limit']*50,
			"data" => create_array(intval($_GET['start']), intval($_GET['limit']))
		);

print json_encode($data);