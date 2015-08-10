/* 
holder for static functions
 */

window.App =
{
    _newUserStartCredits : 20,//should be serverside
    spinner:null,
    user:null,
    playlog:null,
    init:function()
    {
        if(App.spinner == null){App.spinner = new Spinner();}
   
      
        $('#btnplay').on('click', App.btn_play);
        
        $('#btnlogin').on('click', App.btn_login);
        $('#btnlogout').on('click', App.btn_logout);
        
    },
    btn_login:function()
    {
        
        if($("#login").val().trim().length == 0)
        {
            alert("Please enter a username to login");
            return;
        }
        App.user = new User($("#login").val(),App._newUserStartCredits);
        App.playlog = new Playlog();
        App.playlog.update();
        App.user.update();
        
        $('#sec_game').removeClass("hidden");
        $('#btnlogin').addClass("hidden");
        $('#btnlogout').removeClass("hidden");
         
        $("#login").prop("disabled",true);
        
        
    },
    btn_logout:function()
    { 
        App.user = new User($("#login").val(),App._newUserStartCredits);
        App.playlog = new Playlog();
        App.playlog.clear();
        
        $('#sec_game').addClass("hidden");
        $('#btnlogin').removeClass("hidden");
        $('#btnlogout').addClass("hidden");
         
        $("#login").prop("disabled",false);
        $("#login").val("");
    },
    btn_play:function()
    { 
        var btn = $('#btnplay');
   
        App.user.username = $("#login").val();

        btn.prop('enabled',false);
        
        //runs a .spin() and then returns true or false
        var amtWon = App.spinner.play( App.user );
     
        var paid = App.user.username+" paid "+App.spinner.getPointsCost(App.user.level);
        if(amtWon > 0) 
        {
            App.playlog.add(paid+", won "+amtWon);
            // TODO: do something? sound/animation / event log
        }
        else
        {
            
            App.playlog.add(paid+", lost");
        }

        btn.prop('enabled',true);

       
        //   var testLevel = 1;//todo: get from somewhere 
        //TODO: all serverside things
             /*
               $('#group_left').removeClass("hidden");
               $('#group_mid').removeClass("hidden");
               $('#group_right').removeClass("hidden");
            $.ajax(
            {
                url: "/spin",
                type: "GET",
                data: {level:testLevel},
                dataType: 'json'
            }).done(function ( data ) 
            {
                
                console.log(data);
                
                btn.text("Play");
               
            });*/
          
        
    }
    
    
            
        
};

