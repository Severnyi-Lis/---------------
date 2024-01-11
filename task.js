function printdate() { 
    let dt = new Date(); 
    var i = 0;
    while (i < dt.getFullYear()-2000) {
        i += 1;
        console.log(dt);
    }
}