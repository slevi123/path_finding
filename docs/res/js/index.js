// imports = ["les_canvas"]


function createNotification(){
    var img = '/to-do-notifications/img/icon-128.png';
    var text = 'HEY! Your task "gg" is now overdue.';
    var notification = new Notification('To do list', { body: text, icon: img });
}

window.onload = function(){
    const requested_dom = document.getElementById("requested")
    const permission_dom = document.getElementById("permission")
    const sent_dom = document.getElementById("sent")
    let perm = Notification.permission;
    console.log(permission_dom)
    permission_dom.textContent = "permission: " + perm;
    if (perm == "granted"){
        createNotification();
        sent_dom.textContent = "sent: yes";
    } else {
        Notification.requestPermission().then(function(result) {
            requested_dom.textContent = "requested: " + result;
            if (result="granted"){
                createNotification();
                sent_dom.textContent = "sent: yes";
            }
        });
    }
}