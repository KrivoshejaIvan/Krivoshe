/*Включение и настройка плагина ползунка*/
$("#slider").ionRangeSlider({
        min: 0,
        max: 30,
        from: 15,
        postfix: ' дней'
    }
);
/*Включение и настройка плагина switcher on/off*/
$('input[type="checkbox"]').onoff();
    var check = document.getElementById('check');
    check.onchange = function () {
        var mess = document.getElementById('message');
        if(check.checked == true) {
            mess.style.visibility = 'hidden'
        } else  {
            mess.style.visibility = 'visible'
        }
    };
/*Функция и прототип Всплывающей подсказки*/
 function Tooltip() {
    this.tooltip = document.createElement('div');
    this.tooltip.style.position = 'absolute';
    this.tooltip.style.visibility = 'hidden';
    this.tooltip.className = 'tooltip'
 }
 Tooltip.prototype.show = function (text,x,y) {
    this.tooltip.innerHTML = text;
    this.tooltip.style.left = x + 'px';
    this.tooltip.style.top = y + 'px';
    this.tooltip.style.visibility = 'visible';

 if(this.tooltip.parentNode != document.body) {
    document.body.appendChild(this.tooltip)
 }
 };
 Tooltip.prototype.hide = function (text,x,y) {
    this.tooltip.style.visibility = 'hidden'
 };
 window.onload = function () {
    var test = document.getElementById('test');
    test.onmousemove = mouseMoveHandler;
    test.onmouseout = mouseOutHandler;
    };
    var t = new Tooltip();

    function mouseMoveHandler(e) {
    if (!e) e = window.event;
    t.show('Выбирите тариф который как можно больше вам подходит', e.clientX + 10, e.clientY + 10)
    }
    function mouseOutHandler() {
    t.hide()
}









