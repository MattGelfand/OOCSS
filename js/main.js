$(document).ready(function() {
  $(".animsition").animsition({
    inClass               :   'zoom-in',
    outClass              :   'fade',
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   '.animsition-link', 
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    touchSupport          :    true, 
    loading               :    true,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ]
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration". 
  });
}); 