<?
require_once 'simple_html_dom.php';
$dom = file_get_html('https://robinhood.com/stocks/INO', false);

$answer = array();
if(!empty($dom)) {
    $divClass = $title = ”;$i = 0;
    foreach($dom->find(“._2Kx9wO6Yp-tVBQU3GBbFev”) as $divClass) {
        //title
        foreach($divClass->find(“.title”) as $title ) {
            $answer[$i][‘title’] = $title->plaintext;
        }
        //ipl-ratings-bar
        foreach($divClass->find(“.ipl-ratings-bar”) as $ipl_ratings_bar ) {
            $answer[$i][‘rate’] = trim($ipl_ratings_bar->plaintext);
        }
        //content
        foreach($divClass->find(‘div[class=text show-more__control]’) as $desc) {
            $text = html_entity_decode($desc->plaintext);
            $text = preg_replace(‘/\&#39;/’, “‘”, $text);
            $answer[$i][‘content’] = html_entity_decode($text);
        }
        $i++;
    }
}
?>
