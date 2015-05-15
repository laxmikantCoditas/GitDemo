<?php
$files = scandir('.');

foreach($files as $file) {
    $fileName = pathinfo($file, PATHINFO_FILENAME);

    // Display nnnn.HTML files
    if (preg_match("/^\\d{4}\\.html$/", $file)) { 
        echo "<a href=\"", $file, "\">", $file, "</a>";
    }

    // JS file with no matching HTML - create issues.html?id=nnnn
    else if (preg_match("/\\.js$/", $file) && !file_exists($fileName.'.html')) {
        echo "<a href=\"issue.html?id=", $fileName, "\">", $file, "</a>";
    } else {
        continue;
    }
    echo '<br>';
}
?>