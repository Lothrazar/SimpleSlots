
function User(name, credits) 
{
    this.username = name;
    this.credits = credits; 
    this.level = 1;

    this.wins = 0;
    this.update();
};

User.prototype.addWin = function()
{
    var winsForLevelTwo = 2;
    var winsForLevelThree = 1+winsForLevelTwo;
    var winsForLevelFour= 1+winsForLevelThree;//req says if we win only once at level three, game over
    this.wins++;
    
    //test for levelup
    if(this.wins == winsForLevelTwo)//we need 2 matches at level one before advancing
    {
        this.level++;
        var bonus = App.spinner.getBonusForLevel(this.level);
        App.playlog.add("Levelup bonus "+bonus);
        
        this.addCredits(bonus);
    }
    else if(this.wins == winsForLevelThree )
    {
         this.level++;
        var bonus = App.spinner.getBonusForLevel(this.level);
        App.playlog.add("Levelup bonus "+bonus);
        
        this.addCredits(bonus);
    }
    else if(this.wins == winsForLevelFour )
    {
        var bonus = App.spinner.getBonusForLevel((this.level+1));
        App.playlog.add("Levelup bonus "+bonus +" JACKPOT!");
        
        this.addCredits(bonus);
        
    }
    //else we are at level 3 which is the maximum
    this.update();
    
    if(this.credits > 1000000)
    {
        alert("You won the Jackpot!  Please log in again to start over");
    }
}

User.prototype.addCredits = function(c)
{
    this.credits += c;
    this.update();
};

User.prototype.tryToPay = function()
{
    var cost = App.spinner.getPointsCost(this.level);
    if(cost > this.credits) 
    {
        return false;
    }
    else 
    {
        this.addCredits(-1*cost);
        return true;
    }
}

User.prototype.update = function()
{
    $("#credits").val(this.credits.toLocaleString());
    $("#wins").val(this.wins);
    $("#spincost").val(App.spinner.getPointsCost(this.level));
    $("#level").val(this.level);
};



