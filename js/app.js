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
  
        if(App.user == null)
        {   
            //TODO : serverside code to lookup existing user, find existing credits dont start this

            App.user = new User($("#login").val(),App._newUserStartCredits);
        }

        if(App.playlog == null){App.playlog = new Playlog();}
      
        $('#btnplay').on('click', App.btn_play);
        
        $('#btnlogin').on('click', App.btn_login);
        
    },
    btn_login:function()
    {
        
        $('#sec_game').removeClass("hidden");
        
    },
    btn_play:function()
    { 
        var btn = $('#btnplay');
   
        App.user.username = $("#login").val();

        btn.prop('enabled',false);
        
        //runs a .spin() and then returns true or false
        var amtWon = App.spinner.play( App.user );
     
        var paid = App.user.username+" paid "+App.user.cost;
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

