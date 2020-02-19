import React, { Component } from 'react';
import styles from './App.module.css';
import {Animated} from "react-animated-css";
import ReactTimeout from 'react-timeout';

// these are all of the blank templates that get brought in
import EE_SS_2Col from './Assets/EmailTemplates/EE_SS_2Col';
import EE_SS_2Col_PCA from './Assets/EmailTemplates/EE_SS_2Col_PCA';
// import EE_SS_GF from './Assets/EmailTemplates/EE_SS_GF';
import EE_SS_GI_AE_Annc from './Assets/EmailTemplates/EE_SS_GI_AE_Annc';
// import EE_SS_GI_NAE_Annc from './Assets/EmailTemplates/EE_SS_GI_NAE_Annc';
// import EE_SS_GI_NAE from './Assets/EmailTemplates/EE_SS_GI_NAE';
import EE_SS_RO from './Assets/EmailTemplates/EE_SS_RO';
import EE_SS_KS_RO from './Assets/EmailTemplates/EE_SS_KS_RO';

import InputGeneric from './components/InputGeneric/InputGeneric';
import EESSRO_Body_Preview from './components/EESSRO_Body_Preview/EESSRO_Body_Preview';
import EESSGIAE_Body_Preview from './components/EESSGIAE_Body_Preview/EESSGIAE_Body_Preview';
// import EESSGIAEAnnc_ImageAnncPreview from './components/EESSGIAEAnnc_ImageAnncPreview/EESSGIAEAnnc_ImageAnncPreview';
import EESSRO_ImageHeroPreview from './components/EESSRO_ImageHeroPreview/EESSRO_ImageHeroPreview';
import EESSKSRO_ImageHeroPreview from './components/EESSKSRO_ImageHeroPreview/EESSKSRO_ImageHeroPreview';
import EESSRO_ImagePanelPreview from './components/EESSRO_ImagePanelPreview/EESSRO_ImagePanelPreview';
import EESSKSRO_ImagePanelPreview from './components/EESSKSRO_ImagePanelPreview/EESSKSRO_ImagePanelPreview';
import Image2Col1Preview from './components/image2Col1Preview/image2Col1Preview';
import Image2Col2Preview from './components/image2Col2Preview/image2Col2Preview';
import ImageEESSGIAECol1Preview from './components/imageEESSGIAECol1Preview/imageEESSGIAECol1Preview';
import ImageEESSGIAECol2Preview from './components/imageEESSGIAECol2Preview/imageEESSGIAECol2Preview';
import download from 'downloadjs';
import EESSGIAEAnnc_ImageAnncPreview from './components/EESSGIAEAnnc_ImageAnncPreview/EESSGIAEAnnc_ImageAnncPreview';

class App extends Component {
  state = {
    // these are actual fields in the emails
    schoolLink: "schoollink",
    headline: "It's time to order your Official [School] Ring!",
    EESSKSRO_Headline: "Free Kendra Scott Gift with Purchase* of your Official [School name] Ring.",
    EESSGIAE_Headline: "Order your Official [School] Ring and take your graduation photos!",
    inHandDate: "111111",
    SMI: "222222",
    bodyCopy: "Be part of a timeless [Nickname] tradition. Order your personalized ring to show your pride and celebrate your success with fellow classmates.",
    EESSGIAE_BodyCopy: "Be part of a timeless [Nickname] tradition. Visit Balfour and GradImages on-campus during the event.",
    EESSKSRO_BodyCopy: "Your college ring serves as an enduring, lifelong reminder of your achievement. Now you can make your celebration even more exciting with this <strong>limited-time offer.</strong> With your qualifying purchase, receive your choice of one of three Kendra Scott Ever Necklaces (a $65 value). ",
    schoolColor: "#3aa7e2",
    footerColor: "000000",
    subhead: "ONE DAY ONLY",
    weekdayMonthDate: "Monday, Oct. 28",
    startTime: "10 a.m.",
    endTime: "2 p.m.",
    weekdayMonthDate2: "Monday, Oct. 28",
    startTime2: "10 a.m.",
    endTime2: "2 p.m.",
    location: "Student Center",
    footerURL: "http://www.balfour.com/schoolname",
    monthAndJobNumber: "0020.job#",
    schoolName: "schoolname",
    col1Headline: "Photo Gifts",
    col1BHeadline: "ANNOUNCEMENTS",
    col2Headline: "Official Ring",
    col1BodyCopy: "Display your favorite moments everywhere! Create custom books, wall art, office décor, jewelry and more featuring your photos.",
    col1BBodyCopy: "Celebrate your graduation with friends and family! Save on packages including thank you notes, address labels and envelopes.",
    col2BodyCopy: "Order your personalized ring to show your pride, celebrate your success with fellow classmates, and represent your school’s tradition.",
    EESSGIAEcol1Headline: "GRADUATION PHOTOS",
    EESSGIAEcol2Headline: "OFFICIAL RING",
    EESSGIAEcol1BodyCopy: "Visit our <strong>FREE</strong> Pop-Up Portrait Studio and take your graduation portraits. Register for your session and <strong>save 20%</strong> on your photo order.",
    EESSGIAEcol2BodyCopy: "Order your personalized ring to show your pride, celebrate your success with fellow classmates, and represent your school’s tradition.",

    // these are state attributes that handle when to show various emails
    showEESSROEmail: false,
    showEESS2ColEmail: false,
    showEESS2ColPCAEmail: false,
    showEESSKSROEmail: false,
    showEESSGIAEAnncEmail: false,

    // these are edge case attributes
    oneDTP: true,
    killAnnouncements: false
  }
  valueChangeHandler = (event) => {
    const key = event.target.name
    this.setState({
      [key]: event.target.value
    })
  }
  valueToggler = (event) => {
    console.log(event.target.name + ":" + event.target.value);
    const key = event.target.name
    const val = this.state[key]
    this.setState({
      [key]: !val
    });
    console.log(event.target.name + ":" + event.target.value);
  }
  SMITestButton = () => {
    window.open('https://www.balfour.com/shop/jewelry/rings/college-class-rings?smi=' + this.state.SMI, '_blank')
  }
  SchoolAlumniShopPreview = () => {
    window.open('https://www.balfour.com/shop/collections/alumni-shop?pim_a_licensetype=2509&smi=' + this.state.SMI + '&utm_medium=email&utm_source=collegiate&utm_campaign=col_' + this.state.schoolName + '_' + this.state.inHandDate + '&utm_content=cta_image-col1' + this.state.schoolLink, '_blank')
  }
  EESSGIAEGradPhotosPreview = () => {
    window.open('https://www.gradimages.com/registration?utm_medium=email&utm_source=collegiate&utm_campaign=col_' + this.state.schoolName +'_' + this.state.inHandDate + '&utm_content=registration-image', '_blank')
  }
  EESSGIAECol1ButtonPreview = () => {
    window.open('https://www.gradimages.com/registration?utm_medium=email&utm_source=collegiate&utm_campaign=col_' + this.state.schoolName + '_' + this.state.inHandDate + '&utm_content=registration-button', '_blank')
  }
  SchoolOfficialRingPreview = () => {
    window.open('https://www.balfour.com/shop/jewelry/rings/college-class-rings?smi=' + this.state.SMI + '&utm_medium=email&utm_source=collegiate&utm_campaign=col_' + this.state.schoolName + '_' + this.state.inHandDate + '&utm_content=image-Col2', '_blank')
  }
  EESSGIAEOfficialRingPreview = () => {
    window.open('https://www.balfour.com/shop/jewelry/rings/college-class-rings?smi=' + this.state.SMI + '&utm_medium=email&utm_source=collegiate&utm_campaign=col_' + this.state.schoolName + '_' + this.state.inHandDate + '&utm_content=image-Col2', '_blank')
  }
  EESSGIAECol2ButtonPreview = () => {
    window.open('https://www.balfour.com/shop/jewelry/rings/college-class-rings?smi=' + this.state.SMI + '&utm_medium=email&utm_source=collegiate&utm_campaign=col_' + this.state.schoolName + '_' + this.state.inHandDate + '&utm_content=cta_col2-button', '_blank')
  }
  EESSGIAEPanelImagePreview = () => {
    window.open('https://www.balfour.com/' + this.state.schoolLink + '?utm_medium=email&amp;utm_source=collegiate&amp;utm_campaign=col_' + this.state.schoolName + '_' + this.state.inHandDate + '&amp;utm_content=schoollogo', '_blank')
  }
  SchoolLinkPreview = () => {
    window.open('https://www.balfour.com/' + this.state.schoolLink, '_blank')
  }
  toggleEmailHandler = (event) => {
    const key = event.target.name
    this.setState({
      showEESSROEmail: false,
      showEESS2ColEmail: false,
      showEESS2ColPCAEmail: false,
      showEESSGIAEEmail: false,
      showEESSKSROEmail: false,
      showEESSGIAEAnncEmail: false,
    })
    const doesShow = this.state[key];
    this.setState({
      [event.target.name]: !doesShow
    });
    console.log()
  }

  // these are the functions that actually put the form into the HTML emails
  MakeEE_SS_RO = () => {
    var result = EE_SS_RO;

    // these items happen more than once & require regex
    var SNregex = /schoolname/gi;
    var SLregex = /schoollink/gi;
    var UTMregex = /111111/gi;
    var SMIregex = /222222/gi;

    // this swaps out what's in the email for what's in the finished form
    result = result.replace(SNregex, this.state.schoolName);
    result = result.replace(SLregex, this.state.schoolLink);
    result = result.replace(UTMregex, this.state.inHandDate);
    result = result.replace(SMIregex, this.state.SMI);
    result = result.replace("It's time to order your Official [School] Ring!", this.state.headline);
    result = result.replace('Be part of a timeless [Nickname] tradition. Order your personalized ring to show your pride and celebrate your success with fellow classmates.', this.state.bodyCopy);
    result = result.replace('ONE DAY ONLY', this.state.subhead);
    result = result.replace('Day, Month #', this.state.weekdayMonthDate);
    result = result.replace('00 a.m.', this.state.startTime);
    result = result.replace('00 p.m.', this.state.endTime);
    if (!this.state.oneDTP){
      result = result.replace('Location<br>', this.state.weekdayMonthDate2 + '<br>Location<br>');
      result = result.replace('Location<br>', this.state.startTime2 + ' &ndash; ' + this.state.endTime2 + '<br>Location<br>');
    }
    result = result.replace('Location', this.state.location);

    download(result, 'XXXX_EE-SS-RO.html', "text/html");
  }
  MakeEE_SS_KS_RO = () => {
    var result = EE_SS_KS_RO;

    // these items happen more than once & require regex
    var SNregex = /schoolname/gi;
    var SLregex = /schoollink/gi;
    var UTMregex = /111111/gi;
    var SMIregex = /222222/gi;

    // this swaps out what's in the email for what's in the finished form
    result = result.replace(SNregex, this.state.schoolName);
    result = result.replace(SLregex, this.state.schoolLink);
    result = result.replace(UTMregex, this.state.inHandDate);
    result = result.replace(SMIregex, this.state.SMI);
    result = result.replace('Free Kendra Scott Gift with Purchase* of your Official [School name] Ring.', this.state.EESSKSRO_Headline);
    result = result.replace('Your college ring serves as an enduring, lifelong reminder of your achievement. Now you can make your celebration even more exciting with this <strong>limited-time offer.</strong> With your qualifying purchase, receive your choice of one of three Kendra Scott Ever Necklaces (a $65 value). ', this.state.EESSKSRO_BodyCopy);
    result = result.replace('ONE DAY ONLY', this.state.subhead);
    result = result.replace('Day, Month #', this.state.weekdayMonthDate);
    result = result.replace('00 a.m.', this.state.startTime);
    result = result.replace('00 p.m.', this.state.endTime);
    if (!this.state.oneDTP){
      result = result.replace('Location<br>', this.state.weekdayMonthDate2 + '<br>Location<br>');
      result = result.replace('Location<br>', this.state.startTime2 + ' &ndash; ' + this.state.endTime2 + '<br>Location<br>');
    }
    result = result.replace('Location', this.state.location);

    download(result, 'XXXX_EE-SS-KS-RO.html', "text/html");
  }
  MakeEE_SS_2Col = () => {
    var result = EE_SS_2Col;

    // these items happen more than once & require regex
    var SNregex = /schoolname/gi;
    var SLregex = /schoollink/gi;
    var UTMregex = /111111/gi;
    var SMIregex = /222222/gi;

    // this swaps out what's in the email for what's in the finished form
    result = result.replace(SNregex, this.state.schoolName);
    result = result.replace(SLregex, this.state.schoolLink);
    result = result.replace(UTMregex, this.state.inHandDate);
    result = result.replace(SMIregex, this.state.SMI);
    result = result.replace("It's time to order your Official [School] Ring!", this.state.headline);
    result = result.replace('Be part of a timeless [Nickname] tradition. Order your personalized ring to show your pride and celebrate your success with fellow classmates.', this.state.bodyCopy);
    result = result.replace("Photo Gifts", this.state.col1Headline);
    result = result.replace("Official Ring", this.state.col2Headline);
    result = result.replace("Display your favorite moments everywhere! Create custom books, wall art, office décor, jewelry and more featuring your photos.", this.state.col1BodyCopy);
    result = result.replace("Order your personalized ring to show your pride, celebrate your success with fellow classmates, and represent your school’s tradition.", this.state.col2BodyCopy);
    result = result.replace('XXX DAY ONLY', this.state.subhead);
    result = result.replace('Day, Month #', this.state.weekdayMonthDate);
    result = result.replace('00 a.m.', this.state.startTime);
    result = result.replace('00 p.m.', this.state.endTime);
    if (!this.state.oneDTP){
      result = result.replace('Location<br />', this.state.weekdayMonthDate2 + '<br />Location<br />');
      result = result.replace('Location<br />', this.state.startTime2 + ' &ndash; ' + this.state.endTime2 + '<br />Location<br />');
    }
    result = result.replace('Location', this.state.location);

    download(result, 'XXXX_EE-SS-2Col.html', "text/html");
  }
  MakeEE_SS_2Col_PCA = () => {
    var result = EE_SS_2Col_PCA;

    // these items happen more than once & require regex
    var SNregex = /schoolname/gi;
    var SLregex = /schoollink/gi;
    var UTMregex = /111111/gi;
    var SMIregex = /222222/gi;

    // this swaps out what's in the email for what's in the finished form
    result = result.replace(SNregex, this.state.schoolName);
    result = result.replace(SLregex, this.state.schoolLink);
    result = result.replace(UTMregex, this.state.inHandDate);
    result = result.replace(SMIregex, this.state.SMI);
    result = result.replace("It's time to order your Official [School] Ring!", this.state.headline);
    result = result.replace('Be part of a timeless [Nickname] tradition. Order your personalized ring to show your pride and celebrate your success with fellow classmates.', this.state.bodyCopy);
    result = result.replace("ANNOUNCEMENTS", this.state.col1BHeadline);
    result = result.replace("Official Ring", this.state.col2Headline);
    result = result.replace("Celebrate your graduation with friends and family! Save on packages including thank you notes, address labels and envelopes.", this.state.col1BBodyCopy);
    result = result.replace("Order your personalized ring to show your pride, celebrate your success with fellow classmates, and represent your school’s tradition.", this.state.col2BodyCopy);
    result = result.replace('XXX DAY ONLY', this.state.subhead);
    result = result.replace('Day, Month #', this.state.weekdayMonthDate);
    result = result.replace('00 a.m.', this.state.startTime);
    result = result.replace('00 p.m.', this.state.endTime);
    if (!this.state.oneDTP){
      result = result.replace('Location<br />', this.state.weekdayMonthDate2 + '<br />Location<br />');
      result = result.replace('Location<br />', this.state.startTime2 + ' &ndash; ' + this.state.endTime2 + '<br />Location<br />');
    }
    result = result.replace('Location', this.state.location);

    download(result, 'XXXX_EE-SS-2Col-PCA.html', "text/html");
  }
  MakeEE_SS_GI_AE_Annc = () => {
    var result = EE_SS_GI_AE_Annc;
    console.log("the state of kill announcements is " + this.state.killAnnouncements)
    // these items happen more than once & require regex
    var Cregex = /#3ea6de/gi;
    var SNregex = /schoolname/gi;
    var SLregex = /schoollink/gi;
    var UTMregex = /111111/gi;
    var SMIregex = /222222/gi;

    // this swaps out what's in the email for what's in the finished form
    if (this.state.killAnnouncements){
      result = result.replace('<td align="center" class="wrapper valign" style="vertical-align:top; padding:0;"><table cellpadding="0" cellspacing="0" class="columns import-column import-column-1" style="border-collapse: collapse; padding-right:0; margin:0 auto;"><tbody><tr><td class="column-content valign no-padding" style="width:265px;vertical-align:top;padding-right:0;padding-top:0;padding-bottom:0;padding-left:inherit;"><table style="table-layout:fixed;border-collapse:collapse;" width="100%"><tbody><tr><td align="left" class="import-element import-element-block import-element-1 import-element-88403364326 el-outer" style="align: center; text-align: left; font-size:16px;padding:0;line-height:normal;margin-left:0;"><a border="0" href="http://orders.balfour.com/smi222222/catalog/category/view/s/personalized-college-announcements/id/312673/?smi=222222?utm_medium=email&utm_source=collegiate&utm_campaign=col_schoolname_111111&utm_content=img-announcements" style="display:inline;" target="_blank" title="grad_announcements" xt="SPCLICKSTREAM"><br /><img alt="Graduation Announcements" class="el-inner image" src="images/5-announcements_schoolname.jpg" style="display:block;border:none; min-width: 80%; max-width: 600px; height: auto;" width="300px" title="grad_announcements"/></a><center></center></td></tr></tbody></table></td></tr></tbody></table><br /></td><td align="center" class="wrapper valign " style="vertical-align:top; padding:0; position: relative;"><table cellpadding="0" cellspacing="0" class="columns import-column import-column-2" style="border-collapse:collapse;padding-right:0;margin:0 auto;"><tbody><tr><td class="column-content valign no-padding" style="vertical-align:top;padding-right:0;padding-top:0;padding-bottom:0;padding-left:inherit;width:265px;"><table style="table-layout:fixed;border-collapse:collapse;" width="100%"><tbody><tr><td align="left" class="import-element import-element-block import-element-1 import-element-21272106884 el-outer" style="align:left;text-align:left;font-size:16px;padding:0;line-height:normal;margin-left:0;font-family:Helvetica,Arial,sans-serif;"><center><br /><p style="font-family: Arial, sans-serif; padding-left: 20px; padding-right: 20px; line-height: 1.3; color: #ffffff"><strong style="font-size: 125%;">GRADUATION ANNOUNCEMENTS</strong><br><br>Order your announcements in time for graduation!</p></center><center><table cellspacing="0" cellpadding="0" border="0" style="margin: auto; background:#ffffff;" bgcolor="#ffffff"><tr><td style="border-radius: 3px; background: #000000; text-align: center;" class="button-td"><a href="http://orders.balfour.com/smi222222/catalog/category/view/s/personalized-college-announcements/id/312673/?smi=222222?utm_medium=email&utm_source=collegiate&utm_campaign=col_schoolname_111111&utm_content=cta_anncbutton" style="border: 15px solid #000000; padding: 0 10px; color: #ffffff; font-family: Arial, sans-serif;  font-size: 15px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 3px; font-weight: bold; background-color: #000000;" class="button-a"><!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;<![endif]-->ORDER NOW<!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;<![endif]--></a></td></tr></table><br /></center></td></tr></tbody></table></td></tr></tbody></table><br /></td><br />', '');
    }
    result = result.replace(Cregex, this.state.schoolColor);
    result = result.replace(SNregex, this.state.schoolName);
    result = result.replace(SLregex, this.state.schoolLink);
    result = result.replace(UTMregex, this.state.inHandDate);
    result = result.replace(SMIregex, this.state.SMI);
    result = result.replace("Order your Official [School Name] Ring and<br /> take your graduation photos!", this.state.EESSGIAE_Headline);
    result = result.replace('Be part of a timeless [Nickname] tradition. Visit Balfour and <br />GradImages on-campus during the event.', this.state.EESSGIAE_BodyCopy);
    result = result.replace(">GRADUATION PHOTOS<", ">" + this.state.EESSGIAEcol1Headline + "<");
    result = result.replace(">OFFICIAL RING<", ">" + this.state.EESSGIAEcol2Headline + "<");
    result = result.replace("Visit our <strong>FREE</strong> Pop-Up Portrait Studio and take your graduation portraits. Register for your session and <strong>save 20%</strong> on your photo order.", this.state.EESSGIAEcol1BodyCopy);
    result = result.replace("Order your personalized ring to show your pride, celebrate your success with fellow classmates, and represent your school’s tradition.", this.state.EESSGIAEcol2BodyCopy);
    result = result.replace('XXX DAY ONLY', this.state.subhead);
    result = result.replace('Date, Month #', this.state.weekdayMonthDate);
    result = result.replace('00 a.m.', this.state.startTime);
    result = result.replace('00 p.m.', this.state.endTime);
    if (!this.state.oneDTP){
      result = result.replace('Location<br />', this.state.weekdayMonthDate2 + '<br />Location<br />');
      result = result.replace('Location<br />', this.state.startTime2 + ' &ndash; ' + this.state.endTime2 + '<br />Location<br />');
    }
    result = result.replace('Location', this.state.location);

    download(result, 'XXXX_EE-SS-GI-AE.html', "text/html");
  }

  render() {
    let EmailEditor = null;

    // these are the emails that will render when you click the buttons int he header
    if (this.state.showEESSROEmail) {
      EmailEditor =
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="form-group">
              <InputGeneric 
                headline="School Name:"
                change={this.valueChangeHandler}
                value={this.state.schoolName}
                name="schoolName"
                rows="1"
              />
              <InputGeneric 
                headline="Headline:"
                change={this.valueChangeHandler}
                value={this.state.headline}
                name="headline"
                rows="2"
              />
              <InputGeneric 
                headline="Body Copy:"
                change={this.valueChangeHandler}
                value={this.state.bodyCopy}
                name="bodyCopy"
                rows="3"
              />
              <InputGeneric 
                headline="School Link:"
                change={this.valueChangeHandler}
                value={this.state.schoolLink}
                name="schoolLink"
                rows="1"
              />
              <InputGeneric 
                headline="Subhead:"
                change={this.valueChangeHandler}
                value={this.state.subhead}
                name="subhead"
                rows="1"
              />
              <InputGeneric 
                headline="Date:"
                change={this.valueChangeHandler}
                value={this.state.weekdayMonthDate}
                name="weekdayMonthDate"
                rows="1"
              />
              <InputGeneric 
                headline="Start Time:"
                change={this.valueChangeHandler}
                value={this.state.startTime}
                name="startTime"
                rows="1"
              />
              <InputGeneric 
                headline="End Time:"
                change={this.valueChangeHandler}
                value={this.state.endTime}
                name="endTime"
                rows="1"
              />
              
              <div className={styles.space}>
              <button className="btn-sm btn-secondary" onClick={this.valueToggler}>2 DTP Toggle</button>
              </div>
              {this.state.oneDTP ? null : (
                <div>
                  <InputGeneric 
                    headline="2nd Date:"
                    change={this.valueChangeHandler}
                    value={this.state.weekdayMonthDate2}
                    name="weekdayMonthDate2"
                    rows="1"
                  />
                  <InputGeneric 
                    headline="2nd Start Time:"
                    change={this.valueChangeHandler}
                    value={this.state.startTime2}
                    name="startTime2"
                    rows="1"
                  />
                  <InputGeneric 
                    headline="2nd End Time:"
                    change={this.valueChangeHandler}
                    value={this.state.endTime2}
                    name="endTime2"
                    rows="1"
                  />
                </div>
              )}
              <InputGeneric 
                headline="Location:"
                change={this.valueChangeHandler}
                value={this.state.location}
                name="location"
                rows="1"
              />
              <InputGeneric 
                headline="SMI:"
                change={this.valueChangeHandler}
                value={this.state.SMI}
                name="SMI"
                rows="1"
              />
              <InputGeneric 
                headline="In Hand Date:"
                change={this.valueChangeHandler}
                value={this.state.inHandDate}
                name="inHandDate"
                rows="1"
              />
              <button className="btn btn-secondary" onClick={this.MakeEE_SS_RO}>Make Email</button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <EESSRO_ImageHeroPreview
              schoolName={this.state.schoolName}
              click={this.SchoolLinkPreview}
            />
            <EESSRO_Body_Preview
              headline={this.state.headline}
              bodyCopy={this.state.bodyCopy}
              font="white"
              click={this.SMITestButton}
              buttonColor="#000000"
              subhead={this.state.subhead}
              weekdayMonthDate={this.state.weekdayMonthDate}
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              location={this.state.location}
              oneDTP={this.state.oneDTP}
              weekdayMonthDate2={this.state.weekdayMonthDate2}
              startTime2={this.state.startTime2}
              endTime2={this.state.endTime2}
            />
            <h5 className={styles.bulletTitle}>Each Ring Includes:</h5>
            <ul className={styles.bulletList}>
              <li>Optional interest-free payment plans</li>
              <li>A lifetime warranty with free resizing, polishing and cleaning</li>
              <li>A Ring Loss Protection Plan</li>
            </ul>
            <EESSRO_ImagePanelPreview
              schoolName={this.state.schoolName}
              click={this.SchoolLinkPreview}
            />
          </div>
        </div>
    }
    if (this.state.showEESS2ColEmail) {
      EmailEditor =
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="form-group">
              <InputGeneric 
                headline="School Name:"
                change={this.valueChangeHandler}
                value={this.state.schoolName}
                name="schoolName"
                rows="1"
              />
              <InputGeneric 
                headline="Headline:"
                change={this.valueChangeHandler}
                value={this.state.headline}
                name="headline"
                rows="2"
              />
              <InputGeneric 
                headline="Body Copy:"
                change={this.valueChangeHandler}
                value={this.state.bodyCopy}
                name="bodyCopy"
                rows="3"
              />
              <InputGeneric 
                headline="Col 1 Headline:"
                change={this.valueChangeHandler}
                value={this.state.col1Headline}
                name="col1Headline"
                rows="1"
              />
              <InputGeneric 
                headline="Col 1 Body:"
                change={this.valueChangeHandler}
                value={this.state.col1BodyCopy}
                name="col1BodyCopy"
                rows="2"
              />
              <InputGeneric 
                headline="Col 2 Headline:"
                change={this.valueChangeHandler}
                value={this.state.col2Headline}
                name="col2Headline"
                rows="1"
              />
              <InputGeneric 
                headline="Col 2 Body:"
                change={this.valueChangeHandler}
                value={this.state.col2BodyCopy}
                name="col2BodyCopy"
                rows="2"
              />
              <InputGeneric 
                headline="School Link:"
                change={this.valueChangeHandler}
                value={this.state.schoolLink}
                name="schoolLink"
                rows="1"
              />
              <InputGeneric 
                headline="Subhead:"
                change={this.valueChangeHandler}
                value={this.state.subhead}
                name="subhead"
                rows="1"
              />
              <InputGeneric 
                headline="Date:"
                change={this.valueChangeHandler}
                value={this.state.weekdayMonthDate}
                name="weekdayMonthDate"
                rows="1"
              />
              <InputGeneric 
                headline="Start Time:"
                change={this.valueChangeHandler}
                value={this.state.startTime}
                name="startTime"
                rows="1"
              />
              <InputGeneric 
                headline="End Time:"
                change={this.valueChangeHandler}
                value={this.state.endTime}
                name="endTime"
                rows="1"
              />
              
              <div className={styles.space}>
              <button className="btn-sm btn-secondary" onClick={this.valueToggler}>2 DTP Toggle</button>
              </div>
              {this.state.oneDTP ? null : (
                <div>
                  <InputGeneric 
                    headline="2nd Date:"
                    change={this.valueChangeHandler}
                    value={this.state.weekdayMonthDate2}
                    name="weekdayMonthDate2"
                    rows="1"
                  />
                  <InputGeneric 
                    headline="2nd Start Time:"
                    change={this.valueChangeHandler}
                    value={this.state.startTime2}
                    name="startTime2"
                    rows="1"
                  />
                  <InputGeneric 
                    headline="2nd End Time:"
                    change={this.valueChangeHandler}
                    value={this.state.endTime2}
                    name="endTime2"
                    rows="1"
                  />
                </div>
              )}
              <InputGeneric 
                headline="Location:"
                change={this.valueChangeHandler}
                value={this.state.location}
                name="location"
                rows="1"
              />
              <InputGeneric 
                headline="SMI:"
                change={this.valueChangeHandler}
                value={this.state.SMI}
                name="SMI"
                rows="1"
              />
              <InputGeneric 
                headline="In Hand Date:"
                change={this.valueChangeHandler}
                value={this.state.inHandDate}
                name="inHandDate"
                rows="1"
              />
              <button className="btn btn-secondary" onClick={this.MakeEE_SS_2Col}>Make Email</button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <EESSKSRO_ImageHeroPreview
              schoolName={this.state.schoolName}
              click={this.SchoolLinkPreview}
            />
            <EESSRO_Body_Preview
              headline={this.state.headline}
              bodyCopy={this.state.bodyCopy}
              font="white"
              click={this.SMITestButton}
              buttonColor="#000000"
              subhead={this.state.subhead}
              weekdayMonthDate={this.state.weekdayMonthDate}
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              location={this.state.location}
              oneDTP={this.state.oneDTP}
              weekdayMonthDate2={this.state.weekdayMonthDate2}
              startTime2={this.state.startTime2}
              endTime2={this.state.endTime2}
            />
            <br />
            <p><b>Shop your curated collection</b></p>
            <div className="row">
              <Image2Col1Preview
                font="white"
                schoolName={this.state.schoolName}
                click={this.SchoolAlumniShopPreview}
                headline={this.state.col1Headline}
                bodyCopy={this.state.col1BodyCopy}
                buttonColor="#000000"
              />
              <Image2Col2Preview
                font="white"
                schoolName={this.state.schoolName}
                click={this.SchoolOfficialRingPreview}
                headline={this.state.col2Headline}
                bodyCopy={this.state.col2BodyCopy}
                buttonColor="#000000"
              />
            </div>

          </div>
        </div>
    }
    if (this.state.showEESS2ColPCAEmail) {
      EmailEditor =
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="form-group">
              <InputGeneric 
                headline="School Name:"
                change={this.valueChangeHandler}
                value={this.state.schoolName}
                name="schoolName"
                rows="1"
              />
              <InputGeneric 
                headline="Headline:"
                change={this.valueChangeHandler}
                value={this.state.headline}
                name="headline"
                rows="2"
              />
              <InputGeneric 
                headline="Body Copy:"
                change={this.valueChangeHandler}
                value={this.state.bodyCopy}
                name="bodyCopy"
                rows="3"
              />
              <InputGeneric 
                headline="Col 1 Headline:"
                change={this.valueChangeHandler}
                value={this.state.col1BHeadline}
                name="col1Headline"
                rows="1"
              />
              <InputGeneric 
                headline="Col 1 Body:"
                change={this.valueChangeHandler}
                value={this.state.col1BBodyCopy}
                name="col1BodyCopy"
                rows="2"
              />
              <InputGeneric 
                headline="Col 2 Headline:"
                change={this.valueChangeHandler}
                value={this.state.col2Headline}
                name="col2Headline"
                rows="1"
              />
              <InputGeneric 
                headline="Col 2 Body:"
                change={this.valueChangeHandler}
                value={this.state.col2BodyCopy}
                name="col2BodyCopy"
                rows="2"
              />
              <InputGeneric 
                headline="School Link:"
                change={this.valueChangeHandler}
                value={this.state.schoolLink}
                name="schoolLink"
                rows="1"
              />
              <InputGeneric 
                headline="Subhead:"
                change={this.valueChangeHandler}
                value={this.state.subhead}
                name="subhead"
                rows="1"
              />
              <InputGeneric 
                headline="Date:"
                change={this.valueChangeHandler}
                value={this.state.weekdayMonthDate}
                name="weekdayMonthDate"
                rows="1"
              />
              <InputGeneric 
                headline="Start Time:"
                change={this.valueChangeHandler}
                value={this.state.startTime}
                name="startTime"
                rows="1"
              />
              <InputGeneric 
                headline="End Time:"
                change={this.valueChangeHandler}
                value={this.state.endTime}
                name="endTime"
                rows="1"
              />
              
              <div className={styles.space}>
              <button className="btn-sm btn-secondary" onClick={this.valueToggler}>2 DTP Toggle</button>
              </div>
              {this.state.oneDTP ? null : (
                <div>
                  <InputGeneric 
                    headline="2nd Date:"
                    change={this.valueChangeHandler}
                    value={this.state.weekdayMonthDate2}
                    name="weekdayMonthDate2"
                    rows="1"
                  />
                  <InputGeneric 
                    headline="2nd Start Time:"
                    change={this.valueChangeHandler}
                    value={this.state.startTime2}
                    name="startTime2"
                    rows="1"
                  />
                  <InputGeneric 
                    headline="2nd End Time:"
                    change={this.valueChangeHandler}
                    value={this.state.endTime2}
                    name="endTime2"
                    rows="1"
                  />
                </div>
              )}
              <InputGeneric 
                headline="Location:"
                change={this.valueChangeHandler}
                value={this.state.location}
                name="location"
                rows="1"
              />
              <InputGeneric 
                headline="SMI:"
                change={this.valueChangeHandler}
                value={this.state.SMI}
                name="SMI"
                rows="1"
              />
              <InputGeneric 
                headline="In Hand Date:"
                change={this.valueChangeHandler}
                value={this.state.inHandDate}
                name="inHandDate"
                rows="1"
              />
              <button className="btn btn-secondary" onClick={this.MakeEE_SS_2Col_PCA}>Make Email</button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <EESSKSRO_ImageHeroPreview
              schoolName={this.state.schoolName}
              click={this.SchoolLinkPreview}
            />
            <EESSRO_Body_Preview
              headline={this.state.headline}
              bodyCopy={this.state.bodyCopy}
              font="white"
              click={this.SMITestButton}
              buttonColor="#000000"
              subhead={this.state.subhead}
              weekdayMonthDate={this.state.weekdayMonthDate}
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              location={this.state.location}
              oneDTP={this.state.oneDTP}
              weekdayMonthDate2={this.state.weekdayMonthDate2}
              startTime2={this.state.startTime2}
              endTime2={this.state.endTime2}
            />
            <br />
            <p><b>Shop your curated collection</b></p>
            <div className="row">
              <Image2Col1Preview
                font="white"
                schoolName={this.state.schoolName}
                click={this.SchoolAlumniShopPreview}
                headline={this.state.col1BHeadline}
                bodyCopy={this.state.col1BBodyCopy}
                buttonColor="#000000"
              />
              <Image2Col2Preview
                font="white"
                schoolName={this.state.schoolName}
                click={this.SchoolOfficialRingPreview}
                headline={this.state.col2Headline}
                bodyCopy={this.state.col2BodyCopy}
                buttonColor="#000000"
              />
            </div>

          </div>
        </div>
    }
    if (this.state.showEESSGIAEAnncEmail) {
      EmailEditor =
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="form-group">
              <InputGeneric 
                headline="School Name:"
                change={this.valueChangeHandler}
                value={this.state.schoolName}
                name="schoolName"
                rows="1"
              />
              <InputGeneric 
                headline="Headline:"
                change={this.valueChangeHandler}
                value={this.state.EESSGIAE_Headline}
                name="EESSGIAE_Headline"
                rows="2"
              />
              <InputGeneric 
                headline="Body Copy:"
                change={this.valueChangeHandler}
                value={this.state.EESSGIAE_BodyCopy}
                name="EESSGIAE_BodyCopy"
                rows="3"
              />
              <InputGeneric 
                headline="Col 1 Headline:"
                change={this.valueChangeHandler}
                value={this.state.EESSGIAEcol1Headline}
                name="EESSGIAEcol1Headline"
                rows="1"
              />
              <InputGeneric 
                headline="Col 1 Body:"
                change={this.valueChangeHandler}
                value={this.state.EESSGIAEcol1BodyCopy}
                name="EESSGIAEcol1BodyCopy"
                rows="2"
              />
              <InputGeneric 
                headline="Col 2 Headline:"
                change={this.valueChangeHandler}
                value={this.state.EESSGIAEcol2Headline}
                name="EESSGIAEcol2Headline"
                rows="1"
              />
              <InputGeneric 
                headline="Col 2 Body:"
                change={this.valueChangeHandler}
                value={this.state.EESSGIAEcol2BodyCopy}
                name="EESSGIAEcol2BodyCopy"
                rows="2"
              />
              <InputGeneric 
                headline="School Link:"
                change={this.valueChangeHandler}
                value={this.state.schoolLink}
                name="schoolLink"
                rows="1"
              />
              <InputGeneric 
                headline="Day Count:"
                change={this.valueChangeHandler}
                value={this.state.subhead}
                name="subhead"
                rows="1"
              />
              <InputGeneric 
                headline="Date:"
                change={this.valueChangeHandler}
                value={this.state.weekdayMonthDate}
                name="weekdayMonthDate"
                rows="1"
              />
              <InputGeneric 
                headline="Start Time:"
                change={this.valueChangeHandler}
                value={this.state.startTime}
                name="startTime"
                rows="1"
              />
              <InputGeneric 
                headline="End time:"
                change={this.valueChangeHandler}
                value={this.state.endTime}
                name="endTime"
                rows="1"
              />
              <div className={styles.space}>
              <button className="btn-sm btn-secondary mr-2" name="killAnnouncements" id={this.state.killAnnouncements} onClick={this.valueToggler}>Remove Announcements</button>
              <button className="btn-sm btn-secondary" name="oneDTP" id={this.state.oneDTP} onClick={this.valueToggler}>2 DTP Toggle</button>
              </div>
              {this.state.killAnnouncements ? null : (
                <InputGeneric 
                headline="School Hex:"
                change={this.valueChangeHandler}
                value={this.state.schoolColor}
                name="schoolColor"
                rows="1"
              />
              )}
              {this.state.oneDTP ? null : (
                <div>
                  <InputGeneric 
                    headline="2nd Date:"
                    change={this.valueChangeHandler}
                    value={this.state.weekdayMonthDate2}
                    name="weekdayMonthDate2"
                    rows="1"
                  />
                  <InputGeneric 
                    headline="2nd Start Time:"
                    change={this.valueChangeHandler}
                    value={this.state.startTime2}
                    name="startTime2"
                    rows="1"
                  />
                  <InputGeneric 
                    headline="2nd End Time:"
                    change={this.valueChangeHandler}
                    value={this.state.endTime2}
                    name="endTime2"
                    rows="1"
                  />
                </div>
              )}
              <InputGeneric 
                headline="Location:"
                change={this.valueChangeHandler}
                value={this.state.location}
                name="location"
                rows="1"
              />
              <InputGeneric 
                headline="SMI:"
                change={this.valueChangeHandler}
                value={this.state.SMI}
                name="SMI"
                rows="1"
              />
              <InputGeneric 
                headline="In Hand Date:"
                change={this.valueChangeHandler}
                value={this.state.inHandDate}
                name="inHandDate"
                rows="1"
              />
              <button className="btn btn-secondary" onClick={this.MakeEE_SS_GI_AE_Annc}>Make Email</button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <EESSKSRO_ImageHeroPreview
              schoolName={this.state.schoolName}
              click={this.SchoolLinkPreview}
            />
            <EESSGIAE_Body_Preview 
              headline={this.state.EESSGIAE_Headline}
              bodyCopy={this.state.EESSGIAE_BodyCopy}
              subhead={this.state.subhead}
              weekdayMonthDate={this.state.weekdayMonthDate}
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              weekdayMonthDate2={this.state.weekdayMonthDate2}
              startTime2={this.state.startTime2}
              endTime2={this.state.endTime2}
              location={this.state.location}
              schoolName={this.state.schoolName}
              click={this.EESSGIAEPanelImagePreview}
              oneDTP={this.state.oneDTP}
            />
            <div className="row">
              <ImageEESSGIAECol1Preview
                font="white"
                schoolName={this.state.schoolName}
                click={this.EESSGIAEGradPhotosPreview}
                headline={this.state.EESSGIAEcol1Headline}
                bodyCopy={this.state.EESSGIAEcol1BodyCopy}
                buttonColor="#000000"
                click2={this.EESSGIAECol1ButtonPreview}
              />
              <ImageEESSGIAECol2Preview
                font="white"
                schoolName={this.state.schoolName}
                click={this.EESSGIAEOfficialRingPreview}
                headline={this.state.EESSGIAEcol2Headline}
                bodyCopy={this.state.EESSGIAEcol2BodyCopy}
                buttonColor="#000000"
                click2={this.EESSGIAECol2ButtonPreview}
              />
            </div>
            {this.state.killAnnouncements ? null : (

              <EESSGIAEAnnc_ImageAnncPreview 
              color={this.state.schoolColor}
              schoolName={this.state.schoolName}
              font="white"
              buttonColor="#000000"
              click="null"
              />
              )}
          </div>
        </div>
    }
    if (this.state.showEESSKSROEmail) {
      EmailEditor =
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="form-group">
              <InputGeneric 
                headline="School Name:"
                change={this.valueChangeHandler}
                value={this.state.schoolName}
                name="schoolName"
                rows="1"
              />
              <InputGeneric 
                headline="Headline:"
                change={this.valueChangeHandler}
                value={this.state.EESSKSRO_Headline}
                name="EESSKSRO_Headline"
                rows="2"
              />
              <InputGeneric 
                headline="Body Copy:"
                change={this.valueChangeHandler}
                value={this.state.EESSKSRO_BodyCopy}
                name="EESSKSRO_BodyCopy"
                rows="3"
              />
              <InputGeneric 
                headline="School Link:"
                change={this.valueChangeHandler}
                value={this.state.schoolLink}
                name="schoolLink"
                rows="1"
              />
              <InputGeneric 
                headline="Subhead:"
                change={this.valueChangeHandler}
                value={this.state.subhead}
                name="subhead"
                rows="1"
              />
              <InputGeneric 
                headline="Date:"
                change={this.valueChangeHandler}
                value={this.state.weekdayMonthDate}
                name="weekdayMonthDate"
                rows="1"
              />
              <InputGeneric 
                headline="Start Time:"
                change={this.valueChangeHandler}
                value={this.state.startTime}
                name="startTime"
                rows="1"
              />
              <InputGeneric 
                headline="End Time:"
                change={this.valueChangeHandler}
                value={this.state.endTime}
                name="endTime"
                rows="1"
              />
              
              <div className={styles.space}>
              <button className="btn-sm btn-secondary" onClick={this.valueToggler}>2 DTP Toggle</button>
              </div>
              {this.state.oneDTP ? null : (
                <div>
                  <InputGeneric 
                    headline="2nd Date:"
                    change={this.valueChangeHandler}
                    value={this.state.weekdayMonthDate2}
                    name="weekdayMonthDate2"
                    rows="1"
                  />
                  <InputGeneric 
                    headline="2nd Start Time:"
                    change={this.valueChangeHandler}
                    value={this.state.startTime2}
                    name="startTime2"
                    rows="1"
                  />
                  <InputGeneric 
                    headline="2nd End Time:"
                    change={this.valueChangeHandler}
                    value={this.state.endTime2}
                    name="endTime2"
                    rows="1"
                  />
                </div>
              )}
              <InputGeneric 
                headline="Location:"
                change={this.valueChangeHandler}
                value={this.state.location}
                name="location"
                rows="1"
              />
              <InputGeneric 
                headline="SMI:"
                change={this.valueChangeHandler}
                value={this.state.SMI}
                name="SMI"
                rows="1"
              />
              <InputGeneric 
                headline="In Hand Date:"
                change={this.valueChangeHandler}
                value={this.state.inHandDate}
                name="inHandDate"
                rows="1"
              />
              <button className="btn btn-secondary" onClick={this.MakeEE_SS_KS_RO}>Make Email</button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <EESSKSRO_ImageHeroPreview
              schoolName={this.state.schoolName}
              click={this.SchoolLinkPreview}
            />
            <EESSRO_Body_Preview
              headline={this.state.EESSKSRO_Headline}
              bodyCopy={this.state.EESSKSRO_BodyCopy}
              font="white"
              click={this.SMITestButton}
              buttonColor="#000000"
              subhead={this.state.subhead}
              weekdayMonthDate={this.state.weekdayMonthDate}
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              location={this.state.location}
              oneDTP={this.state.oneDTP}
              weekdayMonthDate2={this.state.weekdayMonthDate2}
              startTime2={this.state.startTime2}
              endTime2={this.state.endTime2}
            />
            <h5 className={styles.bulletTitle}>Each Ring Includes:</h5>
            <ul className={styles.bulletList}>
              <li>Optional interest-free payment plans</li>
              <li>A lifetime warranty with free resizing, polishing and cleaning</li>
              <li>A Ring Loss Protection Plan</li>
            </ul>
            <EESSKSRO_ImagePanelPreview
              schoolName={this.state.schoolName}
              click={this.SchoolLinkPreview}
            />
            <p className={styles.TermsAndConditions}>
            *To qualify for the FREE Kendra Scott gift promotion, a single class ring or necklace product order must total $399 (or more) before shipping or tax. This offer applies to Select Colleges, Select High Schools and Select Ring Styles, Liz James Necklaces and the Journey Collection purchase only. Offer valid 11:59 CST on 12/12/19 and ends 11:59pm on 05/31/20 or while supplies last. No promotional code needed online. Certain product exclusions may apply. This promotion cannot be applied to previous purchases and cannot be redeemed for cash, or used in combination with any other discount, offer or promotion. Terms of offer are subject to change. Other restrictions may apply.
            </p>
          </div>
        </div>
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col text-center MainNav">
            {this.state.showEESSROEmail || this.state.showEESS2ColEmail || this.state.showEESS2ColPCAEmail || this.state.showEESSGIAEAnncEmail  || this.state.showEESSKSROEmail ? 
           (null) : (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
              <h3 className={styles.rudeNav}>Balfour Email Maker 2.0</h3>
            </Animated>
            
            )}
              
            <button className="btn btn-secondary m-2" name="showEESS2ColEmail" onClick={this.toggleEmailHandler}>EE-SS-2Col</button>
            <button className="btn btn-secondary m-2" name="showEESS2ColPCAEmail" onClick={this.toggleEmailHandler}>EE-SS-2Col-PCA</button>
            <button className="btn btn-secondary m-2" name="showEESSROEmail" onClick={this.toggleEmailHandler}>EE-SS-RO</button>
            <button className="btn btn-secondary m-2" name="showEESSGIAEAnncEmail" onClick={this.toggleEmailHandler}>EE-SS-GI-AE</button>
            <button className="btn btn-secondary m-2" name="showEESSKSROEmail" onClick={this.toggleEmailHandler}>EE-SS-KS-RO</button>
          </div>
        </div>
        {EmailEditor}
      </div>
    );
  }
}

export default App;