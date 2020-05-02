<html lang="en" dir="ltr">
    <head>
        <title>tatia.me | tatbot</title>
        <meta charset="utf-8">
        <script src="./../../js/jquery.min.js"></script>
        <link rel="stylesheet" href="./style.css">
        <script src="./../../js/font_kit.js"></script>
    </head>
    <body>
        <div class="faq-chat-container">
            <div class="chat-title-container flex-center">
                <span class="chat-title">tatbot</span>
            </div>
            <div class="chat-container">
                <div id="texts-container" class="all-texts-container">
                    <div class="bot_reply">
                        <span class="invisible-message visible-message message-bot">hey, this is rishabh! feel free to learn a bit about me through my personal assistant, tatbot!</span>
                    </div>
                </div>
                <div class="input-container flex-center">
                    <form class="text-container flex-center" action="javascript:handleIt()" method="post">
                        <div class="text-collector">
                            <input class="text-input" type="text" id="user_text" name="user_text" placeholder="ask me anything..." value="">
                        </div>
                        <div class="send-button">
                            <button type="submit" alt="send" id="my_submit" class="send-button-icon" name="submit"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <script>
            function get_reply(query){
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        add_message(this.responseText, "bot", "bot_reply");
                        scroll_down();
                        animateAllMessages();
                   }
                };
                xhttp.open("GET", "./get_reply.php?q=" + query, true);
                xhttp.send();
            }
            function scroll_down(){
                var objDiv = document.getElementById("texts-container");
                objDiv.scrollTop = objDiv.scrollHeight;
            }
            function add_message(reply, m_from, m_type) {
                elem = document.createElement("span");
                elem.className += "invisible-message message-" + m_from;
                elem.innerText = reply;
                user_txt = document.createElement("div");
                user_txt.className += m_type;
                user_txt.appendChild(elem);
                document.getElementById("texts-container").appendChild(user_txt);
            }
            function handleIt() {
                var txt = document.getElementById("user_text").value;
                document.getElementById("user_text").value = "";
                var txtnospaces = txt.replace(/\s/g, '');
                if (txtnospaces != ""){
                    add_message(txt, "user", "user_text")
                    get_reply(txt);
                    scroll_down();
                }
                animateAllMessages();
            }
            function animateAllMessages(){
                elems = document.getElementsByClassName("invisible-message");
                for (var i = 0; i < elems.length; i++){
                    elems[i].className += " visible-message";
                }
            }
        </script>

    </body>
</html>
