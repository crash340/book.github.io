$(document).ready(function(){
  $("select#size").change(function(){
    window.selectedsize = $(this).children("option:selected").val();

    $("#output1").text(window.selectedsize)
    if (window.selectedsize === "big"){
    window.money_size = 30
    }
    else if (window.selectedsize === "small") {
       window.money_size = 10;

    }
    else if(window.selectedsize === "medium"){
      window.money_size= 20;
    }

  });
  $("select#crust").change(function(){
    window.selectedcrust = $(this).children("option:selected").val();
    $("#output3").text(window.selectedcrust)
    if (window.selectedcrust === "crispy"){
      window.money_crust = 30
    }
    else if (window.selectedcrust === "stuff") {
      window.money_crust = 10;
    }
    else if(window.selectedcrust === "Gluten-free"){
      window.money_crust = 20;
    }

  });

  $("select#topping").change(function(){
     window.selectedtopping = $(this).children("option:selected").val();
    $("#output2").text(window.selectedtopping)
    if (window.selectedtopping === "pineapple"){
      window.money_topping = 30
    }
    else if (window.selectedtopping === "chicken") {
      window.money_topping = 10;

    }
    else if(window.selectedtopping === "cheese"){
      window.money_topping = 20;
    }



  });
  $("#action").click(function(){
    event.preventDefault();
    window.number_of_pizza = $("#no").val()

    var total = window.number_of_pizza*( window.money_crust + window.money_size + window.money_topping);
    $("#output4").text(total);
    var x =prompt("Where do you want your pizza to be delivered?")
    $("#output5").text(x);

  })
  $("#money").click(function(){
    event.preventDefault();
    $("#output4").show();
  })












});
