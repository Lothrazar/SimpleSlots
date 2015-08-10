
function Spinner() 
{
    this.left = 1;
    this.middle = 1;
    this.right = 1; 
  // this.timeout = 500;//half second
    this.MIN_LEVEL = 1;//never changes in current version 
    this.MAX_LEVEL = 3; 
    //html dom ids
    this.leftimg = [];
    for(var i = 1; i <= 5; i++)
        this.leftimg[i] = "left_"+i;
    this.midimg = [];
    for(var i = 1; i <= 5; i++)
        this.midimg[i] = "mid_"+i;
    this.rightimg = [];
    for(var i = 1; i <= 5; i++)
        this.rightimg[i] = "right_"+i;
    
  
};

Spinner.prototype.updateLeft = function()
{ 
     for(var i = 1; i <= 5; i++)
    {
        if(i == this.left)
            $("#"+this.leftimg[i]).removeClass("hidden");
        else
            $("#"+this.leftimg[i]).addClass("hidden");
    }
}
Spinner.prototype.updateMid = function()
{ 
     for(var i = 1; i <= 5; i++)
    {
        if(i == this.middle)
            $("#"+this.midimg[i]).removeClass("hidden");
        else
            $("#"+this.midimg[i]).addClass("hidden");
        
    }
}
Spinner.prototype.updateRight = function()
{ 
     for(var i = 1; i <= 5; i++)
    {
        if(i == this.right)
            $("#"+this.rightimg[i]).removeClass("hidden");
        else
            $("#"+this.rightimg[i]).addClass("hidden");
        
        
    }
}
Spinner.prototype.update = function()
{ 
    this.updateLeft();
    this.updateMid();
    this.updateRight();
    $("#mux").html(this.getMultiplier());
    /*
$("#left_spin").addClass("hidden");
$("#mid_spin").addClass("hidden");
$("#right_spin").addClass("hidden");
*/

   // console.log("mult "+this.getMultiplier());
    
}

Spinner.prototype.spin = function()
{
    //todo: play a spinning animation over where the apples go then replace with static
  //  this.left = 0;
    
    //first time only:
    $('#group_left').removeClass("hidden");
    $('#group_mid').removeClass("hidden");
    $('#group_right').removeClass("hidden");
   
        for(var i = 1; i <= 5; i++)
        {
      
                $("#"+this.leftimg[i]).addClass("hidden");
                $("#"+this.midimg[i]).addClass("hidden");
                $("#"+this.rightimg[i]).addClass("hidden");

        }


        $("#left_scroll").removeClass("hidden");
        $("#mid_scroll").removeClass("hidden");
        $("#right_scroll").removeClass("hidden");
           //animation sample idea from http://stackoverflow.com/questions/7984577/jquery-indefinitely-scroll-and-loop-one-image-inside-a-div
        
          
            function animate_img(image) 
            {
                var speed = Math.floor(Math.random() *  120) + 50    ;
                if (image.css('top') == '0px') {
                    image.animate({top: '-192px'}, speed, function () {
                        animate_img(image);
                    });
                } else {
                    image.animate({top: '0px'}, speed, function () {
                        animate_img(image);
                    });
                }
            }
        animate_img($('#left_scroll').children('img'));
        animate_img($('#mid_scroll').children('img'));
        animate_img($('#right_scroll').children('img'));
//});

var timeout = Math.floor(Math.random() *  500) + 600    ;
var self = this;
setTimeout(function(){ 
   $("#left_scroll").addClass("hidden");
     self.left = self.getRandom();
     self.updateLeft();
    setTimeout(function(){ 
        $("#mid_scroll").addClass("hidden");
        self.middle = self.getRandom();
        self.updateMid();
        setTimeout(function(){ 
            $("#right_scroll").addClass("hidden");
            self.right = self.getRandom();
            self.updateRight();

              var amtWon = self.getWinnings(App.user.level);

              //console.log("S<>  "+spinner.left+" "+spinner.middle+" "+spinner.right);
              //console.log("won "+won);
              if(amtWon > 0)
              {

                  App.user.addCredits(amtWon);
                  App.user.addWin();

              }

               var paid = App.user.username+" paid "+App.spinner.getPointsCost(App.user.level);
               if(amtWon > 0) 
               {
                    App.playlog.add(paid+", won "+amtWon);
                }
                else
                {
                    App.playlog.add(paid+", lost");
                }

                    //TODO: put an App.button toggle function or do this more spart way?
                    
                 $('#btnplay').prop('disabled',false);
              self.update();


        }, timeout - 300);
    }, timeout- 200);
}, timeout);


        //TODO: this randomizaiton, plus other steps as wellshould be done server side
       
        
    
    
        
    //    callback();
    //},this.timeout);
    

};
Spinner.prototype.getMultiplier = function(level)
{
    if(level === 1) {return 4;}
    if(level === 2) {return 7;}
    if(level === 3) {return 7;}
    else {return 1;}//shouldnt happen anyway
};

Spinner.prototype.getRandom = function()
{
    //its either from [1,3] or [1,5]
    return Math.floor(Math.random() *  this.MAX_LEVEL) + this.MIN_LEVEL;    
};

Spinner.prototype.getPointsCost = function(level)
{
    if(level === 1){return 1;}
    if(level === 2){return 10;}
    if(level === 3){return 5000;}
    else {return 0;}//doesnt happen
};

Spinner.prototype.detectMatch = function()
{
    //if this is true, then left===right also follows logically, and so on
    return (this.left === this.middle) && (this.left === this.right);
};

Spinner.prototype.getWinnings = function(level)
{
   // console.log("getWinnings "+ this.getMultiplier()+" * "+this.left);
    //console.log(this.detectMatch());
    if(this.detectMatch())  //all numbers are the same so just compute the points
        return this.getMultiplier(level) * this.left;
    else
        return 0;
};


Spinner.prototype.getBonusForLevel = function(level)
{
    if(level === 2){return 100;}
    if(level === 3){return 100000;}
    if(level === 4){return 1000000;}//for level 1, and others
};
 
Spinner.prototype.play = function()
{
    if(App.user.tryToPay() == false)
    {
        alert("you went broke. Try a different username");
        return 0;
    }
   this.spin();
};

