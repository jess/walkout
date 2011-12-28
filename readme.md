# Walkout Instructions
This is a couple of scripts on how to create a virtual walkout video.

### Head
In my main file I want the wakout to be on (example: index.php)

Place in `<head>`.

    <script type="text/javascript" src="/js/swfobject.js"></script>
    <script type="text/javascript" src="/js/walkout-np.js"></script>
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
Be sure to upload your javascript files in the the /walkout directory...(swfobject.js, and walkout-np.js)


### Flash File
You shouldn't have to change anythin in the manager file.  Just keep the
filename for the video-np.swf the same.

Open the video-np.fla flash file and replace the video with your video file.  
