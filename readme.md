# Walkout Instructions
This is a couple of scripts on how to create a virtual walkout video.

### Head
In my main file I want the wakout to be on (example: index.php)

Place in `<head>`.

    <script type="text/javascript" src="/walkout/swfobject.js,/walkout/walkout.js"></script>
    <script type="text/javascript" src="/walkout/walkout-np.js"></script>
    //walkout
    if(!isset($_SESSION['walkout-home'])) $_SESSION['walkout-home'] = 0;
    function walkout ($walkout) { 
      if(isset($_GET['video'])) return false;
        if($walkout == 0) { 
          echo '<script type="text/javascript">loadThis();</script>';
          $_SESSION['walkout-home'] = 1;
        }
        else return false;
    }

Place somewhere in your css

    #closeVideo {
      width: 450px; 
      height: 1%;
      position:relative;
      top: 158px;
      left: 144px; 
      display: none;
      z-index: 800;
      overflow:visible;
      padding:0; margin:0;
    }




### Place this in the location near where you want the wakout to appear
    <!--Walkout -->
    <div id="closeVideo">
      <div id="introVideo"></div>
      <div class="closeimage" onclick="closeIntro();" title="Close Video"></div>
    </div>
    <?php walkout($_SESSION['walkout-home']); ?>



### JS Files
Be sure to upload your javascript files...(swfobject.js, and walkout.js)


### Flash File
Open the flash file and replace the video with your video file.
