$(document).ready(() =>{
    //for randomized logo colors
    let colorsL = ['tomato', 'deeppink', 'skyblue', 'dodgerblue', 'violet', 'darkslateblue', 'green', 'crimson']
    
    function getRandomColor() {
    return colorsL[Math.floor(Math.random() * colorsL.length)];
    }
    
    const card = $('#card');
    const cardWidth = $(card).width()
    const bodyColor = document.getElementById('back')

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
          let hex = $("#colorsS").children().attr("id")
          
          console.log(hex)
          $("#colorsS li").click( async () =>{
            bodyColor.css("background-color:" + hex)
          })
        
        

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
    
   
    //resize height
    window.addEventListener('resize', function(){
        const card = $('#card');
        const cardWidth = $(card).width()
        $(card).css({height: cardWidth+'px'})
    },true);

    })
    
    
   