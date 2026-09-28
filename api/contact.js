const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }

    try {
        const { name, email, information } = req.body;

        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "sonitamom9@gmail.com",
            subject: `Portfolio Contact from ${name}`,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${information}</p>
            `
        });

        return res.status(200).json({
            success: true,
            message: "Email sent successfully",
            response
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to send email"
        });
    }
};