$(document).ready(function(){
  $("p").css("fontSize", "56px");
  $("a").css("color","green");
  $("a").prepend("<span id='emoji'> ↗ </span>");
  $("a").attr("target","_blank");
  $("a").each(function() {
    if($(this).attr("href").indexOf("http:") != -1) {
        $(this).attr("href", $(this).attr("href").replace("http", "https"));
    }
});
  $("p").append("<input type='button' value='reset' onclick='del()'>");
  $('#1').click(function(){
  $('#1_1').fadeOut('slow', function() {});
  });
  $('#2').click(function(){
  $('#2_1').fadeTo(6,0.7, function() {});
  });
  $('#3').click(function(){
  $('#3_1').hide(3000);
  });
  $('#4').click(function(){
  $('#4_1').slideUp(1000);
  });
  $('#5').click(function(){
  $('#5_1').animate({opacity: '0.3'});
  });
function del(){
  for(let i = 0; i<document.links.length; i++)
{
  document.getElementById("emoji").remove();
  $("a").removeAttr("target");
};
}
});

$(document).ready(function(){
  $('#proba').load('https://inxaoc.github.io/example/ajax-2.html', function(response, status, xhr) {
  });
  $("#refresh").click(function(){
    $("#result").load('https://inxaoc.github.io/example/ajax-1.html');
  });
  $("#send").click(function(){
  $.getJSON("https://inxaoc.github.io/example/ajax.json",function(data){
    var res = data;
    var res1 = JSON.stringify(res, null, ' ');
    var str = "";
    writeTab = function(count){
      let tab = ""
      for (let i = 0; i < count; ++i)
        tab += '&nbsp;&nbsp;&nbsp;&nbsp;';
      return tab;
    }
    foo = function(json, tabulation = 0) {
      var str = "";
    for (let k in json)
    {
      str += writeTab(tabulation);
      str += k;
      str += ': ';
      value = json[k];
      if (typeof value === "object")
      {
        str += '<br>';
        str += foo(value, tabulation + 1);
      }
      else {
        str += value;
        str += '<br>';
      }
    }
    return str;
    };
    $("#json").append(foo(res));
  });
  });
});
