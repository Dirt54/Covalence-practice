
document.addEventListener('DOMContentLoaded', function () {
    var butn = document.getElementById('btn');
    var para = document.createElement('p');
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var friends = ['Chandler', 'Sam', 'Forrest', 'Avery', 'Bailey'];
    document.body.appendChild(div);
    div.appendChild(h3);
    div.className = "friend";
    h3.appendChild(para);

    butn.addEventListener('click', function () {
        for (j = 0; j < friends.length; j++) {
            var text = document.createTextNode(friends[j]);
            for (i = 9; i > -1; i--) {
                var text1 = document.createTextNode((i + 1) + " lines of code in the file, " + (i + 1) + " lines of code; " + friends[j] + " strikes one out, clears it all out, " + i + " lines of code in the file.");
                h3.appendChild(text);
                para.appendChild(text1);
                if (i === 1) {
                    var text2 = document.createTextNode((i + 1) + " lines of code in the file, " + (i + 1) + " lines of code; " + friends[j] + " strikes one out, clears it all out, " + i + " line of code in the file.");
                    h3.appendChild(text);
                    para.appendChild(text2);
                } else if (i === 0) {
                    var text3 = document.createTextNode((i + 1) + " line of code in the file, " + (i + 1) + " line of code; " + friends[j] + " strikes one out, clears it all out, " + "no more lines of code in the file.");
                    h3.appendChild(text);
                    para.appendChild(text3);
                }
            }
        }
    });
});



