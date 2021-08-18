$(document).ready(() =>{
    const card = $('#card');
    const cardWidth = $(card).width()
    const bodyColor = document.getElementById('back').style.backgroundColor

    $(card).css({height: cardWidth+'px'})

    const searchBar = document.getElementById('colorF');

   
        $.getJSON("/js/colors.json", (data) =>{
        let colors = [];
        $.each(data, (key, val) =>{
            colors.push("<li id='" + key +"'>" + val + "</li>");
            
        });
        $( "<ul/>", {
            "id": "colorsS",
            html: colors.join( "" )
          }).appendTo( "#colorW" );
        
        

          searchBar.addEventListener('keyup', (e) =>{
            console.log(e.target.value);

            $("#colorsS").empty()
            function filterColors(e) {
                return colors.filter(function(el) {
                    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
                })
              } 
              
           
        });
    })
    
    
    
    window.addEventListener('resize', function(){
        const card = $('#card');
        const cardWidth = $(card).width()
        $(card).css({height: cardWidth+'px'})
    },true);

    })
    
    
   