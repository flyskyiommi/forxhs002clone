// define(['text!./hf.html','lazyload','css!./hf.css'],function(html,lazyload){
//   var hf = {
//       add:function(){
//         $(".buy-content").html(html)
//       }
//     }
//   return hf;
// })







define(['text!./all.html','lazyload','css!./all.css'],function(html,lazyload){
  var hufu = {
    // 数据布局到购买页面
      add:function(){
        $(".buy-content").html(html)
      },

      getItems:function(url){
        $.get(url,function(res){
          console.log(res)
            if(res.success == true){
               var datas = res.data;
               var left = [];
               var right = [];
               for(var i = 0; i< datas.length;i++){
                  if(i %2 == 0){
                    var p = getItem(datas[i]);
                    left.push(p);
                  }else {
                    var p = getItem(datas[i]);
                    right.push(p);
                  }
               }

               $('.waterfall-content-left').append(left.join(''));
               $('.waterfall-content-right').append(right.join(''));

               $('.box').on('touchstart',function(e){
                  var id = $(this).data('id')
                  location.href="#/goods/" + id
               })

            }
        })
      },


      initWaterFall:function(l){
          // 连接服务器接口，获取数据
          this.getItems('/gethf2');
          // this.scrollAppend();
          $("img.lazy").lazyload({
            effect : "fadeIn"
          });
      },
      scrollAppend:function(){
        var that = this;
        $(window).on('scroll',function(){
          console.log('sss')
          var scrollTop = $(window).scrollTop() + $(window).height();
          $last =  $('.waterfall-content-left .box').last();
          var $lastScroll = $last.offset().top;

          if(scrollTop > $lastScroll){
              that.getItems('/getall');
          }

          if($(window).scrollTop() >= 51){
            $('#life-menu').addClass('fixed-menu')
          }else {
            $('#life-menu').removeClass('fixed-menu')
          }
        })

      }
  }

  function getItem(data){
      var item =
          '<div class="box" data-id="'+data.seller_id+'">\
            <img src="'+data.image+'" />\
            <div class="item-title"><h5>'+data.title+'</h5></div>\
            <div class="item-desc">'+data.desc+'</div>\
            <div class="item-price">\
              <span>'+data.discount_price+'￥</span>\
            </div>\
          </div>'

      return item;
  }

  return hufu;
})

