(function() {
    'use strict'
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    paper.view.draw();
    var count = 1;
    var maincanvas = document.getElementById('mainCanvas');
    var ctx = maincanvas.getContext('2d');

    function lights(){
        count = count+1;
        console.log(count);
        var colorarray = ["red", "green", "yellow", "violet", "blue"];
        var axisarray = [0,100,200,300,400];
        var positins = [];
        var randomcolor = Math.floor(Math.random() * colorarray.length);
        var randomxposition = Math.floor(Math.random() * axisarray.length);
        var randomyposition = Math.floor(Math.random() * axisarray.length);
        console.log(positins.length);
        if(positins.includes([axisarray[randomxposition], axisarray[randomyposition]])) {
            console.log('in position if');
            return;
        } else {
        ctx.fillStyle = colorarray[randomcolor];
        console.log(ctx.fillStyle);
        ctx.fillRect(axisarray[randomxposition],axisarray[randomyposition],100,100);
        positins.push([axisarray[randomxposition], axisarray[randomyposition]]);
        }

    }

    setInterval(lights,1000);
        
    // your code will start here...
    //console.log('main.js loaded'); // ...and end here
    }())