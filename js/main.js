$(document).ready(function() {
    $('#myinput').hide();
    $("#searchIcon").click(function() {
        $("#searchIcon").hide();
        $("#myinput").fadeIn();
        $("#input-box").focus();
    });
    $("#close").click(function() {
        $("#myinput").hide();
        $('input').val('');
        $("#searchIcon").fadeIn();
        //$(".panel-group").hide();
        $('.container, .row').css("padding", "10% 0");
        //$('#content').html('Click icon to search');
        document.getElementById('content').innerHTML="Click icon to search";
    });
    //checking if enter is pressed
    $('.randomSearch').click(function() {
        $('input').val('');
        //$('.container, .row').css("padding-top","10px");
        //$('#content').hide(); 
    });
    
    // taking the value input in the input-box
    
    $("input").keydown(function(e) {
        if (e.which === 13) {
            $('.container, .row').css("padding-top","10px");
            $('#content').text(''); 
            $('#content').append('<ul style="list-style-type: none"></ul>');
            var search = $("input").val();
            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+search+"&format=json&callback=?";
            $.getJSON({
                url:url,
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    print(data);
                    console.log(data);
                },
                error: function() {
                    console.log("Error");
                }
            });
        }
    });
    function print(data) {
        for(var i=0; i<10; ++i) {
            $('#content ul').append('<div class="panel panel-default"><div class="panel-heading"><a href=' +data[3][i] +'\>' +data[1][i] +'</a></div><div class="panel-body">' +data[2][i] +'</div></div>');
        }
    }
})




















