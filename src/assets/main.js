$(function() {
    $.ajax({
        url: 'https://www.codeschool.com/users/houstonj1.json',
        dataType: 'jsonp',
        success: function(response) {
            // success stuff
            var object = response.courses.completed;
            for(badge in object) {
                var item = $('<div class="course"><h3>'+ object[badge].title+'</h3><img src="'+object[badge].badge+'"><a href="'+object[badge].url+'" target="_blank" class="btn btn-primary">See course</a></div>');
                $('#badges').append(item);
            }
        }
    });
  // your code will go here

});
