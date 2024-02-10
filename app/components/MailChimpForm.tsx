
function MailChimpForm() {
  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form action="https://art.us21.list-manage.com/subscribe/post?u=8e8bfbe077cafe39e62a14d2c&amp;id=c608b4cd7a&amp;f_id=00a050e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate>
          <div id="mc_embed_signup_scroll"><h2>Join our email list for event information</h2>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name </label>
              <input type="text" name="FNAME" className=" text" id="mce-FNAME" value="" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name </label>
              <input type="text" name="LNAME" className=" text" id="mce-LNAME" value="" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email Address </label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required value="" />
              <span>(required)</span>
            </div>
            <div hidden><input type="hidden" name="tags" value="2930149" /></div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
              <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
            </div>
            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
              {/* do not remove this or risk form bot signups */}
              <input type="text" name="b_8e8bfbe077cafe39e62a14d2c_c608b4cd7a" tabIndex={-1} value="" />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                <p style={{ margin: "0px auto" }}><a href="http://eepurl.com/irmV0c" title="Mailchimp - email marketing made easy and fun"><span style={{ display: "inline-block", backgroundColor: "transparent", borderRadius: "4px" }}><img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{ width: "220px", height: "40px", display: "flex", padding: "2px 0px", justifyContent: "center", alignItems: "center" }} /></span></a></p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default MailChimpForm;
