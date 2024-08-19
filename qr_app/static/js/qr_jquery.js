
$(document).ready(function(){
	
	function getCookie(name) {
		    let cookieValue = null;
		    if (document.cookie && document.cookie !== '') {
		        const cookies = document.cookie.split(';');
		        for (let i = 0; i < cookies.length; i++) {
		            const cookie = cookies[i].trim();
		            // Does this cookie string begin with the name we want?
		            if (cookie.substring(0, name.length + 1) === (name + '=')) {
		                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
		                break;
		            }
		        }
		    }
		    return cookieValue;
		}
	
	function uuidv4(){
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
			var r = Math.random()*16|0, v=c=='x'?r:(r & 0x3|0x8);
			return v.toString(16);
		});
	}
	
	let device =  getCookie('device');
	
	
	
	if (device == null || device == undefined)
		{device = uuidv4();}
	else{let device =  getCookie('device');}
	
	document.cookie = "device="+device+";domain=;paht=/";

	//Cookes End
	
	var cart_btn = $('.cart_btn');
	cart_btn.click(function(){
		var product_id = this.id;
		var cart_url = '/add_cart/';
		$.ajax({
		type:'GET',
		url :cart_url,
		data : {product_id:product_id,
				//csrfmiddlewaretoken:window.CSRF_TOKEN //$('input[name=csrfmiddlewaretoken]').val()
				},
		success:function(){location.reload();}
		});
	});
	
	
		var shop_now = $('.shop_now ');
		shop_now.click(function(){
		var product_id = this.id;
		var cart_url = '/add_cart/';
		$.ajax({
		type:'GET',
		url :cart_url,
		data : {product_id:product_id,
				//csrfmiddlewaretoken:window.CSRF_TOKEN //$('input[name=csrfmiddlewaretoken]').val()
				},
		success:function(){
				var redirectUrl = "/order/";
                window.location.href = redirectUrl;}
		});
	});
	
	
	var wishlist_btn = $('.wishlist_btn');
	wishlist_btn.click(function(){
		var product_id1 = $(this).attr('id');
		var cart_url1 = '/add_wishlist/';
		$.ajax({
		type:'GET',
		url :cart_url1,
		data : {product_id:product_id1,
				//csrfmiddlewaretoken:window.CSRF_TOKEN //$('input[name=csrfmiddlewaretoken]').val()
				},
		success:function(){location.reload();}
		});
	});
	
	
		var pluse= $('.pluse');
		pluse.click(function(){
			var qn = parseInt( $(this).siblings('.qn').text());
			var id1 = $(this).attr('id');
			
			var qn1 = qn+1;
			
			//$(this).siblings('.qn').text(qn1);
			var cart_url2 = '/quantity/';
			$.ajax({
				type:'GET',
				url :cart_url2,
				data : {qn1:qn1, id1:id1},
				success:function(){location.reload();}
				});
		});

		var pluse= $('.minus');
				pluse.click(function(){
					var qn = parseInt( $(this).siblings('.qn').text());
					var id1 = $(this).attr('id');
					
					if (qn>1){var qn1 = qn-1;
						var cart_url2 = '/quantity/';
							$.ajax({
								type:'GET',
								url :cart_url2,
								data : {qn1:qn1, id1:id1},
								success:function(){location.reload();}
								});
						}
					else{var qn1 = 1;
						var cart_url2 = '/quantity/';
							$.ajax({
								type:'GET',
								url :cart_url2,
								data : {qn1:qn1, id1:id1},
								success:function(){location.reload();}
								});
						}
				});
//End Quenty

		var del = $('.product_delete');
			del.click(function(){
			var id1 = $(this).attr('id');
			var cart_delete = '/delete/';
			$.ajax({
				type:'GET',
				url :cart_delete,
				data : {id1:id1},
				success:function(){location.reload();}
				});
		});	
//End Delete

//Address Input
		var name = $('.name');
		name.keyup(function(){
			var name1 = name.val();
			var name_input = '/name_input/';
			$.ajax({
				type:'GET',
				url :name_input,
				data : {name1:name1},
				});
		});
		
		var mobile = $('.mobile');
		mobile.keyup(function(){
			var mobile1 = mobile.val();
			var mobile_input = '/mobile_input/';
			$.ajax({
				type:'GET',
				url :mobile_input,
				data : {mobile1:mobile1},
				});
		});
		
		var address = $('.address');
		address.keyup(function(){
			var address1 = address.val();
			var address_input = '/address_input/';
			$.ajax({
				type:'GET',
				url :address_input,
				data : {address1:address1},
				});
		});
// Address End

// Status Change
		var status = $('.status');
		status.click(function(){
			var status1 = $(this).text();
			var oi = $(this).attr("id");
			var status_change = '/status_change/';
			$.ajax({
				type:'GET',
				url :status_change,
				data : {status1:status1, oi:oi},
				success:function(){location.reload();}
				});
		});
//Status Change End
		var dropdown = $('.dropdown');
		
		dropdown.click(function(){
			$('.dropdown_div').toggleClass('hidden');
			});
			
			var dropdown1 = $('.dropdown1');
		
		dropdown1.click(function(){
			$('.dropdown_div1').toggleClass('hidden');
			});
	
	var win_h = $(window).height();
	var header_h = $('.header_div').height();
	var content_h = $('.content_div').height();
	var footer_h = $('.footer_div').height();
	var main_div = $('.main_div');
	var all_div = header_h + content_h + footer_h +100;
	console.log(all_div);
	
	if (win_h > all_div){
		main_div.addClass('min-h-screen relative');
		$('.footer_div').addClass('absolute inset-x-4 bottom-0');
		}
	else{
		main_div.removeClass('min-h-screen relative');
		$('.footer_div').removeClass('absolute inset-x-4 bottom-0');
		}
	$('.product-slider').slick({
		  dots: true,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 1220,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 940,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 640,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	

});

$(window).resize(function(){
	
	var win_h = $(window).height();
	var header_h = $('.header_div').height();
	var content_h = $('.content_div').height();
	var footer_h = $('.footer_div').height();
	var main_div = $('.main_div');
	var all_div = header_h + content_h + footer_h +100;
	
	if (win_h > all_div){
		main_div.addClass('min-h-screen relative');
		$('.footer_div').addClass('absolute inset-x-4 bottom-0');
		}
	else{
		main_div.removeClass('min-h-screen relative');
		$('.footer_div').removeClass('absolute inset-x-4 bottom-0');
		}
		
		
		
});