import React from "react";
import Swal from "sweetalert2";

export function Alert({children,props,type}){
    console.log(type)

    if(type=="proceed"){
        return Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
        });
    }
    else if(type=="error"){
        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
    else if(type=="success"){
        return Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
    }
    else if(type=="confirm"){
        return Swal.fire({
            title: props?.text,
            icon:"question",
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: "Save",
            // denyButtonText: `Don't save`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire({icon:"success",text:props?.success});
            } else if (result.isDenied) {
              Swal.fire({icon:"warning",text:props?.denied});
            }

            return result;
        });
    }
}