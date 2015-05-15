<?php

// this is a VERY simple test service to demonstrate how to lazy load nodes
// GET request
$params = $_GET;
$node = $params['node'];

$nodes = array();

// silly example to keep it simple
if($node == 1000) {
    // we only get here, if node 1000 was expanded.
    $nodes = array(
        array(
            "id" => 10000,
            "text"=> "Even More Stuff",
            "leaf"=> true
        )
    );

} else {
    // this is the initial tree load
    $nodes = array(
        array(
            "id" => 1,
            "text"=> "This is an example node.",
            "expanded"=> false,
            "leaf"=> false,
            "children"=> array(
                array(
                    "id" => 100,
                    "text"=> "Another one.",
                    "expanded" => false,
                    "leaf"=> false,
                    "children" => array(
                        array(
                            "id" => 1000,
                            "text"=> "More Stuff",
                            "leaf"=> false,
                            "expanded" => false
                            // this node will be loaded when expanded.
                        )
                    )
                )
            )
        ),
        array(
            "id" => 2,
            "text"=> "Some other node",
            "expanded"=> false,
            "leaf"=> true
        )
    );

}

echo json_encode($nodes);