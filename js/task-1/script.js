function counter(str) {
  return str.split(/[, ]/).length;
}
let line = "Hello,world! ?"
document.write(line, '<br>');
document.write('Number of symbols: ', line.length, '<br>')
document.write('Number of words: ', counter(line), '<br>');
document.write('URL: ', document.URL, '<br>');
document.write('Protocol: ', document.location.protocol, '<br>');
document.write('File name: ', document.location.pathname.split('.')[0], '<br>');
document.write('Extension: ', document.location.pathname.split('.')[1], '<br>');
let GET_params = window.location.search.replace( '?', '');
document.write('Parameters: ', GET_params, '<br>');

let anc = 'Anchor +1';
document.write('Новый анкор: ', anc.anchor('ban'), '<br>');
document.write('Новый анкор2: ', anc.anchor('ban2'), '<br>');
document.write('<a href="https://ya.ru" target="_blank" id="ya">yandex</a><br>')
document.write('<a href="https://www.google.com" target="_blank" id="google">google</a><br>')
document.write('<img src="https://i.artfile.me/wallpaper/07-02-2019/1920x1440/zhivotnye-volki--kojoty--shakaly-seryj-v-1438168.jpg" style="width: 50%" id="volk">')
document.write('<img src="https://i07.fotocdn.net/s123/5f2536f42a68098f/public_pin_l/2801520060.jpg" style="width: 378px; height: 56px" id="google_img"><br>')
document.write('Кол-во анкоров: ', document.anchors.length,'<br>');
document.write('Кол-во ссылок: ', document.links.length,'<br>');
document.write('Вывод имеющегося анкора: ', document.anchors[0].innerHTML, '<br>')
document.write('Кол-во картинок: ', document.images.length,'<br>');
document.write('Ширина первой картинки: ', document.images[0].width,'<br>');
document.write('Ширина самой широкой картинки: ', Math.max.apply(Math, Array.from(document.images).map(function(w) { return w.width; })), '<br>');
const reducer = (accumulator, currentValue) => accumulator + currentValue;
document.write('Cумма всех высот картинок: ', Array.from(document.images).map(function(o) { return o.height; }).reduce(reducer),'<br>');

for(i=0; i<10; i++){
document.write('<form id="' + i + '">')
document.write('<input type="button" class="button" value="Название" onClick="alert(\'Алёрт по желанию\')">')
document.write('<input type="button" class="button" value="Номер поля" onClick="alert(',i+1,')">')
document.write('<input type="textarea" style="height: auto" value="Поле для текста">' );
document.write('<input type="reset" class="button" value="Сброс">');
document.write('<input type="button" class="button" value="Число полей" onClick="alert(',document.forms[i].childElementCount+1,')">');
document.write('</form>');
}
document.write("</br><a href='https://youtu.be/yPYZpwSpKmA'>H</a>");
document.write("<a href='https://youtu.be/CFVPW6oV67s'>A</a>");
document.write("<a href='https://youtu.be/eYuUAGXN0KM'>T</a>");
document.write("<a href='https://youtu.be/BeyEGebJ1l4'>E</a><br>");

let k = 0;
let namearray = [];
for (i = 0; i < document.links.length; i++)
{
if (namearray.includes(document.getElementsByTagName('a')[i].innerHTML) != 1 && (document.getElementsByTagName('a')[i].innerHTML != 'Anchor +1'))
    namearray.push(document.getElementsByTagName('a')[i].innerHTML);
}

var hrefs='';

for (i = 0; i < document.links.length; i++)
{

  hrefs = hrefs + document.links[i].href + '</br>';
}
document.write(document.links.length);

document.write("<table border='1', cellpadding='2', cellspacing='0', style='background-color:gray; font-weight: bold;'>");

document.write("<tr>");
 for (k = 0; k <= 2; k++)
{
  if (k == 0)
  {
    document.write("<td>");
    document.write(namearray);
  }
  if (k == 1)
  {
    document.write("<td>");
    document.write(document.links.length);
  }
  if (k == 2)
  {
    document.write("<td>");
    document.write(hrefs);
  }
  document.write("</td>");

}
document.write("</tr>");
document.write("</table>");
