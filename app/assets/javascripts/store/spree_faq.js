 $(function() {
    $('.answer').hide();
    $('.question').click(function() {
      var id = $(this).attr('id').split('_')[1];
      $('#answer_' + id).slideToggle();  
      return false;
    });
  });