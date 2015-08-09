
function Spinner(left , middle, right, level) 
{
    this.left = left;
    this.middle = middle;
    this.right = right; 
    this.level = level;
    this.MIN_LEVEL = 1;//never changes in current version 
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
    
    this.update();
    //first time only:
    $('#group_left').removeClass("hidden");
    $('#group_mid').removeClass("hidden");
    $('#group_right').removeClass("hidden");
};

Spinner.prototype.update = function()
{
    for(var i = 1; i <= 5; i++)
    {
        if(i == this.left)
            $("#"+this.leftimg[i]).removeClass("hidden");
        else
            $("#"+this.leftimg[i]).addClass("hidden");
        
        
        if(i == this.middle)
            $("#"+this.midimg[i]).removeClass("hidden");
        else
            $("#"+this.midimg[i]).addClass("hidden");
        
        
        if(i == this.right)
            $("#"+this.rightimg[i]).removeClass("hidden");
        else
            $("#"+this.rightimg[i]).addClass("hidden");
        
        
       
    }
    
}

Spinner.prototype.getMaxLevel = function()
{
    if(this.level >= 3) {return 5;}
    else {return 3;}
};

Spinner.prototype.getMultiplier = function()
{
    if(this.level === 1) {return 4;}
    if(this.level === 2) {return 7;}
    if(this.level === 3) {return 7;}
    else {return 1;}//shouldnt happen anyway
};

Spinner.prototype.getRandom = function()
{
    //its either from [1,3] or [1,5]
    return Math.floor(Math.random() * this.getMaxLevel()) + this.MIN_LEVEL;    
};

Spinner.prototype.getPointsCost = function()
{
    if(this.level === 2){return 10;}
    else if(this.level === 3){return 5000;}
    else {return 0;}//costs zero points for level 1
};

Spinner.prototype.detectMatch = function()
{
    //if this is true, then left===right also follows logically, and so on
    return (this.left === this.middle) && (this.left === this.right);
};

Spinner.prototype.getWinnings = function()
{
    //console.log("getWinnings "+ this.getMultiplier()+" * "+this.left);
    //console.log(this.detectMatch());
    if(this.detectMatch())  //all numbers are the same so just compute the points
        return this.getMultiplier() & this.left;
    else
        return 0;
};

Spinner.prototype.spin = function()
{
    this.left = this.getRandom();
    this.middle = this.getRandom();
    this.right = this.getRandom();
    
    this.update();
};

Spinner.prototype.getBonusForLevel = function()
{
    if(this.level === 2){return 100;}
    else if(this.level === 3){return 100000;}
    else {return 0;}//for level 1, and others
};
