function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Prediction: Display 'calling' and 'resolved' after 2 seconds.
// Outcome: Display 'calling' immediately and 'resolved' after 2 seconds.