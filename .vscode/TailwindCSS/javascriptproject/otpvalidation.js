
            function VerifyOtp(){

                const otp = document.getElementById('otp').value;
                const error = document.getElementById('error'); 

                if(/^\d{6}$/.test(otp)){
                    alert("valdity is succesfully");
                    error.classList.add('hidden');
                }
    
                else{
                    error.classList.remove('hidden');
                }
                }


                function resendOtp(){
                    const resendButton = document.getElementById('resendButton');
                    const timer = document.getElementById('timer');
                    const countdown = document.getElementById('timeLeft');
                    alert('OTP has sent.....');

                    timer.classList.remove('hidden');


                    let timeLeft=30;
                    resendButton.disabled = true;

                    const Interval = setInterval(()=>{
                        timeLeft--;

                        countdown.textContent= timeLeft;


                        if(timeLeft === 0)
                        {
                            clearInterval(Interval);

                            resendButton.disable = false;

                            timer.classList.add('hidden')

                        }
                    },1000);
                }
        