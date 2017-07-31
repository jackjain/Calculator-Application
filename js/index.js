var error=0;
var prev_entry="";
var current="";
var ans="";
var value="";
var reset=0;
var first=0;
var current_ans=0;
$(document).ready(function(){
  $(".key, .key_spec").click(function(){
     if(reset==1){
      // $("#screen").html("0");
      $("#current_calc").html(ans);
    }
    value=$("#screen").text().trim();
    // alert(value);
    var entry=$(this).val();
    var history=$("#current_calc").text().trim();
   
    if(value.length<14){
          $("#error").html("");
          $("#error").attr("hidden",true);
        if(value=="0" || value==current_ans)
         {
           $("#screen").html("");
           if(prev_entry!=="ce" && error!==1  && history=="0")
             {           
               $("#current_calc").html("");
               ans="";
             }
         }
        if(entry=="=")
           {
             var temp=(((eval(ans)).toFixed(14))*1).toString();
            $("#screen").html(temp);
            $("#calc_screen").html(temp);
            ans=temp; 
            error=0;
            prev_entry=entry;
           }
      else{
        $("#screen").append(entry);          
        $("#current_calc").append(entry);
          ans+=entry;
        reset=1;
        prev_entry=entry;
        current=entry;
          error=0;
      }
        }
        else{
          $("#error").html("Digit limit reached.");
          $("#error").attr("hidden",false);
          error=1;
        }
    
    
  });
  $(".fn_key").click(function(){
    var entry=$(this).val();
        if(reset==1){
      $("#screen").html("0");
      $("#current_calc").html(ans);
    }
    if(prev_entry =="+" || prev_entry == "-" || prev_entry == "/" || prev_entry=="*")
      {
         ans=ans.substring(0,ans.length-1);
         ans+=entry;
                $("#current_calc").html(ans);
      }
    else{
            try{
            current_ans=eval(ans);
              // alert(temp);
            }
            catch(e)
            {
              $("#screen").html("0");
              $("#calc_screen").html("0");
              ans
              alert("Math Error!!");
            }
            ans+=entry;
            $("#current_calc").append(entry);
        error=0;
        prev_entry=entry;
        $("#screen").html(current_ans);
    }
  });
  
  $(".imp_key").click(function(){
        var value=$("#screen").text();
        var entry=$(this).val();
        if(entry=="ac")
         {
           
           $("#screen").html("0");
           $("#current_calc").html("0");
           ans="";
           reset=0;
           error=0;
         }
        else{
         $("#screen").html("0");
        }
        prev_entry=entry;
  });
        
});
