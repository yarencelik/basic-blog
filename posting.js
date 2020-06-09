for (var i = 0; i < data.length; i++) {
    fetch('https://raw.githubusercontent.com/yarencelik/basic-blog/master/table.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
}

function appendData(data) {
    var mainContainer = document.getElementById("myData ");
    
        var div = document.createElement("div");
        div.className="col-md-8"
        div.innerHTML = data[i].title;
        mainContainer.appendChild(div);
    }
}