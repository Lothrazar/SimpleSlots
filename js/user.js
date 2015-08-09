
function User(name, credits) 
{
    this.username = name;
    this.credits = credits;
    this.cost = 10;//cost per play //TODO: fix implement complete this
    this.update();
};

User.prototype.addCredits = function(c)
{
    this.credits += c;
    this.update();
};

User.prototype.update = function()
{
    $("#points").val(this.credits);
};



