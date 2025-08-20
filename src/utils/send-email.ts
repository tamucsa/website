import { FormData } from '@/app/components/contact/ContactForm';

export async function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';

    try {
        const res = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();

        if (result.success) {
            return true;
        }
        else {
            return false;
        }
        // .then((res) => res.json())
        // .then((response) => {
        //     alert(response.message);
        // })
        // .catch((error) => {
        //     alert('Error sending email: ' + error);
        // });
    } catch (error) {
        console.error('Error sending email:', error);
        return null;
    }
}