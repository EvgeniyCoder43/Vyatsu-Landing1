$('.subject').mouseover(function() {
    $( this ).children().hide( "slow" );
    $( this ).find("p").show( "slow" );
  })
  .mouseout(function() {
    $( this ).children().show( "slow" );
    $( this ).find("p").hide( "slow" );
  });