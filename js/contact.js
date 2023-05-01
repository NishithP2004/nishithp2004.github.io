$("#contact-us").submit(function (e) {
    e.preventDefault();
    let form = document.getElementById("contact-us");
    let formData = new FormData(form);
    let payload = {};

    for (let key of formData.keys())
        payload[key] = formData.get(key);

    /* fetch(form.action, {
            mode: 'no-cors',
            method: form.method,
            body: JSON.stringify(payload)
        })
        .then(() => {
            let msg = document.getElementById("message");
            msg.hidden = false;

            setTimeout(() => {
                msg.hidden = true;
            }, 5000)
        }) */

    $.ajax({
        url: `https://emailer.${host}/website/contact`,
        method: form.method,
        data: payload,
        success: function (data) {
            form.reset();
            $('#form-response').html(
                `<em>Thank you! I will get in touch with you shortly :) </em>`);
            setTimeout(() => {
                $('#form-response').html(``);
            }, 10 * 1000)
        },
        error: function () {
            $('#form-response').html(`<em>There was an error</em>`);
            setTimeout(() => {
                $('#form-response').html(``);
            }, 10 * 1000)
        }
    });
    return false;
});