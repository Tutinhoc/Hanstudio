// Lay thong tin nguoi dung nhap vao form
function validateform(email, contact_name, message) {
  // Kiem tra rong

  if (email == "" || contact_name == "" || message == "") {
    alert("You must fill all necessary information!");
    return false;
  }

  // kiem tra format email
  const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email_regex.test(email) == false) {
    alert("Email is bad format");
    return false;
  }
  if (message.length < 15) {
    alert("Please get a longer message!");
    return false;
  }
  return true;
}

// Sử dụng API EmailJS để gửi mail thực tế sau khi submit form
function contactform() {
  // lay du lieu tu form html
  // [HTML dom]: moi tag trong html </> duoc goi la element
  // document: Lay toan bo code trong file HTML da duoc lien ket (thong qua tag script))
  // getElementById: Lay tag html thong qua thuoc tinh id (vd: <input id="a"/>)
  const email = document.getElementById("contact-email").value.trim();
  const name = document.getElementById("contact-name").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  // api materials
  const USER_ID = "u1dyajcR7gb28ISpM";
  const SERVICE_ID = "service_gh3nkny";
  const TEMPLATE_ID = "template_0yzbkyl";

  // kiem tra form
  if (validateform(email, name, message)) {
    // gui mail confirm den email trong form nhap
    // khai bao user id de su dung
    emailjs.init(USER_ID);
    // lay dữ liệu từ form => tạo thành 1 object để có thể up lên api
    const params = {
      name,
      email,
      message,
    };
    // gui email
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, params)
      .then((response) => {
        alert("Gui thanh cong!");
        document.getElementById("contact-form").reset(); // xoa du lieu trong form vua dien
      })
      .catch((error) => alert("System error: " + error));
  } else return;
}

// bat su kien cho button contact submit
document
  .getElementById("contact_submit_btn")
  .addEventListener("click", function (e) {
    e.preventDefault(); // chan luong di mac dinh
    contactform();
  });
