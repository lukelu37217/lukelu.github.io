      function submitCheck(e) {
        console.log("check");
        const doms = {
          name: document.querySelector("#name"),
          tel: document.querySelector("#tel"),
          email: document.querySelector("#email"),
          review: document.querySelector("#review"),
          errMsgs: document.querySelectorAll(".errmsg"),
          form:document.querySelector("#form_idf")
        };
        if (
          !doms.name.value ||
          doms.name.value == "" ||
          doms.name.value.trim() == ""
        ) {
          doms.errMsgs[0].style.visibility = "visible";
          return false;
        } else {
          doms.errMsgs[0].style.visibility = "hidden";
        }
        if(!doms.tel.value || doms.tel.value == "" || doms.tel.value.trim() ==""){
          doms.errMsgs[1].innerHTML = "Please enter your phone number";
          doms.errMsgs[1].style.visibility = "visible";
          return false
        }else{
          doms.errMsgs[1].style.visibility = "hidden";
        }
        console.log(doms.email.value);
        
        if(!doms.email.value || doms.email.value == "" || doms.email.value.trim() ==""){
          doms.errMsgs[2].innerHTML = "Please enter email";
          doms.errMsgs[2].style.visibility = "visible";
          return false
        }else{
          doms.errMsgs[2].style.visibility = "hidden";
        }
        if (doms.tel.value && doms.tel.value.length !== 10) {
          doms.errMsgs[1].style.visibility = "visible";
          return false;
        } else {
          doms.errMsgs[1].style.visibility = "hidden";
        }
        const reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/

        if (doms.email.value && !reg.test(doms.email.value)) {
          doms.errMsgs[2].style.visibility = "visible";
          return false;
        } else {
          doms.errMsgs[2].style.visibility = "hidden";
          
        }
        // console.log("succes");
        doms.form.submit()
      }