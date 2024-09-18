import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: 'd10c6b6c6208daff6c1a1544eee56b4b-us21',
  server: 'us21',
});

export async function POST(request) {
    const {email} = await request.json();
    console.log('Email', email);
    if (!email) new Response(JSON.stringify({error: "Email is required"}));

    try {

      try {
        const memberStatus = await mailchimp.lists.getListMember('7b34cddaa3', email);
        if (memberStatus.status === 'subscribed') {
            return new Response(JSON.stringify({message: "You are already subscribed."}));
        }
    } catch (error) {
        // If error is because email is not found, continue to subscribe
        // Otherwise, return an error response
        if (error.status !== 404) {
            return new Response(JSON.stringify({error: "An error occurred."}));
        }
    }

      const res = await mailchimp.lists.addListMember('7b34cddaa3', {
        email_address: email, status: "subscribed"
      })
      return new Response(JSON.stringify({message: "Subscription successful"}));
    } catch (error) {
      return new Response(JSON.stringify({error: JSON.parse(error.response.text)}));
    }
}