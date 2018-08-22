$(document).ready(function() {

   /* activate the carousel */
   $("#modal-carousel").carousel({interval:false});
   $('#modal-carousel').modal('handleUpdate') 

   /* change modal title when slide changes */
   $("#modal-carousel").on("slid.bs.carousel",       function () {
        $(".modal-title")
        .html($(this)
        .find(".active img")
        .attr("title"));

        $(".modal-description")
        .html($(this)
        .find(".active description"));
   });

   /* when clicking a thumbnail */
   $(".row .img-thumbnail").click(function(){
    var content = $(".carousel-inner");
    var title = $(".modal-title");
    var description = $(".modal-description");
  
    content.empty();  
    title.empty();
  
  	var id = this.id;  
     var repo = $("#img-repo .carousel-item");
     var repoCopy = repo.filter("#" + id).clone();
     var active = repoCopy.first();
  
    active.addClass("active");
    title.html(active.find("img").attr("title"));
    description.html(active.find("description"));
  	content.append(repoCopy);
    
    // show the modal
  	$("#modal-gallery").modal("show");
  });

});