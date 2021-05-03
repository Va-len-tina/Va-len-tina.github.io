
/*  document.addEventListener("DOMContentLoaded", function () {
         var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
         console.log(scrollbar);
         document.querySelector('[href="#openModal"]').addEventListener('click', function () {
     document.body.style.overflow = 'hidden';
             document.querySelector('#openModal').style.marginLeft = scrollbar;
         });
         document.querySelector('[href="#close"]').addEventListener('click', function () {
     document.body.style.overflow = 'visible';
             document.querySelector('#openModal').style.marginLeft = '0px';
         });
     });
*/
/* $(function () {
    //script for popups
    $('a.show_popup').click(function () {
        $('div.' + $(this).attr("rel")).fadeIn(500);
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css({ 'filter': 'alpha(opacity=80)' });
        return false;
    });
    $('a.close').click(function () {
        $(this).parent().fadeOut(100);
        $('#overlay').remove('#overlay');
        return false;
    });
}
 */
/*   //script for tabs
  $("div.selectTabs").each(function () {
      var tmp = $(this);
      $(tmp).find(".lineTabs li").each(function (i) {
      $(tmp).find(".lineTabs li:eq(" + i + ") a").click(function () {
          var tab_id = i + 1;
          $(tmp).find(".lineTabs li").removeClass("active");
          $(this).parent().addClass("active");
          $(tmp).find(".tab_content div").stop(false, false).hide();
          $(tmp).find(".tab" + tab_id).stop(false, false).fadeIn(300);
          return false;
      });
      });
  }); */

/* <script>
        document.addEventListener("DOMContentLoaded", function () {
            var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
            console.log(scrollbar);
            document.querySelector('[href="#btn_form"]').addEventListener('click', function () {
        document.body.style.overflow = 'hidden';
                document.querySelector('#btn_form').style.marginLeft = scrollbar;
            });
            document.querySelector('[href="#close"]').addEventListener('click', function () {
        document.body.style.overflow = 'visible';
                document.querySelector('#btn_form').style.marginLeft = '0px';
            });
        });
</script> */
