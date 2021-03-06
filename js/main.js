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
            colors.push("<li id='" + key +"'>" + val + '<span class="' + "colCircle" +'" id="' + val + '" style="'+ "background-color:" + key + '"></span>' + "</li>");
            
        });
        $( "<ul/>", {
            "id": "colorsS",
            html: colors.join( "" )
          }).appendTo( "#colorW" );
          
          let colorsS = $("#colorsS")
          
          $(colorsS).click((evt) =>{
                let listItem = null;
                let hex = null;
                if (evt.target == colorsS) {
                  return;
                } else if (!(evt.target instanceof HTMLLIElement)) {
                  return;
                } else{
                  listItem = evt.target;
                  hex = listItem.id;
                }
                $("#H td").empty();
                $("#H td").append(listItem.id);
                document.getElementById("back").style.backgroundColor = hex;
                $(searchBar).val("");
                $(searchBar).val(listItem.textContent);   

            })

          $(searchBar).on('keyup', (e) =>{
            console.log(e.target.value);
            let val = e.target.value.toLowerCase();
            $("#colorsS li").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(val) > -1)
            });
          });
          


        const slider = document.querySelector("#colorsS");
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
    });
    })
    
   
    //resize height
    window.addEventListener('resize', function(){
        const card = $('#card');
        const cardWidth = $(card).width()
        $(card).css({height: cardWidth+'px'})
    },true);

    
    let hex = $("#H td");

    $(hex).click(()=>{
      let text = $(hex).html();

      var $temp = $("<input>").val(text).appendTo('body').select();
      document.execCommand("copy");
      $temp.remove();

      $("main").append("<div id='copy'>Copied!</div>")
      setTimeout(()=>{
        $("#copy").fadeOut(1000);
        setTimeout(()=>{
          $("#copy").remove();
        },1300);
      },300);
    })
    
  })

    
   