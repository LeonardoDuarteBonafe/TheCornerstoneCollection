window.addEventListener("DOMContentLoaded", function () {

    $('.painelcor').click(function(){

        /*const params = (new URL(document.location)).searchParams;
        const name = params.get('name');
        const surname = params.get('surname');*/
        const materialColor = $(this).attr('id');
        console.log("name: " + materialColor);
        localStorage.setItem("materialColor", materialColor);
        localStorage.setItem("materialType", "all");
        //localStorage.setItem("color", surname);
        window.location.href ="nossos-produtos.html";
    })

    $('.painelcor').mouseover(function(){
        console.log("Id: " + $(this).attr('id')); 
        $('#mainpainelcor').attr("src", "Images/Index/Panel-Color/painel-cores-fundo-"+$(this).attr('id')+".png");
    });

    $('.type-material').click(function(){
        const materialType = $(this).attr('id');
        console.log("type: " + materialType);
        localStorage.setItem("materialColor", "all");
        localStorage.setItem("materialType", materialType);
        //localStorage.setItem("color", surname);
        window.location.href ="nossos-produtos.html";
    });

    var heightLogo = $('.menu-bar').height();
    
    heightLogo = 400;
    $(window).scroll(function(){
        if($(this).scrollTop() > heightLogo) {
            console.log("maior: " + heightLogo + " || altura atual: " + $(this).scrollTop());
            
            $('.menu-bar').addClass('fixed-menu-bar');
        }
        else{
            $('.menu-bar').removeClass('fixed-menu-bar');
        }
    });
    
    var navbarHeight = $('.navbar').height();
    
    $(window).scroll(function(){
        if($(this).scrollTop() > navbarHeight) {
            $('.navbar').addClass('fixed-navbar');
        }
        else{
            $('.navbar').removeClass('fixed-navbar');
        }
    });

    function productFilter(){
        console.log("filtrando");
        var materialType = localStorage.getItem("materialType");
        var materialColor = localStorage.getItem("materialColor");

        $('.productBox').hide('0');

        $('.nossos-produtos .materials #'+materialType).addClass('activeMaterial').siblings().removeClass('activeMaterial');

        $('.nossos-produtos .colors #'+materialColor).addClass('activeColor').siblings().removeClass('activeColor');

        if(materialType == "all" || materialColor == "all"){
            if(materialType == "all"){
                $('.productBox').filter('.'+materialColor).fadeIn('1000');
            } 
            if(materialColor == "all"){
                $('.productBox').filter('.'+materialType).fadeIn('1000');
            }
        }
        else{
            $('.productBox').filter('.'+materialType).fadeIn('1000');
            $('.productBox').not('.'+materialColor).hide();
        }
        /*switch(localStorage){
            case "1": $('#marble').addClass('activeMaterial').siblings().removeClass('activeMaterial');
                //$('.itemBox').not('.all').hide('1000');
                $('.productBox').filter('.marble').show('1000');
                break;
            case "2": $('#camera').addClass('activefilter').siblings().removeClass('activefilter');
                //$('.itemBox').not('.all').hide('1000');
                $('.itemBox').filter('.camera').show('1000');
                break;
            case "3": $('#watch').addClass('activefilter').siblings().removeClass('activefilter');
                //$('.itemBox').not('.all').hide('1000');
                $('.itemBox').filter('.watch').show('1000');
                break;
            case "4": $('#shoe').addClass('activefilter').siblings().removeClass('activefilter');
                //$('.itemBox').not('.all').hide('1000');
                $('.itemBox').filter('.shoe').show('1000');
                break;
            case "5": $('#headphone').addClass('activefilter').siblings().removeClass('activefilter');
                //$('.itemBox').not('.all').hide('1000');
                $('.itemBox').filter('.headphone').show('1000');
                break;
                /*default:
                $('#allitem').addClass('activefilter').siblings().removeClass('activefilter'); 
                $('.itemBox').filter('.all').show('1000');
            break;  
    }*/
    }

    if(location.href.split('/').pop()  === "nossos-produtos.html"){
        productFilter();
    }



    $('.nossos-produtos .products div').click(function(){
        console.log($(this).attr('id'));
        var arrayString = $(this).attr('id').split("-");
        var materialType = arrayString[0];
        var materialColor = arrayString[1];
        var materialIndex = arrayString[2];
        console.log("material e: " +materialType);
        console.log("cor e: " +materialColor);
        console.log("index e: " +materialIndex);
        localStorage.setItem("materialType", materialType);
        localStorage.setItem("materialColor", materialColor);
        localStorage.setItem("materialIndex", materialIndex);
        window.location.href = "produtos.html";
    });

    //pagina de produtos com
    if(location.href.split('/').pop()  === "produtos.html"){
        console.log("pagina de produtos");

        var materialType = localStorage.getItem("materialType");
        var materialColor = localStorage.getItem("materialColor");
        var materialIndex = localStorage.getItem("materialIndex");

        console.log("type: " + materialType);
        console.log("color: " + materialColor);
        console.log("index: " + materialIndex);

        var url = "Images/Nossos-Produtos/"+materialType +"/" + materialColor +"-"+materialIndex;

        console.log("iAAAAA");

        var urlImage1 = url + "/imagem1.png";
        $.get(urlImage1)
            .done(function() { 
            console.log("imagem existe 1");
            $('.pageprodutoimagem1').children("img").attr("src", urlImage1);
        }).fail(function() { 
            console.log("image dont exist"); $('.pageprodutoimagem1').css("display", "none");
        })

        var urlImage2 = url + "/imagem2.png";
        $.get(urlImage2)
            .done(function() { 
            console.log("imagem existe 2");
           
            $('.pageprodutoimagem2').children("a").attr("href", urlImage2);
            $('.pageprodutoimagem2').children("a").children("img").attr("src", urlImage2);
        }).fail(function() { 
            console.log("image dont exist"); $('.pageprodutoimagem2').css("display", "none");
        })

        var urlImage3 = url + "/imagem3.png";
        $.get(urlImage3)
            .done(function() { 
            console.log("imagem existe 3"); 
            $('.pageprodutoimagem3').children("a").attr("href", urlImage3);
            $('.pageprodutoimagem3').children("a").children("img").attr("src", urlImage3);
        }).fail(function() { 
            console.log("image dont exist"); $('.pageprodutoimagem3').css("display", "none");
        })

        var urlImage4 = url + "/imagem4.png";
        $.get(urlImage4)
            .done(function() { 
            console.log("imagem existe 4"); 
             $('.pageprodutoimagem4').children("a").attr("href", urlImage4);
            $('.pageprodutoimagem4').children("a").children("img").attr("src", urlImage4);
        }).fail(function() { 
            console.log("image dont exist"); $('.pageprodutoimagem4').css("display", "none");
        })

        var urlImage5 = url + "/imagem5.png";
        $.get(urlImage5)
            .done(function() { 
            console.log("imagem existe 5"); 
            $('.pageprodutoimagem5').children("a").attr("href", urlImage5);
            $('.pageprodutoimagem5').children("a").children("img").attr("src", urlImage5);
        }).fail(function() { 
            console.log("image dont exist"); $('.pageprodutoimagem5').css("display", "none");
        })

        var urlVideo = url + "/video1.png";
        $.get(urlVideo)
            .done(function() { 
            console.log("imagem existe video"); $('.pageprodutovideo1').children("img").attr("src", urlVideo);
        }).fail(function() { 
            console.log("image dont exist"); $('.pageprodutovideo1').css("display", "none");
        })


        /*while(i<7){
            console.log("loop while com i:" + i);
            if(i<6){
                var urlImage = url+"/imagem"+i+".png";
                console.log("url image: " + urlImage);

                $.get(urlImage)
                    .done(function() { 
                    console.log("imagem existe com i= " + i );
                    console.log("valor existe e tem: " + i); 
                    var j = i - 1;
                    console.log("valor de j: " + j);
                    $('.pageprodutoimagem').get(j).attr("src", url+"/imagem"+i+".png");

                    i++;
                }).fail(function() { 
                    console.log("image dont exist");
                    $('.pageprodutoimagem5col').css("display", "none");
                    i++;
                })
            }
        }*/

        /*for(var i=1; i<=6; i++){
            console.log("valor de i: " + i);
            if(i < 6){
                console.log("valor de i dentro: " + i);

                var urlImage = url+"/imagem"+i+".png";
                console.log("url image: " + urlImage);
                $.get(urlImage)
                    .done(function() { 
                    console.log("imagem existe com i= " + i );
                    console.log("valor existe e tem: " + i); 
                    var j = i - 1;
                    console.log("valor de j: " + j);
                    $('.pageprodutoimagem').get(j).attr("src", url+"/imagem"+i+".png");
                }).fail(function() { 
                    console.log("image dont exist");
                    $('.pageprodutoimagem5col').css("display", "none");
                })
            }
            else{
                console.log("i chegou em 6?: " + i);
            }            
        }*/

        /*$.get(url)
            .done(function() { 
            $('.pageprodutoimagem5').attr("src", url);
        }).fail(function() { 
            console.log("image dont exist");
            $('.pageprodutoimagem5col').css("display", "none");
        })
       $('.pageprodutoimagem1').attr("src", ulr + "/imagem1.png");*/
        /*$('.pageprodutoimagem1').attr("src", "Images/Produtos/"+materialtipo +"/" + materialtipo +"-"+materialindex+"/imagem1.png");
        $('.pageprodutoimagem2').attr("src", "Images/Produtos/"+materialtipo +"/" + materialtipo +"-"+materialindex+"/imagem2.png");
        $('.pageprodutoimagem3').attr("src", "Images/Produtos/"+materialtipo +"/" + materialtipo +"-"+materialindex+"/imagem3.png");
        $('.pageprodutoimagem4').attr("src", "Images/Produtos/"+materialtipo +"/" + materialtipo +"-"+materialindex+"/imagem4.png");*/
        /*$('.pageprodutoimagem5').attr("src", "Images/Produtos/"+materialtipo +"/" + materialtipo +"-"+materialindex+"/imagem5.png");*/

        /*$.get(url)
            .done(function() { 
            $('.pageprodutoimagem5').attr("src", url);
        }).fail(function() { 
            console.log("image dont exist");
            $('.pageprodutoimagem5col').css("display", "none");
        })*/
        /*$('.pageprodutovideo1').attr("src", "Images/Produtos/"+materialtipo +"/" + materialtipo +"-"+materialindex+"/video1.png");*/

    }

    // nossos produtos filter
    $('.nossos-produtos .materials div').click(function(){
        console.log("material clicado: " + $(this).attr('data-material'));

        const materialValue = $(this).attr('data-material');

        const colorValue = $('.activeColor').attr('data-color');
        if(!(materialValue == "filter")){
            console.log("materialValue: " + materialValue);
            console.log("colorValue: " + colorValue);

            if(materialValue == 'all' || colorValue == 'all'){
                if(materialValue == 'all' && colorValue == 'all'){
                    $('.productBox').fadeIn("slow");
                }
                else{
                    if(materialValue == 'all') {
                        $('.productBox').not('.'+materialValue).hide();
                        $('.productBox').filter('.'+colorValue).fadeIn("slow");
                    }
                    else{
                        $('.productBox').not('.'+colorValue).hide();
                        $('.productBox').filter('.'+materialValue).fadeIn("slow");
                    }
                }
            }
            else{
                $('.productBox').not('.'+materialValue+'.'+colorValue).hide();
                $('.productBox').filter('.'+materialValue+'.'+colorValue).fadeIn("slow");
            }
        }
    })

    $('.nossos-produtos .materials div').click(function(){
        if(!($(this).attr('data-material') == "filter")){ 
            $(this).addClass('activeMaterial').siblings().removeClass('activeMaterial');
        }
        else{
            if($('.nossos-produtos .materials div').filter('.material-menu').is(":visible"))
            {
                console.log("Aquiii1");
                $('.nossos-produtos .materials div').filter('.material-menu').slideUp('0');
            }
            else{
                console.log("Aquii222");
                $('.nossos-produtos .materials div').filter('.material-menu').slideDown('0');
            }
        }
    })

    $('.nossos-produtos .colors div').click(function(){
        const colorValue = $(this).attr('data-color');

        const materialValue = $('.activeMaterial').attr('data-material');

        if(!(colorValue == "filter")){
            console.log("colorValue: " + colorValue);
            console.log("materialValue: " + materialValue);

            if(colorValue == 'all' || materialValue == 'all'){
                if(colorValue == 'all' && materialValue == 'all'){
                    $('.productBox').fadeIn("slow");
                }
                else{
                    if(colorValue == 'all') {
                        //$('.productBox').not('.'+colorValue).hide('1000');
                        $('.productBox').not('.'+colorValue).hide();
                        //$('.productBox').filter('.'+materialValue).show('1000');
                        console.log("aqui");
                        $('.productBox').filter('.'+materialValue).fadeIn("slow");
                    }
                    else{

                        $('.productBox').not('.'+materialValue).hide();
                        $('.productBox').filter('.'+colorValue).fadeIn("slow");
                    }
                }
            }
            else{
                $('.productBox').not('.'+colorValue+'.'+materialValue).hide();
                $('.productBox').filter('.'+colorValue+'.'+materialValue).fadeIn("slow");
            }
        }
    })

    $('.nossos-produtos .colors div').click(function(){
       
        if(!($(this).attr('data-color') == "filter")){
            $(this).addClass('activeColor').siblings().removeClass('activeColor');
        }
        else{
            if($('.nossos-produtos .colors div').filter('.color-menu').is(":visible"))
            {
                console.log("Aquiii1");
                $('.nossos-produtos .colors div').filter('.color-menu').slideUp('slow');
            }
            else{
                console.log("Aquii222");
                $('.nossos-produtos .colors div').filter('.color-menu').slideDown('slow');
            }
        }
    })

    /*$('.nossos-produtos .colors div').click(function(){
        console.log("material clicado: " + $(this).attr('data-color'));
    })*/
    /*document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;

    console.log("nome: " + name);
    console.log("surname: " + surname);
*/


    {
        //const buttonSendForm = document.querySelector('.form .btn');

        /*
    var menuBarHeight = $('#header').height();

    var buttonFortRocha = document.querySelectorAll('.fort-rocha button');
    var buttonIndustria = document.querySelectorAll('.industria button');

    buttonFortRocha.forEach(button => button.addEventListener('click', function(){
        window.location.href = "sobre-fort-rocha.html";
    }));

    buttonIndustria.forEach(button => button.addEventListener('click', function(){
        window.location.href = "industria.html";
    }));

    //if(window.location.pathname === "/fale-conosco.html"){
    if(location.href.split('/').pop()  === "fale-conosco.html"){
        console.log("entrou na pagina");
        const buttonSendForm = document.querySelector('.submitForm');

        buttonSendForm.addEventListener('click', getFormInfos);
    }


    $(window).scroll(function(){
        if($(this).scrollTop() > menuBarHeight) {
            $('#header').addClass('fixed');
        }
        else{
            $('#header').removeClass('fixed');
        }
    });

    function getFormInfos(){
        var emailMessage = "";

        var nome = document.querySelector('#nome').value;
        var email = document.querySelector('#email').value;
        var assunto = document.querySelector('#assunto').value;
        var mensagem = document.querySelector('#mensagem').value;

        emailMessage += "Nome: " + nome + ". <br>";
        emailMessage += "Email: " + email + ". <br>";
        emailMessage += "Assunto: " + assunto + ". <br>";
        emailMessage += "Mensagem: " + mensagem + ". <br>";
        console.log("Nome: " + nome);
        console.log("email: " + email);
        console.log("assunto: " + assunto);
        console.log("mensagem: " + mensagem);
        if(nome === "" || email === ""){
            console.log("Ta vazio");
            document.getElementsByName('nome')[0].placeholder='Por favor, insira seu NOME!';
            document.getElementsByName('email')[0].placeholder='Por favor, insira seu EMAIL!';
        }
        else{
            sendEmail(nome, email, emailMessage);
        }
    }

    function sendEmail(name, email, message){
        Email.send({
            Host: "smtp.gmail.com",
            Username: 'leonardoduarte1361996@gmail.com',
            Password: "pmyxeenpxplhmnpy",
            //To: 'leo_nardo136@hotmail.com',
            To: `${email}`,
            From: 'leonardoduarte1361996@gmail.com',
            Subject: `${name} tem interesse no seu produto`,
            //Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
            Body: `${message}`,
        }).then(function(message){
            /*const alertaText = document.querySelector('.alert');
            alertaText.style.display = "block";
            alert("Seu email foi enviado com sucesso");
            window.location.reload(false); 
        }); 
    } */
    }

    $('.buttonEmail').click(function(){
        console.log("mail sent");
        getFormInfos();
    });

    function getFormInfos(){
        var emailMessage = "";

        var nome = document.querySelector('#name').value;
        var email = document.querySelector('#email').value;
        var phone = document.querySelector('#phone').value;
        var message = document.querySelector('#message').value;

        emailMessage += "Name: " + name + ". <br>";
        emailMessage += "Email: " + email + ". <br>";
        emailMessage += "Phone: " + phone + ". <br>";
        emailMessage += "Message: " + message + ". <br>";
        console.log("Nome: " + name);
        console.log("email: " + email);
        console.log("assunto: " + phone);
        console.log("mensagem: " + message);
        if(nome === "" || email === ""){
            console.log("Ta vazio");
            /*var pageLanguage = localStorage.getItem("language");
            if(pageLanguage == "eng"){*/
            document.getElementsByName('name')[0].placeholder='Please insert your NAME!';
            document.getElementsByName('email')[0].placeholder='Please insert your EMAIL!';
            //}
            /*
            else{
                document.getElementsByName('nome')[0].placeholder='Por favor, insira seu NOME!';
                document.getElementsByName('email')[0].placeholder='Por favor, insira seu EMAIL!';
            }*/
        }
        else{
            sendEmail(name, email, emailMessage);
        }
    }

    function sendEmail(name, email, message){
        Email.send({
            Host: "smtp.gmail.com",
            Username: 'ldbmaildealer@gmail.com',
            Password: "jzkocqnlqfdoeuhr",
            //To: 'leo_nardo136@hotmail.com',
            To: `${email}`,
            From: 'ldbmaildealer@gmail.com',
            Subject: `${name} has interest in your product`,
            //Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
            Body: `${message}`,
        }).then(function(message){
            /*const alertaText = document.querySelector('.alert');
            alertaText.style.display = "block";*/
            /*var pageLanguage = localStorage.getItem("language");
            if(pageLanguage == "eng"){*/
            alert("Your email was sent successfully");
            /*}
            else{
                alert("Seu email foi enviado com sucesso");
            }*/
            window.location.reload(false); 
        }); 
    } 
});