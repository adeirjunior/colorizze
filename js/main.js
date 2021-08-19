$(document).ready(() =>{
   
    //for randomized logo colors
    let colorsL = ['tomato', 'deeppink', 'skyblue', 'dodgerblue', 'violet', 'darkslateblue', 'green', 'crimson']
    
    function getRandomColor() {
    return colorsL[Math.floor(Math.random() * colorsL.length)];
    }
    
    $(".z-layer").css("color",getRandomColor)
    
    const card = $('#card');
    const cardWidth = $(card).width();

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
          let hex = $("#colorsS li").attr("id")
          var colorInput = $('#colorsS li').text();


          console.log(hex)
          $("#colorsS").children().click(() =>{
                $("#H td").empty();
                $("#H td").append(hex);
                document.getElementById("back").style.backgroundColor = hex;
                $("#colorF").val($("#colorsS").val() + "");
                $("#colorF").val($("#colorsS").val() + colorInput);   

            })

          searchBar.addEventListener('keyup', (e) =>{
            console.log(e.target.value);
            
          });
          


        const slider = document.querySelector('#colorsS');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
    });
    })
    
   
    //resize height
    window.addEventListener('resize', function(){
        const card = $('#card');
        const cardWidth = $(card).width()
        $(card).css({height: cardWidth+'px'})
    },true);

    })

    
   