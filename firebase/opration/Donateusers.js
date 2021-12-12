
function read(adminId) {

    firebase.database().ref('/App_Users/').once('value').then(function (snapshot) {

        var table = document.getElementById('tablefilter');
        table.innerHTML = '';
        var postObject = snapshot.val();
        var keys = Object.keys(postObject);
        var value = Object.values(postObject);
        firebase.database().ref('Donation').once('value').then(function (snapshot) {
            var user = firebase.auth().currentUser;
            var postObject = snapshot.val();
            var keys1 = Object.keys(postObject);
            var con =0;
            for (k = 0; k < keys1.length; k++) {
                if (user.uid === postObject[keys1[k]]["ngo_adminid"]) {
                    for (j = 0; j < keys.length; j++) {
                        if (keys[j] == postObject[keys1[k]]["app_userid"]) {
                            m = value[j]._reguser
                            n = value[j]._reg_email
                            p = value[j]._phoneNo
                            c = value[j]._city
                            con = con +1
                            table.innerHTML +=
                                `
                      <tr>
                      <td>${con}</td>
                      <td>${m}</td>
                      <td>${n}</td>
                      <td>${p}</td>
                      <td>${c}</td>
                      </tr>

                    `;
                    
                        }
                    }
                }
            }
            let filterInput = document.getElementById('filter');
            filterInput.addEventListener('keyup', function () {
                let filtervalue = document.getElementById('filter').value;
                var table = document.getElementById('tablefilter');
                let tr = table.querySelectorAll('tr');

                for (let index = 0; index < tr.length; index++) {
                    let val0 = tr[index].getElementsByTagName('td')[0];
                    let val1 = tr[index].getElementsByTagName('td')[1];
                    let val2 = tr[index].getElementsByTagName('td')[2];
                    let val3 = tr[index].getElementsByTagName('td')[3];
                    let val4 = tr[index].getElementsByTagName('td')[4];

                    if (val0.innerHTML.indexOf(filtervalue) > -1 || val1.innerHTML.indexOf(filtervalue) > -1 || val2.innerHTML.indexOf(filtervalue) > -1 ||
                        val3.innerHTML.indexOf(filtervalue) > -1 || val4.innerHTML.indexOf(filtervalue) > -1
                    ) {
                        tr[index].style.display = '';
                    }

                    else {
                        tr[index].style.display = 'none';
                    }
                }
            })


        })
        
    })



    var task = firebase.database().ref('/admin/' + adminId + "/user/");
    task.on("child_added", function (data) {
        var taskvalue = data.val();
        document.getElementById("adminsection").innerHTML += `
        <div class="row">
            <p style="color:white; margin-top:20px;"> ${taskvalue.orgname}</p>
        </div>
        `;
    });
}
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById('tablefilter');
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 0; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }

    }
}
function sortnoTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById('tablefilter');
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 0; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}