var $form = $('form#pledgeForm'),
    url = 'https://script.google.com/macros/s/AKfycbyUrkUBkyYSlSV2wEjK-FSUcQNIVvauKxUS8-dpM9weCSulItOP/exec'

$.fn.serializeObject = function()
{
 var o = {};
 var a = this.serializeArray();
 $.each(a, function() {
 if (o[this.name]) {
 if (!o[this.name].push) {
 o[this.name] = [o[this.name]];
 }
 o[this.name].push(this.value || "");
 } else {
 o[this.name] = this.value || "";
 }
 });
 return o;
};

$('#submit-form').on('click', function(e) {
	let pledgeForm = document.getElementsByTagName(form);
	let successfulPledge = document.querySelector('#successMessage');
  
  e.preventDefault();

 

  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  });

  pledgeForm.style.display = "none";
  successfulPledge.style.display = "block";


});

//.success( console.log('success'););