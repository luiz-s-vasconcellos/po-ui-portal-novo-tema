import{g as Gn,j as ta,m as P,p as M,w as ie}from"./main-OAHE3DMQ.js";import{Ba as q0,Br as Kb,C as F4,Ci as U_,Cn as sie,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,I as Joe,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,M as I4,Mi as WL,Mt as Zte,Na as ok,Pr as I,Qn as AZ,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,ca as ge$1,ea as de$1,er as Ab,fn as oi,jr as H_,li as QL,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,vi as Rk,w as Fc,zr as KO}from"./chunk-CTJH0VS3.js";import{t as r}from"./chunk-zystk1pz.js";var pe=(()=>{class r{static ɵfac=function(p){return new(p||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-basic`]],standalone:!1,decls:1,vars:0,template:function(p,i){p&1&&_u(0,`po-page-login`)},dependencies:[ta],encapsulation:2,changeDetection:1})}return r})();var se=(()=>{class r{static ɵfac=function(p){return new(p||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-login-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-login-basic/sample-po-page-login-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-login-basic/sample-po-page-login-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Login Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-login-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-login-basic/sample-po-page-login-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-login></po-page-login>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-login-basic/sample-po-page-login-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-login-basic',
  templateUrl: './sample-po-page-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,pe],encapsulation:2,changeDetection:1})}return r})();var de=(()=>{class r{poDialog=p(sie);background;componentsSize;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`hideRememberUser`,label:`Hide remember user`},{value:`loading`,label:`Loading`}];ngOnInit(){this.restore()}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={}}addLoginError(){this.loginErrors.push(this.loginError),this.loginError=``}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError=``}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}loginSubmit(l){this.exceededAttempts<=0&&this.poDialog.alert({title:`Authenticate`,message:JSON.stringify(l),componentsSize:this.componentsSize})}onChangeCustomProperties(){this.customField=Object.assign({},this.customField)}restore(){this.properties=[],this.background=``,this.componentsSize=`medium`,this.contactEmail=``,this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment=``,this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals=``,this.login=``,this.loginPattern=``,this.loginError=``,this.loginErrors=[],this.logo=void 0,this.passwordError=``,this.passwordErrors=[],this.passwordPattern=``,this.passwordError=``,this.passwordErrors=[],this.productName=``,this.recovery=``,this.registerUrl=``,this.support=``}static ɵfac=function(p){return new(p||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-labs`]],standalone:!1,decls:60,vars:50,consts:[[`f`,`ngForm`],[`formCustomFieldOptions`,`ngForm`],[3,`p-login-submit`,`p-background`,`p-components-size`,`p-contact-email`,`p-custom-field`,`p-environment`,`p-exceeded-attempts-warning`,`p-hide-remember-user`,`p-loading`,`p-literals`,`p-login`,`p-login-errors`,`p-login-pattern`,`p-logo`,`p-password-errors`,`p-password-pattern`,`p-product-name`,`p-recovery`,`p-register-url`,`p-secondary-logo`,`p-support`],[1,`po-row`],[`name`,`literals`,`p-help`,`Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`productName`,`p-clean`,``,`p-help`,`A custom name that succeeds the title`,`p-label`,`Product Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`loginPattern`,`p-clean`,``,`p-help`,`Ex.: ^[a-zA-Z]*$ (Only letters)`,`p-label`,`Login Pattern`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`login`,`p-clean`,``,`p-help`,`Ex.: podev`,`p-label`,`Login`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`exceededAttempts`,`p-clean`,``,`p-help`,`Ex.: 5`,`p-label`,`Exceeded Attempts Warning`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordPattern`,`p-clean`,``,`p-help`,`Ex.: ^(\\d*)$ (Only numbers)`,`p-label`,`Password Pattern`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`contactMail`,`p-clean`,``,`p-label`,`Contact Email`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`environment`,`p-clean`,``,`p-label`,`Environment`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-label`,`Logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-label`,`Secondary logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`background`,`p-clean`,``,`p-label`,`Background`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`support`,`p-clean`,``,`p-label`,`Support`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`recovery`,`p-clean`,``,`p-label`,`Recovery`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`registerUrl`,`p-clean`,``,`p-label`,`Register URL`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Login Errors`],[`name`,`loginError`,`p-clean`,``,`p-label`,`Login Error`,1,`po-md-8`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Login Error`,1,`po-md-4`,`po-mt-4`,3,`p-click`],[`p-label`,`Password Errors`],[`name`,`passwordError`,`p-clean`,``,`p-label`,`Password Error`,1,`po-lg-8`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Password Error`,1,`po-md-4`,`po-mt-4`,3,`p-click`],[`p-label`,`Custom Field`],[`name`,`customFieldProperty`,`p-clean`,``,`p-help`,`Ex.: domain`,`p-label`,`Custom Field Property`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldValue`,`p-clean`,``,`p-help`,`Ex.: JV01`,`p-label`,`Custom Field Value`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldPlaceholder`,`p-clean`,``,`p-help`,`Ex.: Enter your domain`,`p-label`,`Custom Field Placeholder`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldPattern`,`p-clean`,``,`p-help`,`Ex.: [a-z]`,`p-label`,`Custom Field Pattern`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldErrorPattern`,`p-clean`,``,`p-help`,"Ex.: Value doesn`t match expected",`p-label`,`Custom Field Error Pattern`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldComboUrl`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Custom Field URL`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldComboValue`,`p-clean`,``,`p-help`,`Property to specify the return field. Ex.: value, nickname, label`,`p-label`,`Custom Field Field Value`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldOptionLabel`,`p-clean`,``,`p-label`,`Custom Field Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldOptionValue`,`p-clean`,``,`p-label`,`Custom Field Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Custom Field Option`,1,`po-md-6`,`po-lg-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,i){if(p&1){let m=KO();Jc(0,`po-page-login`,2),_t(`p-login-submit`,function(a){return i.loginSubmit(a)}),Kg(),_u(1,`po-divider`),Jc(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.literals,a)||(i.literals=a),H_(a)}),_t(`p-change`,function(){return i.changeLiterals()}),Kg(),Jc(6,`po-input`,5),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.productName,a)||(i.productName=a),H_(a)}),Kg()(),Jc(7,`div`,3)(8,`po-input`,6),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.loginPattern,a)||(i.loginPattern=a),H_(a)}),Kg(),Jc(9,`po-input`,7),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.login,a)||(i.login=a),H_(a)}),Kg()(),Jc(10,`div`,3)(11,`po-input`,8),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.exceededAttempts,a)||(i.exceededAttempts=a),H_(a)}),Kg(),Jc(12,`po-input`,9),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.passwordPattern,a)||(i.passwordPattern=a),H_(a)}),Kg()(),Jc(13,`div`,3)(14,`po-input`,10),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.contactEmail,a)||(i.contactEmail=a),H_(a)}),Kg(),Jc(15,`po-input`,11),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.environment,a)||(i.environment=a),H_(a)}),Kg()(),Jc(16,`div`,3)(17,`po-input`,12),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.logo,a)||(i.logo=a),H_(a)}),Kg(),Jc(18,`po-input`,13),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.secondaryLogo,a)||(i.secondaryLogo=a),H_(a)}),Kg()(),Jc(19,`div`,3)(20,`po-input`,14),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.background,a)||(i.background=a),H_(a)}),Kg(),Jc(21,`po-input`,15),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.support,a)||(i.support=a),H_(a)}),Kg()(),Jc(22,`div`,3)(23,`po-input`,16),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.recovery,a)||(i.recovery=a),H_(a)}),Kg(),Jc(24,`po-input`,17),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.registerUrl,a)||(i.registerUrl=a),H_(a)}),Kg()(),Jc(25,`div`,3)(26,`po-checkbox-group`,18),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.properties,a)||(i.properties=a),H_(a)}),Kg(),Jc(27,`po-radio-group`,19),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.componentsSize,a)||(i.componentsSize=a),H_(a)}),Kg()(),_u(28,`po-divider`,20),Jc(29,`div`,3)(30,`po-input`,21),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.loginError,a)||(i.loginError=a),H_(a)}),Kg(),Jc(31,`po-button`,22),_t(`p-click`,function(){return i.addLoginError()}),Kg()(),_u(32,`po-divider`,23),Jc(33,`div`,3)(34,`po-input`,24),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.passwordError,a)||(i.passwordError=a),H_(a)}),Kg(),Jc(35,`po-button`,25),_t(`p-click`,function(){return i.addPasswordError()}),Kg()(),_u(36,`po-divider`,26),Jc(37,`div`,3)(38,`po-input`,27),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.customField.property,a)||(i.customField.property=a),H_(a)}),_t(`p-change-model`,function(){return i.onChangeCustomProperties()}),Kg(),Jc(39,`po-input`,28),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.customField.value,a)||(i.customField.value=a),H_(a)}),Kg()(),Jc(40,`div`,3)(41,`po-input`,29),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.customField.placeholder,a)||(i.customField.placeholder=a),H_(a)}),Kg(),Jc(42,`po-input`,30),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.customField.pattern,a)||(i.customField.pattern=a),H_(a)}),Kg(),Jc(43,`po-input`,31),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.customField.errorPattern,a)||(i.customField.errorPattern=a),H_(a)}),Kg()(),_u(44,`po-divider`),Jc(45,`div`,3)(46,`po-input`,32),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.customField.url,a)||(i.customField.url=a),H_(a)}),_t(`p-change-model`,function(){return i.onChangeCustomProperties()}),Kg(),Jc(47,`po-input`,33),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.customField.fieldValue,a)||(i.customField.fieldValue=a),H_(a)}),_t(`p-change-model`,function(){return i.onChangeCustomProperties()}),Kg()(),_u(48,`po-divider`),Jc(49,`form`,null,1)(51,`div`,3)(52,`po-input`,34),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.customFieldOption.label,a)||(i.customFieldOption.label=a),H_(a)}),Kg(),Jc(53,`po-input`,35),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(i.customFieldOption.value,a)||(i.customFieldOption.value=a),H_(a)}),Kg()(),Jc(54,`div`,3)(55,`po-button`,36),_t(`p-click`,function(){return i.addCustomFieldOption()}),Kg()()(),_u(56,`br`)(57,`po-divider`),Jc(58,`div`,3)(59,`po-button`,37),_t(`p-click`,function(){return i.restore()}),Kg()()()}if(p&2){let m=ok(50);Ab(`p-background`,i.background)(`p-components-size`,i.componentsSize)(`p-contact-email`,i.contactEmail)(`p-custom-field`,i.customField)(`p-environment`,i.environment)(`p-exceeded-attempts-warning`,i.exceededAttempts)(`p-hide-remember-user`,i.properties.includes(`hideRememberUser`))(`p-loading`,i.properties.includes(`loading`))(`p-literals`,i.customLiterals)(`p-login`,i.login)(`p-login-errors`,i.loginErrors)(`p-login-pattern`,i.loginPattern)(`p-logo`,i.logo)(`p-password-errors`,i.passwordErrors)(`p-password-pattern`,i.passwordPattern)(`p-product-name`,i.productName)(`p-recovery`,i.recovery)(`p-register-url`,i.registerUrl)(`p-secondary-logo`,i.secondaryLogo)(`p-support`,i.support),wg(5),Kb(`ngModel`,i.literals),q0(),wg(),Kb(`ngModel`,i.productName),q0(),wg(2),Kb(`ngModel`,i.loginPattern),q0(),wg(),Kb(`ngModel`,i.login),q0(),wg(2),Kb(`ngModel`,i.exceededAttempts),q0(),wg(),Kb(`ngModel`,i.passwordPattern),q0(),wg(2),Kb(`ngModel`,i.contactEmail),q0(),wg(),Kb(`ngModel`,i.environment),q0(),wg(2),Kb(`ngModel`,i.logo),q0(),wg(),Kb(`ngModel`,i.secondaryLogo),q0(),wg(2),Kb(`ngModel`,i.background),q0(),wg(),Kb(`ngModel`,i.support),q0(),wg(2),Kb(`ngModel`,i.recovery),q0(),wg(),Kb(`ngModel`,i.registerUrl),q0(),wg(2),Kb(`ngModel`,i.properties),Ab(`p-options`,i.propertiesOptions),q0(),wg(),Kb(`ngModel`,i.componentsSize),Ab(`p-options`,i.componentsSizeOptions),q0(),wg(3),Kb(`ngModel`,i.loginError),q0(),wg(4),Kb(`ngModel`,i.passwordError),q0(),wg(4),Kb(`ngModel`,i.customField.property),q0(),wg(),Kb(`ngModel`,i.customField.value),q0(),wg(2),Kb(`ngModel`,i.customField.placeholder),q0(),wg(),Kb(`ngModel`,i.customField.pattern),q0(),wg(),Kb(`ngModel`,i.customField.errorPattern),q0(),wg(3),Kb(`ngModel`,i.customField.url),q0(),wg(),Kb(`ngModel`,i.customField.fieldValue),q0(),wg(5),Kb(`ngModel`,i.customFieldOption.label),q0(),wg(),Kb(`ngModel`,i.customFieldOption.value),q0(),wg(2),Ab(`p-disabled`,m.invalid)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,Zte,ta],encapsulation:2,changeDetection:1})}return r})();var me=(()=>{class r{static ɵfac=function(p){return new(p||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-login-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-login-labs/sample-po-page-login-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-login-labs/sample-po-page-login-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Login Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-login-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-login-labs/sample-po-page-login-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-login
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-login-labs/sample-po-page-login-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,de],encapsulation:2,changeDetection:1})}return r})();function we(r,N){if(r&1){let l=KO();Jc(0,`po-page-login`,6),_t(`p-login-change`,function(){U_(l);let i=tk();return H_(i.loginChange())})(`p-login-submit`,function(i){U_(l);let m=tk();return H_(m.checkLogin(i))})(`p-password-change`,function(){U_(l);let i=tk();return H_(i.passwordChange())}),Kg()}if(r&2){let l=tk();Ab(`p-custom-field`,l.customField)(`p-exceeded-attempts-warning`,l.exceededAttempts)(`p-literals`,l.literalsI18n)(`p-loading`,l.loading)(`p-password-errors`,l.passwordErrors)(`p-login-errors`,l.loginErrors)(`p-recovery`,l.passwordRecovery)}}function Ce(r,N){if(r&1&&_u(0,`po-page-blocked-user`,5),r&2){let l=tk();Ab(`p-params`,l.params)}}var ue=(()=>{class r{poI18nService=p(F4);poDialog=p(sie);customField={property:`domain`,placeholder:`Enter your domain`};attempts=3;exceededAttempts;literalsI18n;loading=!1;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:`https://po-sample-api.onrender.com/v1/users`,type:ie.All,contactMail:`support@mail.com`};showPageBlocked=!1;i18nSubscription;ngOnDestroy(){this.i18nSubscription.unsubscribe()}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(l=>{this.literalsI18n=l,this.exceededAttempts=0})}checkLogin(l){this.loading=!0,l.login===`devpo`&&l.password===`1986`?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=!1,title:`Access released`,message:`You are on vacation, take time to rest.`})},3e3)):(this.loading=!1,this.generateAttempts(),this.passwordErrors=[`Senha e/ou usuário inválido, verifique e tente novamente.`],this.loginErrors=[`Senha e/ou usuário inválido, verifique e tente novamente.`])}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[])}loginChange(){this.loginErrors.length&&(this.loginErrors=[])}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=!0)}static ɵfac=function(p){return new(p||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-human-resources`]],standalone:!1,decls:7,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your ID Sample Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`p-hide-remember-user`,``,`p-login-pattern`,`^[a-zA-Z]*$`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-password-pattern`,`^(\\d*)$`,`p-product-name`,`Human Resources`,`p-register-url`,`http://po.com`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-custom-field`,`p-exceeded-attempts-warning`,`p-literals`,`p-loading`,`p-password-errors`,`p-login-errors`,`p-recovery`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`exceededAttempts`,`p-url-back`,`https://po-ui.io/documentation/po-page-login`,3,`p-params`],[`p-hide-remember-user`,``,`p-login-pattern`,`^[a-zA-Z]*$`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-password-pattern`,`^(\\d*)$`,`p-product-name`,`Human Resources`,`p-register-url`,`http://po.com`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-change`,`p-login-submit`,`p-password-change`,`p-custom-field`,`p-exceeded-attempts-warning`,`p-literals`,`p-loading`,`p-password-errors`,`p-login-errors`,`p-recovery`]],template:function(p,i){p&1&&(Jc(0,`po-container`)(1,`div`,0),_u(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),Kg()(),LO(5,we,1,7,`po-page-login`,4),LO(6,Ce,1,1,`po-page-blocked-user`,5)),p&2&&(wg(5),jO(i.showPageBlocked?-1:5),wg(),jO(i.showPageBlocked?6:-1))},dependencies:[Fc,Joe,Gn,ta],encapsulation:2,changeDetection:1})}return r})();var ce=(()=>{class r{static ɵfac=function(p){return new(p||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-human-resources-view`]],standalone:!1,decls:29,vars:0,consts:[[`id`,`sample-po-page-login-human-resources`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts`,1,`docs-code-block`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Login - Human Resources`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-login-human-resources`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-container>
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()(),Jc(23,`label`,7),Mk(24,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts`),Kg(),Jc(25,`div`,13)(26,`pre`,12),Mk(27,`/**
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
`),Kg()()()()()(),_u(28,`hr`))},dependencies:[P,tre,are,ue],encapsulation:2,changeDetection:1})}return r})();var ge=(()=>{class r$1{literals;japoneseLiterals={welcome:`ようこそ`,loginLabel:`ユーザー名を入力してください`,loginPlaceholder:`アクセスユーザーを入力してください`,passwordErrorPattern:`パスワードが必要`,passwordLabel:`パスワードを入力してください`,passwordPlaceholder:`パスワードを入力してください`,submitLabel:`アクセスシステム`,submittedLabel:`ローディング中 ...`,rememberUser:`自動的にログイン`,rememberUserHint:`このオプションはシステムメニューで無効にできます`,loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:`pt`,description:`Português`},{language:`jp`,description:`日本語`}];changeLanguage(l){l?.language===`jp`?this.literals=r({},this.japoneseLiterals):this.literals={}}static ɵfac=function(p){return new(p||r$1)};static ɵcmp=Jn({type:r$1,selectors:[[`sample-po-page-login-automatic-service`]],standalone:!1,decls:5,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your ID Sample Login`,`p-value`,`admin`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample Password`,`p-value`,`admin`,1,`po-md-2`],[`p-authentication-url`,`https://po-sample-api.onrender.com/v1/users/authentication`,`p-blocked-url`,`/documentation/po-page-blocked-user`,`p-authentication-type`,`Bearer`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-language-change`,`p-languages`,`p-literals`]],template:function(p,i){p&1&&(Jc(0,`po-container`)(1,`div`,0),_u(2,`po-info`,1)(3,`po-info`,2),Kg()(),Jc(4,`po-page-login`,3),_t(`p-language-change`,function(s){return i.changeLanguage(s)}),Kg()),p&2&&(wg(4),Ab(`p-languages`,i.languages)(`p-literals`,i.literals))},dependencies:[Fc,Joe,ta],encapsulation:2,changeDetection:1})}return r$1})();var Ee=(()=>{class r{static ɵfac=function(p){return new(p||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-automatic-service-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-login-automatic-service`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Login - Automatic Service`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-login-automatic-service`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-container>
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ge],encapsulation:2,changeDetection:1})}return r})();var Se=(()=>{class r{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(p){return new(p||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-page-login-doc`]],standalone:!1,decls:1897,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-login-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-authentication-type`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginAuthenticationType`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-authentication-url`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-background`,1,`docs-api-properties-row`],[`id`,`prop-p-blocked-url`,1,`docs-api-properties-row`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-contact-email`,1,`docs-api-properties-row`],[`id`,`prop-p-custom-field`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginCustomField`],[`id`,`prop-p-environment`,1,`docs-api-properties-row`],[`id`,`prop-p-exceeded-attempts-warning`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-hide-label-status`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-hide-password-peek`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-remember-user`,1,`docs-api-properties-row`],[`id`,`event-p-language-change`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-languages`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLanguage>`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginLiterals`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-login`,1,`docs-api-properties-row`],[`id`,`event-p-login-change`,1,`docs-api-properties-row`],[`id`,`prop-p-login-errors`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string[]`],[`id`,`prop-p-login-pattern`,1,`docs-api-properties-row`],[`id`,`event-p-login-submit`,1,`docs-api-properties-row`],[`id`,`prop-p-logo`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete-login`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete-password`,1,`docs-api-properties-row`],[`id`,`event-p-password-change`,1,`docs-api-properties-row`],[`id`,`prop-p-password-errors`,1,`docs-api-properties-row`],[`id`,`prop-p-password-pattern`,1,`docs-api-properties-row`],[`id`,`prop-p-product-name`,1,`docs-api-properties-row`],[`id`,`prop-p-recovery`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginRecovery`],[`id`,`prop-p-register-url`,1,`docs-api-properties-row`],[`id`,`prop-p-secondary-logo`,1,`docs-api-properties-row`],[`id`,`prop-p-support`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-custom-field`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-login-custom-field-error-pattern`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-custom-field-field-value`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-custom-field-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`id`,`interface-po-page-login-custom-field-pattern`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-custom-field-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-custom-field-property`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-custom-field-url`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-custom-field-value`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-login-literals-attempts`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-create-anew-password-now`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-custom-field-error-pattern`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-custom-field-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-forgot-password`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-forgot-your-password`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-highlight-info`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-i-forgot-my-password`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-if-you-try-harder`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-login-error-pattern`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-login-hint`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-login-label`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-login-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-password-error-pattern`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-password-label`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-password-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-register-url`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-remember-user`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-remember-user-hint`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-submit-label`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-submitted-label`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-support`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-title-popover`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-welcome`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-literals-your-user-will-be-blocked`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-recovery`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-login-recovery-contact-mail`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-recovery-phone-mask`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-recovery-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`href`,`/documentation/po-modal-password-recovery`],[`id`,`interface-po-page-login-recovery-url`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-login-login`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-password`,1,`docs-api-properties-row`],[`id`,`interface-po-page-login-remember-user`,1,`docs-api-properties-row`],[`id`,`enum-po-page-login-authentication-type`,1,`docs-api-class-name`],[`id`,`enum-po-page-login-authentication-type-basic`,1,`docs-api-properties-row`],[`id`,`enum-po-page-login-authentication-type-bearer`,1,`docs-api-properties-row`]],template:function(p,i){p&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoPageLoginModule } from '@po-ui/ng-templates';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do template do po-page-login.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoPageLoginComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O componente `),Jc(15,`code`),Mk(16,`po-page-login`),Kg(),Mk(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),Kg(),Jc(18,`p`),Mk(19,`A propriedade `),Jc(20,`code`),Mk(21,`p-authentication-url`),Kg(),Mk(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),Jc(23,`em`),Mk(24,`client side`),Kg(),Mk(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),Jc(26,`em`),Mk(27,`propriedades`),Kg(),Mk(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),Kg(),Jc(29,`p`),Mk(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Jc(31,`em`),Mk(32,`assets`),Kg(),Mk(33,` no arquivo `),Jc(34,`strong`),Mk(35,`angular.json`),Kg(),Mk(36,` da aplicação na seguinte ordem:`),Kg(),Jc(37,`pre`)(38,`code`),Mk(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),Kg()()(),Jc(40,`div`,6)(41,`h4`,7),Mk(42,`Seletor`),Kg(),Jc(43,`pre`,8),Mk(44,`<po-page-login
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
`),Kg()(),Jc(45,`h4`,9),Mk(46,`Propriedades`),Kg(),Jc(47,`table`,10)(48,`tr`,11)(49,`th`,12),Mk(50,`Nome`),Kg(),Jc(51,`th`,12),Mk(52,`Tipo`),Kg(),Jc(53,`th`,12),Mk(54,`Padrão`),Kg(),Jc(55,`th`,12),Mk(56,`Descrição`),Kg()(),Jc(57,`tr`,13)(58,`td`,14)(59,`div`,15)(60,`span`,16),Mk(61,` p-authentication-type`),_u(62,`br`),Kg()()(),Jc(63,`td`,17)(64,`code`,18),Mk(65,`PoPageLoginAuthenticationType`),Kg()(),Jc(66,`td`,19)(67,`p`)(68,`code`),Mk(69,`PoPageLoginAuthenticationType.Basic`),Kg()()(),Jc(70,`td`,20)(71,`em`)(72,`strong`),Mk(73,`(opcional)`),Kg()(),Jc(74,`p`),Mk(75,`Atributo que recebe o tipo de esquema da autenticação, sendo suportados apenas os valores `),Jc(76,`code`),Mk(77,`Basic`),Kg(),Mk(78,` e `),Jc(79,`code`),Mk(80,`Bearer`),Kg(),Mk(81,`.`),Kg(),Jc(82,`blockquote`)(83,`p`),Mk(84,`Caso o tipo definido seja `),Jc(85,`code`),Mk(86,`Basic`),Kg(),Mk(87,`, o componente fará uma requisição `),Jc(88,`code`),Mk(89,`POST`),Kg(),Mk(90,` contendo:`),Kg()(),Jc(91,`pre`)(92,`code`),Mk(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),Kg()(),Jc(94,`blockquote`)(95,`p`),Mk(96,`Caso o tipo definido seja `),Jc(97,`code`),Mk(98,`Bearer`),Kg(),Mk(99,`, o componente fará uma requisição `),Jc(100,`code`),Mk(101,`POST`),Kg(),Mk(102,` contendo:`),Kg()(),Jc(103,`pre`)(104,`code`),Mk(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}
`),Kg()()()(),Jc(106,`tr`,21)(107,`td`,14)(108,`div`,15)(109,`span`,16),Mk(110,` p-authentication-url`),_u(111,`br`),Kg()()(),Jc(112,`td`,17)(113,`code`,22),Mk(114,`string`),Kg()(),Jc(115,`td`,19),Mk(116,`-`),Kg(),Jc(117,`td`,20)(118,`em`)(119,`strong`),Mk(120,`(opcional)`),Kg()(),Jc(121,`p`),Mk(122,`Endpoint usado pelo template para requisição do recurso. Quando preenchido, o método `),Jc(123,`code`),Mk(124,`p-login-submit`),Kg(),Mk(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),Kg(),Jc(126,`h3`),Mk(127,`Processos`),Kg(),Jc(128,`p`),Mk(129,`Ao digitar um valor válido no campo de login/password e pressionar `),Jc(130,`strong`),Mk(131,`Enter`),Kg(),Mk(132,`, o componente fará uma requisição `),Jc(133,`code`),Mk(134,`POST`),Kg(),Mk(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),Kg(),Jc(136,`pre`)(137,`code`),Mk(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),Kg()(),Jc(139,`p`),Mk(140,`Em caso de `),Jc(141,`strong`),Mk(142,`sucesso`),Kg(),Mk(143,`, o objeto de retorno é armazenado no `),Jc(144,`code`),Mk(145,`sessionStorage`),Kg(),Mk(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),Jc(147,`code`),Mk(148,`/`),Kg(),Mk(149,`.`),Kg(),Jc(150,`pre`)(151,`code`),Mk(152,`200:
{
  user: user
}
`),Kg()(),Jc(153,`p`),Mk(154,`Em caso de `),Jc(155,`strong`),Mk(156,`erro`),Kg(),Mk(157,` na autenticação, espera-se o seguinte retorno:`),Kg(),Jc(158,`pre`)(159,`code`),Mk(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}
`),Kg()(),Jc(161,`blockquote`)(162,`p`),Mk(163,`Pode-se atribuir uma quantidade máxima de tentativas restantes (maxAttemptsRemaining) para o atributo `),Jc(164,`code`),Mk(165,`p-exceeded-attempts-warning`),Kg(),Mk(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),Jc(167,`code`),Mk(168,`p-login-errors`),Kg(),Mk(169,` e
`),Jc(170,`code`),Mk(171,`p-password-errors`),Kg(),Mk(172,` conforme retorno abaixo:`),Kg()(),Jc(173,`pre`)(174,`code`),Mk(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}
`),Kg()(),Jc(176,`blockquote`)(177,`p`),Mk(178,`Caso o valor atribuído para `),Jc(179,`code`),Mk(180,`p-exceeded-attempts-warning`),Kg(),Mk(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),Jc(182,`code`),Mk(183,`p-blocked-url`),Kg(),Mk(184,` e o usuário será redirecionado para uma tela de bloqueio.`),Kg()(),Jc(185,`p`)(186,`em`),Mk(187,`Processo finalizado.`),Kg()(),_u(188,`hr`),Jc(189,`h4`),Mk(190,`Praticidade`),Kg(),Jc(191,`p`),Mk(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Jc(193,`code`),Mk(194,`po-page-login`),Kg(),Mk(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),Jc(196,`code`),Mk(197,`/login`),Kg(),Mk(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),Kg(),Jc(199,`pre`)(200,`code`),Mk(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

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
`),Kg()(),Jc(202,`p`),Mk(203,`O metadado `),Jc(204,`code`),Mk(205,`serviceApi`),Kg(),Mk(206,` deve ser a `),Jc(207,`strong`),Mk(208,`url`),Kg(),Mk(209,` para requisição dos recursos de autenticação, o `),Jc(210,`code`),Mk(211,`environment`),Kg(),Mk(212,` alimenta a propriedade
`),Jc(213,`code`),Mk(214,`p-environment`),Kg(),Mk(215,`, `),Jc(216,`code`),Mk(217,`recovery`),Kg(),Mk(218,` é a interface `),Jc(219,`code`),Mk(220,`PoPageLoginRecovery`),Kg(),Mk(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),Jc(222,`code`),Mk(223,`registerUrl`),Kg(),Mk(224,` alimenta a propriedade `),Jc(225,`code`),Mk(226,`p-register-url`),Kg(),Mk(227,` e `),Jc(228,`code`),Mk(229,`authenticationType`),Kg(),Mk(230,` que define a propriedade `),Jc(231,`code`),Mk(232,`p-authentication-type`),Kg(),Mk(233,`.`),Kg(),Jc(234,`blockquote`)(235,`p`),Mk(236,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.`),Kg()()()(),Jc(237,`tr`,23)(238,`td`,14)(239,`div`,15)(240,`span`,16),Mk(241,` p-background`),_u(242,`br`),Kg()()(),Jc(243,`td`,17)(244,`code`,22),Mk(245,`string`),Kg()(),Jc(246,`td`,19),Mk(247,`-`),Kg(),Jc(248,`td`,20)(249,`em`)(250,`strong`),Mk(251,`(opcional)`),Kg()(),Jc(252,`p`),Mk(253,`O `),Jc(254,`code`),Mk(255,`p-background`),Kg(),Mk(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),Kg(),Jc(257,`p`),Mk(258,`A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo.`),Kg(),Jc(259,`p`),Mk(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),Jc(261,`code`),Mk(262,`highlightInfo`),Kg(),Mk(263,`.`),Kg(),Jc(264,`blockquote`)(265,`p`),Mk(266,`Veja mais sobre as literais na propriedade `),Jc(267,`code`),Mk(268,`p-literals`),Kg(),Mk(269,`.`),Kg()(),Jc(270,`p`),Mk(271,`Exemplos de valores válidos:`),Kg(),Jc(272,`ul`)(273,`li`)(274,`strong`),Mk(275,`local`),Kg(),Mk(276,`: `),Jc(277,`code`),Mk(278,`./assets/images/login-background.png`),Kg()(),Jc(279,`li`)(280,`strong`),Mk(281,`url externa`),Kg(),Mk(282,`: `),Jc(283,`code`),Mk(284,`https://po-ui.io/assets/images/login-background.png`),Kg()()(),Jc(285,`blockquote`)(286,`p`),Mk(287,`Essa propriedade é ignorada para aplicações mobile.`),Kg()()()(),Jc(288,`tr`,24)(289,`td`,14)(290,`div`,15)(291,`span`,16),Mk(292,` p-blocked-url`),_u(293,`br`),Kg()()(),Jc(294,`td`,17)(295,`code`,22),Mk(296,`string`),Kg()(),Jc(297,`td`,19),Mk(298,`-`),Kg(),Jc(299,`td`,20)(300,`em`)(301,`strong`),Mk(302,`(opcional)`),Kg()(),Jc(303,`p`),Mk(304,`Caso o valor atribuído para `),Jc(305,`code`),Mk(306,`p-exceeded-attempts-warning`),Kg(),Mk(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),Kg()()(),Jc(308,`tr`,25)(309,`td`,14)(310,`div`,15)(311,`span`,16),Mk(312,` p-components-size`),_u(313,`br`),Kg()()(),Jc(314,`td`,17)(315,`code`,22),Mk(316,`string`),Kg()(),Jc(317,`td`,19)(318,`p`)(319,`code`),Mk(320,`medium`),Kg()()(),Jc(321,`td`,20)(322,`em`)(323,`strong`),Mk(324,`(opcional)`),Kg()(),Jc(325,`p`),Mk(326,`Define o tamanho dos componentes de formulário no template:`),Kg(),Jc(327,`ul`)(328,`li`)(329,`code`),Mk(330,`small`),Kg(),Mk(331,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(332,`li`)(333,`code`),Mk(334,`medium`),Kg(),Mk(335,`: aplica a medida medium de cada componente.`),Kg()(),Jc(336,`blockquote`)(337,`p`),Mk(338,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(339,`code`),Mk(340,`medium`),Kg(),Mk(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(342,`a`,26),Mk(343,`po-theme`),Kg(),Mk(344,`.`),Kg()()()(),Jc(345,`tr`,27)(346,`td`,14)(347,`div`,15)(348,`span`,16),Mk(349,` p-contact-email`),_u(350,`br`),Kg()()(),Jc(351,`td`,17)(352,`code`,22),Mk(353,`string`),Kg()(),Jc(354,`td`,19),Mk(355,`-`),Kg(),Jc(356,`td`,20)(357,`em`)(358,`strong`),Mk(359,`(opcional)`),Kg()(),Jc(360,`p`),Mk(361,`Personaliza o e-mail que é exibido na mensagem de dica de login padrão para contato de suporte.`),Kg()()(),Jc(362,`tr`,28)(363,`td`,14)(364,`div`,15)(365,`span`,16),Mk(366,` p-custom-field`),_u(367,`br`),Kg()()(),Jc(368,`td`,17)(369,`code`,22),Mk(370,`string `),Kg(),Jc(371,`code`,29),Mk(372,` PoPageLoginCustomField`),Kg()(),Jc(373,`td`,19),Mk(374,`-`),Kg(),Jc(375,`td`,20)(376,`em`)(377,`strong`),Mk(378,`(opcional)`),Kg()(),Jc(379,`p`),Mk(380,`Ao informar um valor do tipo `),Jc(381,`code`),Mk(382,`string`),Kg(),Mk(383,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),Jc(384,`code`),Mk(385,`literals`),Kg(),Mk(386,` como `),Jc(387,`code`),Mk(388,`customFieldErrorPattern`),Kg(),Mk(389,` e `),Jc(390,`code`),Mk(391,`customFieldPlaceholder`),Kg(),Mk(392,`.`),Kg(),Jc(393,`p`),Mk(394,`Existe a possibilidade de informar um objeto que segue a definição da interface `),Jc(395,`code`),Mk(396,`PoPageLoginCustomField`),Kg(),Mk(397,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),Jc(398,`code`),Mk(399,`po-input`),Kg(),Mk(400,`, `),Jc(401,`code`),Mk(402,`po-combo`),Kg(),Mk(403,` especificamente para servi\xE7os
ou `),Jc(404,`code`),Mk(405,`po-select`),Kg(),Mk(406,` para valores fixos.`),Kg(),Jc(407,`p`),Mk(408,`Abaixo seguem os exemplos de cada tipo de campo.`),Kg(),Jc(409,`p`)(410,`code`),Mk(411,`po-input`),Kg(),Mk(412,`:`),Kg(),Jc(413,`pre`)(414,`code`),Mk(415,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}
`),Kg()(),Jc(416,`p`)(417,`code`),Mk(418,`po-combo`),Kg(),Mk(419,`:`),Kg(),Jc(420,`pre`)(421,`code`),Mk(422,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}
`),Kg()(),Jc(423,`p`)(424,`code`),Mk(425,`po-select`),Kg(),Mk(426,`:`),Kg(),Jc(427,`pre`)(428,`code`),Mk(429,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}
`),Kg()(),Jc(430,`p`),Mk(431,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),Kg()()(),Jc(432,`tr`,30)(433,`td`,14)(434,`div`,15)(435,`span`,16),Mk(436,` p-environment`),_u(437,`br`),Kg()()(),Jc(438,`td`,17)(439,`code`,22),Mk(440,`string`),Kg()(),Jc(441,`td`,19),Mk(442,`-`),Kg(),Jc(443,`td`,20)(444,`em`)(445,`strong`),Mk(446,`(opcional)`),Kg()(),Jc(447,`p`),Mk(448,`Adiciona uma `),Jc(449,`code`),Mk(450,`tag`),Kg(),Mk(451,` abaixo do título que especifica o ambiente que o usuário está fazendo o login.`),Kg(),Jc(452,`blockquote`)(453,`p`),Mk(454,`Essa propriedade limita o texto em 40 caracteres.`),Kg()()()(),Jc(455,`tr`,31)(456,`td`,14)(457,`div`,15)(458,`span`,16),Mk(459,` p-exceeded-attempts-warning`),_u(460,`br`),Kg()()(),Jc(461,`td`,17)(462,`code`,32),Mk(463,`number`),Kg()(),Jc(464,`td`,19)(465,`p`)(466,`code`),Mk(467,`0`),Kg()()(),Jc(468,`td`,20)(469,`em`)(470,`strong`),Mk(471,`(opcional)`),Kg()(),Jc(472,`p`),Mk(473,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),Kg(),Jc(474,`blockquote`)(475,`p`),Mk(476,`Caso tenha algum valor atribuído para o atributo `),Jc(477,`code`),Mk(478,`p-authentication-url`),Kg(),Mk(479,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),Jc(480,`code`),Mk(481,`p-exceeded-attempts-warning`),Kg(),Mk(482,`, o valor considerado será o do retorno da requisição.`),Kg()()()(),Jc(483,`tr`,33)(484,`td`,14)(485,`div`,15)(486,`span`,16),Mk(487,` p-hide-label-status`),_u(488,`br`),Kg()()(),Jc(489,`td`,17)(490,`code`,34),Mk(491,`boolean`),Kg()(),Jc(492,`td`,19)(493,`p`)(494,`code`),Mk(495,`false`),Kg()()(),Jc(496,`td`,20)(497,`em`)(498,`strong`),Mk(499,`(opcional)`),Kg()(),Jc(500,`p`),Mk(501,`Indica se o status do `),Jc(502,`code`),Mk(503,`model`),Kg(),Mk(504,` do switch de lembrar o usuário será escondido visualmente.`),Kg(),Jc(505,`blockquote`)(506,`p`),Mk(507,`Por padrão será atribuído `),Jc(508,`code`),Mk(509,`false`),Kg(),Mk(510,`.`),Kg()()()(),Jc(511,`tr`,35)(512,`td`,14)(513,`div`,15)(514,`span`,16),Mk(515,` p-hide-password-peek`),_u(516,`br`),Kg()()(),Jc(517,`td`,17)(518,`code`,34),Mk(519,`boolean`),Kg()(),Jc(520,`td`,19)(521,`p`)(522,`code`),Mk(523,`false`),Kg()()(),Jc(524,`td`,20)(525,`em`)(526,`strong`),Mk(527,`(opcional)`),Kg()(),Jc(528,`p`),Mk(529,`Permite esconder a função de espiar a senha digitada.`),Kg()()(),Jc(530,`tr`,36)(531,`td`,14)(532,`div`,15)(533,`span`,16),Mk(534,` p-hide-remember-user`),_u(535,`br`),Kg()()(),Jc(536,`td`,17)(537,`code`,34),Mk(538,`boolean`),Kg()(),Jc(539,`td`,19)(540,`p`)(541,`code`),Mk(542,`false`),Kg()()(),Jc(543,`td`,20)(544,`em`)(545,`strong`),Mk(546,`(opcional)`),Kg()(),Jc(547,`p`),Mk(548,`Esconde a função "Lembrar usuário" do formulário de login.`),Kg(),Jc(549,`p`),Mk(550,`Quando essa propriedade é setada com `),Jc(551,`code`),Mk(552,`true`),Kg(),Mk(553,` a propriedade `),Jc(554,`code`),Mk(555,`rememberUser`),Kg(),Mk(556,` enviada no evento `),Jc(557,`code`),Mk(558,`p-login-submit`),Kg(),Mk(559,` ser\xE1 sempre
`),Jc(560,`code`),Mk(561,`false`),Kg(),Mk(562,`.`),Kg(),Jc(563,`blockquote`)(564,`p`),Mk(565,`Veja a propriedade `),Jc(566,`code`),Mk(567,`p-literals`),Kg(),Mk(568,` para customizar a literal `),Jc(569,`code`),Mk(570,`rememberUser`),Kg(),Mk(571,`.`),Kg()()()(),Jc(572,`tr`,37)(573,`td`,14)(574,`div`,38)(575,`span`,39),Mk(576,` (p-language-change)`),_u(577,`br`),Kg()()(),Jc(578,`td`,17)(579,`code`,40),Mk(580,`EventEmitter`),Kg()(),Jc(581,`td`,19),Mk(582,`-`),Kg(),Jc(583,`td`,20)(584,`em`)(585,`strong`),Mk(586,`(opcional)`),Kg()(),Jc(587,`p`),Mk(588,`Evento disparado quando o usuário alterar o idioma da página.`),Kg(),Jc(589,`p`),Mk(590,`Esse evento receberá como parâmetro um objeto do tipo `),Jc(591,`code`),Mk(592,`PoLanguage`),Kg(),Mk(593,` com a linguagem selecionada.`),Kg()()(),Jc(594,`tr`,41)(595,`td`,14)(596,`div`,15)(597,`span`,16),Mk(598,` p-languages`),_u(599,`br`),Kg()()(),Jc(600,`td`,17)(601,`code`,42),Mk(602,`Array<PoLanguage>`),Kg()(),Jc(603,`td`,19),Mk(604,`-`),Kg(),Jc(605,`td`,20)(606,`em`)(607,`strong`),Mk(608,`(opcional)`),Kg()(),Jc(609,`p`),Mk(610,`Coleção de idiomas que o componente irá tratar e disponibilizará para o usuário escolher.`),Kg(),Jc(611,`p`),Mk(612,`Caso essa propriedade não seja utilizada o componente mostrará no combo os idiomas que ele suporta por padrão.`),Kg(),Jc(613,`p`),Mk(614,`Caso a coleção tenha um idioma, a página estará nesse idioma e não mostrará o combo.`),Kg(),Jc(615,`p`),Mk(616,`Caso seja passado um array vazio, a página terá o idioma configurado no `),Jc(617,`code`),Mk(618,`i18n`),Kg(),Mk(619,` e não mostrará o combo de seleção.`),Kg(),Jc(620,`blockquote`)(621,`p`),Mk(622,`Se for passado um idioma não suportado, será preciso passar as literais pela propriedade `),Jc(623,`code`),Mk(624,`p-literals`),Kg(),Mk(625,`.`),Kg()()()(),Jc(626,`tr`,43)(627,`td`,14)(628,`div`,15)(629,`span`,16),Mk(630,` p-literals`),_u(631,`br`),Kg()()(),Jc(632,`td`,17)(633,`code`,44),Mk(634,`PoPageLoginLiterals`),Kg()(),Jc(635,`td`,19),Mk(636,`-`),Kg(),Jc(637,`td`,20)(638,`em`)(639,`strong`),Mk(640,`(opcional)`),Kg()(),Jc(641,`p`),Mk(642,`Objeto com as literais usadas no `),Jc(643,`code`),Mk(644,`po-page-login`),Kg(),Mk(645,`.`),Kg(),Jc(646,`p`),Mk(647,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Jc(648,`pre`)(649,`code`),Mk(650,`const customLiterals: PoPageLoginLiterals = {
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
`),Kg()(),Jc(651,`p`),Mk(652,`Ou passando apenas as literais que deseja customizar:`),Kg(),Jc(653,`pre`)(654,`code`),Mk(655,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};
`),Kg()(),Jc(656,`p`),Mk(657,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Jc(658,`pre`)(659,`code`),Mk(660,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>
`),Kg()(),Jc(661,`blockquote`)(662,`p`),Mk(663,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),Kg()()()(),Jc(664,`tr`,45)(665,`td`,14)(666,`div`,15)(667,`span`,16),Mk(668,` p-loading`),_u(669,`br`),Kg()()(),Jc(670,`td`,17)(671,`code`,34),Mk(672,`boolean`),Kg()(),Jc(673,`td`,19)(674,`p`)(675,`code`),Mk(676,`false`),Kg()()(),Jc(677,`td`,20)(678,`em`)(679,`strong`),Mk(680,`(opcional)`),Kg()(),Jc(681,`p`),Mk(682,`Habilita um estado de carregamento ao botão de `),Jc(683,`em`),Mk(684,`login`),Kg(),Mk(685,`.`),Kg(),Jc(686,`blockquote`)(687,`p`),Mk(688,`É necessário atribuir `),Jc(689,`code`),Mk(690,`true`),Kg(),Mk(691,` à esta propriedade na função definida em `),Jc(692,`code`),Mk(693,`p-login-submit`),Kg(),Mk(694,`.`),Kg()()()(),Jc(695,`tr`,46)(696,`td`,14)(697,`div`,15)(698,`span`,16),Mk(699,` p-login`),_u(700,`br`),Kg()()(),Jc(701,`td`,17)(702,`code`,22),Mk(703,`string`),Kg()(),Jc(704,`td`,19),Mk(705,`-`),Kg(),Jc(706,`td`,20)(707,`em`)(708,`strong`),Mk(709,`(opcional)`),Kg()(),Jc(710,`p`),Mk(711,`Valor do modelo do campo de login.`),Kg()()(),Jc(712,`tr`,47)(713,`td`,14)(714,`div`,38)(715,`span`,39),Mk(716,` (p-login-change)`),_u(717,`br`),Kg()()(),Jc(718,`td`,17)(719,`code`,40),Mk(720,`EventEmitter`),Kg()(),Jc(721,`td`,19),Mk(722,`-`),Kg(),Jc(723,`td`,20)(724,`em`)(725,`strong`),Mk(726,`(opcional)`),Kg()(),Jc(727,`p`),Mk(728,`Evento disparado quando o usuário alterar o input do campo login.`),Kg(),Jc(729,`p`),Mk(730,`Esse evento receberá como parâmetro uma variável do tipo `),Jc(731,`code`),Mk(732,`string`),Kg(),Mk(733,` com o texto informado no campo.`),Kg(),Jc(734,`blockquote`)(735,`p`),Mk(736,`Esta propriedade será ignorada se for definido valor para a propriedade `),Jc(737,`code`),Mk(738,`p-authentication-url`),Kg(),Mk(739,`.`),Kg()()()(),Jc(740,`tr`,48)(741,`td`,14)(742,`div`,15)(743,`span`,16),Mk(744,` p-login-errors`),_u(745,`br`),Kg()()(),Jc(746,`td`,17)(747,`code`,49),Mk(748,`string[]`),Kg()(),Jc(749,`td`,19),Mk(750,`-`),Kg(),Jc(751,`td`,20)(752,`em`)(753,`strong`),Mk(754,`(opcional)`),Kg()(),Jc(755,`p`),Mk(756,`Atributo que recebe uma lista de erros e exibe abaixo do campo de login.`),Kg()()(),Jc(757,`tr`,50)(758,`td`,14)(759,`div`,15)(760,`span`,16),Mk(761,` p-login-pattern`),_u(762,`br`),Kg()()(),Jc(763,`td`,17)(764,`code`,22),Mk(765,`string`),Kg()(),Jc(766,`td`,19),Mk(767,`-`),Kg(),Jc(768,`td`,20)(769,`em`)(770,`strong`),Mk(771,`(opcional)`),Kg()(),Jc(772,`p`),Mk(773,`Expressão regular para validar o campo de login, caso a expressão não seja atentida, a literal `),Jc(774,`code`),Mk(775,`loginErrorPattern`),Kg(),Mk(776,`
ser\xE1 exibida.`),Kg(),Jc(777,`p`),Mk(778,`Exemplos de valores válidos:`),Kg(),Jc(779,`ul`)(780,`li`),Mk(781,`email: `),Jc(782,`code`),Mk(783,`[expressao-regular-email]`),Kg()(),Jc(784,`li`),Mk(785,`cpf: `),Jc(786,`code`),Mk(787,`[expressao-regular-cpf]`),Kg()()(),Jc(788,`blockquote`)(789,`p`),Mk(790,`Veja a propriedade `),Jc(791,`code`),Mk(792,`p-literals`),Kg(),Mk(793,` para customizar a literal `),Jc(794,`code`),Mk(795,`loginErrorPattern`),Kg(),Mk(796,`.`),Kg()()()(),Jc(797,`tr`,51)(798,`td`,14)(799,`div`,38)(800,`span`,39),Mk(801,` (p-login-submit)`),_u(802,`br`),Kg()()(),Jc(803,`td`,17)(804,`code`,40),Mk(805,`EventEmitter`),Kg()(),Jc(806,`td`,19),Mk(807,`-`),Kg(),Jc(808,`td`,20)(809,`p`),Mk(810,`Evento disparado ao submeter o formulário de login (apertando `),Jc(811,`code`),Mk(812,`Enter`),Kg(),Mk(813,` dentro dos campos ou pressionando o botão de confirmação).`),Kg(),Jc(814,`p`),Mk(815,`Esse evento receberá como parâmetro um objeto do tipo `),Jc(816,`code`),Mk(817,`PoPageLogin`),Kg(),Mk(818,` com os dados informados no formulário.`),Kg(),Jc(819,`blockquote`)(820,`p`),Mk(821,`Esta propriedade será ignorada se for definido valor para a propriedade `),Jc(822,`code`),Mk(823,`p-url-recovery`),Kg(),Mk(824,`.`),Kg()(),Jc(825,`blockquote`)(826,`p`),Mk(827,`Para mais detalhes consulte a documentação sobre a interface `),Jc(828,`code`),Mk(829,`PoPageLogin`),Kg(),Mk(830,` mais abaixo.`),Kg()()()(),Jc(831,`tr`,52)(832,`td`,14)(833,`div`,15)(834,`span`,16),Mk(835,` p-logo`),_u(836,`br`),Kg()()(),Jc(837,`td`,17)(838,`code`,22),Mk(839,`string`),Kg()(),Jc(840,`td`,19),Mk(841,`-`),Kg(),Jc(842,`td`,20)(843,`em`)(844,`strong`),Mk(845,`(opcional)`),Kg()(),Jc(846,`p`),Mk(847,`Caminho para a logomarca localizada na parte superior.`),Kg(),Jc(848,`blockquote`)(849,`p`),Mk(850,`Caso seja indefinida o espaço se mantém preservado porém vazio.`),Kg()()()(),Jc(851,`tr`,53)(852,`td`,14)(853,`div`,15)(854,`span`,16),Mk(855,` p-no-autocomplete-login`),_u(856,`br`),Kg()()(),Jc(857,`td`,17)(858,`code`,34),Mk(859,`boolean`),Kg()(),Jc(860,`td`,19)(861,`p`)(862,`code`),Mk(863,`true`),Kg()()(),Jc(864,`td`,20)(865,`em`)(866,`strong`),Mk(867,`(opcional)`),Kg()(),Jc(868,`p`),Mk(869,`Define a propriedade nativa `),Jc(870,`code`),Mk(871,`autocomplete`),Kg(),Mk(872,` do campo como `),Jc(873,`code`),Mk(874,`off`),Kg(),Mk(875,`.`),Kg()()(),Jc(876,`tr`,54)(877,`td`,14)(878,`div`,15)(879,`span`,16),Mk(880,` p-no-autocomplete-password`),_u(881,`br`),Kg()()(),Jc(882,`td`,17)(883,`code`,34),Mk(884,`boolean`),Kg()(),Jc(885,`td`,19)(886,`p`)(887,`code`),Mk(888,`true`),Kg()()(),Jc(889,`td`,20)(890,`em`)(891,`strong`),Mk(892,`(opcional)`),Kg()(),Jc(893,`p`),Mk(894,`Define a propriedade nativa `),Jc(895,`code`),Mk(896,`autocomplete`),Kg(),Mk(897,` do campo como `),Jc(898,`code`),Mk(899,`off`),Kg(),Mk(900,`.`),Kg(),Jc(901,`blockquote`)(902,`p`),Mk(903,`No componente `),Jc(904,`code`),Mk(905,`po-password`),Kg(),Mk(906,` será definido como `),Jc(907,`code`),Mk(908,`new-password`),Kg(),Mk(909,`.`),Kg()()()(),Jc(910,`tr`,55)(911,`td`,14)(912,`div`,38)(913,`span`,39),Mk(914,` (p-password-change)`),_u(915,`br`),Kg()()(),Jc(916,`td`,17)(917,`code`,40),Mk(918,`EventEmitter`),Kg()(),Jc(919,`td`,19),Mk(920,`-`),Kg(),Jc(921,`td`,20)(922,`em`)(923,`strong`),Mk(924,`(opcional)`),Kg()(),Jc(925,`p`),Mk(926,`Evento disparado quando o usuário alterar o input do campo password.`),Kg(),Jc(927,`p`),Mk(928,`Esse evento receberá como parâmetro uma variável do tipo `),Jc(929,`code`),Mk(930,`string`),Kg(),Mk(931,` com o texto informado no campo.`),Kg(),Jc(932,`blockquote`)(933,`p`),Mk(934,`Esta propriedade será ignorada se for definido valor para a propriedade `),Jc(935,`code`),Mk(936,`p-authentication-url`),Kg(),Mk(937,`.`),Kg()()()(),Jc(938,`tr`,56)(939,`td`,14)(940,`div`,15)(941,`span`,16),Mk(942,` p-password-errors`),_u(943,`br`),Kg()()(),Jc(944,`td`,17)(945,`code`,49),Mk(946,`string[]`),Kg()(),Jc(947,`td`,19),Mk(948,`-`),Kg(),Jc(949,`td`,20)(950,`em`)(951,`strong`),Mk(952,`(opcional)`),Kg()(),Jc(953,`p`),Mk(954,`Atributo que recebe uma lista de erros e exibe abaixo do campo de password.`),Kg()()(),Jc(955,`tr`,57)(956,`td`,14)(957,`div`,15)(958,`span`,16),Mk(959,` p-password-pattern`),_u(960,`br`),Kg()()(),Jc(961,`td`,17)(962,`code`,22),Mk(963,`string`),Kg()(),Jc(964,`td`,19),Mk(965,`-`),Kg(),Jc(966,`td`,20)(967,`em`)(968,`strong`),Mk(969,`(opcional)`),Kg()(),Jc(970,`p`),Mk(971,`Expressão regular para validar o campo de password, caso a expressão não seja atentida, a literal `),Jc(972,`code`),Mk(973,`passwordErrorPattern`),Kg(),Mk(974,`
ser\xE1 exibida.`),Kg(),Jc(975,`p`),Mk(976,`Exemplos de valores válidos:`),Kg(),Jc(977,`ul`)(978,`li`),Mk(979,`Apenas números: `),Jc(980,`code`),Mk(981,`\\d?`),Kg()(),Jc(982,`li`),Mk(983,`Letras mínusculas: `),Jc(984,`code`),Mk(985,`\\z?`),Kg()()(),Jc(986,`blockquote`)(987,`p`),Mk(988,`Veja a propriedade `),Jc(989,`code`),Mk(990,`p-literals`),Kg(),Mk(991,` para customizar a literal `),Jc(992,`code`),Mk(993,`passwordErrorPattern`),Kg(),Mk(994,`.`),Kg()()()(),Jc(995,`tr`,58)(996,`td`,14)(997,`div`,15)(998,`span`,16),Mk(999,` p-product-name`),_u(1e3,`br`),Kg()()(),Jc(1001,`td`,17)(1002,`code`,22),Mk(1003,`string`),Kg()(),Jc(1004,`td`,19),Mk(1005,`-`),Kg(),Jc(1006,`td`,20)(1007,`em`)(1008,`strong`),Mk(1009,`(opcional)`),Kg()(),Jc(1010,`p`),Mk(1011,`Texto customizado que fica entre a logo e a mensagem de boas-vindas.`),Kg()()(),Jc(1012,`tr`,59)(1013,`td`,14)(1014,`div`,15)(1015,`span`,16),Mk(1016,` p-recovery`),_u(1017,`br`),Kg()()(),Jc(1018,`td`,17)(1019,`code`,22),Mk(1020,`string `),Kg(),Jc(1021,`code`,60),Mk(1022,` Function `),Kg(),Jc(1023,`code`,61),Mk(1024,` PoPageLoginRecovery`),Kg()(),Jc(1025,`td`,19),Mk(1026,`-`),Kg(),Jc(1027,`td`,20)(1028,`em`)(1029,`strong`),Mk(1030,`(opcional)`),Kg()(),Jc(1031,`p`),Mk(1032,`Exibe um link abaixo do formulário de login para que os usuários da aplicação façam a recuperação dos dados de autenticação.`),Kg(),Jc(1033,`p`),Mk(1034,`A propriedade aceita os seguintes tipos:`),Kg(),Jc(1035,`ul`)(1036,`li`)(1037,`p`)(1038,`strong`),Mk(1039,`String`),Kg(),Mk(1040,`: informe uma url externa ou uma rota válida;`),Kg()(),Jc(1041,`li`)(1042,`p`)(1043,`strong`),Mk(1044,`Function`),Kg(),Mk(1045,`: pode-se customizar a ação. Para esta possilidade basta atribuir:`),Kg(),Jc(1046,`pre`)(1047,`code`),Mk(1048,`<po-page-login>
  [recovery]="this.myRecovery.bind(this)">
</po-page-login>
`),Kg()()(),Jc(1049,`li`)(1050,`p`)(1051,`strong`),Mk(1052,`PoPageLoginRecovery`),Kg(),Mk(1053,`: cria-se vínculo automático com o template `),Jc(1054,`strong`),Mk(1055,`po-modal-password-recovery`),Kg(),Mk(1056,`.
O objeto deve conter a `),Jc(1057,`strong`),Mk(1058,`url`),Kg(),Mk(1059,` para requisição dos recursos e pode-se definir o `),Jc(1060,`strong`),Mk(1061,`tipo`),Kg(),Mk(1062,` de modal para recupera\xE7\xE3o de senha,
`),Jc(1063,`strong`),Mk(1064,`email`),Kg(),Mk(1065,` para contato e `),Jc(1066,`strong`),Mk(1067,`máscara`),Kg(),Mk(1068,` do campo de telefone.`),Kg()()()()(),Jc(1069,`tr`,62)(1070,`td`,14)(1071,`div`,15)(1072,`span`,16),Mk(1073,` p-register-url`),_u(1074,`br`),Kg()()(),Jc(1075,`td`,17)(1076,`code`,22),Mk(1077,`string`),Kg()(),Jc(1078,`td`,19),Mk(1079,`-`),Kg(),Jc(1080,`td`,20)(1081,`em`)(1082,`strong`),Mk(1083,`(opcional)`),Kg()(),Jc(1084,`p`),Mk(1085,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),Kg(),Jc(1086,`p`),Mk(1087,`Exemplos de valores válidos:`),Kg(),Jc(1088,`ul`)(1089,`li`)(1090,`strong`),Mk(1091,`local`),Kg(),Mk(1092,`: `),Jc(1093,`code`),Mk(1094,`/home`),Kg()(),Jc(1095,`li`)(1096,`strong`),Mk(1097,`url externa`),Kg(),Mk(1098,`: `),Jc(1099,`code`),Mk(1100,`https://po-ui.io`),Kg()()(),Jc(1101,`blockquote`)(1102,`p`),Mk(1103,`Veja a propriedade `),Jc(1104,`code`),Mk(1105,`p-literals`),Kg(),Mk(1106,` para customizar a literal `),Jc(1107,`code`),Mk(1108,`registerUrl`),Kg(),Mk(1109,`.`),Kg()()()(),Jc(1110,`tr`,63)(1111,`td`,14)(1112,`div`,15)(1113,`span`,16),Mk(1114,` p-secondary-logo`),_u(1115,`br`),Kg()()(),Jc(1116,`td`,17)(1117,`code`,22),Mk(1118,`string`),Kg()(),Jc(1119,`td`,19),Mk(1120,`-`),Kg(),Jc(1121,`td`,20)(1122,`em`)(1123,`strong`),Mk(1124,`(opcional)`),Kg()(),Jc(1125,`p`),Mk(1126,`Caminho para a logomarca localizada no rodapé.`),Kg()()(),Jc(1127,`tr`,64)(1128,`td`,14)(1129,`div`,15)(1130,`span`,16),Mk(1131,` p-support`),_u(1132,`br`),Kg()()(),Jc(1133,`td`,17)(1134,`code`,22),Mk(1135,`string `),Kg(),Jc(1136,`code`,60),Mk(1137,` Function`),Kg()(),Jc(1138,`td`,19),Mk(1139,`-`),Kg(),Jc(1140,`td`,20)(1141,`em`)(1142,`strong`),Mk(1143,`(opcional)`),Kg()(),Jc(1144,`p`),Mk(1145,`Exibe um botão para suporte.`),Kg(),Jc(1146,`p`),Mk(1147,`A propriedade aceita os seguintes tipos:`),Kg(),Jc(1148,`ul`)(1149,`li`)(1150,`strong`),Mk(1151,`String`),Kg(),Mk(1152,`: URL externa ou uma rota válida;`),Kg(),Jc(1153,`li`)(1154,`strong`),Mk(1155,`Function`),Kg(),Mk(1156,`: Função a ser disparada ao clicar no botão de suporte;`),Jc(1157,`pre`)(1158,`code`),Mk(1159,`<po-page-login>
  [p-support]="this.mySupport.bind(this)">
</po-page-login>
`),Kg()()()()()()(),Jc(1160,`h3`),Mk(1161,`Interfaces`),Kg(),Jc(1162,`h4`,65)(1163,`code`,5),Mk(1164,`PoPageLoginCustomField`),Kg()(),Jc(1165,`div`,2)(1166,`p`),Mk(1167,`Interface com a definição do Custom Field, podendo ser utilizado para informar um campo customizado no componente `),Jc(1168,`code`),Mk(1169,`po-page-login`),Kg(),Mk(1170,`.`),Kg()(),Jc(1171,`h4`,9),Mk(1172,`Propriedades`),Kg(),Jc(1173,`table`,10)(1174,`tr`,11)(1175,`th`,12),Mk(1176,`Nome`),Kg(),Jc(1177,`th`,12),Mk(1178,`Tipo`),Kg(),Jc(1179,`th`,12),Mk(1180,`Descrição`),Kg()(),Jc(1181,`tr`,66)(1182,`td`,14)(1183,`div`,15)(1184,`span`,16),Mk(1185,` errorPattern`),_u(1186,`br`),Kg()()(),Jc(1187,`td`,17)(1188,`code`,22),Mk(1189,`string`),Kg()(),Jc(1190,`td`,20)(1191,`em`)(1192,`strong`),Mk(1193,`(opcional)`),Kg()(),Jc(1194,`p`),Mk(1195,`Mensagem que será exibida quando a expressão regular informada na propriedade `),Jc(1196,`code`),Mk(1197,`pattern`),Kg(),Mk(1198,` não for válida.`),Kg()()(),Jc(1199,`tr`,67)(1200,`td`,14)(1201,`div`,15)(1202,`span`,16),Mk(1203,` fieldValue`),_u(1204,`br`),Kg()()(),Jc(1205,`td`,17)(1206,`code`,22),Mk(1207,`string`),Kg()(),Jc(1208,`td`,20)(1209,`em`)(1210,`strong`),Mk(1211,`(opcional)`),Kg()(),Jc(1212,`p`),Mk(1213,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),Jc(1214,`code`),Mk(1215,`po-combo`),Kg(),Mk(1216,`, esta propriedade será responsável pelo valor de cada item da lista.`),Kg()()(),Jc(1217,`tr`,68)(1218,`td`,14)(1219,`div`,15)(1220,`span`,16),Mk(1221,` options`),_u(1222,`br`),Kg()()(),Jc(1223,`td`,17)(1224,`code`,69),Mk(1225,`Array<PoSelectOption>`),Kg()(),Jc(1226,`td`,20)(1227,`em`)(1228,`strong`),Mk(1229,`(opcional)`),Kg()(),Jc(1230,`p`),Mk(1231,`Lista de opções de um `),Jc(1232,`code`),Mk(1233,`po-select`),Kg(),Mk(1234,`.`),Kg()()(),Jc(1235,`tr`,70)(1236,`td`,14)(1237,`div`,15)(1238,`span`,16),Mk(1239,` pattern`),_u(1240,`br`),Kg()()(),Jc(1241,`td`,17)(1242,`code`,22),Mk(1243,`string`),Kg()(),Jc(1244,`td`,20)(1245,`em`)(1246,`strong`),Mk(1247,`(opcional)`),Kg()(),Jc(1248,`p`),Mk(1249,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),Jc(1250,`code`),Mk(1251,`errorPattern`),Kg(),Mk(1252,` será exibida.`),Kg()()(),Jc(1253,`tr`,71)(1254,`td`,14)(1255,`div`,15)(1256,`span`,16),Mk(1257,` placeholder`),_u(1258,`br`),Kg()()(),Jc(1259,`td`,17)(1260,`code`,22),Mk(1261,`string`),Kg()(),Jc(1262,`td`,20)(1263,`em`)(1264,`strong`),Mk(1265,`(opcional)`),Kg()(),Jc(1266,`p`),Mk(1267,`Mensagem que será exibida enquanto o campo customizado não estiver preenchido.`),Kg()()(),Jc(1268,`tr`,72)(1269,`td`,14)(1270,`div`,15)(1271,`span`,16),Mk(1272,` property`),_u(1273,`br`),Kg()()(),Jc(1274,`td`,17)(1275,`code`,22),Mk(1276,`string`),Kg()(),Jc(1277,`td`,20)(1278,`p`),Mk(1279,`Nome da propriedade que será utilizado no campo customizado.`),Kg()()(),Jc(1280,`tr`,73)(1281,`td`,14)(1282,`div`,15)(1283,`span`,16),Mk(1284,` url`),_u(1285,`br`),Kg()()(),Jc(1286,`td`,17)(1287,`code`,22),Mk(1288,`string`),Kg()(),Jc(1289,`td`,20)(1290,`em`)(1291,`strong`),Mk(1292,`(opcional)`),Kg()(),Jc(1293,`p`),Mk(1294,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),Jc(1295,`code`),Mk(1296,`po-combo`),Kg(),Mk(1297,`.`),Kg()()(),Jc(1298,`tr`,74)(1299,`td`,14)(1300,`div`,15)(1301,`span`,16),Mk(1302,` value`),_u(1303,`br`),Kg()()(),Jc(1304,`td`,17)(1305,`code`,22),Mk(1306,`string `),Kg(),Jc(1307,`code`,32),Mk(1308,` number`),Kg()(),Jc(1309,`td`,20)(1310,`em`)(1311,`strong`),Mk(1312,`(opcional)`),Kg()(),Jc(1313,`p`),Mk(1314,`Valor do campo customizado.`),Kg()()()(),Jc(1315,`h4`,75)(1316,`code`,5),Mk(1317,`PoPageLoginLiterals`),Kg()(),Jc(1318,`div`,2)(1319,`p`),Mk(1320,`Interface para definição das literais usadas no `),Jc(1321,`code`),Mk(1322,`po-page-login`),Kg(),Mk(1323,`.`),Kg()(),Jc(1324,`h4`,9),Mk(1325,`Propriedades`),Kg(),Jc(1326,`table`,10)(1327,`tr`,11)(1328,`th`,12),Mk(1329,`Nome`),Kg(),Jc(1330,`th`,12),Mk(1331,`Tipo`),Kg(),Jc(1332,`th`,12),Mk(1333,`Descrição`),Kg()(),Jc(1334,`tr`,76)(1335,`td`,14)(1336,`div`,15)(1337,`span`,16),Mk(1338,` attempts`),_u(1339,`br`),Kg()()(),Jc(1340,`td`,17)(1341,`code`,22),Mk(1342,`string`),Kg()(),Jc(1343,`td`,20)(1344,`em`)(1345,`strong`),Mk(1346,`(opcional)`),Kg()(),Jc(1347,`p`),Mk(1348,`Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio.`),Kg()()(),Jc(1349,`tr`,77)(1350,`td`,14)(1351,`div`,15)(1352,`span`,16),Mk(1353,` createANewPasswordNow`),_u(1354,`br`),Kg()()(),Jc(1355,`td`,17)(1356,`code`,22),Mk(1357,`string`),Kg()(),Jc(1358,`td`,20)(1359,`em`)(1360,`strong`),Mk(1361,`(opcional)`),Kg()(),Jc(1362,`p`),Mk(1363,`Texto exibido no popover de aviso de bloqueio, que orienta o usuário, caso ele tenha esquecido a senha, a criar uma nova senha.`),Kg()()(),Jc(1364,`tr`,78)(1365,`td`,14)(1366,`div`,15)(1367,`span`,16),Mk(1368,` customFieldErrorPattern`),_u(1369,`br`),Kg()()(),Jc(1370,`td`,17)(1371,`code`,22),Mk(1372,`string`),Kg()(),Jc(1373,`td`,20)(1374,`em`)(1375,`strong`),Mk(1376,`(opcional)`),Kg()(),Jc(1377,`p`),Mk(1378,`Mensagem de erro apresentada quando o campo customizado está inválido`),Kg()()(),Jc(1379,`tr`,79)(1380,`td`,14)(1381,`div`,15)(1382,`span`,16),Mk(1383,` customFieldPlaceholder`),_u(1384,`br`),Kg()()(),Jc(1385,`td`,17)(1386,`code`,22),Mk(1387,`string`),Kg()(),Jc(1388,`td`,20)(1389,`em`)(1390,`strong`),Mk(1391,`(opcional)`),Kg()(),Jc(1392,`p`),Mk(1393,`Placeholder para o campo customizado.`),Kg()()(),Jc(1394,`tr`,80)(1395,`td`,14)(1396,`div`,15)(1397,`span`,16),Mk(1398,` forgotPassword`),_u(1399,`br`),Kg()()(),Jc(1400,`td`,17)(1401,`code`,22),Mk(1402,`string`),Kg()(),Jc(1403,`td`,20)(1404,`em`)(1405,`strong`),Mk(1406,`(opcional)`),Kg()(),Jc(1407,`p`),Mk(1408,`Texto de ajuda para recuperação dos dados de acesso.`),Kg()()(),Jc(1409,`tr`,81)(1410,`td`,14)(1411,`div`,15)(1412,`span`,16),Mk(1413,` forgotYourPassword`),_u(1414,`br`),Kg()()(),Jc(1415,`td`,17)(1416,`code`,22),Mk(1417,`string`),Kg()(),Jc(1418,`td`,20)(1419,`em`)(1420,`strong`),Mk(1421,`(opcional)`),Kg()(),Jc(1422,`p`),Mk(1423,`Texto que questiona o esquecimento da senha no popover de aviso de bloqueio.`),Kg()()(),Jc(1424,`tr`,82)(1425,`td`,14)(1426,`div`,15)(1427,`span`,16),Mk(1428,` highlightInfo`),_u(1429,`br`),Kg()()(),Jc(1430,`td`,17)(1431,`code`,22),Mk(1432,`string`),Kg()(),Jc(1433,`td`,20)(1434,`em`)(1435,`strong`),Mk(1436,`(opcional)`),Kg()(),Jc(1437,`p`),Mk(1438,`Texto de destaque sobreposto à imagem de destaque. Essa opção é utilizada em conjunto com o atributo `),Jc(1439,`code`),Mk(1440,`p-background`),Kg(),Mk(1441,`.`),Kg()()(),Jc(1442,`tr`,83)(1443,`td`,14)(1444,`div`,15)(1445,`span`,16),Mk(1446,` iForgotMyPassword`),_u(1447,`br`),Kg()()(),Jc(1448,`td`,17)(1449,`code`,22),Mk(1450,`string`),Kg()(),Jc(1451,`td`,20)(1452,`em`)(1453,`strong`),Mk(1454,`(opcional)`),Kg()(),Jc(1455,`p`),Mk(1456,`Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio.`),Kg()()(),Jc(1457,`tr`,84)(1458,`td`,14)(1459,`div`,15)(1460,`span`,16),Mk(1461,` ifYouTryHarder`),_u(1462,`br`),Kg()()(),Jc(1463,`td`,17)(1464,`code`,22),Mk(1465,`string`),Kg()(),Jc(1466,`td`,20)(1467,`em`)(1468,`strong`),Mk(1469,`(opcional)`),Kg()(),Jc(1470,`p`),Mk(1471,`Texto de aviso de tentativas exibido no popover de aviso de bloqueio.`),Kg()()(),Jc(1472,`tr`,85)(1473,`td`,14)(1474,`div`,15)(1475,`span`,16),Mk(1476,` loginErrorPattern`),_u(1477,`br`),Kg()()(),Jc(1478,`td`,17)(1479,`code`,22),Mk(1480,`string`),Kg()(),Jc(1481,`td`,20)(1482,`em`)(1483,`strong`),Mk(1484,`(opcional)`),Kg()(),Jc(1485,`p`),Mk(1486,`Mensagem de erro apresentada quando o campo de login está inválido.`),Kg()()(),Jc(1487,`tr`,86)(1488,`td`,14)(1489,`div`,15)(1490,`span`,16),Mk(1491,` loginHint`),_u(1492,`br`),Kg()()(),Jc(1493,`td`,17)(1494,`code`,22),Mk(1495,`string`),Kg()(),Jc(1496,`td`,20)(1497,`em`)(1498,`strong`),Mk(1499,`(opcional)`),Kg()(),Jc(1500,`p`),Mk(1501,`Texto exibido como dica para o campo de login.`),Kg()()(),Jc(1502,`tr`,87)(1503,`td`,14)(1504,`div`,15)(1505,`span`,16),Mk(1506,` loginLabel`),_u(1507,`br`),Kg()()(),Jc(1508,`td`,17)(1509,`code`,22),Mk(1510,`string`),Kg()(),Jc(1511,`td`,20)(1512,`em`)(1513,`strong`),Mk(1514,`(opcional)`),Kg()(),Jc(1515,`p`),Mk(1516,`Texto exibido como label do campo de login.`),Kg()()(),Jc(1517,`tr`,88)(1518,`td`,14)(1519,`div`,15)(1520,`span`,16),Mk(1521,` loginPlaceholder`),_u(1522,`br`),Kg()()(),Jc(1523,`td`,17)(1524,`code`,22),Mk(1525,`string`),Kg()(),Jc(1526,`td`,20)(1527,`em`)(1528,`strong`),Mk(1529,`(opcional)`),Kg()(),Jc(1530,`p`),Mk(1531,`Placeholder do campo de login.`),Kg()()(),Jc(1532,`tr`,89)(1533,`td`,14)(1534,`div`,15)(1535,`span`,16),Mk(1536,` passwordErrorPattern`),_u(1537,`br`),Kg()()(),Jc(1538,`td`,17)(1539,`code`,22),Mk(1540,`string`),Kg()(),Jc(1541,`td`,20)(1542,`em`)(1543,`strong`),Mk(1544,`(opcional)`),Kg()(),Jc(1545,`p`),Mk(1546,`Mensagem de erro apresentada quando o campo de password está inválido.`),Kg()()(),Jc(1547,`tr`,90)(1548,`td`,14)(1549,`div`,15)(1550,`span`,16),Mk(1551,` passwordLabel`),_u(1552,`br`),Kg()()(),Jc(1553,`td`,17)(1554,`code`,22),Mk(1555,`string`),Kg()(),Jc(1556,`td`,20)(1557,`em`)(1558,`strong`),Mk(1559,`(opcional)`),Kg()(),Jc(1560,`p`),Mk(1561,`Texto exibido como label do campo de password.`),Kg()()(),Jc(1562,`tr`,91)(1563,`td`,14)(1564,`div`,15)(1565,`span`,16),Mk(1566,` passwordPlaceholder`),_u(1567,`br`),Kg()()(),Jc(1568,`td`,17)(1569,`code`,22),Mk(1570,`string`),Kg()(),Jc(1571,`td`,20)(1572,`em`)(1573,`strong`),Mk(1574,`(opcional)`),Kg()(),Jc(1575,`p`),Mk(1576,`Placeholder do campo de password.`),Kg()()(),Jc(1577,`tr`,92)(1578,`td`,14)(1579,`div`,15)(1580,`span`,16),Mk(1581,` registerUrl`),_u(1582,`br`),Kg()()(),Jc(1583,`td`,17)(1584,`code`,22),Mk(1585,`string`),Kg()(),Jc(1586,`td`,20)(1587,`em`)(1588,`strong`),Mk(1589,`(opcional)`),Kg()(),Jc(1590,`p`),Mk(1591,`Texto exibido no link de novo cadastro.`),Kg()()(),Jc(1592,`tr`,93)(1593,`td`,14)(1594,`div`,15)(1595,`span`,16),Mk(1596,` rememberUser`),_u(1597,`br`),Kg()()(),Jc(1598,`td`,17)(1599,`code`,22),Mk(1600,`string`),Kg()(),Jc(1601,`td`,20)(1602,`em`)(1603,`strong`),Mk(1604,`(opcional)`),Kg()(),Jc(1605,`p`),Mk(1606,`Texto exibido na função "Lembrar usuário".`),Kg()()(),Jc(1607,`tr`,94)(1608,`td`,14)(1609,`div`,15)(1610,`span`,16),Mk(1611,` rememberUserHint`),_u(1612,`br`),Kg()()(),Jc(1613,`td`,17)(1614,`code`,22),Mk(1615,`string`),Kg()(),Jc(1616,`td`,20)(1617,`em`)(1618,`strong`),Mk(1619,`(opcional)`),Kg()(),Jc(1620,`p`),Mk(1621,`Texto exibido como dica da função "Lembrar usuário"`),Kg()()(),Jc(1622,`tr`,95)(1623,`td`,14)(1624,`div`,15)(1625,`span`,16),Mk(1626,` submitLabel`),_u(1627,`br`),Kg()()(),Jc(1628,`td`,17)(1629,`code`,22),Mk(1630,`string`),Kg()(),Jc(1631,`td`,20)(1632,`em`)(1633,`strong`),Mk(1634,`(opcional)`),Kg()(),Jc(1635,`p`),Mk(1636,`Texto exibido no botão de confirmação da página de login.`),Kg()()(),Jc(1637,`tr`,96)(1638,`td`,14)(1639,`div`,15)(1640,`span`,16),Mk(1641,` submittedLabel`),_u(1642,`br`),Kg()()(),Jc(1643,`td`,17)(1644,`code`,22),Mk(1645,`string`),Kg()(),Jc(1646,`td`,20)(1647,`em`)(1648,`strong`),Mk(1649,`(opcional)`),Kg()(),Jc(1650,`p`),Mk(1651,`Texto exibido no botão de confirmação da página de login quando estiver em estado de carregamento.`),Kg()()(),Jc(1652,`tr`,97)(1653,`td`,14)(1654,`div`,15)(1655,`span`,16),Mk(1656,` support`),_u(1657,`br`),Kg()()(),Jc(1658,`td`,17)(1659,`code`,22),Mk(1660,`string`),Kg()(),Jc(1661,`td`,20)(1662,`em`)(1663,`strong`),Mk(1664,`(opcional)`),Kg()(),Jc(1665,`p`),Mk(1666,`Label do botão de suporte.`),Kg()()(),Jc(1667,`tr`,98)(1668,`td`,14)(1669,`div`,15)(1670,`span`,16),Mk(1671,` titlePopover`),_u(1672,`br`),Kg()()(),Jc(1673,`td`,17)(1674,`code`,22),Mk(1675,`string`),Kg()(),Jc(1676,`td`,20)(1677,`em`)(1678,`strong`),Mk(1679,`(opcional)`),Kg()(),Jc(1680,`p`),Mk(1681,`Título do popover para aviso de bloqueio.`),Kg()()(),Jc(1682,`tr`,99)(1683,`td`,14)(1684,`div`,15)(1685,`span`,16),Mk(1686,` welcome`),_u(1687,`br`),Kg()()(),Jc(1688,`td`,17)(1689,`code`,22),Mk(1690,`string`),Kg()(),Jc(1691,`td`,20)(1692,`em`)(1693,`strong`),Mk(1694,`(opcional)`),Kg()(),Jc(1695,`p`),Mk(1696,`Mensagem de "Boas-vindas" para o usuário que aparece acima dos campos de entrada.`),Kg()()(),Jc(1697,`tr`,100)(1698,`td`,14)(1699,`div`,15)(1700,`span`,16),Mk(1701,` yourUserWillBeBlocked`),_u(1702,`br`),Kg()()(),Jc(1703,`td`,17)(1704,`code`,22),Mk(1705,`string`),Kg()(),Jc(1706,`td`,20)(1707,`em`)(1708,`strong`),Mk(1709,`(opcional)`),Kg()(),Jc(1710,`p`),Mk(1711,`Texto que informa ao usuário que o mesmo será bloqueado e por quanto tempo no popover de aviso de bloqueio.`),Kg()()()(),Jc(1712,`h4`,101)(1713,`code`,5),Mk(1714,`PoPageLoginRecovery`),Kg()(),Jc(1715,`div`,2)(1716,`p`),Mk(1717,`Interface para especificação do tipo de recuperação de senha no `),Jc(1718,`code`),Mk(1719,`po-modal-password-recovery`),Kg(),Mk(1720,`.`),Kg()(),Jc(1721,`h4`,9),Mk(1722,`Propriedades`),Kg(),Jc(1723,`table`,10)(1724,`tr`,11)(1725,`th`,12),Mk(1726,`Nome`),Kg(),Jc(1727,`th`,12),Mk(1728,`Tipo`),Kg(),Jc(1729,`th`,12),Mk(1730,`Descrição`),Kg()(),Jc(1731,`tr`,102)(1732,`td`,14)(1733,`div`,15)(1734,`span`,16),Mk(1735,` contactMail`),_u(1736,`br`),Kg()()(),Jc(1737,`td`,17)(1738,`code`,22),Mk(1739,`string`),Kg()(),Jc(1740,`td`,20)(1741,`em`)(1742,`strong`),Mk(1743,`(opcional)`),Kg()(),Jc(1744,`p`),Mk(1745,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),Kg()()(),Jc(1746,`tr`,103)(1747,`td`,14)(1748,`div`,15)(1749,`span`,16),Mk(1750,` phoneMask`),_u(1751,`br`),Kg()()(),Jc(1752,`td`,17)(1753,`code`,22),Mk(1754,`string`),Kg()(),Jc(1755,`td`,20)(1756,`em`)(1757,`strong`),Mk(1758,`(opcional)`),Kg()(),Jc(1759,`p`),Mk(1760,`Definição da máscara do campo de telefone.`),Kg()()(),Jc(1761,`tr`,104)(1762,`td`,14)(1763,`div`,15)(1764,`span`,16),Mk(1765,` type`),_u(1766,`br`),Kg()()(),Jc(1767,`td`,17)(1768,`code`,105),Mk(1769,`PoModalPasswordRecoveryType`),Kg()(),Jc(1770,`td`,20)(1771,`em`)(1772,`strong`),Mk(1773,`(opcional)`),Kg()(),Jc(1774,`p`),Mk(1775,`Enum para especificação do tipo de recuperação de senha `),Jc(1776,`a`,106),Mk(1777,`PoModalPasswordRecoveryType`),Kg(),Mk(1778,`.`),Kg(),Jc(1779,`blockquote`)(1780,`p`),Mk(1781,`Caso não seja definido valor se assume o padrão `),Jc(1782,`code`),Mk(1783,`PoModalPasswordRecoveryType.Email`),Kg(),Mk(1784,`.`),Kg()()()(),Jc(1785,`tr`,107)(1786,`td`,14)(1787,`div`,15)(1788,`span`,16),Mk(1789,` url`),_u(1790,`br`),Kg()()(),Jc(1791,`td`,17)(1792,`code`,22),Mk(1793,`string`),Kg()(),Jc(1794,`td`,20)(1795,`p`),Mk(1796,`Endpoint usado pelo template `),Jc(1797,`strong`),Mk(1798,`PoModalPasswordRecovery`),Kg(),Mk(1799,` para requisição do recurso.`),Kg(),Jc(1800,`blockquote`)(1801,`p`),Mk(1802,`Saiba mais em `),Jc(1803,`a`,106),Mk(1804,`PoModalPasswordRecovery`),Kg(),Mk(1805,`.`),Kg()()()()(),Jc(1806,`h4`,108)(1807,`code`,5),Mk(1808,`PoPageLogin`),Kg()(),Jc(1809,`div`,2)(1810,`p`),Mk(1811,`Interface com a definição do objeto gerado pelo formulário do componente `),Jc(1812,`code`),Mk(1813,`po-page-login`),Kg(),Mk(1814,`.`),Kg()(),Jc(1815,`h4`,9),Mk(1816,`Propriedades`),Kg(),Jc(1817,`table`,10)(1818,`tr`,11)(1819,`th`,12),Mk(1820,`Nome`),Kg(),Jc(1821,`th`,12),Mk(1822,`Tipo`),Kg(),Jc(1823,`th`,12),Mk(1824,`Descrição`),Kg()(),Jc(1825,`tr`,109)(1826,`td`,14)(1827,`div`,15)(1828,`span`,16),Mk(1829,` login`),_u(1830,`br`),Kg()()(),Jc(1831,`td`,17)(1832,`code`,22),Mk(1833,`string`),Kg()(),Jc(1834,`td`,20)(1835,`p`),Mk(1836,`Login preenchido pelo usuário.`),Kg()()(),Jc(1837,`tr`,110)(1838,`td`,14)(1839,`div`,15)(1840,`span`,16),Mk(1841,` password`),_u(1842,`br`),Kg()()(),Jc(1843,`td`,17)(1844,`code`,22),Mk(1845,`string`),Kg()(),Jc(1846,`td`,20)(1847,`p`),Mk(1848,`Senha preenchida pelo usuário, a mesma será convertida para [hash/md5] antes de ser enviada para a aplicação.`),Kg()()(),Jc(1849,`tr`,111)(1850,`td`,14)(1851,`div`,15)(1852,`span`,16),Mk(1853,` rememberUser`),_u(1854,`br`),Kg()()(),Jc(1855,`td`,17)(1856,`code`,34),Mk(1857,`boolean`),Kg()(),Jc(1858,`td`,20)(1859,`p`),Mk(1860,`Essa propriedade informa se o usuário quer que seus dados sejam lembrados em um acesso futuro.`),Kg()()()(),Jc(1861,`h3`),Mk(1862,`Enums`),Kg(),Jc(1863,`h4`,112)(1864,`code`,5),Mk(1865,`PoPageLoginAuthenticationType`),Kg()(),Jc(1866,`div`,2)(1867,`p`)(1868,`em`),Mk(1869,`Enum`),Kg(),Mk(1870,` para definição do tipo de autenticação.`),Kg()(),Jc(1871,`h4`,9),Mk(1872,`Propriedades`),Kg(),Jc(1873,`table`,10)(1874,`tr`,11)(1875,`th`,12),Mk(1876,`Nome`),Kg(),Jc(1877,`th`,12),Mk(1878,`Descrição`),Kg()(),Jc(1879,`tr`,113)(1880,`td`,14)(1881,`div`,15)(1882,`span`,16),Mk(1883,` Basic`),_u(1884,`br`),Kg()()(),Jc(1885,`td`,20)(1886,`p`),Mk(1887,`Autenticação Basic`),Kg()()(),Jc(1888,`tr`,114)(1889,`td`,14)(1890,`div`,15)(1891,`span`,16),Mk(1892,` Bearer`),_u(1893,`br`),Kg()()(),Jc(1894,`td`,20)(1895,`p`),Mk(1896,`Autenticação Bearer`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return r})();function De(r,N){if(r&1&&(Jc(0,`div`,1),_u(1,`sample-po-page-login-basic-view`)(2,`sample-po-page-login-labs-view`)(3,`sample-po-page-login-human-resources-view`)(4,`sample-po-page-login-automatic-service-view`),Kg()),r&2){let l=tk();Ab(`hidden`,l.activeTab!==`web`)}}var Ae=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Page Login`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(l,p){this.route=l,this.router=p}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`,this.title=`Page Login · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||r)(I(ar),I(An))};static ɵcmp=Jn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(p,i){p&1&&(Jc(0,`po-page-default`,0),LO(1,De,5,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-page-login-doc`),Kg()()),p&2&&(Ab(`p-title`,i.title)(`p-actions`,i.actions),wg(),jO(i.hidePoWebSample?-1:1),wg(),Ab(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,se,me,ce,Ee,Se],encapsulation:2,changeDetection:1})}return r})()}];var he=(()=>{class r{static ɵfac=function(p){return new(p||r)};static ɵmod=ge$1({type:r});static ɵinj=de$1({imports:[GV.forChild(Ae),GV]})}return r})();var vt=(()=>{class r{static ɵfac=function(p){return new(p||r)};static ɵmod=ge$1({type:r});static ɵinj=de$1({imports:[M,he]})}return r})();export{vt as DocPoPageLoginModule};