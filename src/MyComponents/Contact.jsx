import React from 'react'

export const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="shadow mt-5 p-5">
                    <div className="col-12">
                        <h3 className="text-center text-light bg-dark p-2" id="contact">Contact Us</h3>
                        <p className="text-secondary mt-3">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-4">
                            <p className="text-center"><span className="text-primary">&#9742;</span> +91 97670 84719</p>
                        </div>
                        <div className="col-sm-4">
                            <p className="text-center"><span className="text-danger"> &#x1F4E7;</span> jangid@gmail.com</p>
                        </div>
                        <div className="col-sm-4">
                            <p className="text-center"><span className="text-success"> &#x1F3E2;</span> Angira, Shahada 425409 | IND</p>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <h3 className="text-center mt-5">Follow Us On!</h3>
                    <hr />
                </div>
                <div className="row mt-4">
                    <div className="col-sm-4">
                        <p className="text-center"><a href="https://www.facebook.com/jangidabhi18/"><i class="fab fa-facebook-square text-primary"></i></a> Facebook</p>
                    </div>
                    <div className="col-sm-4">
                    <p className="text-center"><a href="http://www.instagram.com/abhishekjangid._"><i class="fab fa-instagram-square text-danger"></i></a> Instagram</p>
                    </div>
                    <div className="col-sm-4">
                    <p className="text-center"><a href="http://www.linkedin.com/in/abhishek-jangid-53292813a/"><i class="fab fa-linkedin text-info"></i></a> LinkedIn</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
