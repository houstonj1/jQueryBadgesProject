$(function() {
    $.ajax({
        url: 'https://www.codeschool.com/users/houstonj1.json',
        dataType: 'jsonp',
        success: function(response) {
            // success stuff
            for(badge in response.courses.completed) {
                var item = $('<div class="course"></div>');
                $('#badges').append(item);
            }
        }
    });
  // your code will go here

});
