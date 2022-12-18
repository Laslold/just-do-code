// $('.modalhero__inner').click(function() {
//     const $this = $(this);
//     const index = $this.index();
//     const $content = $('.modalhero__inner');
  
//     $this.addClass('active').siblings().removeClass('active');
//     $content.eq(index).fadeIn();
//     $content.not(i => i === index).hide();
//   }).eq(0).click();
  
  $('.modalhero__inner form-button').click(function() {
    const $this = $(this);
    // const on = $this.siblings('img').toggleClass('on').hasClass('on');
    $this.text(on ? 'Закрыть' : $this.data('text'));
  }).each((i, n) => $(n).data('text', $(n).text()));