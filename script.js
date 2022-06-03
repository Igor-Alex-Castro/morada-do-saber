
window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };
formbutton("create", {
    action: "https://formspree.io/f/xqkwoyzq",
    title: "Bem-vindo!",
    description: "Entraremos em contato com você o mais breve possível.",
    buttonImg: "<i class='fas fa-at' style='font-size:24px; color: #5434af'/>",
    fields: [{
        name: "Nome",
        type: "text",
        label: "Seu nome",
        required: true,
    },
    {
        name: "email",
        type: "email",
        label: "Seu Email",
        required: true
    },
    {
        name: "Telefone",
        type: "text",
        label: "Telefone",
        required: true
    },
    {
        name: "Mensagem",
        type: "textarea"
    },
    {
        type: "submit",
        value: "Enviar"
    }],
    styles: {
        fontFamily: '"Lato", sans-serif',
        button: {
            background: "#fff",

        },
        title: {

            background: "#5434af",
        },
        description: {
            background: "#5434af",
        }

    },

});