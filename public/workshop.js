function addCommand(id){
    $.ajax({
        url: "/addCommand",
        method: 'post',
        dataType: 'json',
        mimeType: 'application/json',
        data: {"id": id}
      }).done(function(data) {
        alert(data);
      }).fail(function(jqXHR, textStatus){
          alert(jqXHR.responseText  );
      });
}