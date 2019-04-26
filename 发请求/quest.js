function aaa(){
    alert("hello");
}
window.onload=function(){
    $("#login").click(function(){
        //console.log("working");
        $.ajax({
            url: "https://clgluke.top/test.php",
            type: "get",
            dataType: "jsonp", //指定服务器返回的数据类型
            success: function (data) {
                console.log("success");
                console.log(data);
            },
            error: function(data) {
                console.log("error");
                console.log(data);
            }
        });
    });
}
