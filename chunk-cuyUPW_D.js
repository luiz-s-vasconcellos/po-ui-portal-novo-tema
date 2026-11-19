import{g as Gn,j as ta,m as P,p as M,w as ie}from"./main-MOTCU2CE.js";import{An as sie,Ar as I,At as Zte,C as F4,F as Joe,G as Nf,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,li as Qc,na as de,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge$1,va as ik,vi as Sk,w as Fc,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";import{t as r}from"./chunk-zystk1pz.js";var ue=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&vu(0,`po-page-login`)},dependencies:[ta],encapsulation:2,changeDetection:1})}return r})();var ye=r=>({"docs-sample-code-tabs":r});var ge=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-page-login-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-page-login-basic/sample-po-page-login-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-login-basic/sample-po-page-login-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Login Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-login-basic/sample-po-page-login-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-login></po-page-login>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-login-basic/sample-po-page-login-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-login-basic',
  templateUrl: './sample-po-page-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-page-login-basic`),Kg(),vu(25,`hr`)),l&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ye,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ue],encapsulation:2,changeDetection:1})}return r})();var Ee=(()=>{class r{poDialog=p(sie);background;componentsSize;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`hideRememberUser`,label:`Hide remember user`},{value:`loading`,label:`Loading`}];ngOnInit(){this.restore()}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={}}addLoginError(){this.loginErrors.push(this.loginError),this.loginError=``}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError=``}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}loginSubmit(p){this.exceededAttempts<=0&&this.poDialog.alert({title:`Authenticate`,message:JSON.stringify(p),componentsSize:this.componentsSize})}onChangeCustomProperties(){this.customField=Object.assign({},this.customField)}restore(){this.properties=[],this.background=``,this.componentsSize=`medium`,this.contactEmail=``,this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment=``,this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals=``,this.login=``,this.loginPattern=``,this.loginError=``,this.loginErrors=[],this.logo=void 0,this.passwordError=``,this.passwordErrors=[],this.passwordPattern=``,this.passwordError=``,this.passwordErrors=[],this.productName=``,this.recovery=``,this.registerUrl=``,this.support=``}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-labs`]],standalone:!1,decls:60,vars:50,consts:[[`f`,`ngForm`],[`formCustomFieldOptions`,`ngForm`],[3,`p-login-submit`,`p-background`,`p-components-size`,`p-contact-email`,`p-custom-field`,`p-environment`,`p-exceeded-attempts-warning`,`p-hide-remember-user`,`p-loading`,`p-literals`,`p-login`,`p-login-errors`,`p-login-pattern`,`p-logo`,`p-password-errors`,`p-password-pattern`,`p-product-name`,`p-recovery`,`p-register-url`,`p-secondary-logo`,`p-support`],[1,`po-row`],[`name`,`literals`,`p-help`,`Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`productName`,`p-clean`,``,`p-help`,`A custom name that succeeds the title`,`p-label`,`Product Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`loginPattern`,`p-clean`,``,`p-help`,`Ex.: ^[a-zA-Z]*$ (Only letters)`,`p-label`,`Login Pattern`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`login`,`p-clean`,``,`p-help`,`Ex.: podev`,`p-label`,`Login`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`exceededAttempts`,`p-clean`,``,`p-help`,`Ex.: 5`,`p-label`,`Exceeded Attempts Warning`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordPattern`,`p-clean`,``,`p-help`,`Ex.: ^(\\d*)$ (Only numbers)`,`p-label`,`Password Pattern`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`contactMail`,`p-clean`,``,`p-label`,`Contact Email`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`environment`,`p-clean`,``,`p-label`,`Environment`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-label`,`Logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-label`,`Secondary logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`background`,`p-clean`,``,`p-label`,`Background`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`support`,`p-clean`,``,`p-label`,`Support`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`recovery`,`p-clean`,``,`p-label`,`Recovery`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`registerUrl`,`p-clean`,``,`p-label`,`Register URL`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Login Errors`],[`name`,`loginError`,`p-clean`,``,`p-label`,`Login Error`,1,`po-md-8`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Login Error`,1,`po-md-4`,`po-mt-4`,3,`p-click`],[`p-label`,`Password Errors`],[`name`,`passwordError`,`p-clean`,``,`p-label`,`Password Error`,1,`po-lg-8`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Password Error`,1,`po-md-4`,`po-mt-4`,3,`p-click`],[`p-label`,`Custom Field`],[`name`,`customFieldProperty`,`p-clean`,``,`p-help`,`Ex.: domain`,`p-label`,`Custom Field Property`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldValue`,`p-clean`,``,`p-help`,`Ex.: JV01`,`p-label`,`Custom Field Value`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldPlaceholder`,`p-clean`,``,`p-help`,`Ex.: Enter your domain`,`p-label`,`Custom Field Placeholder`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldPattern`,`p-clean`,``,`p-help`,`Ex.: [a-z]`,`p-label`,`Custom Field Pattern`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldErrorPattern`,`p-clean`,``,`p-help`,"Ex.: Value doesn`t match expected",`p-label`,`Custom Field Error Pattern`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldComboUrl`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Custom Field URL`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldComboValue`,`p-clean`,``,`p-help`,`Property to specify the return field. Ex.: value, nickname, label`,`p-label`,`Custom Field Field Value`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldOptionLabel`,`p-clean`,``,`p-label`,`Custom Field Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldOptionValue`,`p-clean`,``,`p-label`,`Custom Field Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Custom Field Option`,1,`po-md-6`,`po-lg-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let d=YO();Qc(0,`po-page-login`,2),vt(`p-login-submit`,function(a){return i.loginSubmit(a)}),Kg(),vu(1,`po-divider`),Qc(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.literals,a)||(i.literals=a),U_(a)}),vt(`p-change`,function(){return i.changeLiterals()}),Kg(),Qc(6,`po-input`,5),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.productName,a)||(i.productName=a),U_(a)}),Kg()(),Qc(7,`div`,3)(8,`po-input`,6),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.loginPattern,a)||(i.loginPattern=a),U_(a)}),Kg(),Qc(9,`po-input`,7),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.login,a)||(i.login=a),U_(a)}),Kg()(),Qc(10,`div`,3)(11,`po-input`,8),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.exceededAttempts,a)||(i.exceededAttempts=a),U_(a)}),Kg(),Qc(12,`po-input`,9),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.passwordPattern,a)||(i.passwordPattern=a),U_(a)}),Kg()(),Qc(13,`div`,3)(14,`po-input`,10),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.contactEmail,a)||(i.contactEmail=a),U_(a)}),Kg(),Qc(15,`po-input`,11),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.environment,a)||(i.environment=a),U_(a)}),Kg()(),Qc(16,`div`,3)(17,`po-input`,12),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.logo,a)||(i.logo=a),U_(a)}),Kg(),Qc(18,`po-input`,13),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.secondaryLogo,a)||(i.secondaryLogo=a),U_(a)}),Kg()(),Qc(19,`div`,3)(20,`po-input`,14),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.background,a)||(i.background=a),U_(a)}),Kg(),Qc(21,`po-input`,15),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.support,a)||(i.support=a),U_(a)}),Kg()(),Qc(22,`div`,3)(23,`po-input`,16),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.recovery,a)||(i.recovery=a),U_(a)}),Kg(),Qc(24,`po-input`,17),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.registerUrl,a)||(i.registerUrl=a),U_(a)}),Kg()(),Qc(25,`div`,3)(26,`po-checkbox-group`,18),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.properties,a)||(i.properties=a),U_(a)}),Kg(),Qc(27,`po-radio-group`,19),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.componentsSize,a)||(i.componentsSize=a),U_(a)}),Kg()(),vu(28,`po-divider`,20),Qc(29,`div`,3)(30,`po-input`,21),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.loginError,a)||(i.loginError=a),U_(a)}),Kg(),Qc(31,`po-button`,22),vt(`p-click`,function(){return i.addLoginError()}),Kg()(),vu(32,`po-divider`,23),Qc(33,`div`,3)(34,`po-input`,24),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.passwordError,a)||(i.passwordError=a),U_(a)}),Kg(),Qc(35,`po-button`,25),vt(`p-click`,function(){return i.addPasswordError()}),Kg()(),vu(36,`po-divider`,26),Qc(37,`div`,3)(38,`po-input`,27),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.customField.property,a)||(i.customField.property=a),U_(a)}),vt(`p-change-model`,function(){return i.onChangeCustomProperties()}),Kg(),Qc(39,`po-input`,28),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.customField.value,a)||(i.customField.value=a),U_(a)}),Kg()(),Qc(40,`div`,3)(41,`po-input`,29),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.customField.placeholder,a)||(i.customField.placeholder=a),U_(a)}),Kg(),Qc(42,`po-input`,30),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.customField.pattern,a)||(i.customField.pattern=a),U_(a)}),Kg(),Qc(43,`po-input`,31),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.customField.errorPattern,a)||(i.customField.errorPattern=a),U_(a)}),Kg()(),vu(44,`po-divider`),Qc(45,`div`,3)(46,`po-input`,32),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.customField.url,a)||(i.customField.url=a),U_(a)}),vt(`p-change-model`,function(){return i.onChangeCustomProperties()}),Kg(),Qc(47,`po-input`,33),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.customField.fieldValue,a)||(i.customField.fieldValue=a),U_(a)}),vt(`p-change-model`,function(){return i.onChangeCustomProperties()}),Kg()(),vu(48,`po-divider`),Qc(49,`form`,null,1)(51,`div`,3)(52,`po-input`,34),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.customFieldOption.label,a)||(i.customFieldOption.label=a),U_(a)}),Kg(),Qc(53,`po-input`,35),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(i.customFieldOption.value,a)||(i.customFieldOption.value=a),U_(a)}),Kg()(),Qc(54,`div`,3)(55,`po-button`,36),vt(`p-click`,function(){return i.addCustomFieldOption()}),Kg()()(),vu(56,`br`)(57,`po-divider`),Qc(58,`div`,3)(59,`po-button`,37),vt(`p-click`,function(){return i.restore()}),Kg()()()}if(l&2){let d=ik(50);Rb(`p-background`,i.background)(`p-components-size`,i.componentsSize)(`p-contact-email`,i.contactEmail)(`p-custom-field`,i.customField)(`p-environment`,i.environment)(`p-exceeded-attempts-warning`,i.exceededAttempts)(`p-hide-remember-user`,i.properties.includes(`hideRememberUser`))(`p-loading`,i.properties.includes(`loading`))(`p-literals`,i.customLiterals)(`p-login`,i.login)(`p-login-errors`,i.loginErrors)(`p-login-pattern`,i.loginPattern)(`p-logo`,i.logo)(`p-password-errors`,i.passwordErrors)(`p-password-pattern`,i.passwordPattern)(`p-product-name`,i.productName)(`p-recovery`,i.recovery)(`p-register-url`,i.registerUrl)(`p-secondary-logo`,i.secondaryLogo)(`p-support`,i.support),wg(5),Yb(`ngModel`,i.literals),W0(),wg(),Yb(`ngModel`,i.productName),W0(),wg(2),Yb(`ngModel`,i.loginPattern),W0(),wg(),Yb(`ngModel`,i.login),W0(),wg(2),Yb(`ngModel`,i.exceededAttempts),W0(),wg(),Yb(`ngModel`,i.passwordPattern),W0(),wg(2),Yb(`ngModel`,i.contactEmail),W0(),wg(),Yb(`ngModel`,i.environment),W0(),wg(2),Yb(`ngModel`,i.logo),W0(),wg(),Yb(`ngModel`,i.secondaryLogo),W0(),wg(2),Yb(`ngModel`,i.background),W0(),wg(),Yb(`ngModel`,i.support),W0(),wg(2),Yb(`ngModel`,i.recovery),W0(),wg(),Yb(`ngModel`,i.registerUrl),W0(),wg(2),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),W0(),wg(),Yb(`ngModel`,i.componentsSize),Rb(`p-options`,i.componentsSizeOptions),W0(),wg(3),Yb(`ngModel`,i.loginError),W0(),wg(4),Yb(`ngModel`,i.passwordError),W0(),wg(4),Yb(`ngModel`,i.customField.property),W0(),wg(),Yb(`ngModel`,i.customField.value),W0(),wg(2),Yb(`ngModel`,i.customField.placeholder),W0(),wg(),Yb(`ngModel`,i.customField.pattern),W0(),wg(),Yb(`ngModel`,i.customField.errorPattern),W0(),wg(3),Yb(`ngModel`,i.customField.url),W0(),wg(),Yb(`ngModel`,i.customField.fieldValue),W0(),wg(5),Yb(`ngModel`,i.customFieldOption.label),W0(),wg(),Yb(`ngModel`,i.customFieldOption.value),W0(),wg(2),Rb(`p-disabled`,d.invalid)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,ta],encapsulation:2,changeDetection:1})}return r})();var Me=r=>({"docs-sample-code-tabs":r});var Se=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-page-login-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-page-login-labs/sample-po-page-login-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-login-labs/sample-po-page-login-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Login Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-login-labs/sample-po-page-login-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-login
  [p-background]="background"
  [p-components-size]="componentsSize"
  [p-contact-email]="contactEmail"
  [p-custom-field]="customField"
  [p-environment]="environment"
  [p-exceeded-attempts-warning]="exceededAttempts"
  [p-hide-remember-user]="properties.includes('hideRememberUser')"
  [p-loading]="properties.includes('loading')"
  [p-literals]="customLiterals"
  [p-login]="login"
  [p-login-errors]="loginErrors"
  [p-login-pattern]="loginPattern"
  [p-logo]="logo"
  [p-password-errors]="passwordErrors"
  [p-password-pattern]="passwordPattern"
  [p-product-name]="productName"
  [p-recovery]="recovery"
  [p-register-url]="registerUrl"
  [p-secondary-logo]="secondaryLogo"
  [p-support]="support"
  (p-login-submit)="loginSubmit($event)"
>
</po-page-login>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="productName"
      [(ngModel)]="productName"
      p-clean
      p-help="A custom name that succeeds the title"
      p-label="Product Name"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="loginPattern"
      [(ngModel)]="loginPattern"
      p-clean
      p-help="Ex.: ^[a-zA-Z]*$ (Only letters)"
      p-label="Login Pattern"
    >
    </po-input>

    <po-input class="po-lg-6" name="login" [(ngModel)]="login" p-clean p-help="Ex.: podev" p-label="Login"> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="exceededAttempts"
      [(ngModel)]="exceededAttempts"
      p-clean
      p-help="Ex.: 5"
      p-label="Exceeded Attempts Warning"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="passwordPattern"
      [(ngModel)]="passwordPattern"
      p-clean
      p-help="Ex.: ^(\\d*)$ (Only numbers)"
      p-label="Password Pattern"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="contactMail" [(ngModel)]="contactEmail" p-clean p-label="Contact Email"> </po-input>

    <po-input class="po-lg-6" name="environment" [(ngModel)]="environment" p-clean p-label="Environment"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="logo" [(ngModel)]="logo" p-clean p-label="Logo"> </po-input>

    <po-input class="po-lg-6" name="secondaryLogo" [(ngModel)]="secondaryLogo" p-clean p-label="Secondary logo">
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="background" [(ngModel)]="background" p-clean p-label="Background"> </po-input>

    <po-input class="po-lg-6" name="support" [(ngModel)]="support" p-clean p-label="Support"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="recovery" [(ngModel)]="recovery" p-clean p-label="Recovery"> </po-input>

    <po-input class="po-lg-6" name="registerUrl" [(ngModel)]="registerUrl" p-clean p-label="Register URL"> </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12 po-lg-6"
      name="componentsSize"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <po-divider p-label="Login Errors"></po-divider>

  <div class="po-row">
    <po-input class="po-md-8" name="loginError" [(ngModel)]="loginError" p-clean p-label="Login Error"> </po-input>

    <po-button class="po-md-4 po-mt-4" p-label="Add Login Error" (p-click)="addLoginError()"> </po-button>
  </div>

  <po-divider p-label="Password Errors"></po-divider>

  <div class="po-row">
    <po-input class="po-lg-8" name="passwordError" [(ngModel)]="passwordError" p-clean p-label="Password Error">
    </po-input>

    <po-button class="po-md-4 po-mt-4" p-label="Add Password Error" (p-click)="addPasswordError()"> </po-button>
  </div>

  <po-divider p-label="Custom Field"></po-divider>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="customFieldProperty"
      [(ngModel)]="customField.property"
      p-clean
      p-help="Ex.: domain"
      p-label="Custom Field Property"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="customFieldValue"
      [(ngModel)]="customField.value"
      p-clean
      p-help="Ex.: JV01"
      p-label="Custom Field Value"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-4"
      name="customFieldPlaceholder"
      [(ngModel)]="customField.placeholder"
      p-clean
      p-help="Ex.: Enter your domain"
      p-label="Custom Field Placeholder"
    >
    </po-input>

    <po-input
      class="po-lg-4"
      name="customFieldPattern"
      [(ngModel)]="customField.pattern"
      p-clean
      p-help="Ex.: [a-z]"
      p-label="Custom Field Pattern"
    >
    </po-input>

    <po-input
      class="po-lg-4"
      name="customFieldErrorPattern"
      [(ngModel)]="customField.errorPattern"
      p-clean
      p-help="Ex.: Value doesn\`t match expected"
      p-label="Custom Field Error Pattern"
    >
    </po-input>
  </div>

  <po-divider />

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="customFieldComboUrl"
      [(ngModel)]="customField.url"
      p-clean
      p-help="Ex.: https://po-sample-api.onrender.com/v1/heroes"
      p-label="Custom Field URL"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="customFieldComboValue"
      [(ngModel)]="customField.fieldValue"
      p-clean
      p-help="Property to specify the return field. Ex.: value, nickname, label"
      p-label="Custom Field Field Value"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>
  </div>

  <po-divider />

  <form #formCustomFieldOptions="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="customFieldOptionLabel"
        [(ngModel)]="customFieldOption.label"
        p-clean
        p-label="Custom Field Option Label"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-6"
        name="customFieldOptionValue"
        [(ngModel)]="customFieldOption.value"
        p-clean
        p-label="Custom Field Option Value"
        p-required
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-6 po-lg-4"
        p-label="Add Custom Field Option"
        [p-disabled]="formCustomFieldOptions.invalid"
        (p-click)="addCustomFieldOption()"
      >
      </po-button>
    </div>
  </form>

  <br />

  <po-divider />

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-login-labs/sample-po-page-login-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoDialogService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { PoPageLogin, PoPageLoginCustomField, PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-login-labs',
  templateUrl: './sample-po-page-login-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  background: string;
  componentsSize: string;
  contactEmail: string;
  customField: PoPageLoginCustomField;
  customFieldOption: any;
  customFieldOptions: Array<PoSelectOption>;
  customLiterals: PoPageLoginLiterals;
  environment: string;
  exceededAttempts: number;
  secondaryLogo: string;
  literals: string;
  login: string;
  loginPattern: string;
  loginError: string;
  loginErrors: Array<string>;
  logo: string;
  passwordError: string;
  passwordErrors: Array<string>;
  passwordPattern: string;
  productName: string;
  properties: Array<string>;
  recovery: string;
  registerUrl: string;
  support: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'hideRememberUser', label: 'Hide remember user' },
    { value: 'loading', label: 'Loading' }
  ];

  ngOnInit() {
    this.restore();
  }

  addCustomFieldOption() {
    this.customFieldOptions.push({ label: this.customFieldOption.label, value: this.customFieldOption.value });
    this.customField.options = this.customFieldOptions;
    this.onChangeCustomProperties();

    this.customFieldOption = {};
  }

  addLoginError() {
    this.loginErrors.push(this.loginError);
    this.loginError = '';
  }

  addPasswordError() {
    this.passwordErrors.push(this.passwordError);
    this.passwordError = '';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  loginSubmit(formData: PoPageLogin) {
    if (this.exceededAttempts <= 0) {
      this.poDialog.alert({
        title: 'Authenticate',
        message: JSON.stringify(formData),
        componentsSize: this.componentsSize
      });
    }
  }

  onChangeCustomProperties() {
    this.customField = Object.assign({}, this.customField);
  }

  restore() {
    this.properties = [];
    this.background = '';
    this.componentsSize = 'medium';
    this.contactEmail = '';
    this.customField = { property: undefined };
    this.customFieldOption = { label: undefined, value: undefined };
    this.customFieldOptions = [];
    this.customLiterals = undefined;
    this.environment = '';
    this.exceededAttempts = 0;
    this.secondaryLogo = undefined;
    this.literals = '';
    this.login = '';
    this.loginPattern = '';
    this.loginError = '';
    this.loginErrors = [];
    this.logo = undefined;
    this.passwordError = '';
    this.passwordErrors = [];
    this.passwordPattern = '';
    this.passwordError = '';
    this.passwordErrors = [];
    this.productName = '';
    this.recovery = '';
    this.registerUrl = '';
    this.support = '';
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-page-login-labs`),Kg(),vu(25,`hr`)),l&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Me,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ee],encapsulation:2,changeDetection:1})}return r})();function ke(r,J){if(r&1){let p=YO();Qc(0,`po-page-login`,6),vt(`p-login-change`,function(){B_(p);let i=ek();return U_(i.loginChange())})(`p-login-submit`,function(i){B_(p);let d=ek();return U_(d.checkLogin(i))})(`p-password-change`,function(){B_(p);let i=ek();return U_(i.passwordChange())}),Kg()}if(r&2){let p=ek();Rb(`p-custom-field`,p.customField)(`p-exceeded-attempts-warning`,p.exceededAttempts)(`p-literals`,p.literalsI18n)(`p-loading`,p.loading)(`p-password-errors`,p.passwordErrors)(`p-login-errors`,p.loginErrors)(`p-recovery`,p.passwordRecovery)}}function De(r,J){if(r&1&&vu(0,`po-page-blocked-user`,5),r&2){let p=ek();Rb(`p-params`,p.params)}}var he=(()=>{class r{poI18nService=p(F4);poDialog=p(sie);customField={property:`domain`,placeholder:`Enter your domain`};attempts=3;exceededAttempts;literalsI18n;loading=!1;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:`https://po-sample-api.onrender.com/v1/users`,type:ie.All,contactMail:`support@mail.com`};showPageBlocked=!1;i18nSubscription;ngOnDestroy(){this.i18nSubscription.unsubscribe()}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(p=>{this.literalsI18n=p,this.exceededAttempts=0})}checkLogin(p){this.loading=!0,p.login===`devpo`&&p.password===`1986`?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=!1,title:`Access released`,message:`You are on vacation, take time to rest.`})},3e3)):(this.loading=!1,this.generateAttempts(),this.passwordErrors=[`Senha e/ou usuário inválido, verifique e tente novamente.`],this.loginErrors=[`Senha e/ou usuário inválido, verifique e tente novamente.`])}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[])}loginChange(){this.loginErrors.length&&(this.loginErrors=[])}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=!0)}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-human-resources`]],standalone:!1,decls:7,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your ID Sample Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`p-hide-remember-user`,``,`p-login-pattern`,`^[a-zA-Z]*$`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-password-pattern`,`^(\\d*)$`,`p-product-name`,`Human Resources`,`p-register-url`,`http://po.com`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-custom-field`,`p-exceeded-attempts-warning`,`p-literals`,`p-loading`,`p-password-errors`,`p-login-errors`,`p-recovery`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`exceededAttempts`,`p-url-back`,`https://po-ui.io/documentation/po-page-login`,3,`p-params`],[`p-hide-remember-user`,``,`p-login-pattern`,`^[a-zA-Z]*$`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-password-pattern`,`^(\\d*)$`,`p-product-name`,`Human Resources`,`p-register-url`,`http://po.com`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-change`,`p-login-submit`,`p-password-change`,`p-custom-field`,`p-exceeded-attempts-warning`,`p-literals`,`p-loading`,`p-password-errors`,`p-login-errors`,`p-recovery`]],template:function(l,i){l&1&&(Qc(0,`po-container`)(1,`div`,0),vu(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),Kg()(),FO(5,ke,1,7,`po-page-login`,4),FO(6,De,1,1,`po-page-blocked-user`,5)),l&2&&(wg(5),VO(i.showPageBlocked?-1:5),wg(),VO(i.showPageBlocked?6:-1))},dependencies:[Fc,Joe,Gn,ta],encapsulation:2,changeDetection:1})}return r})();var Ae=r=>({"docs-sample-code-tabs":r});var xe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-human-resources-view`]],standalone:!1,decls:31,vars:6,consts:[[`id`,`sample-po-page-login-human-resources`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts`,1,`docs-code-block`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Login - Human Resources`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your ID Sample Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

@if (!showPageBlocked) {
  <po-page-login
    p-hide-remember-user
    p-login-pattern="^[a-zA-Z]*$"
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-password-pattern="^(\\d*)$"
    p-product-name="Human Resources"
    p-register-url="http://po.com"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    [p-custom-field]="customField"
    [p-exceeded-attempts-warning]="exceededAttempts"
    [p-literals]="literalsI18n"
    [p-loading]="loading"
    [p-password-errors]="passwordErrors"
    [p-login-errors]="loginErrors"
    [p-recovery]="passwordRecovery"
    (p-login-change)="loginChange()"
    (p-login-submit)="checkLogin($event)"
    (p-password-change)="passwordChange()"
  >
  </po-page-login>
}

@if (showPageBlocked) {
  <po-page-blocked-user
    p-contact-email="user@po-ui.com.br"
    p-contact-phone="0800 709 8100"
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-reason="exceededAttempts"
    p-url-back="https://po-ui.io/documentation/po-page-login"
    [p-params]="params"
  >
  </po-page-blocked-user>
}
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { Subscription } from 'rxjs';

import { PoDialogService, PoI18nService } from '@po-ui/ng-components';
import {
  PoModalPasswordRecoveryType,
  PoPageBlockedUserReasonParams,
  PoPageLoginCustomField,
  PoPageLoginLiterals,
  PoPageLoginRecovery
} from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-login-human-resources',
  templateUrl: './sample-po-page-login-human-resources.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginHumanResourcesComponent implements OnDestroy, OnInit {
  private poI18nService = inject(PoI18nService);
  private poDialog = inject(PoDialogService);

  customField: PoPageLoginCustomField = {
    property: 'domain',
    placeholder: 'Enter your domain'
  };

  attempts = 3;
  exceededAttempts: number;
  literalsI18n: PoPageLoginLiterals;
  loading: boolean = false;
  loginErrors = [];
  passwordErrors = [];
  params: PoPageBlockedUserReasonParams = { attempts: 3, hours: 24 };
  passwordRecovery: PoPageLoginRecovery = {
    url: 'https://po-sample-api.onrender.com/v1/users',
    type: PoModalPasswordRecoveryType.All,
    contactMail: 'support@mail.com'
  };
  showPageBlocked: boolean = false;

  private i18nSubscription: Subscription;

  ngOnDestroy() {
    this.i18nSubscription.unsubscribe();
  }

  ngOnInit() {
    this.i18nSubscription = this.poI18nService.getLiterals().subscribe(literals => {
      this.literalsI18n = literals;
      this.exceededAttempts = 0;
    });
  }

  checkLogin(formData) {
    this.loading = true;

    if (formData.login === 'devpo' && formData.password === '1986') {
      this.passwordErrors = [];
      this.exceededAttempts = 0;
      this.loginErrors = [];

      setTimeout(() => {
        this.poDialog.alert({
          ok: () => (this.loading = false),
          title: 'Access released',
          message: 'You are on vacation, take time to rest.'
        });
      }, 3000);
    } else {
      this.loading = false;
      this.generateAttempts();
      this.passwordErrors = ['Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente.'];
      this.loginErrors = ['Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente.'];
    }
  }

  passwordChange() {
    if (this.passwordErrors.length) {
      this.passwordErrors = [];
    }
  }

  loginChange() {
    if (this.loginErrors.length) {
      this.loginErrors = [];
    }
  }

  private generateAttempts() {
    if (this.attempts >= 1) {
      this.attempts--;
      this.exceededAttempts = this.attempts;
    }
    if (this.attempts === 0) {
      this.showPageBlocked = true;
    }
  }
}
`),Kg()(),Qc(23,`label`,6),Sk(24,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts`),Kg(),Qc(25,`div`,12)(26,`pre`,11),Sk(27,`/**
 * Exemplo de configura\xE7\xE3o de um m\xF3dulo com i18n.
 */

// import { NgModule } from '@angular/core';

// import { PoModule } from '@po-ui/ng-components/po.module';
// import { PoI18nConfig, PoI18nModule } from '@po-ui/ng-components/services/po-i18n';

// import { SamplePoPageLoginHumanResourcesComponent } from './sample-po-page-login-human-resources.component';

// const humanResourcesEnLiterals = {
//   loginErrorPattern: 'Invalid ID',
//   loginPlaceholder: 'Insert your ID',
//   passwordErrorPattern: 'Invalid PIN',
//   passwordPlaceholder: 'Insert your PIN',
//   submitLabel: 'Access your account',
//   forgotPassword: 'Forgot your ID or PIN?',
//   highlightInfo: 'For us the future is now'
// };

// const humanResourcesEsLiterals = {
//   loginErrorPattern: 'ID invalido',
//   loginPlaceholder: 'Inserte su ID',
//   passwordErrorPattern: 'Contrase\xF1a incorrecta',
//   passwordPlaceholder: 'Inserte su contrase\xF1a',
//   submitLabel: 'Accede a su cuenta',
//   forgotPassword: '\xBFOlvid\xF3 su ID o contrase\xF1a?',
//   highlightInfo: 'Para nosotros el futuro es ahora'
// };

// const humanResourcesPtLiterals = {
// loginErrorPattern: 'ID inv\xE1lido',
//   loginPlaceholder: 'Insira seu ID',
//   passwordErrorPattern: 'Senha incorreta',
//   passwordPlaceholder: 'Insira sua senha',
//   submitLabel: 'Acesse a sua conta',
//   forgotPassword: 'Esqueceu seu ID ou sua senha?',
//   highlightInfo: 'Para n\xF3s o futuro \xE9 agora'
// };

// const poI18nConfig: PoI18nConfig = {
//   contexts: {
//     general: {
//       'en': humanResourcesEnLiterals,
//       'es': humanResourcesEsLiterals,
//       'pt': humanResourcesPtLiterals,
//     }
//   },
//   default: {
//    context: 'general',
//    cache: true
//   }
// };

// @NgModule({
//   imports: [
//     PoModule,
//     PoI18nModule.config(poI18nConfig)
//   ],
//   declarations: [
//     SamplePoPageLoginHumanResourcesComponent
//   ],
//   exports: [],
//   providers: []
// })
// export class SamplePoPageLoginHumanResourcesModule { }
`),Kg()()()()()(),Qc(28,`div`,13),vu(29,`sample-po-page-login-human-resources`),Kg(),vu(30,`hr`)),l&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ae,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,he],encapsulation:2,changeDetection:1})}return r})();var be=(()=>{class r$1{literals;japoneseLiterals={welcome:`ようこそ`,loginLabel:`ユーザー名を入力してください`,loginPlaceholder:`アクセスユーザーを入力してください`,passwordErrorPattern:`パスワードが必要`,passwordLabel:`パスワードを入力してください`,passwordPlaceholder:`パスワードを入力してください`,submitLabel:`アクセスシステム`,submittedLabel:`ローディング中 ...`,rememberUser:`自動的にログイン`,rememberUserHint:`このオプションはシステムメニューで無効にできます`,loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:`pt`,description:`Português`},{language:`jp`,description:`日本語`}];changeLanguage(p){p?.language===`jp`?this.literals=r({},this.japoneseLiterals):this.literals={}}static ɵfac=function(l){return new(l||r$1)};static ɵcmp=Jn({type:r$1,selectors:[[`sample-po-page-login-automatic-service`]],standalone:!1,decls:5,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your ID Sample Login`,`p-value`,`admin`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample Password`,`p-value`,`admin`,1,`po-md-2`],[`p-authentication-url`,`https://po-sample-api.onrender.com/v1/users/authentication`,`p-blocked-url`,`/documentation/po-page-blocked-user`,`p-authentication-type`,`Bearer`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-language-change`,`p-languages`,`p-literals`]],template:function(l,i){l&1&&(Qc(0,`po-container`)(1,`div`,0),vu(2,`po-info`,1)(3,`po-info`,2),Kg()(),Qc(4,`po-page-login`,3),vt(`p-language-change`,function(m){return i.changeLanguage(m)}),Kg()),l&2&&(wg(4),Rb(`p-languages`,i.languages)(`p-literals`,i.literals))},dependencies:[Fc,Joe,ta],encapsulation:2,changeDetection:1})}return r$1})();var Be=r=>({"docs-sample-code-tabs":r});var ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-automatic-service-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-page-login-automatic-service`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Login - Automatic Service`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your ID Sample Login" p-value="admin"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample Password" p-value="admin"></po-info>
  </div>
</po-container>
<po-page-login
  p-authentication-url="https://po-sample-api.onrender.com/v1/users/authentication"
  p-blocked-url="/documentation/po-page-blocked-user"
  p-authentication-type="Bearer"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  [p-languages]="languages"
  [p-literals]="literals"
  (p-language-change)="changeLanguage($event)"
>
</po-page-login>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoLanguage } from '@po-ui/ng-components';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-login-automatic-service',
  templateUrl: './sample-po-page-login-automatic-service.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginAutomaticServiceComponent {
  literals: PoPageLoginLiterals;
  japoneseLiterals: PoPageLoginLiterals = {
    welcome: '\u3088\u3046\u3053\u305D',
    loginLabel: '\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    loginPlaceholder: '\u30A2\u30AF\u30BB\u30B9\u30E6\u30FC\u30B6\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    passwordErrorPattern: '\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981',
    passwordLabel: '\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    passwordPlaceholder: '\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    submitLabel: '\u30A2\u30AF\u30BB\u30B9\u30B7\u30B9\u30C6\u30E0',
    submittedLabel: '\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D ...',
    rememberUser: '\u81EA\u52D5\u7684\u306B\u30ED\u30B0\u30A4\u30F3',
    rememberUserHint: '\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30B7\u30B9\u30C6\u30E0\u30E1\u30CB\u30E5\u30FC\u3067\u7121\u52B9\u306B\u3067\u304D\u307E\u3059',
    loginHint: \`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\`
  };

  languages: Array<PoLanguage> = [
    { language: 'pt', description: 'Portugu\xEAs' },
    { language: 'jp', description: '\u65E5\u672C\u8A9E' }
  ];

  changeLanguage(language: PoLanguage) {
    if (language?.language === 'jp') {
      this.literals = { ...this.japoneseLiterals };
    } else {
      this.literals = {};
    }
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-page-login-automatic-service`),Kg(),vu(25,`hr`)),l&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Be,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,be],encapsulation:2,changeDetection:1})}return r})();var Pe=(()=>{class r{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-doc`]],standalone:!1,decls:1897,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-login-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-authentication-type`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginAuthenticationType`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-authentication-url`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-background`,1,`docs-api-properties-row`],[`id`,`prop-p-blocked-url`,1,`docs-api-properties-row`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-contact-email`,1,`docs-api-properties-row`],[`id`,`prop-p-custom-field`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginCustomField`],[`id`,`prop-p-environment`,1,`docs-api-properties-row`],[`id`,`prop-p-exceeded-attempts-warning`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-hide-label-status`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-hide-password-peek`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-remember-user`,1,`docs-api-properties-row`],[`id`,`event-p-language-change`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-languages`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLanguage>`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginLiterals`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-login`,1,`docs-api-properties-row`],[`id`,`event-p-login-change`,1,`docs-api-properties-row`],[`id`,`prop-p-login-errors`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string[]`],[`id`,`prop-p-login-pattern`,1,`docs-api-properties-row`],[`id`,`event-p-login-submit`,1,`docs-api-properties-row`],[`id`,`prop-p-logo`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete-login`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete-password`,1,`docs-api-properties-row`],[`id`,`event-p-password-change`,1,`docs-api-properties-row`],[`id`,`prop-p-password-errors`,1,`docs-api-properties-row`],[`id`,`prop-p-password-pattern`,1,`docs-api-properties-row`],[`id`,`prop-p-product-name`,1,`docs-api-properties-row`],[`id`,`prop-p-recovery`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginRecovery`],[`id`,`prop-p-register-url`,1,`docs-api-properties-row`],[`id`,`prop-p-secondary-logo`,1,`docs-api-properties-row`],[`id`,`prop-p-support`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-custom-field`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-login-custom-field-error-pattern`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-custom-field-field-value`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-custom-field-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`id`,`interface-po-page-login-custom-field-pattern`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-custom-field-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-custom-field-property`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-custom-field-url`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-custom-field-value`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-login-literals-attempts`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-create-anew-password-now`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-custom-field-error-pattern`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-custom-field-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-forgot-password`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-forgot-your-password`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-highlight-info`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-i-forgot-my-password`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-if-you-try-harder`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-login-error-pattern`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-login-hint`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-login-label`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-login-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-password-error-pattern`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-password-label`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-password-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-register-url`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-remember-user`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-remember-user-hint`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-submit-label`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-submitted-label`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-support`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-title-popover`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-welcome`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-your-user-will-be-blocked`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-recovery`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-login-recovery-contact-mail`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-recovery-phone-mask`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-recovery-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`href`,`/documentation/po-modal-password-recovery`],[`id`,`interface-po-page-login-recovery-url`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-login-login`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-password`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-remember-user`,1,`docs-api-properties-row`],[`id`,`enum-po-page-login-authentication-type`,1,`docs-api-class-name`],[`id`,`enum-po-page-login-authentication-type-basic`,1,`docs-api-properties-row`],[`id`,`enum-po-page-login-authentication-type-bearer`,1,`docs-api-properties-row`]],template:function(l,i){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoPageLoginModule } from '@po-ui/ng-templates';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do template do po-page-login.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoPageLoginComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-page-login`),Kg(),Sk(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),Kg(),Qc(18,`p`),Sk(19,`A propriedade `),Qc(20,`code`),Sk(21,`p-authentication-url`),Kg(),Sk(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),Qc(23,`em`),Sk(24,`client side`),Kg(),Sk(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),Qc(26,`em`),Sk(27,`propriedades`),Kg(),Sk(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),Kg(),Qc(29,`p`),Sk(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Qc(31,`em`),Sk(32,`assets`),Kg(),Sk(33,` no arquivo `),Qc(34,`strong`),Sk(35,`angular.json`),Kg(),Sk(36,` da aplicação na seguinte ordem:`),Kg(),Qc(37,`pre`)(38,`code`),Sk(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),Kg()()(),Qc(40,`div`,6)(41,`h4`,7),Sk(42,`Seletor`),Kg(),Qc(43,`pre`,8),Sk(44,`<po-page-login
    p-authentication-type="PoPageLoginAuthenticationType"
    p-authentication-url="string"
    p-background="string"
    p-blocked-url="string"
    p-components-size="string"
    p-contact-email="string"
    p-custom-field="string | PoPageLoginCustomField"
    p-environment="string"
    p-exceeded-attempts-warning="number"
    p-hide-label-status="boolean"
    p-hide-password-peek="boolean"
    p-hide-remember-user="boolean"
    (p-language-change)="EventEmitter"
    p-languages="Array<PoLanguage>"
    p-literals="PoPageLoginLiterals"
    p-loading="boolean"
    p-login="string"
    (p-login-change)="EventEmitter"
    p-login-errors="string[]"
    p-login-pattern="string"
    (p-login-submit)="EventEmitter"
    p-logo="string"
    p-no-autocomplete-login="boolean"
    p-no-autocomplete-password="boolean"
    (p-password-change)="EventEmitter"
    p-password-errors="string[]"
    p-password-pattern="string"
    p-product-name="string"
    p-recovery="string | Function | PoPageLoginRecovery"
    p-register-url="string"
    p-secondary-logo="string"
    p-support="string | Function" >
</po-page-login>
`),Kg()(),Qc(45,`h4`,9),Sk(46,`Propriedades`),Kg(),Qc(47,`table`,10)(48,`tr`,11)(49,`th`,12),Sk(50,`Nome`),Kg(),Qc(51,`th`,12),Sk(52,`Tipo`),Kg(),Qc(53,`th`,12),Sk(54,`Padrão`),Kg(),Qc(55,`th`,12),Sk(56,`Descrição`),Kg()(),Qc(57,`tr`,13)(58,`td`,14)(59,`div`,15)(60,`span`,16),Sk(61,` p-authentication-type`),vu(62,`br`),Kg()()(),Qc(63,`td`,17)(64,`code`,18),Sk(65,`PoPageLoginAuthenticationType`),Kg()(),Qc(66,`td`,19)(67,`p`)(68,`code`),Sk(69,`PoPageLoginAuthenticationType.Basic`),Kg()()(),Qc(70,`td`,20)(71,`em`)(72,`strong`),Sk(73,`(opcional)`),Kg()(),Qc(74,`p`),Sk(75,`Atributo que recebe o tipo de esquema da autenticação, sendo suportados apenas os valores `),Qc(76,`code`),Sk(77,`Basic`),Kg(),Sk(78,` e `),Qc(79,`code`),Sk(80,`Bearer`),Kg(),Sk(81,`.`),Kg(),Qc(82,`blockquote`)(83,`p`),Sk(84,`Caso o tipo definido seja `),Qc(85,`code`),Sk(86,`Basic`),Kg(),Sk(87,`, o componente fará uma requisição `),Qc(88,`code`),Sk(89,`POST`),Kg(),Sk(90,` contendo:`),Kg()(),Qc(91,`pre`)(92,`code`),Sk(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),Kg()(),Qc(94,`blockquote`)(95,`p`),Sk(96,`Caso o tipo definido seja `),Qc(97,`code`),Sk(98,`Bearer`),Kg(),Sk(99,`, o componente fará uma requisição `),Qc(100,`code`),Sk(101,`POST`),Kg(),Sk(102,` contendo:`),Kg()(),Qc(103,`pre`)(104,`code`),Sk(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}
`),Kg()()()(),Qc(106,`tr`,21)(107,`td`,14)(108,`div`,15)(109,`span`,16),Sk(110,` p-authentication-url`),vu(111,`br`),Kg()()(),Qc(112,`td`,17)(113,`code`,22),Sk(114,`string`),Kg()(),Qc(115,`td`,19),Sk(116,`-`),Kg(),Qc(117,`td`,20)(118,`em`)(119,`strong`),Sk(120,`(opcional)`),Kg()(),Qc(121,`p`),Sk(122,`Endpoint usado pelo template para requisição do recurso. Quando preenchido, o método `),Qc(123,`code`),Sk(124,`p-login-submit`),Kg(),Sk(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),Kg(),Qc(126,`h3`),Sk(127,`Processos`),Kg(),Qc(128,`p`),Sk(129,`Ao digitar um valor válido no campo de login/password e pressionar `),Qc(130,`strong`),Sk(131,`Enter`),Kg(),Sk(132,`, o componente fará uma requisição `),Qc(133,`code`),Sk(134,`POST`),Kg(),Sk(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),Kg(),Qc(136,`pre`)(137,`code`),Sk(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),Kg()(),Qc(139,`p`),Sk(140,`Em caso de `),Qc(141,`strong`),Sk(142,`sucesso`),Kg(),Sk(143,`, o objeto de retorno é armazenado no `),Qc(144,`code`),Sk(145,`sessionStorage`),Kg(),Sk(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),Qc(147,`code`),Sk(148,`/`),Kg(),Sk(149,`.`),Kg(),Qc(150,`pre`)(151,`code`),Sk(152,`200:
{
  user: user
}
`),Kg()(),Qc(153,`p`),Sk(154,`Em caso de `),Qc(155,`strong`),Sk(156,`erro`),Kg(),Sk(157,` na autenticação, espera-se o seguinte retorno:`),Kg(),Qc(158,`pre`)(159,`code`),Sk(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}
`),Kg()(),Qc(161,`blockquote`)(162,`p`),Sk(163,`Pode-se atribuir uma quantidade máxima de tentativas restantes (maxAttemptsRemaining) para o atributo `),Qc(164,`code`),Sk(165,`p-exceeded-attempts-warning`),Kg(),Sk(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),Qc(167,`code`),Sk(168,`p-login-errors`),Kg(),Sk(169,` e
`),Qc(170,`code`),Sk(171,`p-password-errors`),Kg(),Sk(172,` conforme retorno abaixo:`),Kg()(),Qc(173,`pre`)(174,`code`),Sk(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}
`),Kg()(),Qc(176,`blockquote`)(177,`p`),Sk(178,`Caso o valor atribuído para `),Qc(179,`code`),Sk(180,`p-exceeded-attempts-warning`),Kg(),Sk(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),Qc(182,`code`),Sk(183,`p-blocked-url`),Kg(),Sk(184,` e o usuário será redirecionado para uma tela de bloqueio.`),Kg()(),Qc(185,`p`)(186,`em`),Sk(187,`Processo finalizado.`),Kg()(),vu(188,`hr`),Qc(189,`h4`),Sk(190,`Praticidade`),Kg(),Qc(191,`p`),Sk(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Qc(193,`code`),Sk(194,`po-page-login`),Kg(),Sk(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),Qc(196,`code`),Sk(197,`/login`),Kg(),Sk(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),Kg(),Qc(199,`pre`)(200,`code`),Sk(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'login', component: PoPageLoginComponent, data: {
      serviceApi: 'https://po-ui.io/sample/api/users/authentication',
      environment: 'development',
      recovery: {
        url: 'https://po-ui.io/sample/api/users',
        type: PoModalPasswordRecoveryType.All,
        contactMail: 'dev.po@po-ui.com',
        phoneMask: '9-999-999-9999'
      },
      registerUrl: '/new-password',
      authenticationType: PoPageLoginAthenticationType.Basic
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`),Kg()(),Qc(202,`p`),Sk(203,`O metadado `),Qc(204,`code`),Sk(205,`serviceApi`),Kg(),Sk(206,` deve ser a `),Qc(207,`strong`),Sk(208,`url`),Kg(),Sk(209,` para requisição dos recursos de autenticação, o `),Qc(210,`code`),Sk(211,`environment`),Kg(),Sk(212,` alimenta a propriedade
`),Qc(213,`code`),Sk(214,`p-environment`),Kg(),Sk(215,`, `),Qc(216,`code`),Sk(217,`recovery`),Kg(),Sk(218,` é a interface `),Qc(219,`code`),Sk(220,`PoPageLoginRecovery`),Kg(),Sk(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),Qc(222,`code`),Sk(223,`registerUrl`),Kg(),Sk(224,` alimenta a propriedade `),Qc(225,`code`),Sk(226,`p-register-url`),Kg(),Sk(227,` e `),Qc(228,`code`),Sk(229,`authenticationType`),Kg(),Sk(230,` que define a propriedade `),Qc(231,`code`),Sk(232,`p-authentication-type`),Kg(),Sk(233,`.`),Kg(),Qc(234,`blockquote`)(235,`p`),Sk(236,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.`),Kg()()()(),Qc(237,`tr`,23)(238,`td`,14)(239,`div`,15)(240,`span`,16),Sk(241,` p-background`),vu(242,`br`),Kg()()(),Qc(243,`td`,17)(244,`code`,22),Sk(245,`string`),Kg()(),Qc(246,`td`,19),Sk(247,`-`),Kg(),Qc(248,`td`,20)(249,`em`)(250,`strong`),Sk(251,`(opcional)`),Kg()(),Qc(252,`p`),Sk(253,`O `),Qc(254,`code`),Sk(255,`p-background`),Kg(),Sk(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),Kg(),Qc(257,`p`),Sk(258,`A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo.`),Kg(),Qc(259,`p`),Sk(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),Qc(261,`code`),Sk(262,`highlightInfo`),Kg(),Sk(263,`.`),Kg(),Qc(264,`blockquote`)(265,`p`),Sk(266,`Veja mais sobre as literais na propriedade `),Qc(267,`code`),Sk(268,`p-literals`),Kg(),Sk(269,`.`),Kg()(),Qc(270,`p`),Sk(271,`Exemplos de valores válidos:`),Kg(),Qc(272,`ul`)(273,`li`)(274,`strong`),Sk(275,`local`),Kg(),Sk(276,`: `),Qc(277,`code`),Sk(278,`./assets/images/login-background.png`),Kg()(),Qc(279,`li`)(280,`strong`),Sk(281,`url externa`),Kg(),Sk(282,`: `),Qc(283,`code`),Sk(284,`https://po-ui.io/assets/images/login-background.png`),Kg()()(),Qc(285,`blockquote`)(286,`p`),Sk(287,`Essa propriedade é ignorada para aplicações mobile.`),Kg()()()(),Qc(288,`tr`,24)(289,`td`,14)(290,`div`,15)(291,`span`,16),Sk(292,` p-blocked-url`),vu(293,`br`),Kg()()(),Qc(294,`td`,17)(295,`code`,22),Sk(296,`string`),Kg()(),Qc(297,`td`,19),Sk(298,`-`),Kg(),Qc(299,`td`,20)(300,`em`)(301,`strong`),Sk(302,`(opcional)`),Kg()(),Qc(303,`p`),Sk(304,`Caso o valor atribuído para `),Qc(305,`code`),Sk(306,`p-exceeded-attempts-warning`),Kg(),Sk(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),Kg()()(),Qc(308,`tr`,25)(309,`td`,14)(310,`div`,15)(311,`span`,16),Sk(312,` p-components-size`),vu(313,`br`),Kg()()(),Qc(314,`td`,17)(315,`code`,22),Sk(316,`string`),Kg()(),Qc(317,`td`,19)(318,`p`)(319,`code`),Sk(320,`medium`),Kg()()(),Qc(321,`td`,20)(322,`em`)(323,`strong`),Sk(324,`(opcional)`),Kg()(),Qc(325,`p`),Sk(326,`Define o tamanho dos componentes de formulário no template:`),Kg(),Qc(327,`ul`)(328,`li`)(329,`code`),Sk(330,`small`),Kg(),Sk(331,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(332,`li`)(333,`code`),Sk(334,`medium`),Kg(),Sk(335,`: aplica a medida medium de cada componente.`),Kg()(),Qc(336,`blockquote`)(337,`p`),Sk(338,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(339,`code`),Sk(340,`medium`),Kg(),Sk(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(342,`a`,26),Sk(343,`po-theme`),Kg(),Sk(344,`.`),Kg()()()(),Qc(345,`tr`,27)(346,`td`,14)(347,`div`,15)(348,`span`,16),Sk(349,` p-contact-email`),vu(350,`br`),Kg()()(),Qc(351,`td`,17)(352,`code`,22),Sk(353,`string`),Kg()(),Qc(354,`td`,19),Sk(355,`-`),Kg(),Qc(356,`td`,20)(357,`em`)(358,`strong`),Sk(359,`(opcional)`),Kg()(),Qc(360,`p`),Sk(361,`Personaliza o e-mail que é exibido na mensagem de dica de login padrão para contato de suporte.`),Kg()()(),Qc(362,`tr`,28)(363,`td`,14)(364,`div`,15)(365,`span`,16),Sk(366,` p-custom-field`),vu(367,`br`),Kg()()(),Qc(368,`td`,17)(369,`code`,22),Sk(370,`string `),Kg(),Qc(371,`code`,29),Sk(372,` PoPageLoginCustomField`),Kg()(),Qc(373,`td`,19),Sk(374,`-`),Kg(),Qc(375,`td`,20)(376,`em`)(377,`strong`),Sk(378,`(opcional)`),Kg()(),Qc(379,`p`),Sk(380,`Ao informar um valor do tipo `),Qc(381,`code`),Sk(382,`string`),Kg(),Sk(383,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),Qc(384,`code`),Sk(385,`literals`),Kg(),Sk(386,` como `),Qc(387,`code`),Sk(388,`customFieldErrorPattern`),Kg(),Sk(389,` e `),Qc(390,`code`),Sk(391,`customFieldPlaceholder`),Kg(),Sk(392,`.`),Kg(),Qc(393,`p`),Sk(394,`Existe a possibilidade de informar um objeto que segue a definição da interface `),Qc(395,`code`),Sk(396,`PoPageLoginCustomField`),Kg(),Sk(397,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),Qc(398,`code`),Sk(399,`po-input`),Kg(),Sk(400,`, `),Qc(401,`code`),Sk(402,`po-combo`),Kg(),Sk(403,` especificamente para servi\xE7os
ou `),Qc(404,`code`),Sk(405,`po-select`),Kg(),Sk(406,` para valores fixos.`),Kg(),Qc(407,`p`),Sk(408,`Abaixo seguem os exemplos de cada tipo de campo.`),Kg(),Qc(409,`p`)(410,`code`),Sk(411,`po-input`),Kg(),Sk(412,`:`),Kg(),Qc(413,`pre`)(414,`code`),Sk(415,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}
`),Kg()(),Qc(416,`p`)(417,`code`),Sk(418,`po-combo`),Kg(),Sk(419,`:`),Kg(),Qc(420,`pre`)(421,`code`),Sk(422,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}
`),Kg()(),Qc(423,`p`)(424,`code`),Sk(425,`po-select`),Kg(),Sk(426,`:`),Kg(),Qc(427,`pre`)(428,`code`),Sk(429,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}
`),Kg()(),Qc(430,`p`),Sk(431,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),Kg()()(),Qc(432,`tr`,30)(433,`td`,14)(434,`div`,15)(435,`span`,16),Sk(436,` p-environment`),vu(437,`br`),Kg()()(),Qc(438,`td`,17)(439,`code`,22),Sk(440,`string`),Kg()(),Qc(441,`td`,19),Sk(442,`-`),Kg(),Qc(443,`td`,20)(444,`em`)(445,`strong`),Sk(446,`(opcional)`),Kg()(),Qc(447,`p`),Sk(448,`Adiciona uma `),Qc(449,`code`),Sk(450,`tag`),Kg(),Sk(451,` abaixo do título que especifica o ambiente que o usuário está fazendo o login.`),Kg(),Qc(452,`blockquote`)(453,`p`),Sk(454,`Essa propriedade limita o texto em 40 caracteres.`),Kg()()()(),Qc(455,`tr`,31)(456,`td`,14)(457,`div`,15)(458,`span`,16),Sk(459,` p-exceeded-attempts-warning`),vu(460,`br`),Kg()()(),Qc(461,`td`,17)(462,`code`,32),Sk(463,`number`),Kg()(),Qc(464,`td`,19)(465,`p`)(466,`code`),Sk(467,`0`),Kg()()(),Qc(468,`td`,20)(469,`em`)(470,`strong`),Sk(471,`(opcional)`),Kg()(),Qc(472,`p`),Sk(473,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),Kg(),Qc(474,`blockquote`)(475,`p`),Sk(476,`Caso tenha algum valor atribuído para o atributo `),Qc(477,`code`),Sk(478,`p-authentication-url`),Kg(),Sk(479,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),Qc(480,`code`),Sk(481,`p-exceeded-attempts-warning`),Kg(),Sk(482,`, o valor considerado será o do retorno da requisição.`),Kg()()()(),Qc(483,`tr`,33)(484,`td`,14)(485,`div`,15)(486,`span`,16),Sk(487,` p-hide-label-status`),vu(488,`br`),Kg()()(),Qc(489,`td`,17)(490,`code`,34),Sk(491,`boolean`),Kg()(),Qc(492,`td`,19)(493,`p`)(494,`code`),Sk(495,`false`),Kg()()(),Qc(496,`td`,20)(497,`em`)(498,`strong`),Sk(499,`(opcional)`),Kg()(),Qc(500,`p`),Sk(501,`Indica se o status do `),Qc(502,`code`),Sk(503,`model`),Kg(),Sk(504,` do switch de lembrar o usuário será escondido visualmente.`),Kg(),Qc(505,`blockquote`)(506,`p`),Sk(507,`Por padrão será atribuído `),Qc(508,`code`),Sk(509,`false`),Kg(),Sk(510,`.`),Kg()()()(),Qc(511,`tr`,35)(512,`td`,14)(513,`div`,15)(514,`span`,16),Sk(515,` p-hide-password-peek`),vu(516,`br`),Kg()()(),Qc(517,`td`,17)(518,`code`,34),Sk(519,`boolean`),Kg()(),Qc(520,`td`,19)(521,`p`)(522,`code`),Sk(523,`false`),Kg()()(),Qc(524,`td`,20)(525,`em`)(526,`strong`),Sk(527,`(opcional)`),Kg()(),Qc(528,`p`),Sk(529,`Permite esconder a função de espiar a senha digitada.`),Kg()()(),Qc(530,`tr`,36)(531,`td`,14)(532,`div`,15)(533,`span`,16),Sk(534,` p-hide-remember-user`),vu(535,`br`),Kg()()(),Qc(536,`td`,17)(537,`code`,34),Sk(538,`boolean`),Kg()(),Qc(539,`td`,19)(540,`p`)(541,`code`),Sk(542,`false`),Kg()()(),Qc(543,`td`,20)(544,`em`)(545,`strong`),Sk(546,`(opcional)`),Kg()(),Qc(547,`p`),Sk(548,`Esconde a função "Lembrar usuário" do formulário de login.`),Kg(),Qc(549,`p`),Sk(550,`Quando essa propriedade é setada com `),Qc(551,`code`),Sk(552,`true`),Kg(),Sk(553,` a propriedade `),Qc(554,`code`),Sk(555,`rememberUser`),Kg(),Sk(556,` enviada no evento `),Qc(557,`code`),Sk(558,`p-login-submit`),Kg(),Sk(559,` ser\xE1 sempre
`),Qc(560,`code`),Sk(561,`false`),Kg(),Sk(562,`.`),Kg(),Qc(563,`blockquote`)(564,`p`),Sk(565,`Veja a propriedade `),Qc(566,`code`),Sk(567,`p-literals`),Kg(),Sk(568,` para customizar a literal `),Qc(569,`code`),Sk(570,`rememberUser`),Kg(),Sk(571,`.`),Kg()()()(),Qc(572,`tr`,37)(573,`td`,14)(574,`div`,38)(575,`span`,39),Sk(576,` (p-language-change)`),vu(577,`br`),Kg()()(),Qc(578,`td`,17)(579,`code`,40),Sk(580,`EventEmitter`),Kg()(),Qc(581,`td`,19),Sk(582,`-`),Kg(),Qc(583,`td`,20)(584,`em`)(585,`strong`),Sk(586,`(opcional)`),Kg()(),Qc(587,`p`),Sk(588,`Evento disparado quando o usuário alterar o idioma da página.`),Kg(),Qc(589,`p`),Sk(590,`Esse evento receberá como parâmetro um objeto do tipo `),Qc(591,`code`),Sk(592,`PoLanguage`),Kg(),Sk(593,` com a linguagem selecionada.`),Kg()()(),Qc(594,`tr`,41)(595,`td`,14)(596,`div`,15)(597,`span`,16),Sk(598,` p-languages`),vu(599,`br`),Kg()()(),Qc(600,`td`,17)(601,`code`,42),Sk(602,`Array<PoLanguage>`),Kg()(),Qc(603,`td`,19),Sk(604,`-`),Kg(),Qc(605,`td`,20)(606,`em`)(607,`strong`),Sk(608,`(opcional)`),Kg()(),Qc(609,`p`),Sk(610,`Coleção de idiomas que o componente irá tratar e disponibilizará para o usuário escolher.`),Kg(),Qc(611,`p`),Sk(612,`Caso essa propriedade não seja utilizada o componente mostrará no combo os idiomas que ele suporta por padrão.`),Kg(),Qc(613,`p`),Sk(614,`Caso a coleção tenha um idioma, a página estará nesse idioma e não mostrará o combo.`),Kg(),Qc(615,`p`),Sk(616,`Caso seja passado um array vazio, a página terá o idioma configurado no `),Qc(617,`code`),Sk(618,`i18n`),Kg(),Sk(619,` e não mostrará o combo de seleção.`),Kg(),Qc(620,`blockquote`)(621,`p`),Sk(622,`Se for passado um idioma não suportado, será preciso passar as literais pela propriedade `),Qc(623,`code`),Sk(624,`p-literals`),Kg(),Sk(625,`.`),Kg()()()(),Qc(626,`tr`,43)(627,`td`,14)(628,`div`,15)(629,`span`,16),Sk(630,` p-literals`),vu(631,`br`),Kg()()(),Qc(632,`td`,17)(633,`code`,44),Sk(634,`PoPageLoginLiterals`),Kg()(),Qc(635,`td`,19),Sk(636,`-`),Kg(),Qc(637,`td`,20)(638,`em`)(639,`strong`),Sk(640,`(opcional)`),Kg()(),Qc(641,`p`),Sk(642,`Objeto com as literais usadas no `),Qc(643,`code`),Sk(644,`po-page-login`),Kg(),Sk(645,`.`),Kg(),Qc(646,`p`),Sk(647,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Qc(648,`pre`)(649,`code`),Sk(650,`const customLiterals: PoPageLoginLiterals = {
  attempts: '{0} vez(es) ',
  createANewPasswordNow: 'Melhor criar uma senha nova agora! Voc\xEA vai poder entrar no sistema logo em seguida.',
  forgotPassword: 'Esqueceu sua senha?',
  forgotYourPassword: 'Esqueceu sua senha?',
  highlightInfo: '',
  iForgotMyPassword: 'Esqueci minha senha',
  ifYouTryHarder: 'Se tentar mais ',
  welcome: 'Boas-vindas',
  loginErrorPattern: 'Login obrigat\xF3rio',
  loginHint: 'Caso n\xE3o possua usu\xE1rio entre em contato com o suporte',
  loginLabel: 'Insira seu usu\xE1rio',
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordErrorPattern: 'Senha obrigat\xF3ria',
  passwordLabel: 'Insira sua senha',
  passwordPlaceholder: 'Insira sua senha de acesso',
  customFieldErrorPattern: 'Campo customizado inv\xE1lido',
  customFieldPlaceholder: 'Por favor insira um valor',
  registerUrl: 'Novo registro',
  rememberUser: 'Lembrar usu\xE1rio',
  rememberUserHint: 'Esta op\xE7\xE3o pode ser desabilitada nas configura\xE7\xF5es do sistema',
  submitLabel: 'Acessar sistema',
  submittedLabel: 'Carregando...',
  titlePopover: 'Opa!',
  yourUserWillBeBlocked: 'sem sucesso seu usu\xE1rio ser\xE1 bloqueado e voc\xEA fica 24 horas sem poder acessar :('
};
`),Kg()(),Qc(651,`p`),Sk(652,`Ou passando apenas as literais que deseja customizar:`),Kg(),Qc(653,`pre`)(654,`code`),Sk(655,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};
`),Kg()(),Qc(656,`p`),Sk(657,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Qc(658,`pre`)(659,`code`),Sk(660,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>
`),Kg()(),Qc(661,`blockquote`)(662,`p`),Sk(663,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),Kg()()()(),Qc(664,`tr`,45)(665,`td`,14)(666,`div`,15)(667,`span`,16),Sk(668,` p-loading`),vu(669,`br`),Kg()()(),Qc(670,`td`,17)(671,`code`,34),Sk(672,`boolean`),Kg()(),Qc(673,`td`,19)(674,`p`)(675,`code`),Sk(676,`false`),Kg()()(),Qc(677,`td`,20)(678,`em`)(679,`strong`),Sk(680,`(opcional)`),Kg()(),Qc(681,`p`),Sk(682,`Habilita um estado de carregamento ao botão de `),Qc(683,`em`),Sk(684,`login`),Kg(),Sk(685,`.`),Kg(),Qc(686,`blockquote`)(687,`p`),Sk(688,`É necessário atribuir `),Qc(689,`code`),Sk(690,`true`),Kg(),Sk(691,` à esta propriedade na função definida em `),Qc(692,`code`),Sk(693,`p-login-submit`),Kg(),Sk(694,`.`),Kg()()()(),Qc(695,`tr`,46)(696,`td`,14)(697,`div`,15)(698,`span`,16),Sk(699,` p-login`),vu(700,`br`),Kg()()(),Qc(701,`td`,17)(702,`code`,22),Sk(703,`string`),Kg()(),Qc(704,`td`,19),Sk(705,`-`),Kg(),Qc(706,`td`,20)(707,`em`)(708,`strong`),Sk(709,`(opcional)`),Kg()(),Qc(710,`p`),Sk(711,`Valor do modelo do campo de login.`),Kg()()(),Qc(712,`tr`,47)(713,`td`,14)(714,`div`,38)(715,`span`,39),Sk(716,` (p-login-change)`),vu(717,`br`),Kg()()(),Qc(718,`td`,17)(719,`code`,40),Sk(720,`EventEmitter`),Kg()(),Qc(721,`td`,19),Sk(722,`-`),Kg(),Qc(723,`td`,20)(724,`em`)(725,`strong`),Sk(726,`(opcional)`),Kg()(),Qc(727,`p`),Sk(728,`Evento disparado quando o usuário alterar o input do campo login.`),Kg(),Qc(729,`p`),Sk(730,`Esse evento receberá como parâmetro uma variável do tipo `),Qc(731,`code`),Sk(732,`string`),Kg(),Sk(733,` com o texto informado no campo.`),Kg(),Qc(734,`blockquote`)(735,`p`),Sk(736,`Esta propriedade será ignorada se for definido valor para a propriedade `),Qc(737,`code`),Sk(738,`p-authentication-url`),Kg(),Sk(739,`.`),Kg()()()(),Qc(740,`tr`,48)(741,`td`,14)(742,`div`,15)(743,`span`,16),Sk(744,` p-login-errors`),vu(745,`br`),Kg()()(),Qc(746,`td`,17)(747,`code`,49),Sk(748,`string[]`),Kg()(),Qc(749,`td`,19),Sk(750,`-`),Kg(),Qc(751,`td`,20)(752,`em`)(753,`strong`),Sk(754,`(opcional)`),Kg()(),Qc(755,`p`),Sk(756,`Atributo que recebe uma lista de erros e exibe abaixo do campo de login.`),Kg()()(),Qc(757,`tr`,50)(758,`td`,14)(759,`div`,15)(760,`span`,16),Sk(761,` p-login-pattern`),vu(762,`br`),Kg()()(),Qc(763,`td`,17)(764,`code`,22),Sk(765,`string`),Kg()(),Qc(766,`td`,19),Sk(767,`-`),Kg(),Qc(768,`td`,20)(769,`em`)(770,`strong`),Sk(771,`(opcional)`),Kg()(),Qc(772,`p`),Sk(773,`Expressão regular para validar o campo de login, caso a expressão não seja atentida, a literal `),Qc(774,`code`),Sk(775,`loginErrorPattern`),Kg(),Sk(776,`
ser\xE1 exibida.`),Kg(),Qc(777,`p`),Sk(778,`Exemplos de valores válidos:`),Kg(),Qc(779,`ul`)(780,`li`),Sk(781,`email: `),Qc(782,`code`),Sk(783,`[expressao-regular-email]`),Kg()(),Qc(784,`li`),Sk(785,`cpf: `),Qc(786,`code`),Sk(787,`[expressao-regular-cpf]`),Kg()()(),Qc(788,`blockquote`)(789,`p`),Sk(790,`Veja a propriedade `),Qc(791,`code`),Sk(792,`p-literals`),Kg(),Sk(793,` para customizar a literal `),Qc(794,`code`),Sk(795,`loginErrorPattern`),Kg(),Sk(796,`.`),Kg()()()(),Qc(797,`tr`,51)(798,`td`,14)(799,`div`,38)(800,`span`,39),Sk(801,` (p-login-submit)`),vu(802,`br`),Kg()()(),Qc(803,`td`,17)(804,`code`,40),Sk(805,`EventEmitter`),Kg()(),Qc(806,`td`,19),Sk(807,`-`),Kg(),Qc(808,`td`,20)(809,`p`),Sk(810,`Evento disparado ao submeter o formulário de login (apertando `),Qc(811,`code`),Sk(812,`Enter`),Kg(),Sk(813,` dentro dos campos ou pressionando o botão de confirmação).`),Kg(),Qc(814,`p`),Sk(815,`Esse evento receberá como parâmetro um objeto do tipo `),Qc(816,`code`),Sk(817,`PoPageLogin`),Kg(),Sk(818,` com os dados informados no formulário.`),Kg(),Qc(819,`blockquote`)(820,`p`),Sk(821,`Esta propriedade será ignorada se for definido valor para a propriedade `),Qc(822,`code`),Sk(823,`p-url-recovery`),Kg(),Sk(824,`.`),Kg()(),Qc(825,`blockquote`)(826,`p`),Sk(827,`Para mais detalhes consulte a documentação sobre a interface `),Qc(828,`code`),Sk(829,`PoPageLogin`),Kg(),Sk(830,` mais abaixo.`),Kg()()()(),Qc(831,`tr`,52)(832,`td`,14)(833,`div`,15)(834,`span`,16),Sk(835,` p-logo`),vu(836,`br`),Kg()()(),Qc(837,`td`,17)(838,`code`,22),Sk(839,`string`),Kg()(),Qc(840,`td`,19),Sk(841,`-`),Kg(),Qc(842,`td`,20)(843,`em`)(844,`strong`),Sk(845,`(opcional)`),Kg()(),Qc(846,`p`),Sk(847,`Caminho para a logomarca localizada na parte superior.`),Kg(),Qc(848,`blockquote`)(849,`p`),Sk(850,`Caso seja indefinida o espaço se mantém preservado porém vazio.`),Kg()()()(),Qc(851,`tr`,53)(852,`td`,14)(853,`div`,15)(854,`span`,16),Sk(855,` p-no-autocomplete-login`),vu(856,`br`),Kg()()(),Qc(857,`td`,17)(858,`code`,34),Sk(859,`boolean`),Kg()(),Qc(860,`td`,19)(861,`p`)(862,`code`),Sk(863,`true`),Kg()()(),Qc(864,`td`,20)(865,`em`)(866,`strong`),Sk(867,`(opcional)`),Kg()(),Qc(868,`p`),Sk(869,`Define a propriedade nativa `),Qc(870,`code`),Sk(871,`autocomplete`),Kg(),Sk(872,` do campo como `),Qc(873,`code`),Sk(874,`off`),Kg(),Sk(875,`.`),Kg()()(),Qc(876,`tr`,54)(877,`td`,14)(878,`div`,15)(879,`span`,16),Sk(880,` p-no-autocomplete-password`),vu(881,`br`),Kg()()(),Qc(882,`td`,17)(883,`code`,34),Sk(884,`boolean`),Kg()(),Qc(885,`td`,19)(886,`p`)(887,`code`),Sk(888,`true`),Kg()()(),Qc(889,`td`,20)(890,`em`)(891,`strong`),Sk(892,`(opcional)`),Kg()(),Qc(893,`p`),Sk(894,`Define a propriedade nativa `),Qc(895,`code`),Sk(896,`autocomplete`),Kg(),Sk(897,` do campo como `),Qc(898,`code`),Sk(899,`off`),Kg(),Sk(900,`.`),Kg(),Qc(901,`blockquote`)(902,`p`),Sk(903,`No componente `),Qc(904,`code`),Sk(905,`po-password`),Kg(),Sk(906,` será definido como `),Qc(907,`code`),Sk(908,`new-password`),Kg(),Sk(909,`.`),Kg()()()(),Qc(910,`tr`,55)(911,`td`,14)(912,`div`,38)(913,`span`,39),Sk(914,` (p-password-change)`),vu(915,`br`),Kg()()(),Qc(916,`td`,17)(917,`code`,40),Sk(918,`EventEmitter`),Kg()(),Qc(919,`td`,19),Sk(920,`-`),Kg(),Qc(921,`td`,20)(922,`em`)(923,`strong`),Sk(924,`(opcional)`),Kg()(),Qc(925,`p`),Sk(926,`Evento disparado quando o usuário alterar o input do campo password.`),Kg(),Qc(927,`p`),Sk(928,`Esse evento receberá como parâmetro uma variável do tipo `),Qc(929,`code`),Sk(930,`string`),Kg(),Sk(931,` com o texto informado no campo.`),Kg(),Qc(932,`blockquote`)(933,`p`),Sk(934,`Esta propriedade será ignorada se for definido valor para a propriedade `),Qc(935,`code`),Sk(936,`p-authentication-url`),Kg(),Sk(937,`.`),Kg()()()(),Qc(938,`tr`,56)(939,`td`,14)(940,`div`,15)(941,`span`,16),Sk(942,` p-password-errors`),vu(943,`br`),Kg()()(),Qc(944,`td`,17)(945,`code`,49),Sk(946,`string[]`),Kg()(),Qc(947,`td`,19),Sk(948,`-`),Kg(),Qc(949,`td`,20)(950,`em`)(951,`strong`),Sk(952,`(opcional)`),Kg()(),Qc(953,`p`),Sk(954,`Atributo que recebe uma lista de erros e exibe abaixo do campo de password.`),Kg()()(),Qc(955,`tr`,57)(956,`td`,14)(957,`div`,15)(958,`span`,16),Sk(959,` p-password-pattern`),vu(960,`br`),Kg()()(),Qc(961,`td`,17)(962,`code`,22),Sk(963,`string`),Kg()(),Qc(964,`td`,19),Sk(965,`-`),Kg(),Qc(966,`td`,20)(967,`em`)(968,`strong`),Sk(969,`(opcional)`),Kg()(),Qc(970,`p`),Sk(971,`Expressão regular para validar o campo de password, caso a expressão não seja atentida, a literal `),Qc(972,`code`),Sk(973,`passwordErrorPattern`),Kg(),Sk(974,`
ser\xE1 exibida.`),Kg(),Qc(975,`p`),Sk(976,`Exemplos de valores válidos:`),Kg(),Qc(977,`ul`)(978,`li`),Sk(979,`Apenas números: `),Qc(980,`code`),Sk(981,`\\d?`),Kg()(),Qc(982,`li`),Sk(983,`Letras mínusculas: `),Qc(984,`code`),Sk(985,`\\z?`),Kg()()(),Qc(986,`blockquote`)(987,`p`),Sk(988,`Veja a propriedade `),Qc(989,`code`),Sk(990,`p-literals`),Kg(),Sk(991,` para customizar a literal `),Qc(992,`code`),Sk(993,`passwordErrorPattern`),Kg(),Sk(994,`.`),Kg()()()(),Qc(995,`tr`,58)(996,`td`,14)(997,`div`,15)(998,`span`,16),Sk(999,` p-product-name`),vu(1e3,`br`),Kg()()(),Qc(1001,`td`,17)(1002,`code`,22),Sk(1003,`string`),Kg()(),Qc(1004,`td`,19),Sk(1005,`-`),Kg(),Qc(1006,`td`,20)(1007,`em`)(1008,`strong`),Sk(1009,`(opcional)`),Kg()(),Qc(1010,`p`),Sk(1011,`Texto customizado que fica entre a logo e a mensagem de boas-vindas.`),Kg()()(),Qc(1012,`tr`,59)(1013,`td`,14)(1014,`div`,15)(1015,`span`,16),Sk(1016,` p-recovery`),vu(1017,`br`),Kg()()(),Qc(1018,`td`,17)(1019,`code`,22),Sk(1020,`string `),Kg(),Qc(1021,`code`,60),Sk(1022,` Function `),Kg(),Qc(1023,`code`,61),Sk(1024,` PoPageLoginRecovery`),Kg()(),Qc(1025,`td`,19),Sk(1026,`-`),Kg(),Qc(1027,`td`,20)(1028,`em`)(1029,`strong`),Sk(1030,`(opcional)`),Kg()(),Qc(1031,`p`),Sk(1032,`Exibe um link abaixo do formulário de login para que os usuários da aplicação façam a recuperação dos dados de autenticação.`),Kg(),Qc(1033,`p`),Sk(1034,`A propriedade aceita os seguintes tipos:`),Kg(),Qc(1035,`ul`)(1036,`li`)(1037,`p`)(1038,`strong`),Sk(1039,`String`),Kg(),Sk(1040,`: informe uma url externa ou uma rota válida;`),Kg()(),Qc(1041,`li`)(1042,`p`)(1043,`strong`),Sk(1044,`Function`),Kg(),Sk(1045,`: pode-se customizar a ação. Para esta possilidade basta atribuir:`),Kg(),Qc(1046,`pre`)(1047,`code`),Sk(1048,`<po-page-login>
  [recovery]="this.myRecovery.bind(this)">
</po-page-login>
`),Kg()()(),Qc(1049,`li`)(1050,`p`)(1051,`strong`),Sk(1052,`PoPageLoginRecovery`),Kg(),Sk(1053,`: cria-se vínculo automático com o template `),Qc(1054,`strong`),Sk(1055,`po-modal-password-recovery`),Kg(),Sk(1056,`.
O objeto deve conter a `),Qc(1057,`strong`),Sk(1058,`url`),Kg(),Sk(1059,` para requisição dos recursos e pode-se definir o `),Qc(1060,`strong`),Sk(1061,`tipo`),Kg(),Sk(1062,` de modal para recupera\xE7\xE3o de senha,
`),Qc(1063,`strong`),Sk(1064,`email`),Kg(),Sk(1065,` para contato e `),Qc(1066,`strong`),Sk(1067,`máscara`),Kg(),Sk(1068,` do campo de telefone.`),Kg()()()()(),Qc(1069,`tr`,62)(1070,`td`,14)(1071,`div`,15)(1072,`span`,16),Sk(1073,` p-register-url`),vu(1074,`br`),Kg()()(),Qc(1075,`td`,17)(1076,`code`,22),Sk(1077,`string`),Kg()(),Qc(1078,`td`,19),Sk(1079,`-`),Kg(),Qc(1080,`td`,20)(1081,`em`)(1082,`strong`),Sk(1083,`(opcional)`),Kg()(),Qc(1084,`p`),Sk(1085,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),Kg(),Qc(1086,`p`),Sk(1087,`Exemplos de valores válidos:`),Kg(),Qc(1088,`ul`)(1089,`li`)(1090,`strong`),Sk(1091,`local`),Kg(),Sk(1092,`: `),Qc(1093,`code`),Sk(1094,`/home`),Kg()(),Qc(1095,`li`)(1096,`strong`),Sk(1097,`url externa`),Kg(),Sk(1098,`: `),Qc(1099,`code`),Sk(1100,`https://po-ui.io`),Kg()()(),Qc(1101,`blockquote`)(1102,`p`),Sk(1103,`Veja a propriedade `),Qc(1104,`code`),Sk(1105,`p-literals`),Kg(),Sk(1106,` para customizar a literal `),Qc(1107,`code`),Sk(1108,`registerUrl`),Kg(),Sk(1109,`.`),Kg()()()(),Qc(1110,`tr`,63)(1111,`td`,14)(1112,`div`,15)(1113,`span`,16),Sk(1114,` p-secondary-logo`),vu(1115,`br`),Kg()()(),Qc(1116,`td`,17)(1117,`code`,22),Sk(1118,`string`),Kg()(),Qc(1119,`td`,19),Sk(1120,`-`),Kg(),Qc(1121,`td`,20)(1122,`em`)(1123,`strong`),Sk(1124,`(opcional)`),Kg()(),Qc(1125,`p`),Sk(1126,`Caminho para a logomarca localizada no rodapé.`),Kg()()(),Qc(1127,`tr`,64)(1128,`td`,14)(1129,`div`,15)(1130,`span`,16),Sk(1131,` p-support`),vu(1132,`br`),Kg()()(),Qc(1133,`td`,17)(1134,`code`,22),Sk(1135,`string `),Kg(),Qc(1136,`code`,60),Sk(1137,` Function`),Kg()(),Qc(1138,`td`,19),Sk(1139,`-`),Kg(),Qc(1140,`td`,20)(1141,`em`)(1142,`strong`),Sk(1143,`(opcional)`),Kg()(),Qc(1144,`p`),Sk(1145,`Exibe um botão para suporte.`),Kg(),Qc(1146,`p`),Sk(1147,`A propriedade aceita os seguintes tipos:`),Kg(),Qc(1148,`ul`)(1149,`li`)(1150,`strong`),Sk(1151,`String`),Kg(),Sk(1152,`: URL externa ou uma rota válida;`),Kg(),Qc(1153,`li`)(1154,`strong`),Sk(1155,`Function`),Kg(),Sk(1156,`: Função a ser disparada ao clicar no botão de suporte;`),Qc(1157,`pre`)(1158,`code`),Sk(1159,`<po-page-login>
  [p-support]="this.mySupport.bind(this)">
</po-page-login>
`),Kg()()()()()()(),Qc(1160,`h3`),Sk(1161,`Interfaces`),Kg(),Qc(1162,`h4`,65)(1163,`code`,5),Sk(1164,`PoPageLoginCustomField`),Kg()(),Qc(1165,`div`,2)(1166,`p`),Sk(1167,`Interface com a definição do Custom Field, podendo ser utilizado para informar um campo customizado no componente `),Qc(1168,`code`),Sk(1169,`po-page-login`),Kg(),Sk(1170,`.`),Kg()(),Qc(1171,`h4`,9),Sk(1172,`Propriedades`),Kg(),Qc(1173,`table`,10)(1174,`tr`,11)(1175,`th`,12),Sk(1176,`Nome`),Kg(),Qc(1177,`th`,12),Sk(1178,`Tipo`),Kg(),Qc(1179,`th`,12),Sk(1180,`Descrição`),Kg()(),Qc(1181,`tr`,66)(1182,`td`,14)(1183,`div`,15)(1184,`span`,16),Sk(1185,` errorPattern`),vu(1186,`br`),Kg()()(),Qc(1187,`td`,17)(1188,`code`,22),Sk(1189,`string`),Kg()(),Qc(1190,`td`,20)(1191,`em`)(1192,`strong`),Sk(1193,`(opcional)`),Kg()(),Qc(1194,`p`),Sk(1195,`Mensagem que será exibida quando a expressão regular informada na propriedade `),Qc(1196,`code`),Sk(1197,`pattern`),Kg(),Sk(1198,` não for válida.`),Kg()()(),Qc(1199,`tr`,67)(1200,`td`,14)(1201,`div`,15)(1202,`span`,16),Sk(1203,` fieldValue`),vu(1204,`br`),Kg()()(),Qc(1205,`td`,17)(1206,`code`,22),Sk(1207,`string`),Kg()(),Qc(1208,`td`,20)(1209,`em`)(1210,`strong`),Sk(1211,`(opcional)`),Kg()(),Qc(1212,`p`),Sk(1213,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),Qc(1214,`code`),Sk(1215,`po-combo`),Kg(),Sk(1216,`, esta propriedade será responsável pelo valor de cada item da lista.`),Kg()()(),Qc(1217,`tr`,68)(1218,`td`,14)(1219,`div`,15)(1220,`span`,16),Sk(1221,` options`),vu(1222,`br`),Kg()()(),Qc(1223,`td`,17)(1224,`code`,69),Sk(1225,`Array<PoSelectOption>`),Kg()(),Qc(1226,`td`,20)(1227,`em`)(1228,`strong`),Sk(1229,`(opcional)`),Kg()(),Qc(1230,`p`),Sk(1231,`Lista de opções de um `),Qc(1232,`code`),Sk(1233,`po-select`),Kg(),Sk(1234,`.`),Kg()()(),Qc(1235,`tr`,70)(1236,`td`,14)(1237,`div`,15)(1238,`span`,16),Sk(1239,` pattern`),vu(1240,`br`),Kg()()(),Qc(1241,`td`,17)(1242,`code`,22),Sk(1243,`string`),Kg()(),Qc(1244,`td`,20)(1245,`em`)(1246,`strong`),Sk(1247,`(opcional)`),Kg()(),Qc(1248,`p`),Sk(1249,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),Qc(1250,`code`),Sk(1251,`errorPattern`),Kg(),Sk(1252,` será exibida.`),Kg()()(),Qc(1253,`tr`,71)(1254,`td`,14)(1255,`div`,15)(1256,`span`,16),Sk(1257,` placeholder`),vu(1258,`br`),Kg()()(),Qc(1259,`td`,17)(1260,`code`,22),Sk(1261,`string`),Kg()(),Qc(1262,`td`,20)(1263,`em`)(1264,`strong`),Sk(1265,`(opcional)`),Kg()(),Qc(1266,`p`),Sk(1267,`Mensagem que será exibida enquanto o campo customizado não estiver preenchido.`),Kg()()(),Qc(1268,`tr`,72)(1269,`td`,14)(1270,`div`,15)(1271,`span`,16),Sk(1272,` property`),vu(1273,`br`),Kg()()(),Qc(1274,`td`,17)(1275,`code`,22),Sk(1276,`string`),Kg()(),Qc(1277,`td`,20)(1278,`p`),Sk(1279,`Nome da propriedade que será utilizado no campo customizado.`),Kg()()(),Qc(1280,`tr`,73)(1281,`td`,14)(1282,`div`,15)(1283,`span`,16),Sk(1284,` url`),vu(1285,`br`),Kg()()(),Qc(1286,`td`,17)(1287,`code`,22),Sk(1288,`string`),Kg()(),Qc(1289,`td`,20)(1290,`em`)(1291,`strong`),Sk(1292,`(opcional)`),Kg()(),Qc(1293,`p`),Sk(1294,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),Qc(1295,`code`),Sk(1296,`po-combo`),Kg(),Sk(1297,`.`),Kg()()(),Qc(1298,`tr`,74)(1299,`td`,14)(1300,`div`,15)(1301,`span`,16),Sk(1302,` value`),vu(1303,`br`),Kg()()(),Qc(1304,`td`,17)(1305,`code`,22),Sk(1306,`string `),Kg(),Qc(1307,`code`,32),Sk(1308,` number`),Kg()(),Qc(1309,`td`,20)(1310,`em`)(1311,`strong`),Sk(1312,`(opcional)`),Kg()(),Qc(1313,`p`),Sk(1314,`Valor do campo customizado.`),Kg()()()(),Qc(1315,`h4`,75)(1316,`code`,5),Sk(1317,`PoPageLoginLiterals`),Kg()(),Qc(1318,`div`,2)(1319,`p`),Sk(1320,`Interface para definição das literais usadas no `),Qc(1321,`code`),Sk(1322,`po-page-login`),Kg(),Sk(1323,`.`),Kg()(),Qc(1324,`h4`,9),Sk(1325,`Propriedades`),Kg(),Qc(1326,`table`,10)(1327,`tr`,11)(1328,`th`,12),Sk(1329,`Nome`),Kg(),Qc(1330,`th`,12),Sk(1331,`Tipo`),Kg(),Qc(1332,`th`,12),Sk(1333,`Descrição`),Kg()(),Qc(1334,`tr`,76)(1335,`td`,14)(1336,`div`,15)(1337,`span`,16),Sk(1338,` attempts`),vu(1339,`br`),Kg()()(),Qc(1340,`td`,17)(1341,`code`,22),Sk(1342,`string`),Kg()(),Qc(1343,`td`,20)(1344,`em`)(1345,`strong`),Sk(1346,`(opcional)`),Kg()(),Qc(1347,`p`),Sk(1348,`Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio.`),Kg()()(),Qc(1349,`tr`,77)(1350,`td`,14)(1351,`div`,15)(1352,`span`,16),Sk(1353,` createANewPasswordNow`),vu(1354,`br`),Kg()()(),Qc(1355,`td`,17)(1356,`code`,22),Sk(1357,`string`),Kg()(),Qc(1358,`td`,20)(1359,`em`)(1360,`strong`),Sk(1361,`(opcional)`),Kg()(),Qc(1362,`p`),Sk(1363,`Texto exibido no popover de aviso de bloqueio, que orienta o usuário, caso ele tenha esquecido a senha, a criar uma nova senha.`),Kg()()(),Qc(1364,`tr`,78)(1365,`td`,14)(1366,`div`,15)(1367,`span`,16),Sk(1368,` customFieldErrorPattern`),vu(1369,`br`),Kg()()(),Qc(1370,`td`,17)(1371,`code`,22),Sk(1372,`string`),Kg()(),Qc(1373,`td`,20)(1374,`em`)(1375,`strong`),Sk(1376,`(opcional)`),Kg()(),Qc(1377,`p`),Sk(1378,`Mensagem de erro apresentada quando o campo customizado está inválido`),Kg()()(),Qc(1379,`tr`,79)(1380,`td`,14)(1381,`div`,15)(1382,`span`,16),Sk(1383,` customFieldPlaceholder`),vu(1384,`br`),Kg()()(),Qc(1385,`td`,17)(1386,`code`,22),Sk(1387,`string`),Kg()(),Qc(1388,`td`,20)(1389,`em`)(1390,`strong`),Sk(1391,`(opcional)`),Kg()(),Qc(1392,`p`),Sk(1393,`Placeholder para o campo customizado.`),Kg()()(),Qc(1394,`tr`,80)(1395,`td`,14)(1396,`div`,15)(1397,`span`,16),Sk(1398,` forgotPassword`),vu(1399,`br`),Kg()()(),Qc(1400,`td`,17)(1401,`code`,22),Sk(1402,`string`),Kg()(),Qc(1403,`td`,20)(1404,`em`)(1405,`strong`),Sk(1406,`(opcional)`),Kg()(),Qc(1407,`p`),Sk(1408,`Texto de ajuda para recuperação dos dados de acesso.`),Kg()()(),Qc(1409,`tr`,81)(1410,`td`,14)(1411,`div`,15)(1412,`span`,16),Sk(1413,` forgotYourPassword`),vu(1414,`br`),Kg()()(),Qc(1415,`td`,17)(1416,`code`,22),Sk(1417,`string`),Kg()(),Qc(1418,`td`,20)(1419,`em`)(1420,`strong`),Sk(1421,`(opcional)`),Kg()(),Qc(1422,`p`),Sk(1423,`Texto que questiona o esquecimento da senha no popover de aviso de bloqueio.`),Kg()()(),Qc(1424,`tr`,82)(1425,`td`,14)(1426,`div`,15)(1427,`span`,16),Sk(1428,` highlightInfo`),vu(1429,`br`),Kg()()(),Qc(1430,`td`,17)(1431,`code`,22),Sk(1432,`string`),Kg()(),Qc(1433,`td`,20)(1434,`em`)(1435,`strong`),Sk(1436,`(opcional)`),Kg()(),Qc(1437,`p`),Sk(1438,`Texto de destaque sobreposto à imagem de destaque. Essa opção é utilizada em conjunto com o atributo `),Qc(1439,`code`),Sk(1440,`p-background`),Kg(),Sk(1441,`.`),Kg()()(),Qc(1442,`tr`,83)(1443,`td`,14)(1444,`div`,15)(1445,`span`,16),Sk(1446,` iForgotMyPassword`),vu(1447,`br`),Kg()()(),Qc(1448,`td`,17)(1449,`code`,22),Sk(1450,`string`),Kg()(),Qc(1451,`td`,20)(1452,`em`)(1453,`strong`),Sk(1454,`(opcional)`),Kg()(),Qc(1455,`p`),Sk(1456,`Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio.`),Kg()()(),Qc(1457,`tr`,84)(1458,`td`,14)(1459,`div`,15)(1460,`span`,16),Sk(1461,` ifYouTryHarder`),vu(1462,`br`),Kg()()(),Qc(1463,`td`,17)(1464,`code`,22),Sk(1465,`string`),Kg()(),Qc(1466,`td`,20)(1467,`em`)(1468,`strong`),Sk(1469,`(opcional)`),Kg()(),Qc(1470,`p`),Sk(1471,`Texto de aviso de tentativas exibido no popover de aviso de bloqueio.`),Kg()()(),Qc(1472,`tr`,85)(1473,`td`,14)(1474,`div`,15)(1475,`span`,16),Sk(1476,` loginErrorPattern`),vu(1477,`br`),Kg()()(),Qc(1478,`td`,17)(1479,`code`,22),Sk(1480,`string`),Kg()(),Qc(1481,`td`,20)(1482,`em`)(1483,`strong`),Sk(1484,`(opcional)`),Kg()(),Qc(1485,`p`),Sk(1486,`Mensagem de erro apresentada quando o campo de login está inválido.`),Kg()()(),Qc(1487,`tr`,86)(1488,`td`,14)(1489,`div`,15)(1490,`span`,16),Sk(1491,` loginHint`),vu(1492,`br`),Kg()()(),Qc(1493,`td`,17)(1494,`code`,22),Sk(1495,`string`),Kg()(),Qc(1496,`td`,20)(1497,`em`)(1498,`strong`),Sk(1499,`(opcional)`),Kg()(),Qc(1500,`p`),Sk(1501,`Texto exibido como dica para o campo de login.`),Kg()()(),Qc(1502,`tr`,87)(1503,`td`,14)(1504,`div`,15)(1505,`span`,16),Sk(1506,` loginLabel`),vu(1507,`br`),Kg()()(),Qc(1508,`td`,17)(1509,`code`,22),Sk(1510,`string`),Kg()(),Qc(1511,`td`,20)(1512,`em`)(1513,`strong`),Sk(1514,`(opcional)`),Kg()(),Qc(1515,`p`),Sk(1516,`Texto exibido como label do campo de login.`),Kg()()(),Qc(1517,`tr`,88)(1518,`td`,14)(1519,`div`,15)(1520,`span`,16),Sk(1521,` loginPlaceholder`),vu(1522,`br`),Kg()()(),Qc(1523,`td`,17)(1524,`code`,22),Sk(1525,`string`),Kg()(),Qc(1526,`td`,20)(1527,`em`)(1528,`strong`),Sk(1529,`(opcional)`),Kg()(),Qc(1530,`p`),Sk(1531,`Placeholder do campo de login.`),Kg()()(),Qc(1532,`tr`,89)(1533,`td`,14)(1534,`div`,15)(1535,`span`,16),Sk(1536,` passwordErrorPattern`),vu(1537,`br`),Kg()()(),Qc(1538,`td`,17)(1539,`code`,22),Sk(1540,`string`),Kg()(),Qc(1541,`td`,20)(1542,`em`)(1543,`strong`),Sk(1544,`(opcional)`),Kg()(),Qc(1545,`p`),Sk(1546,`Mensagem de erro apresentada quando o campo de password está inválido.`),Kg()()(),Qc(1547,`tr`,90)(1548,`td`,14)(1549,`div`,15)(1550,`span`,16),Sk(1551,` passwordLabel`),vu(1552,`br`),Kg()()(),Qc(1553,`td`,17)(1554,`code`,22),Sk(1555,`string`),Kg()(),Qc(1556,`td`,20)(1557,`em`)(1558,`strong`),Sk(1559,`(opcional)`),Kg()(),Qc(1560,`p`),Sk(1561,`Texto exibido como label do campo de password.`),Kg()()(),Qc(1562,`tr`,91)(1563,`td`,14)(1564,`div`,15)(1565,`span`,16),Sk(1566,` passwordPlaceholder`),vu(1567,`br`),Kg()()(),Qc(1568,`td`,17)(1569,`code`,22),Sk(1570,`string`),Kg()(),Qc(1571,`td`,20)(1572,`em`)(1573,`strong`),Sk(1574,`(opcional)`),Kg()(),Qc(1575,`p`),Sk(1576,`Placeholder do campo de password.`),Kg()()(),Qc(1577,`tr`,92)(1578,`td`,14)(1579,`div`,15)(1580,`span`,16),Sk(1581,` registerUrl`),vu(1582,`br`),Kg()()(),Qc(1583,`td`,17)(1584,`code`,22),Sk(1585,`string`),Kg()(),Qc(1586,`td`,20)(1587,`em`)(1588,`strong`),Sk(1589,`(opcional)`),Kg()(),Qc(1590,`p`),Sk(1591,`Texto exibido no link de novo cadastro.`),Kg()()(),Qc(1592,`tr`,93)(1593,`td`,14)(1594,`div`,15)(1595,`span`,16),Sk(1596,` rememberUser`),vu(1597,`br`),Kg()()(),Qc(1598,`td`,17)(1599,`code`,22),Sk(1600,`string`),Kg()(),Qc(1601,`td`,20)(1602,`em`)(1603,`strong`),Sk(1604,`(opcional)`),Kg()(),Qc(1605,`p`),Sk(1606,`Texto exibido na função "Lembrar usuário".`),Kg()()(),Qc(1607,`tr`,94)(1608,`td`,14)(1609,`div`,15)(1610,`span`,16),Sk(1611,` rememberUserHint`),vu(1612,`br`),Kg()()(),Qc(1613,`td`,17)(1614,`code`,22),Sk(1615,`string`),Kg()(),Qc(1616,`td`,20)(1617,`em`)(1618,`strong`),Sk(1619,`(opcional)`),Kg()(),Qc(1620,`p`),Sk(1621,`Texto exibido como dica da função "Lembrar usuário"`),Kg()()(),Qc(1622,`tr`,95)(1623,`td`,14)(1624,`div`,15)(1625,`span`,16),Sk(1626,` submitLabel`),vu(1627,`br`),Kg()()(),Qc(1628,`td`,17)(1629,`code`,22),Sk(1630,`string`),Kg()(),Qc(1631,`td`,20)(1632,`em`)(1633,`strong`),Sk(1634,`(opcional)`),Kg()(),Qc(1635,`p`),Sk(1636,`Texto exibido no botão de confirmação da página de login.`),Kg()()(),Qc(1637,`tr`,96)(1638,`td`,14)(1639,`div`,15)(1640,`span`,16),Sk(1641,` submittedLabel`),vu(1642,`br`),Kg()()(),Qc(1643,`td`,17)(1644,`code`,22),Sk(1645,`string`),Kg()(),Qc(1646,`td`,20)(1647,`em`)(1648,`strong`),Sk(1649,`(opcional)`),Kg()(),Qc(1650,`p`),Sk(1651,`Texto exibido no botão de confirmação da página de login quando estiver em estado de carregamento.`),Kg()()(),Qc(1652,`tr`,97)(1653,`td`,14)(1654,`div`,15)(1655,`span`,16),Sk(1656,` support`),vu(1657,`br`),Kg()()(),Qc(1658,`td`,17)(1659,`code`,22),Sk(1660,`string`),Kg()(),Qc(1661,`td`,20)(1662,`em`)(1663,`strong`),Sk(1664,`(opcional)`),Kg()(),Qc(1665,`p`),Sk(1666,`Label do botão de suporte.`),Kg()()(),Qc(1667,`tr`,98)(1668,`td`,14)(1669,`div`,15)(1670,`span`,16),Sk(1671,` titlePopover`),vu(1672,`br`),Kg()()(),Qc(1673,`td`,17)(1674,`code`,22),Sk(1675,`string`),Kg()(),Qc(1676,`td`,20)(1677,`em`)(1678,`strong`),Sk(1679,`(opcional)`),Kg()(),Qc(1680,`p`),Sk(1681,`Título do popover para aviso de bloqueio.`),Kg()()(),Qc(1682,`tr`,99)(1683,`td`,14)(1684,`div`,15)(1685,`span`,16),Sk(1686,` welcome`),vu(1687,`br`),Kg()()(),Qc(1688,`td`,17)(1689,`code`,22),Sk(1690,`string`),Kg()(),Qc(1691,`td`,20)(1692,`em`)(1693,`strong`),Sk(1694,`(opcional)`),Kg()(),Qc(1695,`p`),Sk(1696,`Mensagem de "Boas-vindas" para o usuário que aparece acima dos campos de entrada.`),Kg()()(),Qc(1697,`tr`,100)(1698,`td`,14)(1699,`div`,15)(1700,`span`,16),Sk(1701,` yourUserWillBeBlocked`),vu(1702,`br`),Kg()()(),Qc(1703,`td`,17)(1704,`code`,22),Sk(1705,`string`),Kg()(),Qc(1706,`td`,20)(1707,`em`)(1708,`strong`),Sk(1709,`(opcional)`),Kg()(),Qc(1710,`p`),Sk(1711,`Texto que informa ao usuário que o mesmo será bloqueado e por quanto tempo no popover de aviso de bloqueio.`),Kg()()()(),Qc(1712,`h4`,101)(1713,`code`,5),Sk(1714,`PoPageLoginRecovery`),Kg()(),Qc(1715,`div`,2)(1716,`p`),Sk(1717,`Interface para especificação do tipo de recuperação de senha no `),Qc(1718,`code`),Sk(1719,`po-modal-password-recovery`),Kg(),Sk(1720,`.`),Kg()(),Qc(1721,`h4`,9),Sk(1722,`Propriedades`),Kg(),Qc(1723,`table`,10)(1724,`tr`,11)(1725,`th`,12),Sk(1726,`Nome`),Kg(),Qc(1727,`th`,12),Sk(1728,`Tipo`),Kg(),Qc(1729,`th`,12),Sk(1730,`Descrição`),Kg()(),Qc(1731,`tr`,102)(1732,`td`,14)(1733,`div`,15)(1734,`span`,16),Sk(1735,` contactMail`),vu(1736,`br`),Kg()()(),Qc(1737,`td`,17)(1738,`code`,22),Sk(1739,`string`),Kg()(),Qc(1740,`td`,20)(1741,`em`)(1742,`strong`),Sk(1743,`(opcional)`),Kg()(),Qc(1744,`p`),Sk(1745,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),Kg()()(),Qc(1746,`tr`,103)(1747,`td`,14)(1748,`div`,15)(1749,`span`,16),Sk(1750,` phoneMask`),vu(1751,`br`),Kg()()(),Qc(1752,`td`,17)(1753,`code`,22),Sk(1754,`string`),Kg()(),Qc(1755,`td`,20)(1756,`em`)(1757,`strong`),Sk(1758,`(opcional)`),Kg()(),Qc(1759,`p`),Sk(1760,`Definição da máscara do campo de telefone.`),Kg()()(),Qc(1761,`tr`,104)(1762,`td`,14)(1763,`div`,15)(1764,`span`,16),Sk(1765,` type`),vu(1766,`br`),Kg()()(),Qc(1767,`td`,17)(1768,`code`,105),Sk(1769,`PoModalPasswordRecoveryType`),Kg()(),Qc(1770,`td`,20)(1771,`em`)(1772,`strong`),Sk(1773,`(opcional)`),Kg()(),Qc(1774,`p`),Sk(1775,`Enum para especificação do tipo de recuperação de senha `),Qc(1776,`a`,106),Sk(1777,`PoModalPasswordRecoveryType`),Kg(),Sk(1778,`.`),Kg(),Qc(1779,`blockquote`)(1780,`p`),Sk(1781,`Caso não seja definido valor se assume o padrão `),Qc(1782,`code`),Sk(1783,`PoModalPasswordRecoveryType.Email`),Kg(),Sk(1784,`.`),Kg()()()(),Qc(1785,`tr`,107)(1786,`td`,14)(1787,`div`,15)(1788,`span`,16),Sk(1789,` url`),vu(1790,`br`),Kg()()(),Qc(1791,`td`,17)(1792,`code`,22),Sk(1793,`string`),Kg()(),Qc(1794,`td`,20)(1795,`p`),Sk(1796,`Endpoint usado pelo template `),Qc(1797,`strong`),Sk(1798,`PoModalPasswordRecovery`),Kg(),Sk(1799,` para requisição do recurso.`),Kg(),Qc(1800,`blockquote`)(1801,`p`),Sk(1802,`Saiba mais em `),Qc(1803,`a`,106),Sk(1804,`PoModalPasswordRecovery`),Kg(),Sk(1805,`.`),Kg()()()()(),Qc(1806,`h4`,108)(1807,`code`,5),Sk(1808,`PoPageLogin`),Kg()(),Qc(1809,`div`,2)(1810,`p`),Sk(1811,`Interface com a definição do objeto gerado pelo formulário do componente `),Qc(1812,`code`),Sk(1813,`po-page-login`),Kg(),Sk(1814,`.`),Kg()(),Qc(1815,`h4`,9),Sk(1816,`Propriedades`),Kg(),Qc(1817,`table`,10)(1818,`tr`,11)(1819,`th`,12),Sk(1820,`Nome`),Kg(),Qc(1821,`th`,12),Sk(1822,`Tipo`),Kg(),Qc(1823,`th`,12),Sk(1824,`Descrição`),Kg()(),Qc(1825,`tr`,109)(1826,`td`,14)(1827,`div`,15)(1828,`span`,16),Sk(1829,` login`),vu(1830,`br`),Kg()()(),Qc(1831,`td`,17)(1832,`code`,22),Sk(1833,`string`),Kg()(),Qc(1834,`td`,20)(1835,`p`),Sk(1836,`Login preenchido pelo usuário.`),Kg()()(),Qc(1837,`tr`,110)(1838,`td`,14)(1839,`div`,15)(1840,`span`,16),Sk(1841,` password`),vu(1842,`br`),Kg()()(),Qc(1843,`td`,17)(1844,`code`,22),Sk(1845,`string`),Kg()(),Qc(1846,`td`,20)(1847,`p`),Sk(1848,`Senha preenchida pelo usuário, a mesma será convertida para [hash/md5] antes de ser enviada para a aplicação.`),Kg()()(),Qc(1849,`tr`,111)(1850,`td`,14)(1851,`div`,15)(1852,`span`,16),Sk(1853,` rememberUser`),vu(1854,`br`),Kg()()(),Qc(1855,`td`,17)(1856,`code`,34),Sk(1857,`boolean`),Kg()(),Qc(1858,`td`,20)(1859,`p`),Sk(1860,`Essa propriedade informa se o usuário quer que seus dados sejam lembrados em um acesso futuro.`),Kg()()()(),Qc(1861,`h3`),Sk(1862,`Enums`),Kg(),Qc(1863,`h4`,112)(1864,`code`,5),Sk(1865,`PoPageLoginAuthenticationType`),Kg()(),Qc(1866,`div`,2)(1867,`p`)(1868,`em`),Sk(1869,`Enum`),Kg(),Sk(1870,` para definição do tipo de autenticação.`),Kg()(),Qc(1871,`h4`,9),Sk(1872,`Propriedades`),Kg(),Qc(1873,`table`,10)(1874,`tr`,11)(1875,`th`,12),Sk(1876,`Nome`),Kg(),Qc(1877,`th`,12),Sk(1878,`Descrição`),Kg()(),Qc(1879,`tr`,113)(1880,`td`,14)(1881,`div`,15)(1882,`span`,16),Sk(1883,` Basic`),vu(1884,`br`),Kg()()(),Qc(1885,`td`,20)(1886,`p`),Sk(1887,`Autenticação Basic`),Kg()()(),Qc(1888,`tr`,114)(1889,`td`,14)(1890,`div`,15)(1891,`span`,16),Sk(1892,` Bearer`),vu(1893,`br`),Kg()()(),Qc(1894,`td`,20)(1895,`p`),Sk(1896,`Autenticação Bearer`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return r})();function We(r,J){if(r&1){let p=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(p);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-page-login-basic-view`)(2,`sample-po-page-login-labs-view`)(3,`sample-po-page-login-human-resources-view`)(4,`sample-po-page-login-automatic-service-view`),Kg()}if(r&2){let p=ek();Rb(`p-active`,p.activeTab===`web`)}}var Re=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(I(ar),I(An))};static ɵcmp=Jn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Login`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,We,5,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-page-login-doc`),Kg()()()),l&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,ge,Se,xe,ve,Pe],encapsulation:2,changeDetection:1})}return r})()}];var Ce=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge$1({type:r});static ɵinj=de({imports:[GV.forChild(Re),GV]})}return r})();var Ft=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge$1({type:r});static ɵinj=de({imports:[M,Ce]})}return r})();export{Ft as DocPoPageLoginModule};