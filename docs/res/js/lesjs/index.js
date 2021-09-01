// imports = ["les_canvas"]

function createNotification(){
    var img = '/to-do-notifications/img/icon-128.png';
    var text = 'HEY! Your task "' + title + '" is now overdue.';
    var notification = new Notification('To do list', { body: text, icon: img });
}



if (Notificatio.permission == "granted"){
    createNotification();

} else {
    Notification.requestPermission().then(function(result) {
        if (result="granted"){
            createNotification();
        }
      });
}