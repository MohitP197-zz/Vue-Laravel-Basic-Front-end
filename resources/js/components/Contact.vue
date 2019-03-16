<template>
  <div class="container flex-center position-ref full-height">
    <div class="container contact-form">
      <div class="container contact-image">
        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact">
      </div>
      <form method="post">
        <h3>Drop a Message</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="text"
                name="txtName"
                class="form-control"
                placeholder="Your Name *"
                value
                required
              >
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtEmail"
                class="form-control"
                placeholder="Your Email *"
                value
                required
              >
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtPhone"
                class="form-control"
                placeholder="Your Phone Number *"
                value
                required
              >
            </div>
            <div class="form-group">
              <input type="submit" name="btnSubmit" class="btnContact" value="Send Message">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <textarea
                name="txtMsg"
                class="form-control"
                placeholder="Your Message *"
                style="width: 100%; height: 150px;"
                required
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

    <script>
export default {
  props: ["title", "developer"]
};
</script>
    <style scoped>
html,
body {
  background-color: #fff;
  color: #939b9f;
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  height: 100vh;
  margin: 0;
}
.title {
  font-size: 60px;
}
.subtitle {
  font-size: 20px;
}
.full-height {
  height: 100vh;
}

.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}
.position-ref {
  position: relative;
}

.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}
.content {
  text-align: center;
}
.m-b-md {
  margin-bottom: 30px;
}
body {
  background: -webkit-linear-gradient(left, #0072ff, #00c6ff);
}
.contact-form {
  background: #fff;
  margin-top: 10%;
  margin-bottom: 5%;
  width: 70%;
}
.contact-form .form-control {
  border-radius: 1rem;
}
.contact-image {
  text-align: center;
}
.contact-image img {
  border-radius: 6rem;
  width: 11%;
  margin-top: -3%;
  transform: rotate(29deg);
}
.contact-form form {
  padding: 14%;
}
.contact-form form .row {
  margin-bottom: -7%;
}
.contact-form h3 {
  margin-bottom: 8%;
  margin-top: -10%;
  text-align: center;
  color: #0062cc;
}
.contact-form .btnContact {
  width: 50%;
  border: none;
  border-radius: 1rem;
  padding: 1.5%;
  background: #dc3545;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
}
.btnContactSubmit {
  width: 50%;
  border-radius: 1rem;
  padding: 1.5%;
  color: #fff;
  background-color: #0062cc;
  border: none;
  cursor: pointer;
}
</style>