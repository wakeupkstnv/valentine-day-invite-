initWidth = 5
initHeight = 4
$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $('#reset');
    
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
    
    function open() {
        envelope.addClass('open')
            .removeClass('close');
    }
    function close() {
        envelope.addClass('close')
            .removeClass('open');
    
    function openWithDelay() {
        open();
        setTimeout(function() {
            close();
            showAlert();
        }, 5000); 
    }
    }
})
document.getElementById("reset").addEventListener("click",()=>{
    initWidth += 3;
    initHeight += 2;
    document.getElementById("open").style.width = `${initWidth}rem`;
    document.getElementById("open").style.height = `${initHeight}rem`;

})
document.getElementById('open').addEventListener('click', () => {

    alert("Важное событие: \nЯ приготовил небольшой план для нашего вечера в честь Дня Святого Валентина. \nПредложение о встрече: \nКак насчет того, чтобы встретиться после работы и провести вечер вместе? \nПлан: \nПредлагаю начать с ужина в ресторане [название ресторана]. Это уютное место с прекрасной атмосферой и великолепными блюдами. \nПродолжение плана: \nПосле ужина мы можем отправиться на прогулку по [название парка или района]. Там мы сможем насладиться красотой города и провести время вдвоем. \nЗавершение вечера: В завершение вечера можем заглянуть в кинотеатр, чтобы посмотреть фильм, который ты хотела бы увидеть. \nПодарок: И конечно же, у меня есть небольшой подарок для тебя, который я хотел бы передать лично. \nЗавершение: Что ты думаешь о таком плане? Если у тебя есть какие-то предложения или идеи, буду рад их услышать.")
})