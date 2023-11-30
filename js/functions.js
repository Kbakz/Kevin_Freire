$(function(){
    
    chamadaWhatsapp();
    ativatMenu();
    rolarTela();
   //enviarForm();

    function chamadaWhatsapp(){
        setTimeout(function(){
            $('.whats').fadeIn();
            setTimeout(function(){
                $('.whats .texto-whats').slideDown();
            },500);
        }, 10000);

        $('.whats .texto-whats i').click(function(){
            $('.whats').fadeOut();
            return false;
        })
    }

    /*Rolar tela*/
    function rolarTela(){
        $('.voltar-inicio').click(function(){
            var offSetTop = $("#inicio").offset().top;
    
            $('html,body').animate({'scrollTop':offSetTop});
            return false;
        })
    
        $('nav a').click(function(){
            var href = $(this).attr('href');
            var offSetTop = $(href).offset().top;
    
            $('html,body').animate({'scrollTop':offSetTop});
            return false;
        })

        $('.btn-banner a, .entrar-contato a').click(function(){
            var offSetTop = $("#orcamento").offset().top;
    
            $('html,body').animate({'scrollTop':offSetTop});
            return false;
        })

        $('section.projetos > i').click(function(){
            var offSetTop = $("#orcamento").offset().top;
    
            $('html,body').animate({'scrollTop':offSetTop});
            return false;
        })

        $(window).scroll(function(){
            var windowOff = $(window).scrollTop();
            var header = $('header').height();
            
            if(windowOff > header){
                $('.voltar-inicio').fadeIn(200);
                $('.whats').css('bottom','90px');
            }else{
                $('.voltar-inicio').fadeOut(200);
                $('.whats').css('bottom','20px');
            }
        })
    }
    /*Abrir/fecharMenu*/
    function ativatMenu(){
        $('nav.mobile i').click(function(){
            $('nav.mobile ul').slideToggle();
            $('nav.mobile i').toggleClass('fa-bars');
            $('nav.mobile i').toggleClass('fa-times');
        })
    }

	/*Formulário*/
    $('section.contato input,section.contato textarea').focus(function(){
         $(this).parent().find('p').stop().animate({'top': -20});
         $(this).focusout(function(){
             if($(this).val() == '')
             $(this).parent().find('p').stop().animate({'top': 0});
         })
    })
     
	function enviarForm(){
        $('section.contato form').ajaxForm({
            success:function(){             
                $('.info-enviado').fadeIn();
                setTimeout(function(){
                    $('.info-enviado').fadeOut();
                },7000);
                $('section.contato form')[0].reset();
                 $('section.contato input,section.contato textarea').parent().find('p').stop().animate({'top': 0});
            }
        });
	}
	$('#phone').mask('(00) 00000-0000');
    
})