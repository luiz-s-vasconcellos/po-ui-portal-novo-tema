import{t as r}from"./chunk-zystk1pz.js";import{$n as Ak,Ar as Ig,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Ln as w4,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,W as M4,Xt as ere,Yi as eF,cn as iie,di as RZ,ea as ge$1,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,i as Ac,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rt as Qae,va as nk,wa as p,xi as VO,ya as nm,yi as U_}from"./chunk-BQaN6dko.js";import{f as ie,i as Gn,n as P,t as M,y as ta}from"./main-SRPMFWZC.js";var ce=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&_u(0,`po-page-login`)},dependencies:[ta],encapsulation:2,changeDetection:1})}return r})();var ye=r=>({"docs-sample-code-tabs":r});var ge=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Login Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-login-basic/sample-po-page-login-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-login></po-page-login>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-login-basic/sample-po-page-login-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-login-basic',
  templateUrl: './sample-po-page-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-login-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ye,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ce],encapsulation:2,changeDetection:1})}return r})();var Ee=(()=>{class r{poDialog=p(iie);background;componentsSize;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`hideRememberUser`,label:`Hide remember user`},{value:`loading`,label:`Loading`}];ngOnInit(){this.restore()}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={}}addLoginError(){this.loginErrors.push(this.loginError),this.loginError=``}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError=``}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(s){this.customLiterals=void 0}}loginSubmit(s){this.exceededAttempts<=0&&this.poDialog.alert({title:`Authenticate`,message:JSON.stringify(s),componentsSize:this.componentsSize})}onChangeCustomProperties(){this.customField=Object.assign({},this.customField)}restore(){this.properties=[],this.background=``,this.componentsSize=`medium`,this.contactEmail=``,this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment=``,this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals=``,this.login=``,this.loginPattern=``,this.loginError=``,this.loginErrors=[],this.logo=void 0,this.passwordError=``,this.passwordErrors=[],this.passwordPattern=``,this.passwordError=``,this.passwordErrors=[],this.productName=``,this.recovery=``,this.registerUrl=``,this.support=``}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-labs`]],standalone:!1,decls:60,vars:50,consts:[[`f`,`ngForm`],[`formCustomFieldOptions`,`ngForm`],[3,`p-login-submit`,`p-background`,`p-components-size`,`p-contact-email`,`p-custom-field`,`p-environment`,`p-exceeded-attempts-warning`,`p-hide-remember-user`,`p-loading`,`p-literals`,`p-login`,`p-login-errors`,`p-login-pattern`,`p-logo`,`p-password-errors`,`p-password-pattern`,`p-product-name`,`p-recovery`,`p-register-url`,`p-secondary-logo`,`p-support`],[1,`po-row`],[`name`,`literals`,`p-help`,`Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`productName`,`p-clean`,``,`p-help`,`A custom name that succeeds the title`,`p-label`,`Product Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`loginPattern`,`p-clean`,``,`p-help`,`Ex.: ^[a-zA-Z]*$ (Only letters)`,`p-label`,`Login Pattern`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`login`,`p-clean`,``,`p-help`,`Ex.: podev`,`p-label`,`Login`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`exceededAttempts`,`p-clean`,``,`p-help`,`Ex.: 5`,`p-label`,`Exceeded Attempts Warning`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordPattern`,`p-clean`,``,`p-help`,`Ex.: ^(\\d*)$ (Only numbers)`,`p-label`,`Password Pattern`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`contactMail`,`p-clean`,``,`p-label`,`Contact Email`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`environment`,`p-clean`,``,`p-label`,`Environment`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-label`,`Logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-label`,`Secondary logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`background`,`p-clean`,``,`p-label`,`Background`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`support`,`p-clean`,``,`p-label`,`Support`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`recovery`,`p-clean`,``,`p-label`,`Recovery`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`registerUrl`,`p-clean`,``,`p-label`,`Register URL`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Login Errors`],[`name`,`loginError`,`p-clean`,``,`p-label`,`Login Error`,1,`po-md-8`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Login Error`,1,`po-md-4`,`po-mt-4`,3,`p-click`],[`p-label`,`Password Errors`],[`name`,`passwordError`,`p-clean`,``,`p-label`,`Password Error`,1,`po-lg-8`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Password Error`,1,`po-md-4`,`po-mt-4`,3,`p-click`],[`p-label`,`Custom Field`],[`name`,`customFieldProperty`,`p-clean`,``,`p-help`,`Ex.: domain`,`p-label`,`Custom Field Property`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldValue`,`p-clean`,``,`p-help`,`Ex.: JV01`,`p-label`,`Custom Field Value`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldPlaceholder`,`p-clean`,``,`p-help`,`Ex.: Enter your domain`,`p-label`,`Custom Field Placeholder`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldPattern`,`p-clean`,``,`p-help`,`Ex.: [a-z]`,`p-label`,`Custom Field Pattern`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldErrorPattern`,`p-clean`,``,`p-help`,"Ex.: Value doesn`t match expected",`p-label`,`Custom Field Error Pattern`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldComboUrl`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Custom Field URL`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldComboValue`,`p-clean`,``,`p-help`,`Property to specify the return field. Ex.: value, nickname, label`,`p-label`,`Custom Field Field Value`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldOptionLabel`,`p-clean`,``,`p-label`,`Custom Field Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldOptionValue`,`p-clean`,``,`p-label`,`Custom Field Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Custom Field Option`,1,`po-md-6`,`po-lg-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let d=ZO();Jc(0,`po-page-login`,2),vt(`p-login-submit`,function(a){return i.loginSubmit(a)}),Zg(),_u(1,`po-divider`),Jc(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.literals,a)||(i.literals=a),H_(a)}),vt(`p-change`,function(){return i.changeLiterals()}),Zg(),Jc(6,`po-input`,5),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.productName,a)||(i.productName=a),H_(a)}),Zg()(),Jc(7,`div`,3)(8,`po-input`,6),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.loginPattern,a)||(i.loginPattern=a),H_(a)}),Zg(),Jc(9,`po-input`,7),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.login,a)||(i.login=a),H_(a)}),Zg()(),Jc(10,`div`,3)(11,`po-input`,8),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.exceededAttempts,a)||(i.exceededAttempts=a),H_(a)}),Zg(),Jc(12,`po-input`,9),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.passwordPattern,a)||(i.passwordPattern=a),H_(a)}),Zg()(),Jc(13,`div`,3)(14,`po-input`,10),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.contactEmail,a)||(i.contactEmail=a),H_(a)}),Zg(),Jc(15,`po-input`,11),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.environment,a)||(i.environment=a),H_(a)}),Zg()(),Jc(16,`div`,3)(17,`po-input`,12),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.logo,a)||(i.logo=a),H_(a)}),Zg(),Jc(18,`po-input`,13),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.secondaryLogo,a)||(i.secondaryLogo=a),H_(a)}),Zg()(),Jc(19,`div`,3)(20,`po-input`,14),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.background,a)||(i.background=a),H_(a)}),Zg(),Jc(21,`po-input`,15),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.support,a)||(i.support=a),H_(a)}),Zg()(),Jc(22,`div`,3)(23,`po-input`,16),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.recovery,a)||(i.recovery=a),H_(a)}),Zg(),Jc(24,`po-input`,17),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.registerUrl,a)||(i.registerUrl=a),H_(a)}),Zg()(),Jc(25,`div`,3)(26,`po-checkbox-group`,18),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.properties,a)||(i.properties=a),H_(a)}),Zg(),Jc(27,`po-radio-group`,19),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.componentsSize,a)||(i.componentsSize=a),H_(a)}),Zg()(),_u(28,`po-divider`,20),Jc(29,`div`,3)(30,`po-input`,21),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.loginError,a)||(i.loginError=a),H_(a)}),Zg(),Jc(31,`po-button`,22),vt(`p-click`,function(){return i.addLoginError()}),Zg()(),_u(32,`po-divider`,23),Jc(33,`div`,3)(34,`po-input`,24),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.passwordError,a)||(i.passwordError=a),H_(a)}),Zg(),Jc(35,`po-button`,25),vt(`p-click`,function(){return i.addPasswordError()}),Zg()(),_u(36,`po-divider`,26),Jc(37,`div`,3)(38,`po-input`,27),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.customField.property,a)||(i.customField.property=a),H_(a)}),vt(`p-change-model`,function(){return i.onChangeCustomProperties()}),Zg(),Jc(39,`po-input`,28),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.customField.value,a)||(i.customField.value=a),H_(a)}),Zg()(),Jc(40,`div`,3)(41,`po-input`,29),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.customField.placeholder,a)||(i.customField.placeholder=a),H_(a)}),Zg(),Jc(42,`po-input`,30),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.customField.pattern,a)||(i.customField.pattern=a),H_(a)}),Zg(),Jc(43,`po-input`,31),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.customField.errorPattern,a)||(i.customField.errorPattern=a),H_(a)}),Zg()(),_u(44,`po-divider`),Jc(45,`div`,3)(46,`po-input`,32),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.customField.url,a)||(i.customField.url=a),H_(a)}),vt(`p-change-model`,function(){return i.onChangeCustomProperties()}),Zg(),Jc(47,`po-input`,33),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.customField.fieldValue,a)||(i.customField.fieldValue=a),H_(a)}),vt(`p-change-model`,function(){return i.onChangeCustomProperties()}),Zg()(),_u(48,`po-divider`),Jc(49,`form`,null,1)(51,`div`,3)(52,`po-input`,34),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.customFieldOption.label,a)||(i.customFieldOption.label=a),H_(a)}),Zg(),Jc(53,`po-input`,35),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.customFieldOption.value,a)||(i.customFieldOption.value=a),H_(a)}),Zg()(),Jc(54,`div`,3)(55,`po-button`,36),vt(`p-click`,function(){return i.addCustomFieldOption()}),Zg()()(),_u(56,`br`)(57,`po-divider`),Jc(58,`div`,3)(59,`po-button`,37),vt(`p-click`,function(){return i.restore()}),Zg()()()}if(l&2){let d=sk(50);Rb(`p-background`,i.background)(`p-components-size`,i.componentsSize)(`p-contact-email`,i.contactEmail)(`p-custom-field`,i.customField)(`p-environment`,i.environment)(`p-exceeded-attempts-warning`,i.exceededAttempts)(`p-hide-remember-user`,i.properties.includes(`hideRememberUser`))(`p-loading`,i.properties.includes(`loading`))(`p-literals`,i.customLiterals)(`p-login`,i.login)(`p-login-errors`,i.loginErrors)(`p-login-pattern`,i.loginPattern)(`p-logo`,i.logo)(`p-password-errors`,i.passwordErrors)(`p-password-pattern`,i.passwordPattern)(`p-product-name`,i.productName)(`p-recovery`,i.recovery)(`p-register-url`,i.registerUrl)(`p-secondary-logo`,i.secondaryLogo)(`p-support`,i.support),Ig(5),Yb(`ngModel`,i.literals),Y0(),Ig(),Yb(`ngModel`,i.productName),Y0(),Ig(2),Yb(`ngModel`,i.loginPattern),Y0(),Ig(),Yb(`ngModel`,i.login),Y0(),Ig(2),Yb(`ngModel`,i.exceededAttempts),Y0(),Ig(),Yb(`ngModel`,i.passwordPattern),Y0(),Ig(2),Yb(`ngModel`,i.contactEmail),Y0(),Ig(),Yb(`ngModel`,i.environment),Y0(),Ig(2),Yb(`ngModel`,i.logo),Y0(),Ig(),Yb(`ngModel`,i.secondaryLogo),Y0(),Ig(2),Yb(`ngModel`,i.background),Y0(),Ig(),Yb(`ngModel`,i.support),Y0(),Ig(2),Yb(`ngModel`,i.recovery),Y0(),Ig(),Yb(`ngModel`,i.registerUrl),Y0(),Ig(2),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.componentsSize),Rb(`p-options`,i.componentsSizeOptions),Y0(),Ig(3),Yb(`ngModel`,i.loginError),Y0(),Ig(4),Yb(`ngModel`,i.passwordError),Y0(),Ig(4),Yb(`ngModel`,i.customField.property),Y0(),Ig(),Yb(`ngModel`,i.customField.value),Y0(),Ig(2),Yb(`ngModel`,i.customField.placeholder),Y0(),Ig(),Yb(`ngModel`,i.customField.pattern),Y0(),Ig(),Yb(`ngModel`,i.customField.errorPattern),Y0(),Ig(3),Yb(`ngModel`,i.customField.url),Y0(),Ig(),Yb(`ngModel`,i.customField.fieldValue),Y0(),Ig(5),Yb(`ngModel`,i.customFieldOption.label),Y0(),Ig(),Yb(`ngModel`,i.customFieldOption.value),Y0(),Ig(2),Rb(`p-disabled`,d.invalid)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,w4,U4,Gte,ta],encapsulation:2,changeDetection:1})}return r})();var Me=r=>({"docs-sample-code-tabs":r});var Se=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Login Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-login-labs/sample-po-page-login-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-login
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-login-labs/sample-po-page-login-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-login-labs`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Me,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ee],encapsulation:2,changeDetection:1})}return r})();function Te(r,Y){if(r&1){let s=ZO();Jc(0,`po-page-login`,6),vt(`p-login-change`,function(){U_(s);let i=nk();return H_(i.loginChange())})(`p-login-submit`,function(i){U_(s);let d=nk();return H_(d.checkLogin(i))})(`p-password-change`,function(){U_(s);let i=nk();return H_(i.passwordChange())}),Zg()}if(r&2){let s=nk();Rb(`p-custom-field`,s.customField)(`p-exceeded-attempts-warning`,s.exceededAttempts)(`p-literals`,s.literalsI18n)(`p-loading`,s.loading)(`p-password-errors`,s.passwordErrors)(`p-login-errors`,s.loginErrors)(`p-recovery`,s.passwordRecovery)}}function De(r,Y){if(r&1&&_u(0,`po-page-blocked-user`,5),r&2){let s=nk();Rb(`p-params`,s.params)}}var he=(()=>{class r{poI18nService=p(M4);poDialog=p(iie);customField={property:`domain`,placeholder:`Enter your domain`};attempts=3;exceededAttempts;literalsI18n;loading=!1;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:`https://po-sample-api.onrender.com/v1/users`,type:ie.All,contactMail:`support@mail.com`};showPageBlocked=!1;i18nSubscription;ngOnDestroy(){this.i18nSubscription.unsubscribe()}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(s=>{this.literalsI18n=s,this.exceededAttempts=0})}checkLogin(s){this.loading=!0,s.login===`devpo`&&s.password===`1986`?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=!1,title:`Access released`,message:`You are on vacation, take time to rest.`})},3e3)):(this.loading=!1,this.generateAttempts(),this.passwordErrors=[`Senha e/ou usuário inválido, verifique e tente novamente.`],this.loginErrors=[`Senha e/ou usuário inválido, verifique e tente novamente.`])}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[])}loginChange(){this.loginErrors.length&&(this.loginErrors=[])}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=!0)}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-human-resources`]],standalone:!1,decls:7,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your ID Sample Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`p-hide-remember-user`,``,`p-login-pattern`,`^[a-zA-Z]*$`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-password-pattern`,`^(\\d*)$`,`p-product-name`,`Human Resources`,`p-register-url`,`http://po.com`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-custom-field`,`p-exceeded-attempts-warning`,`p-literals`,`p-loading`,`p-password-errors`,`p-login-errors`,`p-recovery`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`exceededAttempts`,`p-url-back`,`https://po-ui.io/documentation/po-page-login`,3,`p-params`],[`p-hide-remember-user`,``,`p-login-pattern`,`^[a-zA-Z]*$`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-password-pattern`,`^(\\d*)$`,`p-product-name`,`Human Resources`,`p-register-url`,`http://po.com`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-change`,`p-login-submit`,`p-password-change`,`p-custom-field`,`p-exceeded-attempts-warning`,`p-literals`,`p-loading`,`p-password-errors`,`p-login-errors`,`p-recovery`]],template:function(l,i){l&1&&(Jc(0,`po-container`)(1,`div`,0),_u(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),Zg()(),VO(5,Te,1,7,`po-page-login`,4),VO(6,De,1,1,`po-page-blocked-user`,5)),l&2&&(Ig(5),BO(i.showPageBlocked?-1:5),Ig(),BO(i.showPageBlocked?6:-1))},dependencies:[Ac,Yoe,Gn,ta],encapsulation:2,changeDetection:1})}return r})();var Ae=r=>({"docs-sample-code-tabs":r});var xe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-human-resources-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Login - Human Resources`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-container>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`/**
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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-page-login-human-resources`),Zg(),_u(27,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ae,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,he],encapsulation:2,changeDetection:1})}return r})();var be=(()=>{class r$1{literals;japoneseLiterals={welcome:`ようこそ`,loginLabel:`ユーザー名を入力してください`,loginPlaceholder:`アクセスユーザーを入力してください`,passwordErrorPattern:`パスワードが必要`,passwordLabel:`パスワードを入力してください`,passwordPlaceholder:`パスワードを入力してください`,submitLabel:`アクセスシステム`,submittedLabel:`ローディング中 ...`,rememberUser:`自動的にログイン`,rememberUserHint:`このオプションはシステムメニューで無効にできます`,loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:`pt`,description:`Português`},{language:`jp`,description:`日本語`}];changeLanguage(s){s?.language===`jp`?this.literals=r({},this.japoneseLiterals):this.literals={}}static ɵfac=function(l){return new(l||r$1)};static ɵcmp=Jn({type:r$1,selectors:[[`sample-po-page-login-automatic-service`]],standalone:!1,decls:5,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your ID Sample Login`,`p-value`,`admin`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample Password`,`p-value`,`admin`,1,`po-md-2`],[`p-authentication-url`,`https://po-sample-api.onrender.com/v1/users/authentication`,`p-blocked-url`,`/documentation/po-page-blocked-user`,`p-authentication-type`,`Bearer`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-language-change`,`p-languages`,`p-literals`]],template:function(l,i){l&1&&(Jc(0,`po-container`)(1,`div`,0),_u(2,`po-info`,1)(3,`po-info`,2),Zg()(),Jc(4,`po-page-login`,3),vt(`p-language-change`,function(m){return i.changeLanguage(m)}),Zg()),l&2&&(Ig(4),Rb(`p-languages`,i.languages)(`p-literals`,i.literals))},dependencies:[Ac,Yoe,ta],encapsulation:2,changeDetection:1})}return r$1})();var Be=r=>({"docs-sample-code-tabs":r});var ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-automatic-service-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Login - Automatic Service`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-container>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-login-automatic-service`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Be,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,be],encapsulation:2,changeDetection:1})}return r})();var Pe=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-doc`]],standalone:!1,decls:1897,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginAuthenticationType`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginCustomField`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLanguage>`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginLiterals`],[`pan`,``,1,`docs-api-property-type`,`string[]`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginRecovery`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`href`,`/documentation/po-modal-password-recovery`]],template:function(l,i){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoPageLoginModule } from '@po-ui/ng-templates';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do template do po-page-login.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoPageLoginComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-page-login`),Zg(),Tk(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),Zg(),Jc(18,`p`),Tk(19,`A propriedade `),Jc(20,`code`),Tk(21,`p-authentication-url`),Zg(),Tk(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),Jc(23,`em`),Tk(24,`client side`),Zg(),Tk(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),Jc(26,`em`),Tk(27,`propriedades`),Zg(),Tk(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),Zg(),Jc(29,`p`),Tk(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Jc(31,`em`),Tk(32,`assets`),Zg(),Tk(33,` no arquivo `),Jc(34,`strong`),Tk(35,`angular.json`),Zg(),Tk(36,` da aplicação na seguinte ordem:`),Zg(),Jc(37,`pre`)(38,`code`),Tk(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),Zg()()(),Jc(40,`div`,6)(41,`h4`,7),Tk(42,`Seletor`),Zg(),Jc(43,`pre`,8),Tk(44,`<po-page-login
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
`),Zg()(),Jc(45,`h4`,9),Tk(46,`Propriedades`),Zg(),Jc(47,`table`,10)(48,`tr`,11)(49,`th`,12),Tk(50,`Nome`),Zg(),Jc(51,`th`,12),Tk(52,`Tipo`),Zg(),Jc(53,`th`,12),Tk(54,`Padrão`),Zg(),Jc(55,`th`,12),Tk(56,`Descrição`),Zg()(),Jc(57,`tr`,13)(58,`td`,14)(59,`div`,15)(60,`span`,16),Tk(61,` p-authentication-type`),_u(62,`br`),Zg()()(),Jc(63,`td`,17)(64,`code`,18),Tk(65,`PoPageLoginAuthenticationType`),Zg()(),Jc(66,`td`,19)(67,`p`)(68,`code`),Tk(69,`PoPageLoginAuthenticationType.Basic`),Zg()()(),Jc(70,`td`,20)(71,`em`)(72,`strong`),Tk(73,`(opcional)`),Zg()(),Jc(74,`p`),Tk(75,`Atributo que recebe o tipo de esquema da autenticação, sendo suportados apenas os valores `),Jc(76,`code`),Tk(77,`Basic`),Zg(),Tk(78,` e `),Jc(79,`code`),Tk(80,`Bearer`),Zg(),Tk(81,`.`),Zg(),Jc(82,`blockquote`)(83,`p`),Tk(84,`Caso o tipo definido seja `),Jc(85,`code`),Tk(86,`Basic`),Zg(),Tk(87,`, o componente fará uma requisição `),Jc(88,`code`),Tk(89,`POST`),Zg(),Tk(90,` contendo:`),Zg()(),Jc(91,`pre`)(92,`code`),Tk(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),Zg()(),Jc(94,`blockquote`)(95,`p`),Tk(96,`Caso o tipo definido seja `),Jc(97,`code`),Tk(98,`Bearer`),Zg(),Tk(99,`, o componente fará uma requisição `),Jc(100,`code`),Tk(101,`POST`),Zg(),Tk(102,` contendo:`),Zg()(),Jc(103,`pre`)(104,`code`),Tk(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}
`),Zg()()()(),Jc(106,`tr`,13)(107,`td`,14)(108,`div`,15)(109,`span`,16),Tk(110,` p-authentication-url`),_u(111,`br`),Zg()()(),Jc(112,`td`,17)(113,`code`,21),Tk(114,`string`),Zg()(),Jc(115,`td`,19),Tk(116,`-`),Zg(),Jc(117,`td`,20)(118,`em`)(119,`strong`),Tk(120,`(opcional)`),Zg()(),Jc(121,`p`),Tk(122,`Endpoint usado pelo template para requisição do recurso. Quando preenchido, o método `),Jc(123,`code`),Tk(124,`p-login-submit`),Zg(),Tk(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),Zg(),Jc(126,`h3`),Tk(127,`Processos`),Zg(),Jc(128,`p`),Tk(129,`Ao digitar um valor válido no campo de login/password e pressionar `),Jc(130,`strong`),Tk(131,`Enter`),Zg(),Tk(132,`, o componente fará uma requisição `),Jc(133,`code`),Tk(134,`POST`),Zg(),Tk(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),Zg(),Jc(136,`pre`)(137,`code`),Tk(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),Zg()(),Jc(139,`p`),Tk(140,`Em caso de `),Jc(141,`strong`),Tk(142,`sucesso`),Zg(),Tk(143,`, o objeto de retorno é armazenado no `),Jc(144,`code`),Tk(145,`sessionStorage`),Zg(),Tk(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),Jc(147,`code`),Tk(148,`/`),Zg(),Tk(149,`.`),Zg(),Jc(150,`pre`)(151,`code`),Tk(152,`200:
{
  user: user
}
`),Zg()(),Jc(153,`p`),Tk(154,`Em caso de `),Jc(155,`strong`),Tk(156,`erro`),Zg(),Tk(157,` na autenticação, espera-se o seguinte retorno:`),Zg(),Jc(158,`pre`)(159,`code`),Tk(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}
`),Zg()(),Jc(161,`blockquote`)(162,`p`),Tk(163,`Pode-se atribuir uma quantidade máxima de tentativas restantes (maxAttemptsRemaining) para o atributo `),Jc(164,`code`),Tk(165,`p-exceeded-attempts-warning`),Zg(),Tk(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),Jc(167,`code`),Tk(168,`p-login-errors`),Zg(),Tk(169,` e
`),Jc(170,`code`),Tk(171,`p-password-errors`),Zg(),Tk(172,` conforme retorno abaixo:`),Zg()(),Jc(173,`pre`)(174,`code`),Tk(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}
`),Zg()(),Jc(176,`blockquote`)(177,`p`),Tk(178,`Caso o valor atribuído para `),Jc(179,`code`),Tk(180,`p-exceeded-attempts-warning`),Zg(),Tk(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),Jc(182,`code`),Tk(183,`p-blocked-url`),Zg(),Tk(184,` e o usuário será redirecionado para uma tela de bloqueio.`),Zg()(),Jc(185,`p`)(186,`em`),Tk(187,`Processo finalizado.`),Zg()(),_u(188,`hr`),Jc(189,`h4`),Tk(190,`Praticidade`),Zg(),Jc(191,`p`),Tk(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Jc(193,`code`),Tk(194,`po-page-login`),Zg(),Tk(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),Jc(196,`code`),Tk(197,`/login`),Zg(),Tk(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),Zg(),Jc(199,`pre`)(200,`code`),Tk(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

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
`),Zg()(),Jc(202,`p`),Tk(203,`O metadado `),Jc(204,`code`),Tk(205,`serviceApi`),Zg(),Tk(206,` deve ser a `),Jc(207,`strong`),Tk(208,`url`),Zg(),Tk(209,` para requisição dos recursos de autenticação, o `),Jc(210,`code`),Tk(211,`environment`),Zg(),Tk(212,` alimenta a propriedade
`),Jc(213,`code`),Tk(214,`p-environment`),Zg(),Tk(215,`, `),Jc(216,`code`),Tk(217,`recovery`),Zg(),Tk(218,` é a interface `),Jc(219,`code`),Tk(220,`PoPageLoginRecovery`),Zg(),Tk(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),Jc(222,`code`),Tk(223,`registerUrl`),Zg(),Tk(224,` alimenta a propriedade `),Jc(225,`code`),Tk(226,`p-register-url`),Zg(),Tk(227,` e `),Jc(228,`code`),Tk(229,`authenticationType`),Zg(),Tk(230,` que define a propriedade `),Jc(231,`code`),Tk(232,`p-authentication-type`),Zg(),Tk(233,`.`),Zg(),Jc(234,`blockquote`)(235,`p`),Tk(236,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.`),Zg()()()(),Jc(237,`tr`,13)(238,`td`,14)(239,`div`,15)(240,`span`,16),Tk(241,` p-background`),_u(242,`br`),Zg()()(),Jc(243,`td`,17)(244,`code`,21),Tk(245,`string`),Zg()(),Jc(246,`td`,19),Tk(247,`-`),Zg(),Jc(248,`td`,20)(249,`em`)(250,`strong`),Tk(251,`(opcional)`),Zg()(),Jc(252,`p`),Tk(253,`O `),Jc(254,`code`),Tk(255,`p-background`),Zg(),Tk(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),Zg(),Jc(257,`p`),Tk(258,`A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo.`),Zg(),Jc(259,`p`),Tk(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),Jc(261,`code`),Tk(262,`highlightInfo`),Zg(),Tk(263,`.`),Zg(),Jc(264,`blockquote`)(265,`p`),Tk(266,`Veja mais sobre as literais na propriedade `),Jc(267,`code`),Tk(268,`p-literals`),Zg(),Tk(269,`.`),Zg()(),Jc(270,`p`),Tk(271,`Exemplos de valores válidos:`),Zg(),Jc(272,`ul`)(273,`li`)(274,`strong`),Tk(275,`local`),Zg(),Tk(276,`: `),Jc(277,`code`),Tk(278,`./assets/images/login-background.png`),Zg()(),Jc(279,`li`)(280,`strong`),Tk(281,`url externa`),Zg(),Tk(282,`: `),Jc(283,`code`),Tk(284,`https://po-ui.io/assets/images/login-background.png`),Zg()()(),Jc(285,`blockquote`)(286,`p`),Tk(287,`Essa propriedade é ignorada para aplicações mobile.`),Zg()()()(),Jc(288,`tr`,13)(289,`td`,14)(290,`div`,15)(291,`span`,16),Tk(292,` p-blocked-url`),_u(293,`br`),Zg()()(),Jc(294,`td`,17)(295,`code`,21),Tk(296,`string`),Zg()(),Jc(297,`td`,19),Tk(298,`-`),Zg(),Jc(299,`td`,20)(300,`em`)(301,`strong`),Tk(302,`(opcional)`),Zg()(),Jc(303,`p`),Tk(304,`Caso o valor atribuído para `),Jc(305,`code`),Tk(306,`p-exceeded-attempts-warning`),Zg(),Tk(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),Zg()()(),Jc(308,`tr`,13)(309,`td`,14)(310,`div`,15)(311,`span`,16),Tk(312,` p-components-size`),_u(313,`br`),Zg()()(),Jc(314,`td`,17)(315,`code`,21),Tk(316,`string`),Zg()(),Jc(317,`td`,19)(318,`p`)(319,`code`),Tk(320,`medium`),Zg()()(),Jc(321,`td`,20)(322,`em`)(323,`strong`),Tk(324,`(opcional)`),Zg()(),Jc(325,`p`),Tk(326,`Define o tamanho dos componentes de formulário no template:`),Zg(),Jc(327,`ul`)(328,`li`)(329,`code`),Tk(330,`small`),Zg(),Tk(331,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(332,`li`)(333,`code`),Tk(334,`medium`),Zg(),Tk(335,`: aplica a medida medium de cada componente.`),Zg()(),Jc(336,`blockquote`)(337,`p`),Tk(338,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(339,`code`),Tk(340,`medium`),Zg(),Tk(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(342,`a`,22),Tk(343,`po-theme`),Zg(),Tk(344,`.`),Zg()()()(),Jc(345,`tr`,13)(346,`td`,14)(347,`div`,15)(348,`span`,16),Tk(349,` p-contact-email`),_u(350,`br`),Zg()()(),Jc(351,`td`,17)(352,`code`,21),Tk(353,`string`),Zg()(),Jc(354,`td`,19),Tk(355,`-`),Zg(),Jc(356,`td`,20)(357,`em`)(358,`strong`),Tk(359,`(opcional)`),Zg()(),Jc(360,`p`),Tk(361,`Personaliza o e-mail que é exibido na mensagem de dica de login padrão para contato de suporte.`),Zg()()(),Jc(362,`tr`,13)(363,`td`,14)(364,`div`,15)(365,`span`,16),Tk(366,` p-custom-field`),_u(367,`br`),Zg()()(),Jc(368,`td`,17)(369,`code`,21),Tk(370,`string `),Zg(),Jc(371,`code`,23),Tk(372,` PoPageLoginCustomField`),Zg()(),Jc(373,`td`,19),Tk(374,`-`),Zg(),Jc(375,`td`,20)(376,`em`)(377,`strong`),Tk(378,`(opcional)`),Zg()(),Jc(379,`p`),Tk(380,`Ao informar um valor do tipo `),Jc(381,`code`),Tk(382,`string`),Zg(),Tk(383,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),Jc(384,`code`),Tk(385,`literals`),Zg(),Tk(386,` como `),Jc(387,`code`),Tk(388,`customFieldErrorPattern`),Zg(),Tk(389,` e `),Jc(390,`code`),Tk(391,`customFieldPlaceholder`),Zg(),Tk(392,`.`),Zg(),Jc(393,`p`),Tk(394,`Existe a possibilidade de informar um objeto que segue a definição da interface `),Jc(395,`code`),Tk(396,`PoPageLoginCustomField`),Zg(),Tk(397,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),Jc(398,`code`),Tk(399,`po-input`),Zg(),Tk(400,`, `),Jc(401,`code`),Tk(402,`po-combo`),Zg(),Tk(403,` especificamente para servi\xE7os
ou `),Jc(404,`code`),Tk(405,`po-select`),Zg(),Tk(406,` para valores fixos.`),Zg(),Jc(407,`p`),Tk(408,`Abaixo seguem os exemplos de cada tipo de campo.`),Zg(),Jc(409,`p`)(410,`code`),Tk(411,`po-input`),Zg(),Tk(412,`:`),Zg(),Jc(413,`pre`)(414,`code`),Tk(415,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}
`),Zg()(),Jc(416,`p`)(417,`code`),Tk(418,`po-combo`),Zg(),Tk(419,`:`),Zg(),Jc(420,`pre`)(421,`code`),Tk(422,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}
`),Zg()(),Jc(423,`p`)(424,`code`),Tk(425,`po-select`),Zg(),Tk(426,`:`),Zg(),Jc(427,`pre`)(428,`code`),Tk(429,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}
`),Zg()(),Jc(430,`p`),Tk(431,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),Zg()()(),Jc(432,`tr`,13)(433,`td`,14)(434,`div`,15)(435,`span`,16),Tk(436,` p-environment`),_u(437,`br`),Zg()()(),Jc(438,`td`,17)(439,`code`,21),Tk(440,`string`),Zg()(),Jc(441,`td`,19),Tk(442,`-`),Zg(),Jc(443,`td`,20)(444,`em`)(445,`strong`),Tk(446,`(opcional)`),Zg()(),Jc(447,`p`),Tk(448,`Adiciona uma `),Jc(449,`code`),Tk(450,`tag`),Zg(),Tk(451,` abaixo do título que especifica o ambiente que o usuário está fazendo o login.`),Zg(),Jc(452,`blockquote`)(453,`p`),Tk(454,`Essa propriedade limita o texto em 40 caracteres.`),Zg()()()(),Jc(455,`tr`,13)(456,`td`,14)(457,`div`,15)(458,`span`,16),Tk(459,` p-exceeded-attempts-warning`),_u(460,`br`),Zg()()(),Jc(461,`td`,17)(462,`code`,24),Tk(463,`number`),Zg()(),Jc(464,`td`,19)(465,`p`)(466,`code`),Tk(467,`0`),Zg()()(),Jc(468,`td`,20)(469,`em`)(470,`strong`),Tk(471,`(opcional)`),Zg()(),Jc(472,`p`),Tk(473,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),Zg(),Jc(474,`blockquote`)(475,`p`),Tk(476,`Caso tenha algum valor atribuído para o atributo `),Jc(477,`code`),Tk(478,`p-authentication-url`),Zg(),Tk(479,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),Jc(480,`code`),Tk(481,`p-exceeded-attempts-warning`),Zg(),Tk(482,`, o valor considerado será o do retorno da requisição.`),Zg()()()(),Jc(483,`tr`,13)(484,`td`,14)(485,`div`,15)(486,`span`,16),Tk(487,` p-hide-label-status`),_u(488,`br`),Zg()()(),Jc(489,`td`,17)(490,`code`,25),Tk(491,`boolean`),Zg()(),Jc(492,`td`,19)(493,`p`)(494,`code`),Tk(495,`false`),Zg()()(),Jc(496,`td`,20)(497,`em`)(498,`strong`),Tk(499,`(opcional)`),Zg()(),Jc(500,`p`),Tk(501,`Indica se o status do `),Jc(502,`code`),Tk(503,`model`),Zg(),Tk(504,` do switch de lembrar o usuário será escondido visualmente.`),Zg(),Jc(505,`blockquote`)(506,`p`),Tk(507,`Por padrão será atribuído `),Jc(508,`code`),Tk(509,`false`),Zg(),Tk(510,`.`),Zg()()()(),Jc(511,`tr`,13)(512,`td`,14)(513,`div`,15)(514,`span`,16),Tk(515,` p-hide-password-peek`),_u(516,`br`),Zg()()(),Jc(517,`td`,17)(518,`code`,25),Tk(519,`boolean`),Zg()(),Jc(520,`td`,19)(521,`p`)(522,`code`),Tk(523,`false`),Zg()()(),Jc(524,`td`,20)(525,`em`)(526,`strong`),Tk(527,`(opcional)`),Zg()(),Jc(528,`p`),Tk(529,`Permite esconder a função de espiar a senha digitada.`),Zg()()(),Jc(530,`tr`,13)(531,`td`,14)(532,`div`,15)(533,`span`,16),Tk(534,` p-hide-remember-user`),_u(535,`br`),Zg()()(),Jc(536,`td`,17)(537,`code`,25),Tk(538,`boolean`),Zg()(),Jc(539,`td`,19)(540,`p`)(541,`code`),Tk(542,`false`),Zg()()(),Jc(543,`td`,20)(544,`em`)(545,`strong`),Tk(546,`(opcional)`),Zg()(),Jc(547,`p`),Tk(548,`Esconde a função "Lembrar usuário" do formulário de login.`),Zg(),Jc(549,`p`),Tk(550,`Quando essa propriedade é setada com `),Jc(551,`code`),Tk(552,`true`),Zg(),Tk(553,` a propriedade `),Jc(554,`code`),Tk(555,`rememberUser`),Zg(),Tk(556,` enviada no evento `),Jc(557,`code`),Tk(558,`p-login-submit`),Zg(),Tk(559,` ser\xE1 sempre
`),Jc(560,`code`),Tk(561,`false`),Zg(),Tk(562,`.`),Zg(),Jc(563,`blockquote`)(564,`p`),Tk(565,`Veja a propriedade `),Jc(566,`code`),Tk(567,`p-literals`),Zg(),Tk(568,` para customizar a literal `),Jc(569,`code`),Tk(570,`rememberUser`),Zg(),Tk(571,`.`),Zg()()()(),Jc(572,`tr`,13)(573,`td`,14)(574,`div`,26)(575,`span`,27),Tk(576,` (p-language-change)`),_u(577,`br`),Zg()()(),Jc(578,`td`,17)(579,`code`,28),Tk(580,`EventEmitter`),Zg()(),Jc(581,`td`,19),Tk(582,`-`),Zg(),Jc(583,`td`,20)(584,`em`)(585,`strong`),Tk(586,`(opcional)`),Zg()(),Jc(587,`p`),Tk(588,`Evento disparado quando o usuário alterar o idioma da página.`),Zg(),Jc(589,`p`),Tk(590,`Esse evento receberá como parâmetro um objeto do tipo `),Jc(591,`code`),Tk(592,`PoLanguage`),Zg(),Tk(593,` com a linguagem selecionada.`),Zg()()(),Jc(594,`tr`,13)(595,`td`,14)(596,`div`,15)(597,`span`,16),Tk(598,` p-languages`),_u(599,`br`),Zg()()(),Jc(600,`td`,17)(601,`code`,29),Tk(602,`Array<PoLanguage>`),Zg()(),Jc(603,`td`,19),Tk(604,`-`),Zg(),Jc(605,`td`,20)(606,`em`)(607,`strong`),Tk(608,`(opcional)`),Zg()(),Jc(609,`p`),Tk(610,`Coleção de idiomas que o componente irá tratar e disponibilizará para o usuário escolher.`),Zg(),Jc(611,`p`),Tk(612,`Caso essa propriedade não seja utilizada o componente mostrará no combo os idiomas que ele suporta por padrão.`),Zg(),Jc(613,`p`),Tk(614,`Caso a coleção tenha um idioma, a página estará nesse idioma e não mostrará o combo.`),Zg(),Jc(615,`p`),Tk(616,`Caso seja passado um array vazio, a página terá o idioma configurado no `),Jc(617,`code`),Tk(618,`i18n`),Zg(),Tk(619,` e não mostrará o combo de seleção.`),Zg(),Jc(620,`blockquote`)(621,`p`),Tk(622,`Se for passado um idioma não suportado, será preciso passar as literais pela propriedade `),Jc(623,`code`),Tk(624,`p-literals`),Zg(),Tk(625,`.`),Zg()()()(),Jc(626,`tr`,13)(627,`td`,14)(628,`div`,15)(629,`span`,16),Tk(630,` p-literals`),_u(631,`br`),Zg()()(),Jc(632,`td`,17)(633,`code`,30),Tk(634,`PoPageLoginLiterals`),Zg()(),Jc(635,`td`,19),Tk(636,`-`),Zg(),Jc(637,`td`,20)(638,`em`)(639,`strong`),Tk(640,`(opcional)`),Zg()(),Jc(641,`p`),Tk(642,`Objeto com as literais usadas no `),Jc(643,`code`),Tk(644,`po-page-login`),Zg(),Tk(645,`.`),Zg(),Jc(646,`p`),Tk(647,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Zg(),Jc(648,`pre`)(649,`code`),Tk(650,`const customLiterals: PoPageLoginLiterals = {
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
`),Zg()(),Jc(651,`p`),Tk(652,`Ou passando apenas as literais que deseja customizar:`),Zg(),Jc(653,`pre`)(654,`code`),Tk(655,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};
`),Zg()(),Jc(656,`p`),Tk(657,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Zg(),Jc(658,`pre`)(659,`code`),Tk(660,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>
`),Zg()(),Jc(661,`blockquote`)(662,`p`),Tk(663,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),Zg()()()(),Jc(664,`tr`,13)(665,`td`,14)(666,`div`,15)(667,`span`,16),Tk(668,` p-loading`),_u(669,`br`),Zg()()(),Jc(670,`td`,17)(671,`code`,25),Tk(672,`boolean`),Zg()(),Jc(673,`td`,19)(674,`p`)(675,`code`),Tk(676,`false`),Zg()()(),Jc(677,`td`,20)(678,`em`)(679,`strong`),Tk(680,`(opcional)`),Zg()(),Jc(681,`p`),Tk(682,`Habilita um estado de carregamento ao botão de `),Jc(683,`em`),Tk(684,`login`),Zg(),Tk(685,`.`),Zg(),Jc(686,`blockquote`)(687,`p`),Tk(688,`É necessário atribuir `),Jc(689,`code`),Tk(690,`true`),Zg(),Tk(691,` à esta propriedade na função definida em `),Jc(692,`code`),Tk(693,`p-login-submit`),Zg(),Tk(694,`.`),Zg()()()(),Jc(695,`tr`,13)(696,`td`,14)(697,`div`,15)(698,`span`,16),Tk(699,` p-login`),_u(700,`br`),Zg()()(),Jc(701,`td`,17)(702,`code`,21),Tk(703,`string`),Zg()(),Jc(704,`td`,19),Tk(705,`-`),Zg(),Jc(706,`td`,20)(707,`em`)(708,`strong`),Tk(709,`(opcional)`),Zg()(),Jc(710,`p`),Tk(711,`Valor do modelo do campo de login.`),Zg()()(),Jc(712,`tr`,13)(713,`td`,14)(714,`div`,26)(715,`span`,27),Tk(716,` (p-login-change)`),_u(717,`br`),Zg()()(),Jc(718,`td`,17)(719,`code`,28),Tk(720,`EventEmitter`),Zg()(),Jc(721,`td`,19),Tk(722,`-`),Zg(),Jc(723,`td`,20)(724,`em`)(725,`strong`),Tk(726,`(opcional)`),Zg()(),Jc(727,`p`),Tk(728,`Evento disparado quando o usuário alterar o input do campo login.`),Zg(),Jc(729,`p`),Tk(730,`Esse evento receberá como parâmetro uma variável do tipo `),Jc(731,`code`),Tk(732,`string`),Zg(),Tk(733,` com o texto informado no campo.`),Zg(),Jc(734,`blockquote`)(735,`p`),Tk(736,`Esta propriedade será ignorada se for definido valor para a propriedade `),Jc(737,`code`),Tk(738,`p-authentication-url`),Zg(),Tk(739,`.`),Zg()()()(),Jc(740,`tr`,13)(741,`td`,14)(742,`div`,15)(743,`span`,16),Tk(744,` p-login-errors`),_u(745,`br`),Zg()()(),Jc(746,`td`,17)(747,`code`,31),Tk(748,`string[]`),Zg()(),Jc(749,`td`,19),Tk(750,`-`),Zg(),Jc(751,`td`,20)(752,`em`)(753,`strong`),Tk(754,`(opcional)`),Zg()(),Jc(755,`p`),Tk(756,`Atributo que recebe uma lista de erros e exibe abaixo do campo de login.`),Zg()()(),Jc(757,`tr`,13)(758,`td`,14)(759,`div`,15)(760,`span`,16),Tk(761,` p-login-pattern`),_u(762,`br`),Zg()()(),Jc(763,`td`,17)(764,`code`,21),Tk(765,`string`),Zg()(),Jc(766,`td`,19),Tk(767,`-`),Zg(),Jc(768,`td`,20)(769,`em`)(770,`strong`),Tk(771,`(opcional)`),Zg()(),Jc(772,`p`),Tk(773,`Expressão regular para validar o campo de login, caso a expressão não seja atentida, a literal `),Jc(774,`code`),Tk(775,`loginErrorPattern`),Zg(),Tk(776,`
ser\xE1 exibida.`),Zg(),Jc(777,`p`),Tk(778,`Exemplos de valores válidos:`),Zg(),Jc(779,`ul`)(780,`li`),Tk(781,`email: `),Jc(782,`code`),Tk(783,`[expressao-regular-email]`),Zg()(),Jc(784,`li`),Tk(785,`cpf: `),Jc(786,`code`),Tk(787,`[expressao-regular-cpf]`),Zg()()(),Jc(788,`blockquote`)(789,`p`),Tk(790,`Veja a propriedade `),Jc(791,`code`),Tk(792,`p-literals`),Zg(),Tk(793,` para customizar a literal `),Jc(794,`code`),Tk(795,`loginErrorPattern`),Zg(),Tk(796,`.`),Zg()()()(),Jc(797,`tr`,13)(798,`td`,14)(799,`div`,26)(800,`span`,27),Tk(801,` (p-login-submit)`),_u(802,`br`),Zg()()(),Jc(803,`td`,17)(804,`code`,28),Tk(805,`EventEmitter`),Zg()(),Jc(806,`td`,19),Tk(807,`-`),Zg(),Jc(808,`td`,20)(809,`p`),Tk(810,`Evento disparado ao submeter o formulário de login (apertando `),Jc(811,`code`),Tk(812,`Enter`),Zg(),Tk(813,` dentro dos campos ou pressionando o botão de confirmação).`),Zg(),Jc(814,`p`),Tk(815,`Esse evento receberá como parâmetro um objeto do tipo `),Jc(816,`code`),Tk(817,`PoPageLogin`),Zg(),Tk(818,` com os dados informados no formulário.`),Zg(),Jc(819,`blockquote`)(820,`p`),Tk(821,`Esta propriedade será ignorada se for definido valor para a propriedade `),Jc(822,`code`),Tk(823,`p-url-recovery`),Zg(),Tk(824,`.`),Zg()(),Jc(825,`blockquote`)(826,`p`),Tk(827,`Para mais detalhes consulte a documentação sobre a interface `),Jc(828,`code`),Tk(829,`PoPageLogin`),Zg(),Tk(830,` mais abaixo.`),Zg()()()(),Jc(831,`tr`,13)(832,`td`,14)(833,`div`,15)(834,`span`,16),Tk(835,` p-logo`),_u(836,`br`),Zg()()(),Jc(837,`td`,17)(838,`code`,21),Tk(839,`string`),Zg()(),Jc(840,`td`,19),Tk(841,`-`),Zg(),Jc(842,`td`,20)(843,`em`)(844,`strong`),Tk(845,`(opcional)`),Zg()(),Jc(846,`p`),Tk(847,`Caminho para a logomarca localizada na parte superior.`),Zg(),Jc(848,`blockquote`)(849,`p`),Tk(850,`Caso seja indefinida o espaço se mantém preservado porém vazio.`),Zg()()()(),Jc(851,`tr`,13)(852,`td`,14)(853,`div`,15)(854,`span`,16),Tk(855,` p-no-autocomplete-login`),_u(856,`br`),Zg()()(),Jc(857,`td`,17)(858,`code`,25),Tk(859,`boolean`),Zg()(),Jc(860,`td`,19)(861,`p`)(862,`code`),Tk(863,`true`),Zg()()(),Jc(864,`td`,20)(865,`em`)(866,`strong`),Tk(867,`(opcional)`),Zg()(),Jc(868,`p`),Tk(869,`Define a propriedade nativa `),Jc(870,`code`),Tk(871,`autocomplete`),Zg(),Tk(872,` do campo como `),Jc(873,`code`),Tk(874,`off`),Zg(),Tk(875,`.`),Zg()()(),Jc(876,`tr`,13)(877,`td`,14)(878,`div`,15)(879,`span`,16),Tk(880,` p-no-autocomplete-password`),_u(881,`br`),Zg()()(),Jc(882,`td`,17)(883,`code`,25),Tk(884,`boolean`),Zg()(),Jc(885,`td`,19)(886,`p`)(887,`code`),Tk(888,`true`),Zg()()(),Jc(889,`td`,20)(890,`em`)(891,`strong`),Tk(892,`(opcional)`),Zg()(),Jc(893,`p`),Tk(894,`Define a propriedade nativa `),Jc(895,`code`),Tk(896,`autocomplete`),Zg(),Tk(897,` do campo como `),Jc(898,`code`),Tk(899,`off`),Zg(),Tk(900,`.`),Zg(),Jc(901,`blockquote`)(902,`p`),Tk(903,`No componente `),Jc(904,`code`),Tk(905,`po-password`),Zg(),Tk(906,` será definido como `),Jc(907,`code`),Tk(908,`new-password`),Zg(),Tk(909,`.`),Zg()()()(),Jc(910,`tr`,13)(911,`td`,14)(912,`div`,26)(913,`span`,27),Tk(914,` (p-password-change)`),_u(915,`br`),Zg()()(),Jc(916,`td`,17)(917,`code`,28),Tk(918,`EventEmitter`),Zg()(),Jc(919,`td`,19),Tk(920,`-`),Zg(),Jc(921,`td`,20)(922,`em`)(923,`strong`),Tk(924,`(opcional)`),Zg()(),Jc(925,`p`),Tk(926,`Evento disparado quando o usuário alterar o input do campo password.`),Zg(),Jc(927,`p`),Tk(928,`Esse evento receberá como parâmetro uma variável do tipo `),Jc(929,`code`),Tk(930,`string`),Zg(),Tk(931,` com o texto informado no campo.`),Zg(),Jc(932,`blockquote`)(933,`p`),Tk(934,`Esta propriedade será ignorada se for definido valor para a propriedade `),Jc(935,`code`),Tk(936,`p-authentication-url`),Zg(),Tk(937,`.`),Zg()()()(),Jc(938,`tr`,13)(939,`td`,14)(940,`div`,15)(941,`span`,16),Tk(942,` p-password-errors`),_u(943,`br`),Zg()()(),Jc(944,`td`,17)(945,`code`,31),Tk(946,`string[]`),Zg()(),Jc(947,`td`,19),Tk(948,`-`),Zg(),Jc(949,`td`,20)(950,`em`)(951,`strong`),Tk(952,`(opcional)`),Zg()(),Jc(953,`p`),Tk(954,`Atributo que recebe uma lista de erros e exibe abaixo do campo de password.`),Zg()()(),Jc(955,`tr`,13)(956,`td`,14)(957,`div`,15)(958,`span`,16),Tk(959,` p-password-pattern`),_u(960,`br`),Zg()()(),Jc(961,`td`,17)(962,`code`,21),Tk(963,`string`),Zg()(),Jc(964,`td`,19),Tk(965,`-`),Zg(),Jc(966,`td`,20)(967,`em`)(968,`strong`),Tk(969,`(opcional)`),Zg()(),Jc(970,`p`),Tk(971,`Expressão regular para validar o campo de password, caso a expressão não seja atentida, a literal `),Jc(972,`code`),Tk(973,`passwordErrorPattern`),Zg(),Tk(974,`
ser\xE1 exibida.`),Zg(),Jc(975,`p`),Tk(976,`Exemplos de valores válidos:`),Zg(),Jc(977,`ul`)(978,`li`),Tk(979,`Apenas números: `),Jc(980,`code`),Tk(981,`\\d?`),Zg()(),Jc(982,`li`),Tk(983,`Letras mínusculas: `),Jc(984,`code`),Tk(985,`\\z?`),Zg()()(),Jc(986,`blockquote`)(987,`p`),Tk(988,`Veja a propriedade `),Jc(989,`code`),Tk(990,`p-literals`),Zg(),Tk(991,` para customizar a literal `),Jc(992,`code`),Tk(993,`passwordErrorPattern`),Zg(),Tk(994,`.`),Zg()()()(),Jc(995,`tr`,13)(996,`td`,14)(997,`div`,15)(998,`span`,16),Tk(999,` p-product-name`),_u(1e3,`br`),Zg()()(),Jc(1001,`td`,17)(1002,`code`,21),Tk(1003,`string`),Zg()(),Jc(1004,`td`,19),Tk(1005,`-`),Zg(),Jc(1006,`td`,20)(1007,`em`)(1008,`strong`),Tk(1009,`(opcional)`),Zg()(),Jc(1010,`p`),Tk(1011,`Texto customizado que fica entre a logo e a mensagem de boas-vindas.`),Zg()()(),Jc(1012,`tr`,13)(1013,`td`,14)(1014,`div`,15)(1015,`span`,16),Tk(1016,` p-recovery`),_u(1017,`br`),Zg()()(),Jc(1018,`td`,17)(1019,`code`,21),Tk(1020,`string `),Zg(),Jc(1021,`code`,32),Tk(1022,` Function `),Zg(),Jc(1023,`code`,33),Tk(1024,` PoPageLoginRecovery`),Zg()(),Jc(1025,`td`,19),Tk(1026,`-`),Zg(),Jc(1027,`td`,20)(1028,`em`)(1029,`strong`),Tk(1030,`(opcional)`),Zg()(),Jc(1031,`p`),Tk(1032,`Exibe um link abaixo do formulário de login para que os usuários da aplicação façam a recuperação dos dados de autenticação.`),Zg(),Jc(1033,`p`),Tk(1034,`A propriedade aceita os seguintes tipos:`),Zg(),Jc(1035,`ul`)(1036,`li`)(1037,`p`)(1038,`strong`),Tk(1039,`String`),Zg(),Tk(1040,`: informe uma url externa ou uma rota válida;`),Zg()(),Jc(1041,`li`)(1042,`p`)(1043,`strong`),Tk(1044,`Function`),Zg(),Tk(1045,`: pode-se customizar a ação. Para esta possilidade basta atribuir:`),Zg(),Jc(1046,`pre`)(1047,`code`),Tk(1048,`<po-page-login>
  [recovery]="this.myRecovery.bind(this)">
</po-page-login>
`),Zg()()(),Jc(1049,`li`)(1050,`p`)(1051,`strong`),Tk(1052,`PoPageLoginRecovery`),Zg(),Tk(1053,`: cria-se vínculo automático com o template `),Jc(1054,`strong`),Tk(1055,`po-modal-password-recovery`),Zg(),Tk(1056,`.
O objeto deve conter a `),Jc(1057,`strong`),Tk(1058,`url`),Zg(),Tk(1059,` para requisição dos recursos e pode-se definir o `),Jc(1060,`strong`),Tk(1061,`tipo`),Zg(),Tk(1062,` de modal para recupera\xE7\xE3o de senha,
`),Jc(1063,`strong`),Tk(1064,`email`),Zg(),Tk(1065,` para contato e `),Jc(1066,`strong`),Tk(1067,`máscara`),Zg(),Tk(1068,` do campo de telefone.`),Zg()()()()(),Jc(1069,`tr`,13)(1070,`td`,14)(1071,`div`,15)(1072,`span`,16),Tk(1073,` p-register-url`),_u(1074,`br`),Zg()()(),Jc(1075,`td`,17)(1076,`code`,21),Tk(1077,`string`),Zg()(),Jc(1078,`td`,19),Tk(1079,`-`),Zg(),Jc(1080,`td`,20)(1081,`em`)(1082,`strong`),Tk(1083,`(opcional)`),Zg()(),Jc(1084,`p`),Tk(1085,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),Zg(),Jc(1086,`p`),Tk(1087,`Exemplos de valores válidos:`),Zg(),Jc(1088,`ul`)(1089,`li`)(1090,`strong`),Tk(1091,`local`),Zg(),Tk(1092,`: `),Jc(1093,`code`),Tk(1094,`/home`),Zg()(),Jc(1095,`li`)(1096,`strong`),Tk(1097,`url externa`),Zg(),Tk(1098,`: `),Jc(1099,`code`),Tk(1100,`https://po-ui.io`),Zg()()(),Jc(1101,`blockquote`)(1102,`p`),Tk(1103,`Veja a propriedade `),Jc(1104,`code`),Tk(1105,`p-literals`),Zg(),Tk(1106,` para customizar a literal `),Jc(1107,`code`),Tk(1108,`registerUrl`),Zg(),Tk(1109,`.`),Zg()()()(),Jc(1110,`tr`,13)(1111,`td`,14)(1112,`div`,15)(1113,`span`,16),Tk(1114,` p-secondary-logo`),_u(1115,`br`),Zg()()(),Jc(1116,`td`,17)(1117,`code`,21),Tk(1118,`string`),Zg()(),Jc(1119,`td`,19),Tk(1120,`-`),Zg(),Jc(1121,`td`,20)(1122,`em`)(1123,`strong`),Tk(1124,`(opcional)`),Zg()(),Jc(1125,`p`),Tk(1126,`Caminho para a logomarca localizada no rodapé.`),Zg()()(),Jc(1127,`tr`,13)(1128,`td`,14)(1129,`div`,15)(1130,`span`,16),Tk(1131,` p-support`),_u(1132,`br`),Zg()()(),Jc(1133,`td`,17)(1134,`code`,21),Tk(1135,`string `),Zg(),Jc(1136,`code`,32),Tk(1137,` Function`),Zg()(),Jc(1138,`td`,19),Tk(1139,`-`),Zg(),Jc(1140,`td`,20)(1141,`em`)(1142,`strong`),Tk(1143,`(opcional)`),Zg()(),Jc(1144,`p`),Tk(1145,`Exibe um botão para suporte.`),Zg(),Jc(1146,`p`),Tk(1147,`A propriedade aceita os seguintes tipos:`),Zg(),Jc(1148,`ul`)(1149,`li`)(1150,`strong`),Tk(1151,`String`),Zg(),Tk(1152,`: URL externa ou uma rota válida;`),Zg(),Jc(1153,`li`)(1154,`strong`),Tk(1155,`Function`),Zg(),Tk(1156,`: Função a ser disparada ao clicar no botão de suporte;`),Jc(1157,`pre`)(1158,`code`),Tk(1159,`<po-page-login>
  [p-support]="this.mySupport.bind(this)">
</po-page-login>
`),Zg()()()()()()(),Jc(1160,`h3`),Tk(1161,`Interfaces`),Zg(),Jc(1162,`h4`,34)(1163,`code`,5),Tk(1164,`PoPageLoginCustomField`),Zg()(),Jc(1165,`div`,2)(1166,`p`),Tk(1167,`Interface com a definição do Custom Field, podendo ser utilizado para informar um campo customizado no componente `),Jc(1168,`code`),Tk(1169,`po-page-login`),Zg(),Tk(1170,`.`),Zg()(),Jc(1171,`h4`,9),Tk(1172,`Propriedades`),Zg(),Jc(1173,`table`,10)(1174,`tr`,11)(1175,`th`,12),Tk(1176,`Nome`),Zg(),Jc(1177,`th`,12),Tk(1178,`Tipo`),Zg(),Jc(1179,`th`,12),Tk(1180,`Descrição`),Zg()(),Jc(1181,`tr`,13)(1182,`td`,14)(1183,`div`,15)(1184,`span`,16),Tk(1185,` errorPattern`),_u(1186,`br`),Zg()()(),Jc(1187,`td`,17)(1188,`code`,21),Tk(1189,`string`),Zg()(),Jc(1190,`td`,20)(1191,`em`)(1192,`strong`),Tk(1193,`(opcional)`),Zg()(),Jc(1194,`p`),Tk(1195,`Mensagem que será exibida quando a expressão regular informada na propriedade `),Jc(1196,`code`),Tk(1197,`pattern`),Zg(),Tk(1198,` não for válida.`),Zg()()(),Jc(1199,`tr`,13)(1200,`td`,14)(1201,`div`,15)(1202,`span`,16),Tk(1203,` fieldValue`),_u(1204,`br`),Zg()()(),Jc(1205,`td`,17)(1206,`code`,21),Tk(1207,`string`),Zg()(),Jc(1208,`td`,20)(1209,`em`)(1210,`strong`),Tk(1211,`(opcional)`),Zg()(),Jc(1212,`p`),Tk(1213,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),Jc(1214,`code`),Tk(1215,`po-combo`),Zg(),Tk(1216,`, esta propriedade será responsável pelo valor de cada item da lista.`),Zg()()(),Jc(1217,`tr`,13)(1218,`td`,14)(1219,`div`,15)(1220,`span`,16),Tk(1221,` options`),_u(1222,`br`),Zg()()(),Jc(1223,`td`,17)(1224,`code`,35),Tk(1225,`Array<PoSelectOption>`),Zg()(),Jc(1226,`td`,20)(1227,`em`)(1228,`strong`),Tk(1229,`(opcional)`),Zg()(),Jc(1230,`p`),Tk(1231,`Lista de opções de um `),Jc(1232,`code`),Tk(1233,`po-select`),Zg(),Tk(1234,`.`),Zg()()(),Jc(1235,`tr`,13)(1236,`td`,14)(1237,`div`,15)(1238,`span`,16),Tk(1239,` pattern`),_u(1240,`br`),Zg()()(),Jc(1241,`td`,17)(1242,`code`,21),Tk(1243,`string`),Zg()(),Jc(1244,`td`,20)(1245,`em`)(1246,`strong`),Tk(1247,`(opcional)`),Zg()(),Jc(1248,`p`),Tk(1249,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),Jc(1250,`code`),Tk(1251,`errorPattern`),Zg(),Tk(1252,` será exibida.`),Zg()()(),Jc(1253,`tr`,13)(1254,`td`,14)(1255,`div`,15)(1256,`span`,16),Tk(1257,` placeholder`),_u(1258,`br`),Zg()()(),Jc(1259,`td`,17)(1260,`code`,21),Tk(1261,`string`),Zg()(),Jc(1262,`td`,20)(1263,`em`)(1264,`strong`),Tk(1265,`(opcional)`),Zg()(),Jc(1266,`p`),Tk(1267,`Mensagem que será exibida enquanto o campo customizado não estiver preenchido.`),Zg()()(),Jc(1268,`tr`,13)(1269,`td`,14)(1270,`div`,15)(1271,`span`,16),Tk(1272,` property`),_u(1273,`br`),Zg()()(),Jc(1274,`td`,17)(1275,`code`,21),Tk(1276,`string`),Zg()(),Jc(1277,`td`,20)(1278,`p`),Tk(1279,`Nome da propriedade que será utilizado no campo customizado.`),Zg()()(),Jc(1280,`tr`,13)(1281,`td`,14)(1282,`div`,15)(1283,`span`,16),Tk(1284,` url`),_u(1285,`br`),Zg()()(),Jc(1286,`td`,17)(1287,`code`,21),Tk(1288,`string`),Zg()(),Jc(1289,`td`,20)(1290,`em`)(1291,`strong`),Tk(1292,`(opcional)`),Zg()(),Jc(1293,`p`),Tk(1294,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),Jc(1295,`code`),Tk(1296,`po-combo`),Zg(),Tk(1297,`.`),Zg()()(),Jc(1298,`tr`,13)(1299,`td`,14)(1300,`div`,15)(1301,`span`,16),Tk(1302,` value`),_u(1303,`br`),Zg()()(),Jc(1304,`td`,17)(1305,`code`,21),Tk(1306,`string `),Zg(),Jc(1307,`code`,24),Tk(1308,` number`),Zg()(),Jc(1309,`td`,20)(1310,`em`)(1311,`strong`),Tk(1312,`(opcional)`),Zg()(),Jc(1313,`p`),Tk(1314,`Valor do campo customizado.`),Zg()()()(),Jc(1315,`h4`,34)(1316,`code`,5),Tk(1317,`PoPageLoginLiterals`),Zg()(),Jc(1318,`div`,2)(1319,`p`),Tk(1320,`Interface para definição das literais usadas no `),Jc(1321,`code`),Tk(1322,`po-page-login`),Zg(),Tk(1323,`.`),Zg()(),Jc(1324,`h4`,9),Tk(1325,`Propriedades`),Zg(),Jc(1326,`table`,10)(1327,`tr`,11)(1328,`th`,12),Tk(1329,`Nome`),Zg(),Jc(1330,`th`,12),Tk(1331,`Tipo`),Zg(),Jc(1332,`th`,12),Tk(1333,`Descrição`),Zg()(),Jc(1334,`tr`,13)(1335,`td`,14)(1336,`div`,15)(1337,`span`,16),Tk(1338,` attempts`),_u(1339,`br`),Zg()()(),Jc(1340,`td`,17)(1341,`code`,21),Tk(1342,`string`),Zg()(),Jc(1343,`td`,20)(1344,`em`)(1345,`strong`),Tk(1346,`(opcional)`),Zg()(),Jc(1347,`p`),Tk(1348,`Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio.`),Zg()()(),Jc(1349,`tr`,13)(1350,`td`,14)(1351,`div`,15)(1352,`span`,16),Tk(1353,` createANewPasswordNow`),_u(1354,`br`),Zg()()(),Jc(1355,`td`,17)(1356,`code`,21),Tk(1357,`string`),Zg()(),Jc(1358,`td`,20)(1359,`em`)(1360,`strong`),Tk(1361,`(opcional)`),Zg()(),Jc(1362,`p`),Tk(1363,`Texto exibido no popover de aviso de bloqueio, que orienta o usuário, caso ele tenha esquecido a senha, a criar uma nova senha.`),Zg()()(),Jc(1364,`tr`,13)(1365,`td`,14)(1366,`div`,15)(1367,`span`,16),Tk(1368,` customFieldErrorPattern`),_u(1369,`br`),Zg()()(),Jc(1370,`td`,17)(1371,`code`,21),Tk(1372,`string`),Zg()(),Jc(1373,`td`,20)(1374,`em`)(1375,`strong`),Tk(1376,`(opcional)`),Zg()(),Jc(1377,`p`),Tk(1378,`Mensagem de erro apresentada quando o campo customizado está inválido`),Zg()()(),Jc(1379,`tr`,13)(1380,`td`,14)(1381,`div`,15)(1382,`span`,16),Tk(1383,` customFieldPlaceholder`),_u(1384,`br`),Zg()()(),Jc(1385,`td`,17)(1386,`code`,21),Tk(1387,`string`),Zg()(),Jc(1388,`td`,20)(1389,`em`)(1390,`strong`),Tk(1391,`(opcional)`),Zg()(),Jc(1392,`p`),Tk(1393,`Placeholder para o campo customizado.`),Zg()()(),Jc(1394,`tr`,13)(1395,`td`,14)(1396,`div`,15)(1397,`span`,16),Tk(1398,` forgotPassword`),_u(1399,`br`),Zg()()(),Jc(1400,`td`,17)(1401,`code`,21),Tk(1402,`string`),Zg()(),Jc(1403,`td`,20)(1404,`em`)(1405,`strong`),Tk(1406,`(opcional)`),Zg()(),Jc(1407,`p`),Tk(1408,`Texto de ajuda para recuperação dos dados de acesso.`),Zg()()(),Jc(1409,`tr`,13)(1410,`td`,14)(1411,`div`,15)(1412,`span`,16),Tk(1413,` forgotYourPassword`),_u(1414,`br`),Zg()()(),Jc(1415,`td`,17)(1416,`code`,21),Tk(1417,`string`),Zg()(),Jc(1418,`td`,20)(1419,`em`)(1420,`strong`),Tk(1421,`(opcional)`),Zg()(),Jc(1422,`p`),Tk(1423,`Texto que questiona o esquecimento da senha no popover de aviso de bloqueio.`),Zg()()(),Jc(1424,`tr`,13)(1425,`td`,14)(1426,`div`,15)(1427,`span`,16),Tk(1428,` highlightInfo`),_u(1429,`br`),Zg()()(),Jc(1430,`td`,17)(1431,`code`,21),Tk(1432,`string`),Zg()(),Jc(1433,`td`,20)(1434,`em`)(1435,`strong`),Tk(1436,`(opcional)`),Zg()(),Jc(1437,`p`),Tk(1438,`Texto de destaque sobreposto à imagem de destaque. Essa opção é utilizada em conjunto com o atributo `),Jc(1439,`code`),Tk(1440,`p-background`),Zg(),Tk(1441,`.`),Zg()()(),Jc(1442,`tr`,13)(1443,`td`,14)(1444,`div`,15)(1445,`span`,16),Tk(1446,` iForgotMyPassword`),_u(1447,`br`),Zg()()(),Jc(1448,`td`,17)(1449,`code`,21),Tk(1450,`string`),Zg()(),Jc(1451,`td`,20)(1452,`em`)(1453,`strong`),Tk(1454,`(opcional)`),Zg()(),Jc(1455,`p`),Tk(1456,`Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio.`),Zg()()(),Jc(1457,`tr`,13)(1458,`td`,14)(1459,`div`,15)(1460,`span`,16),Tk(1461,` ifYouTryHarder`),_u(1462,`br`),Zg()()(),Jc(1463,`td`,17)(1464,`code`,21),Tk(1465,`string`),Zg()(),Jc(1466,`td`,20)(1467,`em`)(1468,`strong`),Tk(1469,`(opcional)`),Zg()(),Jc(1470,`p`),Tk(1471,`Texto de aviso de tentativas exibido no popover de aviso de bloqueio.`),Zg()()(),Jc(1472,`tr`,13)(1473,`td`,14)(1474,`div`,15)(1475,`span`,16),Tk(1476,` loginErrorPattern`),_u(1477,`br`),Zg()()(),Jc(1478,`td`,17)(1479,`code`,21),Tk(1480,`string`),Zg()(),Jc(1481,`td`,20)(1482,`em`)(1483,`strong`),Tk(1484,`(opcional)`),Zg()(),Jc(1485,`p`),Tk(1486,`Mensagem de erro apresentada quando o campo de login está inválido.`),Zg()()(),Jc(1487,`tr`,13)(1488,`td`,14)(1489,`div`,15)(1490,`span`,16),Tk(1491,` loginHint`),_u(1492,`br`),Zg()()(),Jc(1493,`td`,17)(1494,`code`,21),Tk(1495,`string`),Zg()(),Jc(1496,`td`,20)(1497,`em`)(1498,`strong`),Tk(1499,`(opcional)`),Zg()(),Jc(1500,`p`),Tk(1501,`Texto exibido como dica para o campo de login.`),Zg()()(),Jc(1502,`tr`,13)(1503,`td`,14)(1504,`div`,15)(1505,`span`,16),Tk(1506,` loginLabel`),_u(1507,`br`),Zg()()(),Jc(1508,`td`,17)(1509,`code`,21),Tk(1510,`string`),Zg()(),Jc(1511,`td`,20)(1512,`em`)(1513,`strong`),Tk(1514,`(opcional)`),Zg()(),Jc(1515,`p`),Tk(1516,`Texto exibido como label do campo de login.`),Zg()()(),Jc(1517,`tr`,13)(1518,`td`,14)(1519,`div`,15)(1520,`span`,16),Tk(1521,` loginPlaceholder`),_u(1522,`br`),Zg()()(),Jc(1523,`td`,17)(1524,`code`,21),Tk(1525,`string`),Zg()(),Jc(1526,`td`,20)(1527,`em`)(1528,`strong`),Tk(1529,`(opcional)`),Zg()(),Jc(1530,`p`),Tk(1531,`Placeholder do campo de login.`),Zg()()(),Jc(1532,`tr`,13)(1533,`td`,14)(1534,`div`,15)(1535,`span`,16),Tk(1536,` passwordErrorPattern`),_u(1537,`br`),Zg()()(),Jc(1538,`td`,17)(1539,`code`,21),Tk(1540,`string`),Zg()(),Jc(1541,`td`,20)(1542,`em`)(1543,`strong`),Tk(1544,`(opcional)`),Zg()(),Jc(1545,`p`),Tk(1546,`Mensagem de erro apresentada quando o campo de password está inválido.`),Zg()()(),Jc(1547,`tr`,13)(1548,`td`,14)(1549,`div`,15)(1550,`span`,16),Tk(1551,` passwordLabel`),_u(1552,`br`),Zg()()(),Jc(1553,`td`,17)(1554,`code`,21),Tk(1555,`string`),Zg()(),Jc(1556,`td`,20)(1557,`em`)(1558,`strong`),Tk(1559,`(opcional)`),Zg()(),Jc(1560,`p`),Tk(1561,`Texto exibido como label do campo de password.`),Zg()()(),Jc(1562,`tr`,13)(1563,`td`,14)(1564,`div`,15)(1565,`span`,16),Tk(1566,` passwordPlaceholder`),_u(1567,`br`),Zg()()(),Jc(1568,`td`,17)(1569,`code`,21),Tk(1570,`string`),Zg()(),Jc(1571,`td`,20)(1572,`em`)(1573,`strong`),Tk(1574,`(opcional)`),Zg()(),Jc(1575,`p`),Tk(1576,`Placeholder do campo de password.`),Zg()()(),Jc(1577,`tr`,13)(1578,`td`,14)(1579,`div`,15)(1580,`span`,16),Tk(1581,` registerUrl`),_u(1582,`br`),Zg()()(),Jc(1583,`td`,17)(1584,`code`,21),Tk(1585,`string`),Zg()(),Jc(1586,`td`,20)(1587,`em`)(1588,`strong`),Tk(1589,`(opcional)`),Zg()(),Jc(1590,`p`),Tk(1591,`Texto exibido no link de novo cadastro.`),Zg()()(),Jc(1592,`tr`,13)(1593,`td`,14)(1594,`div`,15)(1595,`span`,16),Tk(1596,` rememberUser`),_u(1597,`br`),Zg()()(),Jc(1598,`td`,17)(1599,`code`,21),Tk(1600,`string`),Zg()(),Jc(1601,`td`,20)(1602,`em`)(1603,`strong`),Tk(1604,`(opcional)`),Zg()(),Jc(1605,`p`),Tk(1606,`Texto exibido na função "Lembrar usuário".`),Zg()()(),Jc(1607,`tr`,13)(1608,`td`,14)(1609,`div`,15)(1610,`span`,16),Tk(1611,` rememberUserHint`),_u(1612,`br`),Zg()()(),Jc(1613,`td`,17)(1614,`code`,21),Tk(1615,`string`),Zg()(),Jc(1616,`td`,20)(1617,`em`)(1618,`strong`),Tk(1619,`(opcional)`),Zg()(),Jc(1620,`p`),Tk(1621,`Texto exibido como dica da função "Lembrar usuário"`),Zg()()(),Jc(1622,`tr`,13)(1623,`td`,14)(1624,`div`,15)(1625,`span`,16),Tk(1626,` submitLabel`),_u(1627,`br`),Zg()()(),Jc(1628,`td`,17)(1629,`code`,21),Tk(1630,`string`),Zg()(),Jc(1631,`td`,20)(1632,`em`)(1633,`strong`),Tk(1634,`(opcional)`),Zg()(),Jc(1635,`p`),Tk(1636,`Texto exibido no botão de confirmação da página de login.`),Zg()()(),Jc(1637,`tr`,13)(1638,`td`,14)(1639,`div`,15)(1640,`span`,16),Tk(1641,` submittedLabel`),_u(1642,`br`),Zg()()(),Jc(1643,`td`,17)(1644,`code`,21),Tk(1645,`string`),Zg()(),Jc(1646,`td`,20)(1647,`em`)(1648,`strong`),Tk(1649,`(opcional)`),Zg()(),Jc(1650,`p`),Tk(1651,`Texto exibido no botão de confirmação da página de login quando estiver em estado de carregamento.`),Zg()()(),Jc(1652,`tr`,13)(1653,`td`,14)(1654,`div`,15)(1655,`span`,16),Tk(1656,` support`),_u(1657,`br`),Zg()()(),Jc(1658,`td`,17)(1659,`code`,21),Tk(1660,`string`),Zg()(),Jc(1661,`td`,20)(1662,`em`)(1663,`strong`),Tk(1664,`(opcional)`),Zg()(),Jc(1665,`p`),Tk(1666,`Label do botão de suporte.`),Zg()()(),Jc(1667,`tr`,13)(1668,`td`,14)(1669,`div`,15)(1670,`span`,16),Tk(1671,` titlePopover`),_u(1672,`br`),Zg()()(),Jc(1673,`td`,17)(1674,`code`,21),Tk(1675,`string`),Zg()(),Jc(1676,`td`,20)(1677,`em`)(1678,`strong`),Tk(1679,`(opcional)`),Zg()(),Jc(1680,`p`),Tk(1681,`Título do popover para aviso de bloqueio.`),Zg()()(),Jc(1682,`tr`,13)(1683,`td`,14)(1684,`div`,15)(1685,`span`,16),Tk(1686,` welcome`),_u(1687,`br`),Zg()()(),Jc(1688,`td`,17)(1689,`code`,21),Tk(1690,`string`),Zg()(),Jc(1691,`td`,20)(1692,`em`)(1693,`strong`),Tk(1694,`(opcional)`),Zg()(),Jc(1695,`p`),Tk(1696,`Mensagem de "Boas-vindas" para o usuário que aparece acima dos campos de entrada.`),Zg()()(),Jc(1697,`tr`,13)(1698,`td`,14)(1699,`div`,15)(1700,`span`,16),Tk(1701,` yourUserWillBeBlocked`),_u(1702,`br`),Zg()()(),Jc(1703,`td`,17)(1704,`code`,21),Tk(1705,`string`),Zg()(),Jc(1706,`td`,20)(1707,`em`)(1708,`strong`),Tk(1709,`(opcional)`),Zg()(),Jc(1710,`p`),Tk(1711,`Texto que informa ao usuário que o mesmo será bloqueado e por quanto tempo no popover de aviso de bloqueio.`),Zg()()()(),Jc(1712,`h4`,34)(1713,`code`,5),Tk(1714,`PoPageLoginRecovery`),Zg()(),Jc(1715,`div`,2)(1716,`p`),Tk(1717,`Interface para especificação do tipo de recuperação de senha no `),Jc(1718,`code`),Tk(1719,`po-modal-password-recovery`),Zg(),Tk(1720,`.`),Zg()(),Jc(1721,`h4`,9),Tk(1722,`Propriedades`),Zg(),Jc(1723,`table`,10)(1724,`tr`,11)(1725,`th`,12),Tk(1726,`Nome`),Zg(),Jc(1727,`th`,12),Tk(1728,`Tipo`),Zg(),Jc(1729,`th`,12),Tk(1730,`Descrição`),Zg()(),Jc(1731,`tr`,13)(1732,`td`,14)(1733,`div`,15)(1734,`span`,16),Tk(1735,` contactMail`),_u(1736,`br`),Zg()()(),Jc(1737,`td`,17)(1738,`code`,21),Tk(1739,`string`),Zg()(),Jc(1740,`td`,20)(1741,`em`)(1742,`strong`),Tk(1743,`(opcional)`),Zg()(),Jc(1744,`p`),Tk(1745,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),Zg()()(),Jc(1746,`tr`,13)(1747,`td`,14)(1748,`div`,15)(1749,`span`,16),Tk(1750,` phoneMask`),_u(1751,`br`),Zg()()(),Jc(1752,`td`,17)(1753,`code`,21),Tk(1754,`string`),Zg()(),Jc(1755,`td`,20)(1756,`em`)(1757,`strong`),Tk(1758,`(opcional)`),Zg()(),Jc(1759,`p`),Tk(1760,`Definição da máscara do campo de telefone.`),Zg()()(),Jc(1761,`tr`,13)(1762,`td`,14)(1763,`div`,15)(1764,`span`,16),Tk(1765,` type`),_u(1766,`br`),Zg()()(),Jc(1767,`td`,17)(1768,`code`,36),Tk(1769,`PoModalPasswordRecoveryType`),Zg()(),Jc(1770,`td`,20)(1771,`em`)(1772,`strong`),Tk(1773,`(opcional)`),Zg()(),Jc(1774,`p`),Tk(1775,`Enum para especificação do tipo de recuperação de senha `),Jc(1776,`a`,37),Tk(1777,`PoModalPasswordRecoveryType`),Zg(),Tk(1778,`.`),Zg(),Jc(1779,`blockquote`)(1780,`p`),Tk(1781,`Caso não seja definido valor se assume o padrão `),Jc(1782,`code`),Tk(1783,`PoModalPasswordRecoveryType.Email`),Zg(),Tk(1784,`.`),Zg()()()(),Jc(1785,`tr`,13)(1786,`td`,14)(1787,`div`,15)(1788,`span`,16),Tk(1789,` url`),_u(1790,`br`),Zg()()(),Jc(1791,`td`,17)(1792,`code`,21),Tk(1793,`string`),Zg()(),Jc(1794,`td`,20)(1795,`p`),Tk(1796,`Endpoint usado pelo template `),Jc(1797,`strong`),Tk(1798,`PoModalPasswordRecovery`),Zg(),Tk(1799,` para requisição do recurso.`),Zg(),Jc(1800,`blockquote`)(1801,`p`),Tk(1802,`Saiba mais em `),Jc(1803,`a`,37),Tk(1804,`PoModalPasswordRecovery`),Zg(),Tk(1805,`.`),Zg()()()()(),Jc(1806,`h4`,34)(1807,`code`,5),Tk(1808,`PoPageLogin`),Zg()(),Jc(1809,`div`,2)(1810,`p`),Tk(1811,`Interface com a definição do objeto gerado pelo formulário do componente `),Jc(1812,`code`),Tk(1813,`po-page-login`),Zg(),Tk(1814,`.`),Zg()(),Jc(1815,`h4`,9),Tk(1816,`Propriedades`),Zg(),Jc(1817,`table`,10)(1818,`tr`,11)(1819,`th`,12),Tk(1820,`Nome`),Zg(),Jc(1821,`th`,12),Tk(1822,`Tipo`),Zg(),Jc(1823,`th`,12),Tk(1824,`Descrição`),Zg()(),Jc(1825,`tr`,13)(1826,`td`,14)(1827,`div`,15)(1828,`span`,16),Tk(1829,` login`),_u(1830,`br`),Zg()()(),Jc(1831,`td`,17)(1832,`code`,21),Tk(1833,`string`),Zg()(),Jc(1834,`td`,20)(1835,`p`),Tk(1836,`Login preenchido pelo usuário.`),Zg()()(),Jc(1837,`tr`,13)(1838,`td`,14)(1839,`div`,15)(1840,`span`,16),Tk(1841,` password`),_u(1842,`br`),Zg()()(),Jc(1843,`td`,17)(1844,`code`,21),Tk(1845,`string`),Zg()(),Jc(1846,`td`,20)(1847,`p`),Tk(1848,`Senha preenchida pelo usuário, a mesma será convertida para [hash/md5] antes de ser enviada para a aplicação.`),Zg()()(),Jc(1849,`tr`,13)(1850,`td`,14)(1851,`div`,15)(1852,`span`,16),Tk(1853,` rememberUser`),_u(1854,`br`),Zg()()(),Jc(1855,`td`,17)(1856,`code`,25),Tk(1857,`boolean`),Zg()(),Jc(1858,`td`,20)(1859,`p`),Tk(1860,`Essa propriedade informa se o usuário quer que seus dados sejam lembrados em um acesso futuro.`),Zg()()()(),Jc(1861,`h3`),Tk(1862,`Enums`),Zg(),Jc(1863,`h4`,4)(1864,`code`,5),Tk(1865,`PoPageLoginAuthenticationType`),Zg()(),Jc(1866,`div`,2)(1867,`p`)(1868,`em`),Tk(1869,`Enum`),Zg(),Tk(1870,` para definição do tipo de autenticação.`),Zg()(),Jc(1871,`h4`,9),Tk(1872,`Propriedades`),Zg(),Jc(1873,`table`,10)(1874,`tr`,11)(1875,`th`,12),Tk(1876,`Nome`),Zg(),Jc(1877,`th`,12),Tk(1878,`Descrição`),Zg()(),Jc(1879,`tr`,13)(1880,`td`,14)(1881,`div`,15)(1882,`span`,16),Tk(1883,` Basic`),_u(1884,`br`),Zg()()(),Jc(1885,`td`,20)(1886,`p`),Tk(1887,`Autenticação Basic`),Zg()()(),Jc(1888,`tr`,13)(1889,`td`,14)(1890,`div`,15)(1891,`span`,16),Tk(1892,` Bearer`),_u(1893,`br`),Zg()()(),Jc(1894,`td`,20)(1895,`p`),Tk(1896,`Autenticação Bearer`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return r})();function We(r,Y){if(r&1){let s=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(s);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-page-login-basic-view`)(2,`sample-po-page-login-labs-view`)(3,`sample-po-page-login-human-resources-view`)(4,`sample-po-page-login-automatic-service-view`),Zg()}if(r&2){let s=nk();Rb(`p-active`,s.activeTab===`web`)}}var Re=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,l){this.route=s,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let l=s.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(I(ar),I(An))};static ɵcmp=Jn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Login`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,We,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-page-login-doc`),Zg()()()),l&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ge,Se,xe,ve,Pe],encapsulation:2,changeDetection:1})}return r})()}];var fe=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge$1({type:r});static ɵinj=de({imports:[WV.forChild(Re),WV]})}return r})();var yt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge$1({type:r});static ɵinj=de({imports:[M,fe]})}return r})();export{yt as DocPoPageLoginModule};