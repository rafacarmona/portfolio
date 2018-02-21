/* Portfolio. Rafael Carmona Arrabal @09/02/2018 */
{
	let botonBajar, botonInicio, botonWhoiam, botonJobs, botonSkills, botonCotact, botonMenuMovil;

	function scrollButton($element){
		$("html, body").animate({
        	scrollTop: $element.offset().top
   		}, 700);
	}
	function mostrarMenu(){
		$("#menu").slideToggle( "blind" );
	}

	let init = function(){
		botonBajar = $("#botonBajar");
		botonMenuMovil = $("#abrirMovil");
		botonInicio = $("#inicioButton");
		botonWhoiam = $("#whoiamButton");
		botonJobs = $("#jobsButton");
		botonSkills = $("#skillsButton");
		botonCotact = $("#contactButton");
		botonBajar.on({click: function(){
				scrollButton($("#whoiam"));
			}
		});
		botonInicio.on({click: function(){
				scrollButton($("#home"));
			}
		});
		botonWhoiam.on({click: function(){
				scrollButton($("#whoiam"));
			}
		});
		botonJobs.on({click: function(){
				scrollButton($("#jobs"));
			}
		});
		botonSkills.on({click: function(){
				scrollButton($("#skills"));
			}
		});
		botonCotact.on({click: function(){
				scrollButton($("#contact"));
			}
		});

		botonMenuMovil.on("click", mostrarMenu);
	}
	$(init);
}