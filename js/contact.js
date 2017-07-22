$(document).ready(



    function()
    {

        var frm = $('#frm_contact');

        frm.submit
        (

            function(ev)
            {
                ev.preventDefault();

                $.post('contact_script.php',


                       {

                            name: $("#name").val(),
                            email: $("#email").val(),
                            message: $("#message").val()

                        },

                       function(data)
                       {
                            $("#name").val("");
                            $("#email").val("");
                            $("#message").val(data);
                            $("#modal").modal("show");

                        }


                      )
            }

        );

    }
);