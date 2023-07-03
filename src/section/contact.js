import createLogo from "../components/createLogo";

export default function createContact() {
  const main = document.createElement("main");
  main.setAttribute("id", "contact-us");

  const title = document.createElement("h1");
  title.className = "title";
  title.textContent = "Get In Touch";

  const addressDiv = document.createElement("div");
  const form = document.createElement("form");
  form.setAttribute("method", "post");

  addressDiv.setAttribute("id", "address");
  form.setAttribute("id", "contactForm");

  const infos = document.createElement("div");
  infos.setAttribute("id", "contact-infos");

  const addressInfos = document.createElement("div");
  addressInfos.setAttribute("id", "address-infos");
  const addressLine1 = document.createElement("p");
  const addressLine2 = document.createElement("p");
  const addressLine3 = document.createElement("p");
  addressLine1.textContent = "730 Manor Road";
  addressLine2.textContent = "WC54 2VA";
  addressLine3.textContent = "London";
  addressInfos.append(addressLine1, addressLine2, addressLine3);

  const phoneInfos = document.createElement("div");
  phoneInfos.setAttribute("id", "phone-infos");
  const phoneLine1 = document.createElement("p");
  phoneLine1.textContent = "+44 20 7946 0302";
  phoneInfos.append(phoneLine1);

  infos.append(addressInfos, phoneInfos);

  const contactUsTitle = document.createElement("h1");
  contactUsTitle.setAttribute("class", "contact-us-title");
  contactUsTitle.textContent = "Contact us";

  const nameFormField = document.createElement("div");
  const emailFormField = document.createElement("div");
  const messageFormField = document.createElement("div");
  nameFormField.className = "form-field";
  emailFormField.className = "form-field";
  messageFormField.className = "form-field";

  const submitBtnDiv = document.createElement("div");
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Send";

  const nameLabel = document.createElement("label");
  const emailLabel = document.createElement("label");
  const messageLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name";
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email";
  messageLabel.setAttribute("for", "message");
  messageLabel.textContent = "Message";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("required", "required");

  const emailInput = document.createElement("input");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("required", "required");

  const messageTextarea = document.createElement("textarea");
  messageTextarea.setAttribute("id", "message");
  messageTextarea.setAttribute("type", "textarea");
  messageTextarea.setAttribute("required", "required");

  nameFormField.append(nameLabel, nameInput);
  emailFormField.append(emailLabel, emailInput);
  messageFormField.append(messageLabel, messageTextarea);

  submitBtnDiv.setAttribute("class", "form-submit-btn");
  submitBtnDiv.append(submitBtn);

  form.append(contactUsTitle, nameFormField, emailFormField, messageFormField, submitBtnDiv);

  addressDiv.append(createLogo(), infos);
  main.append(addressDiv, form);

  return main;
}
