
function User(name, credits) 
{
    this.username = name;
    this.credits = credits;
    this.cost = 1;//cost per play //TODO: fix implement complete this
    this.wins = 0;
    this.update();
};

User.prototype.addWin = function()
{
    this.wins++;
    this.update();
}

User.prototype.addCredits = function(c)
{
    this.credits += c;
    this.update();
};

User.prototype.tryToPay = function()
{
    if(this.cost > this.credits) 
    {
        return false;
    }
    else 
    {
        this.addCredits(-1*this.cost);
        return true;
    }
}

User.prototype.update = function()
{
    $("#credits").val(this.credits);
    $("#wins").val(this.wins);
    $("#spincost").val(this.cost);
};



