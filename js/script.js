

window.onload = function () {
    var dt = document.querySelector('.dt');
    dt.addEventListener('mouseover', function () {
        // console.log(dt.nextElementSibling);
        dt.nextElementSibling.style.display = 'block';
    });

    dt.nextElementSibling.addEventListener('mouseover', function () {
        // console.log(dt.nextElementSibling);
        dt.nextElementSibling.style.display = 'block';
    });

    dt.parentElement.addEventListener('mouseleave', function () {
        dt.nextElementSibling.style.display = 'none';
    });

    var focus = document.querySelector('.focus');

    var arrow = document.querySelector('.arrow-r');



    focus.addEventListener('mouseenter', function () {
        arrow.style.display = 'block';
        arrow.previousElementSibling.style.display = 'block';
    });

    focus.addEventListener('mouseleave', function () {
        // console.log(arrow)
        // console.log(arrow.previousElementSibling);
        arrow.style.display = 'none';
        arrow.previousElementSibling.style.display = 'none';
    });

    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        // 创建节点
        var li = document.createElement('li');
        // console.log(document.createElement('li'));
        //  插入节点
        ol.appendChild(li);
        // 把所有li的class置空 然后把自己加上类名
        li.addEventListener('click', function () {
            for (var i = 0; i <ol.children.length;i++){
                ol.children[i].className = '';
            }
            this.className = 'current';
            
        })
    }
    console.log(ol.firstChild);
    // ol.firstChild.className = 'current';
    // 给小圆圈加上样式表示选中的
    ol.children[0].className = 'current';
}

