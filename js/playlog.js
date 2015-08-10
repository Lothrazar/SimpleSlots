/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Playlog()
{
    this.events = [];
    
}

Playlog.prototype.add = function(event)
{
    this.events.push(event);
    
    this.update();
        
}

Playlog.prototype.clear = function()
{
     $("#winlog").html("");
}
Playlog.prototype.update = function()
{
    //TODO: vertical display one event per row
    
    if(this.events.length > 0)
    {
        var latest = this.events[this.events.length-1];
        
       $("#winlog").append("<br/>"+latest);
       
        var element = document.getElementById("winlog");
        element.scrollTop = element.scrollHeight;
       
    }/*
    //toggle button to hide show events.
    var e = "";
    for(var i = 0; i < this.events.length; i++)
    {
        e = this.events[i];
        console.log(e);
    }*/
}