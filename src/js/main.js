$.fn.moveIt = function(section){
  var instances = []
      this.section = section;

    $(this).each(function(){
      instances.push(new moveItItem($(this)));
    });
    window.onscroll = function(){
      var scrollTop = $(window).scrollTop(),
          wrapperPos = section.offset();
      if(scrollTop > wrapperPos.top){
        instances.forEach(function(inst){
          inst.update(scrollTop-wrapperPos.top);
          console.log(scrollTop);
        });
      }
    }
  }

    var moveItItem = function(el){
      this.el = $(el);
      this.speed = parseInt(this.el.attr('data-speed'));
    };
  moveItItem.prototype.update = function(scrollTop){
    this.el.css('transform', 'translateY(' + -(scrollTop * this.speed/10)+ 'px)');
  }

  $(function(){
    var section = $(".wrapper");
    $('[data-speed]').moveIt(section);
  });
