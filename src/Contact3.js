import React, { Component } from 'react';

class Contact2 extends Component {
  
    render() {
        return (
            <div>
  <header className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
         
        </div>
      </div>
    </div>
  </header>
  {/* begin contact */}
  <section className="page-section" id="contact">
    <div className="container">
      {/* Contact Section Heading*/}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Add song</h2>
      {/* Icon Divider*/}
      <div className="divider-custom">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
        <div className="divider-custom-line" />
      </div>
      {/* Contact Section Form*/}
      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
          <form id="contactForm" name="sentMessage" noValidate="novalidate">
            
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Link youtube</label>
                <input className="form-control" id="email" type="email" placeholder="Please enter your link song youtube" required="required" data-validation-required-message="Please enter your email address." />
                <p className="help-block text-danger" />
              </div>
            </div>
            
            
            <a  href="/home/id=17" className="btn btn-primary btn-xl rounded-pill mt-5" onClick={()=>{ alert('Add song success'); }}>Add</a>

            <br />
            
            
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

        );
    }
}

export default Contact2;