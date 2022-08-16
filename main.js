window.addEventListener("DOMContentLoaded", function () {

    var language = {
        pt: {
            index: {
                navbar: {
                    home: "INÍCIO",
                    company: "EMPRESA",
                    colors: "CORES",
                    materials: "MATERIAIS",
                    contact: "CONTATO",
                    download: {
                        tcc_catalog: "CATALÓGO TCC",
                        about_us: "SOBRE NÓS",
                        statement: "DECLARAÇÃO DE OBRAS",
                        agate_collection: "COLEÇÃO ÁGATA",
                        semi_precious: "COLEÇÃO SEMI PRECIOSA",
                    },
                },
                colors: {
                    beige: "BEGE & CREME",
                    black: "PRETO",
                    brown: "MARROM",
                    blue: "AZUL",
                    green: "VERDE",
                    gray: "CINZA",
                    red: "VERMELHO",
                    yellow: "AMARELO",
                    white: "BRANCO",
                },
                materials: {
                    granites: "GRANITOS",
                    marbles: "MÁRMORES",
                    quartzite: "QUARTZITO",
                    agate: "AGATHAS",
                    quartz_collection: "COLEÇÃO DE QUARTZO",
                },
                company: {
                    title: "EMPRESA",
                    text: {
                        t1: "Com sede em Vitória ES e Cachoeiro de Itapemirim, Brasil, temos mais de 20 anos de experiência combinada no mercado de pedras ornamentais.",
                        t2: "Nós aqui da Cornerstone Collection prezamos o luxo e a qualidade acima de tudo. Buscamos a excelência e o atendimento ao cliente, sempre atendendo às necessidades de abastecimento de nossos clientes.",
                        t3: "A coleção Cornerstone é diferente de qualquer outro fornecedor no mercado hoje. Temos nossas próprias pedreiras e blocos. Que nós mesmos processamos. Nossa linha regular possui as cores mais populares do mercado, mas podemos fornecer todas as cores extraídas atualmente no Brasil de acordo com as necessidades de nossos clientes.<br>O que quer que nossos clientes precisem, nós podemos fornecer.",
                        t5: "Nossa linha de materiais é uma mistura de materiais prontos para showroom de alto padrão, com algumas das cores mais procuradas do mercado hoje.",
                        t6: "Acreditamos que todo projeto precisa de sua base ideal. <br>Deixe-nos ser sua base.",
                    },
                    product_list: {
                        title: "Somos especializados nos seguintes serviços:",
                        list: {
                            li0: "Fornecedor de grande projeto",
                            li1: "Pedreiras Próprias",
                            li2: "Bloco de Vendas",
                            li3: "2cm e 3cm",
                            li4: "Super exóticos de alta qualidade e materiais raros",
                            li5: "As cores mais populares do mercado",
                            li6: "Materiais clássicos",
                            li7: "Mármores de alta qualidade",
                            li8: "Azulejos e pré-fabricados",
                            li9: "Pedras de paisagem",
                            li10: "Programas recorrentes - confiáveis e consistentes",
                        },
                    },
                },
                the_cornerstone_quartz_collection: {
                    title: "A COLEÇÃO DE QUARTZO DA CORNERSTONE",
                    quartz_collection: "COLEÇÃO DE QUARTZO",
                },
                inspirations: "INSPIRAÇÕES",
                contact: {
                    title: "CONTATO",
                    form: {
                        title: "ENTRE EM CONTATO",
                        name: "Seu Nome*",
                        email: "Seu Email*",
                        phone: "Seu Telefone",
                        message: "Sua Mensagem",
                        send: "ENVIAR",
                    },
                    info: {
                        address: "ENDEREÇO",
                        phone: "TELEFONE",
                    },
                },
                footer: {
                    info: "Com sede em Vitória ES e Cachoeiro de Itapemirim, Brasil, temos mais de 20 anos de experiência combinada no mercado de pedras ornamentais.<br>Nós aqui da Cornerstone Collection prezamos o luxo e a qualidade acima de tudo. Buscamos a excelência e o atendimento ao cliente, sempre atendendo às necessidades de abastecimento de nossos clientes.",
                    our_products: "NOSSOS PRODUTOS",
                    granite: "GRANITO",
                    marble: "MÁRMORE",
                    quartzite: "QUARTZITO",
                    agate: "AGATHAS",
                    quartz_collection: "COLEÇÃO DE QUARTZO",
                },
            },
            our_products: {
                title: "NOSSOS PRODUTOS",
                all_materials: "TODOS MATERAIS",
                select_material: "SELECIONAR MATERIAL",
                granite: "GRANITO",
                marble: "MÁRMORE",
                quartzite: "QUARTZITO",
                agate: "AGATHA",
                quartz_collection: "COLEÇÃO DE QUARTZO",
                all_colors: "TODAS CORES",
                select_color: "SELECIONAR COR",
            },
            products: {
                title: "PRODUTOS", 
            },
        },
    };

    var pageLanguage = localStorage.getItem("language");
    if(pageLanguage == "pt"){

        //menu-bar
        $('.menu-bar').children("div").eq(1).children("div").eq(0).children("a").text(language.pt.index.navbar.home);
        $('.menu-bar').children("div").eq(1).children("div").eq(1).children("a").text(language.pt.index.navbar.company);
        $('.menu-bar').children("div").eq(1).children("div").eq(2).children("button").text(language.pt.index.navbar.colors);
        $('.menu-bar').children("div").eq(1).children("div").eq(3).children("button").text(language.pt.index.navbar.materials);
        $('.menu-bar').children("div").eq(1).children("div").eq(4).children("a").text(language.pt.index.navbar.contact);

        //navbar
        $('.navbar-collapse ul').children("li").eq(0).children("a").text(language.pt.index.navbar.home);
        $('.navbar-collapse ul').children("li").eq(1).children("a").text(language.pt.index.navbar.company);
        $('.navbar-collapse ul').children("li").eq(2).children("a").text(language.pt.index.navbar.colors);
        $('.navbar-collapse ul').children("li").eq(3).children("a").text(language.pt.index.navbar.materials);
        $('.navbar-collapse ul').children("li").eq(4).children("a").text(language.pt.index.navbar.contact);

        //colors
        /*$('.colors-selector .row').children("div").eq(0).children("p").text("BEGE");*/
        $('.colors-selector .row').each(function(){
            $(this).children("div").eq(0).children("p").text(language.pt.index.colors.beige);
            $(this).children("div").eq(1).children("p").text(language.pt.index.colors.black);
            $(this).children("div").eq(2).children("p").text(language.pt.index.colors.brown);
            $(this).children("div").eq(3).children("p").text(language.pt.index.colors.blue);
            $(this).children("div").eq(4).children("p").text(language.pt.index.colors.green);
            $(this).children("div").eq(5).children("p").text(language.pt.index.colors.gray);
            $(this).children("div").eq(6).children("p").text(language.pt.index.colors.red);
            $(this).children("div").eq(7).children("p").text(language.pt.index.colors.yellow);
            $(this).children("div").eq(8).children("p").text(language.pt.index.colors.white);
        })

        //materials
        $('.materials .row').each(function(){
            $(this).children("div").eq(0).children("h5").text(language.pt.index.materials.granites);
            $(this).children("div").eq(1).children("h5").text(language.pt.index.materials.marbles);
            $(this).children("div").eq(2).children("h5").text(language.pt.index.materials.quartzite);
            $(this).children("div").eq(3).children("h5").text(language.pt.index.materials.agate);
            $(this).children("div").eq(4).children("h5").text(language.pt.index.materials.quartz_collection);
        })

        $('.materials .row #video').children("h5").text("VIDEOS");

        //pdf
        $('.pdf').each(function(){
            $(this).children("div").eq(0).children("a").text(language.pt.index.navbar.download.tcc_catalog);
            $(this).children("div").eq(1).children("a").text(language.pt.index.navbar.download.about_us);
            $(this).children("div").eq(2).children("a").text(language.pt.index.navbar.download.statement);
            $(this).children("div").eq(3).children("a").text(language.pt.index.navbar.download.agate_collection);
            $(this).children("div").eq(4).children("a").text(language.pt.index.navbar.download.semi_precious);
        });

        //index content
        $('.company .title').children("h5").text(language.pt.index.company.title);
        $('.company .information').children("div").eq(1).children("div").eq(1).children("p").eq(0).text(language.pt.index.company.text.t1);
        $('.company .information').children("div").eq(1).children("div").eq(1).children("p").eq(1).text(language.pt.index.company.text.t2); 
        $('.company').children("div").eq(1).children("p").eq(0).html(language.pt.index.company.text.t3);

        //product-list
        $('.product-list').children("div").eq(1).children("h6").text(language.pt.index.company.product_list.title);
        $('.product-list').children("div").eq(1).children("ul").children("li").eq(0).text(language.pt.index.company.product_list.list.li0);
        $('.product-list').children("div").eq(1).children("ul").children("li").eq(1).text(language.pt.index.company.product_list.list.li1);
        $('.product-list').children("div").eq(1).children("ul").children("li").eq(2).text(language.pt.index.company.product_list.list.li2);
        $('.product-list').children("div").eq(1).children("ul").children("li").eq(3).text(language.pt.index.company.product_list.list.li3);
        $('.product-list').children("div").eq(1).children("ul").children("li").eq(4).text(language.pt.index.company.product_list.list.li4);
        $('.product-list').children("div").eq(1).children("ul").children("li").eq(5).text(language.pt.index.company.product_list.list.li5);
        $('.product-list').children("div").eq(1).children("ul").children("li").eq(6).text(language.pt.index.company.product_list.list.li6);
        $('.product-list').children("div").eq(1).children("ul").children("li").eq(7).text(language.pt.index.company.product_list.list.li7);
        $('.product-list').children("div").eq(1).children("ul").children("li").eq(8).text(language.pt.index.company.product_list.list.li8);
        $('.product-list').children("div").eq(1).children("ul").children("li").eq(9).text(language.pt.index.company.product_list.list.li9);
        $('.product-list').children("div").eq(1).children("ul").children("li").eq(10).text(language.pt.index.company.product_list.list.li10);

        $('.company').children("div").eq(3).children("p").eq(0).html(language.pt.index.company.text.t5);
        $('.company').children("div").eq(4).children("p").eq(0).html(language.pt.index.company.text.t6);

        //colors
        $('.colors .title h5').text(language.pt.index.navbar.colors);

        //materials
        $('.materials .title h5').text(language.pt.index.navbar.materials);

        //quartz collection
        $('.quartzcollection .title').children("h5").text(language.pt.index.the_cornerstone_quartz_collection.title);
        $('.quartzcollection .type-material').children("h5").text(language.pt.index.the_cornerstone_quartz_collection.quartz_collection);

        //inspirations
        $('.inspirations .title h5').text(language.pt.index.inspirations);

        //contact
        $('.contato .title h5').text(language.pt.index.contact.title);
        //form
        $('.contato .formulario .info .row').children("div").eq(0).children("h2").text(language.pt.index.contact.form.title);
        $('.contato .formulario .info .row').children("div").eq(1).children("input").attr("placeholder", language.pt.index.contact.form.name);
        $('.contato .formulario .info .row').children("div").eq(2).children("input").attr("placeholder", language.pt.index.contact.form.email);
        $('.contato .formulario .info .row').children("div").eq(3).children("input").attr("placeholder", language.pt.index.contact.form.phone);
        $('.contato .formulario .info .row').children("div").eq(4).children("textarea").attr("placeholder", language.pt.index.contact.form.message);
        $('.contato .formulario .info .row').children("button").text(language.pt.index.contact.form.send);
        //info
        $('.contato .formulario .info .contact').children("h5").eq(0).text(language.pt.index.contact.info.address);
        $('.contato .formulario .info .contact').children("h5").eq(2).text(language.pt.index.contact.info.phone);

        //footer
        $('.footer').children("div").eq(1).html(language.pt.index.footer.info);
        $('.footer').children("div").eq(2).children("p").text(language.pt.index.footer.our_products);
        $('.footer').children("div").eq(2).children("ul").children("li").eq(0).text(language.pt.index.footer.granite);
        $('.footer').children("div").eq(2).children("ul").children("li").eq(1).text(language.pt.index.footer.marble);
        $('.footer').children("div").eq(2).children("ul").children("li").eq(2).text(language.pt.index.footer.quartzite);
        $('.footer').children("div").eq(2).children("ul").children("li").eq(3).text(language.pt.index.footer.agate);
        $('.footer').children("div").eq(2).children("ul").children("li").eq(4).text(language.pt.index.footer.quartz_collection);

        //nossos-produtos 
        $('.nossos-produtos').children("div").eq(0).children("div").children("h1").text(language.pt.our_products.title);

        //filter
        //materials
        $('.nossos-produtos').children("div").eq(1).children("div").eq(0).children("div").eq(0).children("div").eq(1).children("p").text(language.pt.our_products.all_materials);
        $('.nossos-produtos').children("div").eq(1).children("div").eq(0).children("div").eq(0).children("div").eq(2).children("p").text(language.pt.our_products.select_material);
        $('.nossos-produtos').children("div").eq(1).children("div").eq(0).children("div").eq(0).children("div").eq(3).text(language.pt.our_products.granite);
        $('.nossos-produtos').children("div").eq(1).children("div").eq(0).children("div").eq(0).children("div").eq(4).text(language.pt.our_products.marble);
        $('.nossos-produtos').children("div").eq(1).children("div").eq(0).children("div").eq(0).children("div").eq(5).text(language.pt.our_products.quartzite);
        $('.nossos-produtos').children("div").eq(1).children("div").eq(0).children("div").eq(0).children("div").eq(6).text(language.pt.our_products.agate);
        $('.nossos-produtos').children("div").eq(1).children("div").eq(0).children("div").eq(0).children("div").eq(7).text(language.pt.our_products.quartz_collection);

        //colors
        $('.nossos-produtos').children("div").eq(1).children("div").eq(0).children("div").eq(1).children("div").eq(0).text(language.pt.our_products.all_colors);
        $('.nossos-produtos').children("div").eq(1).children("div").eq(0).children("div").eq(1).children("div").eq(1).text(language.pt.our_products.select_color);

        //produtos
        $('.page-product .menu').children("h1").text(language.pt.products.title);
    }
    
    AOS.init();
    
    $('.whatsapp-logo').click(function(){
       window.open('https://api.whatsapp.com/send?phone=5528999877349&text=Ol%C3%A1%2C+tenho+interesse+no+seu+produto!', '_blank');
    });
    
    $('.painelcor').click(function(){
       materialColor = $(this).attr('id');
        localStorage.setItem("materialColor", materialColor);
        localStorage.setItem("materialType", "all");
        window.location.href ="nossos-produtos.php";
    })

    $('.painelcor').mouseover(function(){
        $('#mainpainelcor').attr("src", "Images/Index/Panel-Color/painel-cores-fundo-"+$(this).attr('id')+".webp");
    });

    $('.type-material').click(function(){
        const materialType = $(this).attr('id');
        localStorage.setItem("materialColor", "all");
        localStorage.setItem("materialType", materialType);
        window.location.href ="nossos-produtos.php";
    });

    $('#video').click(function(){
        window.location.href ="video.php";
    });

    $('.language').click(function(){
        localStorage.setItem("language", $(this).attr('id'));

        setTimeout(function () {
            location.reload(true);
        }, 150)
    });

    var heightLogo = $('.menu-bar').height();

    heightLogo = 400;
    $(window).scroll(function(){
        if($(this).scrollTop() > heightLogo) {
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
        var materialType = localStorage.getItem("materialType");
        var materialColor = localStorage.getItem("materialColor");

        $('.productBox').hide('0');

        $('.nossos-produtos .materials #'+materialType).addClass('activeMaterial').siblings().removeClass('activeMaterial');

        $('.nossos-produtos .colors #'+materialColor).addClass('activeColor').siblings().removeClass('activeColor');

        if(materialType == "all" || materialColor == "all"){
            if(materialType == "all"){
                if($('.nossos-produtos .materials div').filter('.material-menu').is(":visible"))
                {
                    $('.nossos-produtos .materials div').filter('.material-menu').slideUp('0');
                }
                $('.productBox').filter('.'+materialColor).fadeIn('1000');
            } 
            if(materialColor == "all"){
                if($('.nossos-produtos .colors div').filter('.color-menu').is(":visible"))
                {
                    $('.nossos-produtos .colors div').filter('.color-menu').slideUp('slow');
                }
                $('.productBox').filter('.'+materialType).fadeIn('1000');
            }
        }
        else{
            $('.productBox').filter('.'+materialType).fadeIn('1000');
            $('.productBox').not('.'+materialColor).hide();
        }
    }

    if(location.href.split('/').pop()  === "nossos-produtos.php"){
        productFilter();
    }



    $('.nossos-produtos .products div').click(function(){
        var materialName = $(this).attr('id');
        var materialType = $(this).attr('data-material');
        localStorage.setItem("materialType", materialType);
        localStorage.setItem("materialName", materialName);
        window.location.href = "produtos.php";
    });

    if(location.href.split('/').pop()  === "produtos.php"){

        var materialType = localStorage.getItem("materialType");
        var materialName = localStorage.getItem("materialName");
        var url = "Images/Nossos-Produtos/"+materialType +"/" + materialName;
        var urlImage1 = url + "/" + materialName + ".webp";
        $.get(urlImage1)
            .done(function() { 
            $('.pageprodutoimagem1').children("img").attr("src", urlImage1);

            //chapa
            $('.pageprodutoimagem2').children("a").attr("href", urlImage1);
            $('.pageprodutoimagem2').children("a").attr("data-lightbox", "myGallery");

            $('.pageprodutoimagem2').children("a").attr("data-title", "Chapa");
            $('.pageprodutoimagem2').children("a").children("img").attr("src", urlImage1);
        }).fail(function() { 
            //chapa
            $('.pageprodutoimagem2').css("display", "none");
        })

        var urlImage3 = url + "/close.webp";
        $.get(urlImage3)
            .done(function() { 
            $('.pageprodutoimagem3').children("a").attr("href", urlImage3);

            $('.pageprodutoimagem3').children("a").attr("data-lightbox", "myGallery");

            $('.pageprodutoimagem3').children("a").attr("data-title", "Close");
            $('.pageprodutoimagem3').children("a").children("img").attr("src", urlImage3);
        }).fail(function() { 
            $('.pageprodutoimagem3').css("display", "none");
        })

        var urlImage4 = url + "/paginado.webp";
        $.get(urlImage4)
            .done(function() { 
            $('.pageprodutoimagem4').children("a").attr("href", urlImage4);

            $('.pageprodutoimagem4').children("a").attr("data-lightbox", "myGallery");

            $('.pageprodutoimagem4').children("a").attr("data-title", "Paginado");
            $('.pageprodutoimagem4').children("a").children("img").attr("src", urlImage4);
        }).fail(function() { 
            urlImage4 = url + "/luz_negra.webp";
            $.get(urlImage4)
                .done(function() { 
                $('.pageprodutoimagem4').children("a").attr("href", urlImage4);

                $('.pageprodutoimagem4').children("a").attr("data-lightbox", "myGallery");

                $('.pageprodutoimagem4').children("a").attr("data-title", "Luz Negra");
                $('.pageprodutoimagem4').children("a").children("img").attr("src", urlImage4);
            }).fail(function() { 
                $('.pageprodutoimagem4').css("display", "none");
            })
        })

        var urlImage5 = url + "/ambiente.webp";
        $.get(urlImage5)
            .done(function() { 
            $('.pageprodutoimagem5').children("a").attr("href", urlImage5);

            $('.pageprodutoimagem5').children("a").attr("data-lightbox", "myGallery");

            $('.pageprodutoimagem5').children("a").attr("data-title", "Ambiente");
            $('.pageprodutoimagem5').children("a").children("img").attr("src", urlImage5);
        }).fail(function() {  
            $('.pageprodutoimagem5').css("display", "none");
        })

        var urlImageVideo = url + "/video.webp";
        var urlVideo = url + "/video.mp4";
        $.get(urlImageVideo)
            .done(function() { 
            $('.pageprodutovideo').children("img").attr("src", urlImageVideo);

            $('.page-product .video').children("video").attr("src", urlVideo);
        }).fail(function() { 
            $('.pageprodutovideo').css("display", "none");
        })
    }

    $('.pageprodutovideo').click(function(){ 
        $('.video').addClass('active');
    });

    $('.playvideo').click(function(){
        var urlVideo = "Images/Nossos-Produtos/quartzcollection/" + $(this).attr('id') + "/" + "video.mp4";
        $('.video-page .video').children("video").attr("src", urlVideo);
        $('.video-page .video').addClass('active'); 
    });

    $('.video .close').click(function(){
        var video = document.querySelector('.mainvideo');
        video.pause();
        video.currentTime = 0;
        $('.video').removeClass('active');
    });

    // nossos produtos filter
    $('.nossos-produtos .materials div').click(function(){
        const materialValue = $(this).attr('data-material');
        const colorValue = $('.activeColor').attr('data-color');
        if(!(materialValue == "filter")){
            if(materialValue == 'all' || colorValue == 'all'){

                if($('.nossos-produtos .materials div').filter('.material-menu').is(":visible") && materialValue == "all")
                {
                    $('.nossos-produtos .materials div').filter('.material-menu').slideUp('0');
                }

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
                $('.nossos-produtos .materials div').filter('.material-menu').slideUp('0');
            }
            else{
                $('.nossos-produtos .materials div').filter('.material-menu').slideDown('0');
            }
        }
    })

    $('.nossos-produtos .colors div').click(function(){
        const colorValue = $(this).attr('data-color');

        const materialValue = $('.activeMaterial').attr('data-material');

        if(!(colorValue == "filter")){
            if(colorValue == 'all' || materialValue == 'all'){
                if($('.nossos-produtos .colors div').filter('.color-menu').is(":visible") && colorValue == "all")
                {
                    $('.nossos-produtos .colors div').filter('.color-menu').slideUp('slow');
                }

                if(colorValue == 'all' && materialValue == 'all'){
                    $('.productBox').fadeIn("slow");
                }
                else{
                    if(colorValue == 'all') {
                        $('.productBox').not('.'+colorValue).hide();
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
                $('.nossos-produtos .colors div').filter('.color-menu').slideUp('slow');
            }
            else{
                $('.nossos-produtos .colors div').filter('.color-menu').slideDown('slow');
            }
        }
    })

    $('.buttonEmail').click(function(){
        getFormInfos();
    });

    function getFormInfos(){
        var emailMessage = "";

        var name = document.querySelector('#name').value;
        var email = document.querySelector('#email').value;
        var phone = document.querySelector('#phone').value;
        var message = document.querySelector('#message').value;

        emailMessage += "Name: " + name + ". <br>";
        emailMessage += "Email: " + email + ". <br>";
        emailMessage += "Phone: " + phone + ". <br>";
        emailMessage += "Message: " + message + ". <br>";
        if(name === "" || email === ""){
            document.getElementsByName('name')[0].placeholder='Please insert your NAME!';
            document.getElementsByName('email')[0].placeholder='Please insert your EMAIL!';
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
            To: `sales@thecornerstonecollection.com`,
            From: 'ldbmaildealer@gmail.com',
            Subject: `${name} AA has interest in your product`,
            Body: `${message}`,
        }).then(function(message){
            var pageLanguage = localStorage.getItem("language");
            if(pageLanguage == "eng"){
                alert("Your email was sent successfully");
            }
            else{
                alert("Seu email foi enviado com sucesso");
            }
            window.location.reload(false); 
        }); 
    } 
});