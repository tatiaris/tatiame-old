<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>music</title>
        <link rel="stylesheet" href="./style.css">
        <script src="https://kit.fontawesome.com/c972f6d301.js" crossorigin="anonymous"></script>
        <script src="main.js"></script>
    </head>
    <body>
        <div class="music-player-container">
            <div class="song-info-container">
                <div class="empty-space"></div>
                <div class="song-title-container full-width flex-center-center">
                    <span class="full-width song-title flex-center-center" sname="wur">Some Girls</span>
                </div>
                <div class="song-artist-container full-width flex-center-center">
                    <span class="full-width song-artist flex-center-center">Animal Collective</span>
                </div>
                <div class="song-album-container full-width flex-center-center">
                    <span class="full-width song-album flex-center-center">Merryweather Post Pavillion</span>
                </div>
                <div class="song-progress-container full-width">
                    <div class="song-length-container flex-center-center">
                        <div class="song-length">
                            <span style="float:right;">3:46</span>
                        </div>
                    </div>
                    <div class="progress-bar-container flex-center-center">
                        <progress id="progressBar" class="progress_bar">
                            <div class="progress_current"></div>
                        </progress>
                    </div>
                </div>
            </div>
            <div class="music-play-buttons-container">
                <i onclick="previous_song();" class="fas fa-backward music-button"></i>
                <i onclick="play_pause();" id="play-button" class="fas fa-play music-button"></i>
                <i onclick="next_song();" class="fas fa-forward music-button"></i>
            </div>
            <div class="song-cover-container"></div>
        </div>
    </body>
</html>
