num_values = 100;
values = [];
bar_width = 100/num_values;
iter = 0;
speed = 50;

function create_empty_bars(){
    document.getElementById("array_container").innerHTML = "";
    values = [];
    for (var i = 0; i < num_values; i++){
        values.push(0);
        add_value(i, 0);
    }
    fill_values();
}

function fill_values(){
    for (var i = 0; i < values.length; i++){
        values[i] = (Math.random() * 100);
    }
    display_values(-1);
}

function display_values(iter) {
    for (var i = 0; i < values.length; i++){
        document.getElementById(i.toString()).style.height = values[i].toString() + "%";
        if (i < iter) {
            document.getElementById(i.toString()).style.backgroundColor = "lime";
        } else {
            document.getElementById(i.toString()).style.backgroundColor = "yellow";
        }
    }
}

function add_value(id, height){
    elem = document.createElement("div");
    elem.className += "bar";
    elem.id = id.toString();
    elem.style.height = height.toString() + "%";
    elem.style.width = bar_width.toString() + "%";
    document.getElementById("array_container").appendChild(elem);
}

function insertion_sort() {
    iter = 0;
    var my_sort = setInterval(insert_val, speed);
    function insert_val() {
        display_values(iter);
        if (iter > values.length - 1){
            clearInterval(my_sort);
        } else {
            color_current_val(iter);
            var tmp = values[iter];
            for (var j = iter - 1; j >= 0 && (values[j] > tmp); j--) {
                values[j + 1] = values[j];
            }
            values[j + 1] = tmp;
            color_new_pos(j + 1);
            iter++;
        }
    }
}


function bubble_sort(){
    i = 0;
    var main_loop = setInterval(go_through_vals, speed*num_values*5);
    function go_through_vals() {
        console.log("running outer loop");
        if (i >= values.length) {
            display_values(i);
            clearInterval(main_loop);
        }
        else {
            j = 0;
            var sub_loop = setInterval(compare_vals, speed*num_values/10);
            function compare_vals() {
                console.log("running inner loop");
                display_values(-1);
                if (j >= values.length - i) {
                    clearInterval(sub_loop);
                }
                else {
                    if (values[j] > values[j + 1]){
                        color_current_val(j);
                        color_new_pos(j + 1);
                        var temp = values[j];
                        values[j] = values[j + 1];
                        values[j + 1] = temp;
                    }
                    j++;
                }
            }
            i++;
        }
    }
}

function bubbleSort(){
    for (var i = 0; i < values.length; i++){
        for (var j = 0; j < values.length - i; j++){
            if (values[j] > values[j + 1]){
                var temp = values[j];
                values[j] = values[j + 1];
                values[j + 1] = temp;
            }
        }
    }
    display_values();
}

function color_current_val(p){
    document.getElementById(p.toString()).style.backgroundColor = "red";
}
function color_new_pos(p){
    document.getElementById(p.toString()).style.backgroundColor = "#ef60ff";
}
