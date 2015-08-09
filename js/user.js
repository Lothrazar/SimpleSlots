/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function user(name, credits) {
    this.username = name;
    this.credits = credits;
    this.points = 0;
}

user.prototype.addCredits = function(c)
{
    credits += c;
};
user.prototype.addPoints = function(c)
{
    points += c;
};



