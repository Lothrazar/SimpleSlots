
function User(name, credits, points) {
    this.username = name;
    this.credits = credits;
    this.points = points;
};

User.prototype.addCredits = function(c)
{
    credits += c;
};

User.prototype.addPoints = function(c)
{
    points += c;
};



