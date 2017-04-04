
var clickTimes =0;

function helloWorld() {


    var content;
    var name;
    // $(".helloWorldButton").attr("disabled","none");
    content = $(".helloWorldButton").val();
    name= $(".helloWorldButton").text();
    // alert("内容是: "+content+"名称是: "+name);
    $(".helloWorldButton").text("已经改变"); 

    //    arguments.callee.num = arguments.callee.num ? arguments.callee.num : 0;
    //     $('.btn_click_num').text(++arguments.callee.num);
    //     console.log('第' + arguments.callee.num + '次点击。')
    clickTimes=clickTimes+1;
     $(".btn_click_num").text(clickTimes); 
console.log('第' +clickTimes + '次点击。')



}

// $(document).ready(function(){
//     alert("HelloWorld");
// })