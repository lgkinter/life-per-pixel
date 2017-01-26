var setSize  = 16;
var listing_arr = ["", "mind", "body", "soul", "prosperity", "tags"]
/* These are the pages that have listings of pixels */

$(window).on('load resize', function(){
      var win = $(this); //this = window
      if (win.width() <= 752) {
        $('.right-sidebar').css('display', 'none');
        $('.col-md-10').css('width', '100%');
        $('.col-md-5').css('min-height', '270px');
        $('body').css('width', '100%');
        document.getElementsByClassName("sidebar-toggle")[0].style.left="-240px";
      }else if (win.width() <= 1025){
        $('.col-md-10').css('width', '100%');
        $('.col-md-5').css('min-height', '270px');
        $('body').css('width', '100%');
        document.getElementsByClassName("sidebar-toggle")[0].style.left="0px";
      }else{
        $('.right-sidebar').css('display', 'block');
        $('.col-md-10').css('width', '80%');
        $('.col-md-5').css('min-height', '1px');
        $('body').css('width', '');
        document.getElementsByClassName("sidebar-toggle")[0].style.left="auto";
      }
});

$(document).on('turbolinks:load', function(){
  var url = window.location.href;
  drawGrid();

  var urlsplit = url.split("/");
  var urllast = urlsplit[urlsplit.length-1];

  if(listing_arr.indexOf(urlsplit[3]) === -1){
    $('#item'+urlsplit[urlsplit.length - 1]).css('opacity', '1');
  }else{
    var num = $(".post").first().attr('id').replace(/post_/, '');
    var i = 1;
    $('#item'+num).css('opacity', '1');
  }

  $.fn.gotoAnchor = function(anchor) {
      location.href = this.selector;
  }

  var stickySidebar = $('.sticky');

  if (stickySidebar.length > 0) {
    var stickyHeight = $('.sticky-sidebar').height();
    var sidebarTop = stickySidebar.offset().top;
    var sidebarBottom = sidebarTop + stickyHeight;
  }

  // on scroll move the sidebar
  $(window).scroll(function () {
    if (stickySidebar.length > 0) {
      var scrollBottom = $(window).height() + $(window).scrollTop();
      var stickyStop = $(window).height() - stickyHeight;

      if (sidebarBottom < scrollBottom) {
        $('.sticky-sidebar').css('position', 'fixed');
        $('.sticky-sidebar').css('top', stickyStop);
      }
      else {
        $('.sticky-sidebar').css('position', 'relative');
        $('.sticky-sidebar').css('top', 0);
      }
    }
  });

  $(window).resize(function () {
    if (stickySidebar.length > 0) {
      stickyHeight = stickySidebar.height();
    }
  });

  $('.square').click(function(){
    var id = $(this).attr('id').replace(/item/, '');
    $(this).css('opacity', '+=1');
    if(urllast == ""){
      $('#post_'+id).gotoAnchor();
    }else{
      $.ajax({
          type: 'HEAD',
          url: "http://" + window.location.host + '/pixels/' + id,
          success: function() {
              location.href = '/pixels/' + id;
          },
          error: function() {} });
    }
  });
  $('.square').hover(function(){
    var id = $(this).attr('id').replace(/item/, '');
    var title = $('#post_'+id).attr('title');
    if(typeof title != 'undefined') {
      document.getElementById($(this).attr('id')).title = title;
    }
  });
  $("#menu-toggle").click(function(e) {
		e.preventDefault();
		var elem = document.getElementById("sidebar-wrapper");
		left = window.getComputedStyle(elem,null).getPropertyValue("left");
		if(left == "0px"){
			document.getElementsByClassName("sidebar-toggle")[0].style.left="-240px";
		}
		else if(left == "-240px"){
			document.getElementsByClassName("sidebar-toggle")[0].style.left="0px";
		}
	});

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var post = $('#post_'+num);
      if (post.length) {
        var os = post.offset().top;
        var ht = post.height();
        if(scroll > os + ht){
          num = $(".post:eq("+i+")").first().attr('id').replace(/post_/, '');
          i += 1;
          $('#item'+num).css('opacity', '+=1');
        }
      }
  });

});




function drawGrid(){
  $('.grid').append('<div id="item1" class="square" style="background-color: #1fadd1;"</div>');
  $('.grid').append('<div id="item2" class="square" style="background-color: #51ad84;"</div>');
  $('.grid').append('<div id="item3" class="square" style="background-color: #35a9a8;"</div>');
  $('.grid').append('<div id="item4" class="square" style="background-color: #1295c1;"</div>');
  $('.grid').append('<div id="item5" class="square" style="background-color: #21a9cf;"</div>');
  $('.grid').append('<div id="item6" class="square" style="background-color: #4d8ab7;"</div>');
  $('.grid').append('<div id="item7" class="square" style="background-color: #5ea6a3;"</div>');
  $('.grid').append('<div id="item8" class="square" style="background-color: #4379a7;"</div>');
  $('.grid').append('<div id="item9" class="square" style="background-color: #5280a1;"</div>');
  $('.grid').append('<div id="item10" class="square" style="background-color: #78b385;"</div>');
  $('.grid').append('<div id="item11" class="square" style="background-color: #81a287;"</div>');
  $('.grid').append('<div id="item12" class="square" style="background-color: #43afb2;"</div>');
  $('.grid').append('<div id="item13" class="square" style="background-color: #19c2bb;"</div>');
  $('.grid').append('<div id="item14" class="square" style="background-color: #5fa6c6;"</div>');
  $('.grid').append('<div id="item15" class="square" style="background-color: #1fa8dc;"</div>');
  $('.grid').append('<div id="item16" class="square" style="background-color: #3670b9;"</div>');
  $('.grid').append('<div id="item17" class="square" style="background-color: #44a8cc;"</div>');
  $('.grid').append('<div id="item18" class="square" style="background-color: #485ca1;"</div>');
  $('.grid').append('<div id="item19" class="square" style="background-color: #7d7777;"</div>');
  $('.grid').append('<div id="item20" class="square" style="background-color: #5aa19b;"</div>');
  $('.grid').append('<div id="item21" class="square" style="background-color: #765b90;"</div>');
  $('.grid').append('<div id="item22" class="square" style="background-color: #b3bd5c;"</div>');
  $('.grid').append('<div id="item23" class="square" style="background-color: #666da1;"</div>');
  $('.grid').append('<div id="item24" class="square" style="background-color: #5caa92;"</div>');
  $('.grid').append('<div id="item25" class="square" style="background-color: #3bccc5;"</div>');
  $('.grid').append('<div id="item26" class="square" style="background-color: #608284;"</div>');
  $('.grid').append('<div id="item27" class="square" style="background-color: #397ab0;"</div>');
  $('.grid').append('<div id="item28" class="square" style="background-color: #2c739f;"</div>');
  $('.grid').append('<div id="item29" class="square" style="background-color: #a1a479;"</div>');
  $('.grid').append('<div id="item30" class="square" style="background-color: #3baabb;"</div>');
  $('.grid').append('<div id="item31" class="square" style="background-color: #45b1cd;"</div>');
  $('.grid').append('<div id="item32" class="square" style="background-color: #295ab9;"</div>');
  $('.grid').append('<div id="item33" class="square" style="background-color: #4679b0;"</div>');
  $('.grid').append('<div id="item34" class="square" style="background-color: #6ec7a9;"</div>');
  $('.grid').append('<div id="item35" class="square" style="background-color: #76c8a0;"</div>');
  $('.grid').append('<div id="item36" class="square" style="background-color: #899a87;"</div>');
  $('.grid').append('<div id="item37" class="square" style="background-color: #b2b077;"</div>');
  $('.grid').append('<div id="item38" class="square" style="background-color: #71cf85;"</div>');
  $('.grid').append('<div id="item39" class="square" style="background-color: #6680b1;"</div>');
  $('.grid').append('<div id="item40" class="square" style="background-color: #32c6ca;"</div>');
  $('.grid').append('<div id="item41" class="square" style="background-color: #787bb2;"</div>');
  $('.grid').append('<div id="item42" class="square" style="background-color: #3384b3;"</div>');
  $('.grid').append('<div id="item43" class="square" style="background-color: #5d87af;"</div>');
  $('.grid').append('<div id="item44" class="square" style="background-color: #4c85bc;"</div>');
  $('.grid').append('<div id="item45" class="square" style="background-color: #4e99b8;"</div>');
  $('.grid').append('<div id="item46" class="square" style="background-color: #62d570;"</div>');
  $('.grid').append('<div id="item47" class="square" style="background-color: #30adaf;"</div>');
  $('.grid').append('<div id="item48" class="square" style="background-color: #54d1bf;"</div>');
  $('.grid').append('<div id="item49" class="square" style="background-color: #dfd099;"</div>');
  $('.grid').append('<div id="item50" class="square" style="background-color: #46a0ba;"</div>');
  $('.grid').append('<div id="item51" class="square" style="background-color: #a2c466;"</div>');
  $('.grid').append('<div id="item52" class="square" style="background-color: #a8b389;"</div>');
  $('.grid').append('<div id="item53" class="square" style="background-color: #c8b978;"</div>');
  $('.grid').append('<div id="item54" class="square" style="background-color: #4fe29b;"</div>');
  $('.grid').append('<div id="item55" class="square" style="background-color: #90b38b;"</div>');
  $('.grid').append('<div id="item56" class="square" style="background-color: #a19589;"</div>');
  $('.grid').append('<div id="item57" class="square" style="background-color: #49a2c4;"</div>');
  $('.grid').append('<div id="item58" class="square" style="background-color: #acae6f;"</div>');
  $('.grid').append('<div id="item59" class="square" style="background-color: #31c6cc;"</div>');
  $('.grid').append('<div id="item60" class="square" style="background-color: #80958c;"</div>');
  $('.grid').append('<div id="item61" class="square" style="background-color: #609f82;"</div>');
  $('.grid').append('<div id="item62" class="square" style="background-color: #8fca54;"</div>');
  $('.grid').append('<div id="item63" class="square" style="background-color: #8e8b94;"</div>');
  $('.grid').append('<div id="item64" class="square" style="background-color: #615fa8;"</div>');
  $('.grid').append('<div id="item65" class="square" style="background-color: #739c9e;"</div>');
  $('.grid').append('<div id="item66" class="square" style="background-color: #b6ae8a;"</div>');
  $('.grid').append('<div id="item67" class="square" style="background-color: #879d90;"</div>');
  $('.grid').append('<div id="item68" class="square" style="background-color: #c87a76;"</div>');
  $('.grid').append('<div id="item69" class="square" style="background-color: #b6c697;"</div>');
  $('.grid').append('<div id="item70" class="square" style="background-color: #85a888;"</div>');
  $('.grid').append('<div id="item71" class="square" style="background-color: #a8b5a3;"</div>');
  $('.grid').append('<div id="item72" class="square" style="background-color: #9c9094;"</div>');
  $('.grid').append('<div id="item73" class="square" style="background-color: #757494;"</div>');
  $('.grid').append('<div id="item74" class="square" style="background-color: #3babbf;"</div>');
  $('.grid').append('<div id="item75" class="square" style="background-color: #a8867d;"</div>');
  $('.grid').append('<div id="item76" class="square" style="background-color: #7a9c9d;"</div>');
  $('.grid').append('<div id="item77" class="square" style="background-color: #64a68b;"</div>');
  $('.grid').append('<div id="item78" class="square" style="background-color: #4e84aa;"</div>');
  $('.grid').append('<div id="item79" class="square" style="background-color: #45c8d0;"</div>');
  $('.grid').append('<div id="item80" class="square" style="background-color: #66e0d3;"</div>');
  $('.grid').append('<div id="item81" class="square" style="background-color: #84c79b;"</div>');
  $('.grid').append('<div id="item82" class="square" style="background-color: #ba8e9b;"</div>');
  $('.grid').append('<div id="item83" class="square" style="background-color: #767bb5;"</div>');
  $('.grid').append('<div id="item84" class="square" style="background-color: #9491b0;"</div>');
  $('.grid').append('<div id="item85" class="square" style="background-color: #a8d381;"</div>');
  $('.grid').append('<div id="item86" class="square" style="background-color: #9fa8b9;"</div>');
  $('.grid').append('<div id="item87" class="square" style="background-color: #1dcdb6;"</div>');
  $('.grid').append('<div id="item88" class="square" style="background-color: #63b489;"</div>');
  $('.grid').append('<div id="item89" class="square" style="background-color: #599fb8;"</div>');
  $('.grid').append('<div id="item90" class="square" style="background-color: #657dad;"</div>');
  $('.grid').append('<div id="item91" class="square" style="background-color: #34b6c3;"</div>');
  $('.grid').append('<div id="item92" class="square" style="background-color: #24d1d5;"</div>');
  $('.grid').append('<div id="item93" class="square" style="background-color: #5dc8c0;"</div>');
  $('.grid').append('<div id="item94" class="square" style="background-color: #88a7a2;"</div>');
  $('.grid').append('<div id="item95" class="square" style="background-color: #b6cc77;"</div>');
  $('.grid').append('<div id="item96" class="square" style="background-color: #88bbac;"</div>');
  $('.grid').append('<div id="item97" class="square" style="background-color: #749eb7;"</div>');
  $('.grid').append('<div id="item98" class="square" style="background-color: #3eccd6;"</div>');
  $('.grid').append('<div id="item99" class="square" style="background-color: #9d76ab;"</div>');
  $('.grid').append('<div id="item100" class="square" style="background-color: #8ea59f;"</div>');
  $('.grid').append('<div id="item101" class="square" style="background-color: #4fc2c9;"</div>');
  $('.grid').append('<div id="item102" class="square" style="background-color: #49b5b8;"</div>');
  $('.grid').append('<div id="item103" class="square" style="background-color: #5c9fb9;"</div>');
  $('.grid').append('<div id="item104" class="square" style="background-color: #6296be;"</div>');
  $('.grid').append('<div id="item105" class="square" style="background-color: #55c0d2;"</div>');
  $('.grid').append('<div id="item106" class="square" style="background-color: #af7492;"</div>');
  $('.grid').append('<div id="item107" class="square" style="background-color: #77b5b4;"</div>');
  $('.grid').append('<div id="item108" class="square" style="background-color: #46f3bd;"</div>');
  $('.grid').append('<div id="item109" class="square" style="background-color: #74cac7;"</div>');
  $('.grid').append('<div id="item110" class="square" style="background-color: #67beab;"</div>');
  $('.grid').append('<div id="item111" class="square" style="background-color: #7eb6ad;"</div>');
  $('.grid').append('<div id="item112" class="square" style="background-color: #bd8fac;"</div>');
  $('.grid').append('<div id="item113" class="square" style="background-color: #9dbfc9;"</div>');
  $('.grid').append('<div id="item114" class="square" style="background-color: #52afc0;"</div>');
  $('.grid').append('<div id="item115" class="square" style="background-color: #b286a7;"</div>');
  $('.grid').append('<div id="item116" class="square" style="background-color: #97c1b5;"</div>');
  $('.grid').append('<div id="item117" class="square" style="background-color: #b6d287;"</div>');
  $('.grid').append('<div id="item118" class="square" style="background-color: #50d9bb;"</div>');
  $('.grid').append('<div id="item119" class="square" style="background-color: #66d9d4;"</div>');
  $('.grid').append('<div id="item120" class="square" style="background-color: #bebb76;"</div>');
  $('.grid').append('<div id="item121" class="square" style="background-color: #94ae91;"</div>');
  $('.grid').append('<div id="item122" class="square" style="background-color: #aab46d;"</div>');
  $('.grid').append('<div id="item123" class="square" style="background-color: #6bc494;"</div>');
  $('.grid').append('<div id="item124" class="square" style="background-color: #a5ce88;"</div>');
  $('.grid').append('<div id="item125" class="square" style="background-color: #ab88a0;"</div>');
  $('.grid').append('<div id="item126" class="square" style="background-color: #a48da9;"</div>');
  $('.grid').append('<div id="item127" class="square" style="background-color: #6c8eb4;"</div>');
  $('.grid').append('<div id="item128" class="square" style="background-color: #4bcab7;"</div>');
  $('.grid').append('<div id="item129" class="square" style="background-color: #dd8198;"</div>');
  $('.grid').append('<div id="item130" class="square" style="background-color: #df9f83;"</div>');
  $('.grid').append('<div id="item131" class="square" style="background-color: #99b5b6;"</div>');
  $('.grid').append('<div id="item132" class="square" style="background-color: #9bacb4;"</div>');
  $('.grid').append('<div id="item133" class="square" style="background-color: #87c7b9;"</div>');
  $('.grid').append('<div id="item134" class="square" style="background-color: #6da6c4;"</div>');
  $('.grid').append('<div id="item135" class="square" style="background-color: #96a296;"</div>');
  $('.grid').append('<div id="item136" class="square" style="background-color: #69c596;"</div>');
  $('.grid').append('<div id="item137" class="square" style="background-color: #809ea0;"</div>');
  $('.grid').append('<div id="item138" class="square" style="background-color: #6cac91;"</div>');
  $('.grid').append('<div id="item139" class="square" style="background-color: #b68781;"</div>');
  $('.grid').append('<div id="item140" class="square" style="background-color: #fc032d;"</div>');
  $('.grid').append('<div id="item141" class="square" style="background-color: #ff2a4c;"</div>');
  $('.grid').append('<div id="item142" class="square" style="background-color: #ff6773;"</div>');
  $('.grid').append('<div id="item143" class="square" style="background-color: #d29fa6;"</div>');
  $('.grid').append('<div id="item144" class="square" style="background-color: #e65e44;"</div>');
  $('.grid').append('<div id="item145" class="square" style="background-color: #da0b53;"</div>');
  $('.grid').append('<div id="item146" class="square" style="background-color: #ef0043;"</div>');
  $('.grid').append('<div id="item147" class="square" style="background-color: #b42670;"</div>');
  $('.grid').append('<div id="item148" class="square" style="background-color: #aab692;"</div>');
  $('.grid').append('<div id="item149" class="square" style="background-color: #82aba5;"</div>');
  $('.grid').append('<div id="item150" class="square" style="background-color: #a0cd94;"</div>');
  $('.grid').append('<div id="item151" class="square" style="background-color: #7dba7e;"</div>');
  $('.grid').append('<div id="item152" class="square" style="background-color: #b0c487;"</div>');
  $('.grid').append('<div id="item153" class="square" style="background-color: #d69a5c;"</div>');
  $('.grid').append('<div id="item154" class="square" style="background-color: #ff0238;"</div>');
  $('.grid').append('<div id="item155" class="square" style="background-color: #e7011e;"</div>');
  $('.grid').append('<div id="item156" class="square" style="background-color: #fe113b;"</div>');
  $('.grid').append('<div id="item157" class="square" style="background-color: #fb0023;"</div>');
  $('.grid').append('<div id="item158" class="square" style="background-color: #d3706b;"</div>');
  $('.grid').append('<div id="item159" class="square" style="background-color: #df002f;"</div>');
  $('.grid').append('<div id="item160" class="square" style="background-color: #ed0012;"</div>');
  $('.grid').append('<div id="item161" class="square" style="background-color: #df002f;"</div>');
  $('.grid').append('<div id="item162" class="square" style="background-color: #db0019;"</div>');
  $('.grid').append('<div id="item163" class="square" style="background-color: #ec264a;"</div>');
  $('.grid').append('<div id="item164" class="square" style="background-color: #a1a4a9;"</div>');
  $('.grid').append('<div id="item165" class="square" style="background-color: #bdb77d;"</div>');
  $('.grid').append('<div id="item166" class="square" style="background-color: #d9ec52;"</div>');
  $('.grid').append('<div id="item167" class="square" style="background-color: #fee05e;"</div>');
  $('.grid').append('<div id="item168" class="square" style="background-color: #e16364;"</div>');
  $('.grid').append('<div id="item169" class="square" style="background-color: #f8003f;"</div>');
  $('.grid').append('<div id="item170" class="square" style="background-color: #ec0043;"</div>');
  $('.grid').append('<div id="item171" class="square" style="background-color: #fe1334;"</div>');
  $('.grid').append('<div id="item172" class="square" style="background-color: #ff102d;"</div>');
  $('.grid').append('<div id="item173" class="square" style="background-color: #ff1e18;"</div>');
  $('.grid').append('<div id="item174" class="square" style="background-color: #ce004d;"</div>');
  $('.grid').append('<div id="item175" class="square" style="background-color: #e20010;"</div>');
  $('.grid').append('<div id="item176" class="square" style="background-color: #cf002c;"</div>');
  $('.grid').append('<div id="item177" class="square" style="background-color: #de001a;"</div>');
  $('.grid').append('<div id="item178" class="square" style="background-color: #d20d38;"</div>');
  $('.grid').append('<div id="item179" class="square" style="background-color: #a7aab1;"</div>');
  $('.grid').append('<div id="item180" class="square" style="background-color: #ca7280;"</div>');
  $('.grid').append('<div id="item181" class="square" style="background-color: #eace2f;"</div>');
  $('.grid').append('<div id="item182" class="square" style="background-color: #f3c64f;"</div>');
  $('.grid').append('<div id="item183" class="square" style="background-color: #e0614e;"</div>');
  $('.grid').append('<div id="item184" class="square" style="background-color: #f10033;"</div>');
  $('.grid').append('<div id="item185" class="square" style="background-color: #f10033;"</div>');
  $('.grid').append('<div id="item186" class="square" style="background-color: #eb0038;"</div>');
  $('.grid').append('<div id="item187" class="square" style="background-color: #fa004e;"</div>');
  $('.grid').append('<div id="item188" class="square" style="background-color: #f1012e;"</div>');
  $('.grid').append('<div id="item189" class="square" style="background-color: #ea003d;"</div>');
  $('.grid').append('<div id="item190" class="square" style="background-color: #df0059;"</div>');
  $('.grid').append('<div id="item191" class="square" style="background-color: #ca0161;"</div>');
  $('.grid').append('<div id="item192" class="square" style="background-color: #e20030;"</div>');
  $('.grid').append('<div id="item193" class="square" style="background-color: #d45278;"</div>');
  $('.grid').append('<div id="item194" class="square" style="background-color: #a49d83;"</div>');
  $('.grid').append('<div id="item195" class="square" style="background-color: #c2a16b;"</div>');
  $('.grid').append('<div id="item196" class="square" style="background-color: #b3b15a;"</div>');
  $('.grid').append('<div id="item197" class="square" style="background-color: #c483b9;"</div>');
  $('.grid').append('<div id="item198" class="square" style="background-color: #78c0a8;"</div>');
  $('.grid').append('<div id="item199" class="square" style="background-color: #f2004a;"</div>');
  $('.grid').append('<div id="item200" class="square" style="background-color: #e10252;"</div>');
  $('.grid').append('<div id="item201" class="square" style="background-color: #ca0064;"</div>');
  $('.grid').append('<div id="item202" class="square" style="background-color: #f0004e;"</div>');
  $('.grid').append('<div id="item203" class="square" style="background-color: #ff0938;"</div>');
  $('.grid').append('<div id="item204" class="square" style="background-color: #f3001c;"</div>');
  $('.grid').append('<div id="item205" class="square" style="background-color: #e10415;"</div>');
  $('.grid').append('<div id="item206" class="square" style="background-color: #d70147;"</div>');
  $('.grid').append('<div id="item207" class="square" style="background-color: #c50b56;"</div>');
  $('.grid').append('<div id="item208" class="square" style="background-color: #f0a07b;"</div>');
  $('.grid').append('<div id="item209" class="square" style="background-color: #d0e185;"</div>');
  $('.grid').append('<div id="item210" class="square" style="background-color: #fddf49;"</div>');
  $('.grid').append('<div id="item211" class="square" style="background-color: #fdc25c;"</div>');
  $('.grid').append('<div id="item212" class="square" style="background-color: #7e9bbd;"</div>');
  $('.grid').append('<div id="item213" class="square" style="background-color: #aec28d;"</div>');
  $('.grid').append('<div id="item214" class="square" style="background-color: #ff5448;"</div>');
  $('.grid').append('<div id="item215" class="square" style="background-color: #ff1d43;"</div>');
  $('.grid').append('<div id="item216" class="square" style="background-color: #ee0047;"</div>');
  $('.grid').append('<div id="item217" class="square" style="background-color: #f5014b;"</div>');
  $('.grid').append('<div id="item218" class="square" style="background-color: #ed0008;"</div>');
  $('.grid').append('<div id="item219" class="square" style="background-color: #d5005a;"</div>');
  $('.grid').append('<div id="item220" class="square" style="background-color: #bd0054;"</div>');
  $('.grid').append('<div id="item221" class="square" style="background-color: #d30045;"</div>');
  $('.grid').append('<div id="item222" class="square" style="background-color: #c06189;"</div>');
  $('.grid').append('<div id="item223" class="square" style="background-color: #ecd882;"</div>');
  $('.grid').append('<div id="item224" class="square" style="background-color: #d8a799;"</div>');
  $('.grid').append('<div id="item225" class="square" style="background-color: #cca473;"</div>');
  $('.grid').append('<div id="item226" class="square" style="background-color: #d2d678;"</div>');
  $('.grid').append('<div id="item227" class="square" style="background-color: #f3d24f;"</div>');
  $('.grid').append('<div id="item228" class="square" style="background-color: #a381b4;"</div>');
  $('.grid').append('<div id="item229" class="square" style="background-color: #68b1c2;"</div>');
  $('.grid').append('<div id="item230" class="square" style="background-color: #d2996e;"</div>');
  $('.grid').append('<div id="item231" class="square" style="background-color: #ee465f;"</div>');
  $('.grid').append('<div id="item232" class="square" style="background-color: #c70055;"</div>');
  $('.grid').append('<div id="item233" class="square" style="background-color: #d50050;"</div>');
  $('.grid').append('<div id="item234" class="square" style="background-color: #de0063;"</div>');
  $('.grid').append('<div id="item235" class="square" style="background-color: #e53f29;"</div>');
  $('.grid').append('<div id="item236" class="square" style="background-color: #b4646d;"</div>');
  $('.grid').append('<div id="item237" class="square" style="background-color: #9fa092;"</div>');
  $('.grid').append('<div id="item238" class="square" style="background-color: #c7a977;"</div>');
  $('.grid').append('<div id="item239" class="square" style="background-color: #b5cea4;"</div>');
  $('.grid').append('<div id="item240" class="square" style="background-color: #cda488;"</div>');
  $('.grid').append('<div id="item241" class="square" style="background-color: #a46cad;"</div>');
  $('.grid').append('<div id="item242" class="square" style="background-color: #78e0e1;"</div>');
  $('.grid').append('<div id="item243" class="square" style="background-color: #a17ea6;"</div>');
  $('.grid').append('<div id="item244" class="square" style="background-color: #af7689;"</div>');
  $('.grid').append('<div id="item245" class="square" style="background-color: #d49977;"</div>');
  $('.grid').append('<div id="item246" class="square" style="background-color: #c88fa0;"</div>');
  $('.grid').append('<div id="item247" class="square" style="background-color: #f72e7a;"</div>');
  $('.grid').append('<div id="item248" class="square" style="background-color: #c40052;"</div>');
  $('.grid').append('<div id="item249" class="square" style="background-color: #e36187;"</div>');
  $('.grid').append('<div id="item250" class="square" style="background-color: #a5e181;"</div>');
  $('.grid').append('<div id="item251" class="square" style="background-color: #e6d677;"</div>');
  $('.grid').append('<div id="item252" class="square" style="background-color: #b2bd9f;"</div>');
  $('.grid').append('<div id="item253" class="square" style="background-color: #aeb69e;"</div>');
  $('.grid').append('<div id="item254" class="square" style="background-color: #78ccbd;"</div>');
  $('.grid').append('<div id="item255" class="square" style="background-color: #58d7c4;"</div>');
  $('.grid').append('<div id="item256" class="square" style="background-color: #578cb4;"</div>');
  $('.grid').append('<div id="item257" class="square" style="background-color: #b591b5;"</div>');
  $('.grid').append('<div id="item258" class="square" style="background-color: #7ea69e;"</div>');
  $('.grid').append('<div id="item259" class="square" style="background-color: #ad99a2;"</div>');
  $('.grid').append('<div id="item260" class="square" style="background-color: #bfaa7f;"</div>');
  $('.grid').append('<div id="item261" class="square" style="background-color: #e1de77;"</div>');
  $('.grid').append('<div id="item262" class="square" style="background-color: #ced09f;"</div>');
  $('.grid').append('<div id="item263" class="square" style="background-color: #d6868f;"</div>');
  $('.grid').append('<div id="item264" class="square" style="background-color: #a9a097;"</div>');
  $('.grid').append('<div id="item265" class="square" style="background-color: #acafa8;"</div>');
  $('.grid').append('<div id="item266" class="square" style="background-color: #c1978b;"</div>');
  $('.grid').append('<div id="item267" class="square" style="background-color: #9e6f81;"</div>');
  $('.grid').append('<div id="item268" class="square" style="background-color: #8ac3bc;"</div>');
  $('.grid').append('<div id="item269" class="square" style="background-color: #636eae;"</div>');
  $('.grid').append('<div id="item270" class="square" style="background-color: #63ba98;"</div>');
  $('.grid').append('<div id="item271" class="square" style="background-color: #953fae;"</div>');
  $('.grid').append('<div id="item272" class="square" style="background-color: #4e6dad;"</div>');
  $('.grid').append('<div id="item273" class="square" style="background-color: #7c96a7;"</div>');
  $('.grid').append('<div id="item274" class="square" style="background-color: #8bc4bd;"</div>');
  $('.grid').append('<div id="item275" class="square" style="background-color: #b0cba2;"</div>');
  $('.grid').append('<div id="item276" class="square" style="background-color: #cfa994;"</div>');
  $('.grid').append('<div id="item277" class="square" style="background-color: #b6cb90;"</div>');
  $('.grid').append('<div id="item278" class="square" style="background-color: #b09d7f;"</div>');
  $('.grid').append('<div id="item279" class="square" style="background-color: #b192a1;"</div>');
  $('.grid').append('<div id="item280" class="square" style="background-color: #93a7a6;"</div>');
  $('.grid').append('<div id="item281" class="square" style="background-color: #7c9da2;"</div>');
  $('.grid').append('<div id="item282" class="square" style="background-color: #5c92b6;"</div>');
  $('.grid').append('<div id="item283" class="square" style="background-color: #66bccb;"</div>');
  $('.grid').append('<div id="item284" class="square" style="background-color: #6485b8;"</div>');
  $('.grid').append('<div id="item285" class="square" style="background-color: #5b99b2;"</div>');
  $('.grid').append('<div id="item286" class="square" style="background-color: #5b7dab;"</div>');
  $('.grid').append('<div id="item287" class="square" style="background-color: #3dafb0;"</div>');
  $('.grid').append('<div id="item288" class="square" style="background-color: #5eb3c7;"</div>');
  $('.grid').append('<div id="item289" class="square" style="background-color: #89cfab;"</div>');
  $('.grid').append('<div id="item290" class="square" style="background-color: #b7a58f;"</div>');
  $('.grid').append('<div id="item291" class="square" style="background-color: #bea273;"</div>');
  $('.grid').append('<div id="item292" class="square" style="background-color: #f3d74f;"</div>');
  $('.grid').append('<div id="item293" class="square" style="background-color: #bea06e;"</div>');
  $('.grid').append('<div id="item294" class="square" style="background-color: #c86c83;"</div>');
  $('.grid').append('<div id="item295" class="square" style="background-color: #aab386;"</div>');
  $('.grid').append('<div id="item296" class="square" style="background-color: #9dc497;"</div>');
  $('.grid').append('<div id="item297" class="square" style="background-color: #8da09e;"</div>');
  $('.grid').append('<div id="item298" class="square" style="background-color: #b6b974;"</div>');
  $('.grid').append('<div id="item299" class="square" style="background-color: #4fb2cf;"</div>');
  $('.grid').append('<div id="item300" class="square" style="background-color: #5a81ac;"</div>');
  $('.grid').append('<div id="item301" class="square" style="background-color: #3489b0;"</div>');
  $('.grid').append('<div id="item302" class="square" style="background-color: #1bb4af;"</div>');
  $('.grid').append('<div id="item303" class="square" style="background-color: #64acbb;"</div>');
  $('.grid').append('<div id="item304" class="square" style="background-color: #9f93b9;"</div>');
  $('.grid').append('<div id="item305" class="square" style="background-color: #b1b3ae;"</div>');
  $('.grid').append('<div id="item306" class="square" style="background-color: #ecf25e;"</div>');
  $('.grid').append('<div id="item307" class="square" style="background-color: #c07f69;"</div>');
  $('.grid').append('<div id="item308" class="square" style="background-color: #d6b484;"</div>');
  $('.grid').append('<div id="item309" class="square" style="background-color: #77c8c1;"</div>');
  $('.grid').append('<div id="item310" class="square" style="background-color: #a5cc89;"</div>');
  $('.grid').append('<div id="item311" class="square" style="background-color: #a9b091;"</div>');
  $('.grid').append('<div id="item312" class="square" style="background-color: #818ec3;"</div>');
  $('.grid').append('<div id="item313" class="square" style="background-color: #b1c377;"</div>');
  $('.grid').append('<div id="item314" class="square" style="background-color: #52cbd4;"</div>');
  $('.grid').append('<div id="item315" class="square" style="background-color: #4ebb82;"</div>');
  $('.grid').append('<div id="item316" class="square" style="background-color: #007bb9;"</div>');
  $('.grid').append('<div id="item317" class="square" style="background-color: #11a6d0;"</div>');
  $('.grid').append('<div id="item318" class="square" style="background-color: #66e1e6;"</div>');
  $('.grid').append('<div id="item319" class="square" style="background-color: #67cbda;"</div>');
  $('.grid').append('<div id="item320" class="square" style="background-color: #6ed8d8;"</div>');
  $('.grid').append('<div id="item321" class="square" style="background-color: #95a5b5;"</div>');
  $('.grid').append('<div id="item322" class="square" style="background-color: #b9cd6e;"</div>');
  $('.grid').append('<div id="item323" class="square" style="background-color: #c7bd78;"</div>');
  $('.grid').append('<div id="item324" class="square" style="background-color: #c1dc97;"</div>');
  $('.grid').append('<div id="item325" class="square" style="background-color: #9eb4a7;"</div>');
  $('.grid').append('<div id="item326" class="square" style="background-color: #72a191;"</div>');
  $('.grid').append('<div id="item327" class="square" style="background-color: #9cc9cf;"</div>');
  $('.grid').append('<div id="item328" class="square" style="background-color: #76b7cb;"</div>');
  $('.grid').append('<div id="item329" class="square" style="background-color: #2fc6e5;"</div>');
  $('.grid').append('<div id="item330" class="square" style="background-color: #7655ac;"</div>');
  $('.grid').append('<div id="item331" class="square" style="background-color: #1343af;"</div>');
  $('.grid').append('<div id="item332" class="square" style="background-color: #7f33a0;"</div>');
  $('.grid').append('<div id="item333" class="square" style="background-color: #70a4ba;"</div>');
  $('.grid').append('<div id="item334" class="square" style="background-color: #39c0c4;"</div>');
  $('.grid').append('<div id="item335" class="square" style="background-color: #6f8cc4;"</div>');
  $('.grid').append('<div id="item336" class="square" style="background-color: #91df94;"</div>');
  $('.grid').append('<div id="item337" class="square" style="background-color: #8ea378;"</div>');
  $('.grid').append('<div id="item338" class="square" style="background-color: #47b7b8;"</div>');
  $('.grid').append('<div id="item339" class="square" style="background-color: #83b89a;"</div>');
  $('.grid').append('<div id="item340" class="square" style="background-color: #70d7c4;"</div>');
  $('.grid').append('<div id="item341" class="square" style="background-color: #65f0cf;"</div>');
  $('.grid').append('<div id="item342" class="square" style="background-color: #9bd2d5;"</div>');
  $('.grid').append('<div id="item343" class="square" style="background-color: #5db1d3;"</div>');
  $('.grid').append('<div id="item344" class="square" style="background-color: #38b6c5;"</div>');
  $('.grid').append('<div id="item345" class="square" style="background-color: #4bbac1;"</div>');
  $('.grid').append('<div id="item346" class="square" style="background-color: #0375be;"</div>');
  $('.grid').append('<div id="item347" class="square" style="background-color: #1e60aa;"</div>');
  $('.grid').append('<div id="item348" class="square" style="background-color: #317eb2;"</div>');
  $('.grid').append('<div id="item349" class="square" style="background-color: #4b72c1;"</div>');
  $('.grid').append('<div id="item350" class="square" style="background-color: #189abc;"</div>');
  $('.grid').append('<div id="item351" class="square" style="background-color: #8a9887;"</div>');
  $('.grid').append('<div id="item352" class="square" style="background-color: #93c959;"</div>');
  $('.grid').append('<div id="item353" class="square" style="background-color: #6eb279;"</div>');
  $('.grid').append('<div id="item354" class="square" style="background-color: #89c57b;"</div>');
  $('.grid').append('<div id="item355" class="square" style="background-color: #8aa38d;"</div>');
  $('.grid').append('<div id="item356" class="square" style="background-color: #6ad8e7;"</div>');
  $('.grid').append('<div id="item357" class="square" style="background-color: #42a892;"</div>');
  $('.grid').append('<div id="item358" class="square" style="background-color: #30a89e;"</div>');
  $('.grid').append('<div id="item359" class="square" style="background-color: #10c3c8;"</div>');
  $('.grid').append('<div id="item360" class="square" style="background-color: #2a70b8;"</div>');
  $('.grid').append('<div id="item361" class="square" style="background-color: #0d73c8;"</div>');
  $('.grid').append('<div id="item362" class="square" style="background-color: #23b1d9;"</div>');
  $('.grid').append('<div id="item363" class="square" style="background-color: #34b3d6;"</div>');
  $('.grid').append('<div id="item364" class="square" style="background-color: #23c7e0;"</div>');
  $('.grid').append('<div id="item365" class="square" style="background-color: #346bbd;"</div>');
  $('.grid').append('<div id="item366" class="square" style="background-color: #35a2cb;"</div>');
  $('.grid').append('<div id="item367" class="square" style="background-color: #4291af;"</div>');
  $('.grid').append('<div id="item368" class="square" style="background-color: #869689;"</div>');
  $('.grid').append('<div id="item369" class="square" style="background-color: #8ea480;"</div>');
  $('.grid').append('<div id="item370" class="square" style="background-color: #9b93a2;"</div>');
  $('.grid').append('<div id="item371" class="square" style="background-color: #568b9b;"</div>');
  $('.grid').append('<div id="item372" class="square" style="background-color: #45a3bc;"</div>');
  $('.grid').append('<div id="item373" class="square" style="background-color: #268bb7;"</div>');
  $('.grid').append('<div id="item374" class="square" style="background-color: #3b4fa8;"</div>');
  $('.grid').append('<div id="item375" class="square" style="background-color: #689dad;"</div>');

  $('.square').css({'height':setSize, 'width':setSize, 'opacity': 0.1});

}
