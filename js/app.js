 
 
function spinner(left , middle, right, level) {
    this.left = left;
    this.middle = middle;
    this.right = right; 
    this.level = level;
    this.MULT = 7;
    this.MIN_LEVEL = 1;//never changes in current version 
};

spinner.prototype.getMaxLevel = function()
{
    if(this.level >= 3) {return 5;}
    else {return 3;}
}
spinner.prototype.getMultiplier = function()
{
    if(this.level === 1) {return 4;}
    if(this.level === 2) {return 7;}
    if(this.level === 3) {return 7;}
    else {return 1;}//shouldnt happen anyway
}


spinner.prototype.getRandom = function()
{
    //its either from [1,3] or [1,5]
    return Math.floor(Math.random() * this.getMax()) + this.MIN_LEVEL;    
};

spinner.prototype.getPointsCost = function()
{
    if(this.level === 2){return 10;}
    else if(this.level === 3){return 5000;}
    else {return 0;}//costs zero points for level 1
};
spinner.prototype.detectMatch = function()
{
    //if this is true, then left===right also follows logically, and so on
    return this.left === this.middle && this.left === this.right;
}
spinner.prototype.getWinnings = function()
{
    if(this.detectMatch() == false) {return 0;}
    //else all numbers are the same so just compute the points
    
    var points = this.MULT & this.left;
}

spinner.prototype.spin = function()
{
    this.left = this.getRandom();
    this.middle = this.getRandom();
    this.right = this.getRandom();
};
spinner.prototype.getBonusForLevel = function()
{
    if(this.level === 2){return 100;}
    else if(this.level === 3){return 100000;}
    else {return 0;}//for level 1, and others
}
