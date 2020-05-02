<?php
function AnalyzeText($url, $app, $key, $query) {

    $headers = "Ocp-Apim-Subscription-Key: $key\r\n";
    $options = array ( 'http' => array (
                           'header' => $headers,
                           'method' => 'GET',
                           'ignore_errors' => true));
    // build query string
    $qs = http_build_query( array (
        "q" => $query,
        "verbose" => "true",
        "staging" => "true",
        "timezoneOffset" => "-360",
      )
    );
    $url = $url . $app . "?" . $qs;
    // Perform the Web request and get the JSON response
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    return $result;
}

function analyzeEntity($data){
    $entities = $data["entities"];
    $new_query = 0;
    for ($i = 0; $i < count($entities); $i++) {
        // if ($entities)
    }
}

function get_analyzed_answer($json){
    $reply_dict = [
        "my_name" => "my name's Rishabh",
        "my_age" => "i'm 18 years old",
        "my_birth_place" => "i was born in Gwalior, India",
        "my_birth_year" => "i was born on January 3rd, 2001",
        "greeting" => "hey!",
        "harmful" => ":(",
        "my_well_being" => "everything's wonderful here on this server, how about you",
        "compliment" => "thank you!",
        "my_college" => "i am currently a sophomore at Texas A&M University",
        "my_hs" => "i went to Memorial High School",
        "my_current_courses" => "i'm in CSCE 221, MATH 302, STAT 211, and some other courses",
        "user_reply" => "i see",
        "None" => "idk how to answer that :/",
        "my_major" => "i'm currently studying computer science and engineering"
    ];
    $data = json_decode($json, true);
    $topIntent = $data["topScoringIntent"]["intent"];
    $topIntentScore = $data["topScoringIntent"]["score"];
    $reply = "idk how to answer that :/";
    if ($topIntentScore > 0.8) {
        return $reply_dict[$topIntent];
    } else {
        $reply = analyzeEntity($data);
    }
    return $reply;
}

function get_reply($query){
    $appId = "bdb0eb00-aa00-42e2-9d3c-6351062ba45a";
    $endpointKey = "6534b3875a1b434a9b5acb48c5d091bc";
    $endpoint = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/";
    $json = AnalyzeText($endpoint, $appId, $endpointKey, $query);
    $data = json_encode(json_decode($json), JSON_PRETTY_PRINT);
    return get_analyzed_answer($data);
}

echo get_reply($_GET["q"]);
?>
