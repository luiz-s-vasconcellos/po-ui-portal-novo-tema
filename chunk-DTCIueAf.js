import{$n as Ak,A as Hoe,Ai as XL,Ar as Ig,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ja as vt,Li as ZO,Ln as w4,Mr as Jc,Ni as Y0,Pr as Jm,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xr as No,Xt as ere,Yi as eF,Yt as ea,ba as o1,bn as o5,di as RZ,dr as Cu,ea as ge$1,eo as xo,er as An,fa as kZ,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rt as Qae,va as nk,w as Goe,wa as p,xi as VO,ya as nm,yi as U_}from"./chunk-DvS_Nb_w.js";import{n as P,t as M}from"./main-HXZZSDJT.js";var ge=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-textarea-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`textarea`,`p-label`,`PO Textarea`]],template:function(r,i){r&1&&_u(0,`po-textarea`,0)},dependencies:[Goe],encapsulation:2,changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-textarea-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Textarea Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-textarea-basic/sample-po-textarea-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-textarea-basic/sample-po-textarea-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-textarea-basic`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,_e,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ge],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage=``,this.rows=void 0,this.placeholder=``,this.properties=[],this.size=`medium`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-textarea-labs`]],standalone:!1,decls:20,vars:33,consts:[[`f`,`ngForm`],[`name`,`textarea`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-field-error-message`,`p-show-required`,`p-rows`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`rows`,`p-clean`,``,`p-label`,`Rows`,`p-min`,`3`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=ZO();Jc(0,`po-textarea`,1),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.textarea,l)||(i.textarea=l),H_(l)}),vt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3)(4,`po-info`,4),Zg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`po-input`,5),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.label,l)||(i.label=l),H_(l)}),Zg(),Jc(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.help,l)||(i.help=l),H_(l)}),Zg(),Jc(10,`po-input`,7),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.helperText,l)||(i.helperText=l),H_(l)}),Zg(),Jc(11,`po-input`,8),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.placeholder,l)||(i.placeholder=l),H_(l)}),Zg(),Jc(12,`po-input`,9),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),H_(l)}),Zg(),Jc(13,`po-number`,10),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.rows,l)||(i.rows=l),H_(l)}),Zg(),Jc(14,`po-number`,11),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.minlength,l)||(i.minlength=l),H_(l)}),Zg(),Jc(15,`po-number`,12),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.maxlength,l)||(i.maxlength=l),H_(l)}),Zg(),Jc(16,`po-checkbox-group`,13),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.properties,l)||(i.properties=l),H_(l)}),Zg(),Jc(17,`po-radio-group`,14),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.size,l)||(i.size=l),H_(l)}),Zg(),Jc(18,`div`,2)(19,`po-button`,15),vt(`p-click`,function(){return i.restore()}),Zg()()()}r&2&&(Yb(`ngModel`,i.textarea),Rb(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-maxlength`,i.maxlength)(`p-minlength`,i.minlength)(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-rows`,i.rows)(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),Y0(),Ig(3),Rb(`p-value`,i.textarea),Ig(),Rb(`p-value`,i.event),Ig(4),Yb(`ngModel`,i.label),Y0(),Ig(),Yb(`ngModel`,i.help),Y0(),Ig(),Yb(`ngModel`,i.helperText),Y0(),Ig(),Yb(`ngModel`,i.placeholder),Y0(),Ig(),Yb(`ngModel`,i.fieldErrorMessage),Y0(),Ig(),Yb(`ngModel`,i.rows),Y0(),Ig(),Yb(`ngModel`,i.minlength),Y0(),Ig(),Yb(`ngModel`,i.maxlength),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,w4,U4,Hoe,Gte,Goe,Yoe],encapsulation:2,changeDetection:1})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-textarea-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Textarea Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-textarea-labs/sample-po-textarea-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-textarea
  name="textarea"
  [(ngModel)]="textarea"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-rows]="rows"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-textarea>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="textarea"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="rows" [(ngModel)]="rows" p-clean p-label="Rows" p-min="3"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-textarea-labs/sample-po-textarea-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-labs',
  templateUrl: './sample-po-textarea-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaLabsComponent implements OnInit {
  helperText: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  rows: string;
  size: string;
  textarea: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.textarea = undefined;
    this.label = undefined;
    this.help = undefined;
    this.minlength = undefined;
    this.maxlength = undefined;
    this.event = undefined;
    this.fieldErrorMessage = '';
    this.rows = undefined;
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-textarea-labs`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ke,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,he],encapsulation:2,changeDetection:1})}return o})();var Fe=[`formEmail`];function Ve(o,ie){if(o&1&&(Jc(0,`div`)(1,`div`,8),_u(2,`po-info`,13),Zg(),_u(3,`po-divider`),Zg()),o&2){let m=nk();Ig(2),Rb(`p-value`,m.cc)}}var fe=(()=>{class o{formEmail;poModal;cc=``;emailText=``;from=``;subject=``;to=``;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:`Ok`};getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:`Send`,action:this.send.bind(this),disabled:m},{label:`Clean`,action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-textarea-email`]],viewQuery:function(r,i){if(r&1&&Cu(Fe,7)(ea,7),r&2){let s;No(s=xo())&&(i.formEmail=s.first),No(s=xo())&&(i.poModal=s.first)}},standalone:!1,decls:19,vars:12,consts:[[`formEmail`,`ngForm`],[`p-title`,`Send email`,3,`p-actions`],[`name`,`from`,`p-clean`,``,`p-label`,`From`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`emailText`,`p-label`,`E-mail`,`p-required`,``,`p-rows`,`8`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[1,`po-row`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`Subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-rows`,`6`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(r,i){if(r&1){let s=ZO();Jc(0,`po-page-default`,1)(1,`form`,null,0)(3,`po-email`,2),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.from,l)||(i.from=l),H_(l)}),Zg(),Jc(4,`po-email`,3),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.to,l)||(i.to=l),H_(l)}),Zg(),Jc(5,`po-email`,4),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.cc,l)||(i.cc=l),H_(l)}),Zg(),Jc(6,`po-input`,5),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.subject,l)||(i.subject=l),H_(l)}),Zg(),Jc(7,`po-textarea`,6),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.emailText,l)||(i.emailText=l),H_(l)}),Zg()()(),Jc(8,`po-modal`,7)(9,`div`,8),_u(10,`po-info`,9)(11,`po-info`,10),Zg(),_u(12,`po-divider`),VO(13,Ve,4,1,`div`),Jc(14,`div`,8),_u(15,`po-info`,11),Zg(),_u(16,`po-divider`),Jc(17,`div`,8)(18,`po-textarea`,12),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.emailText,l)||(i.emailText=l),H_(l)}),Zg()()()}r&2&&(Rb(`p-actions`,i.getPageAction()),Ig(3),Yb(`ngModel`,i.from),Y0(),Ig(),Yb(`ngModel`,i.to),Y0(),Ig(),Yb(`ngModel`,i.cc),Y0(),Ig(),Yb(`ngModel`,i.subject),Y0(),Ig(),Yb(`ngModel`,i.emailText),Y0(),Ig(),Rb(`p-primary-action`,i.primaryAction),Ig(2),Rb(`p-value`,i.from),Ig(),Rb(`p-value`,i.to),Ig(2),BO(i.cc!==``?13:-1),Ig(2),Rb(`p-value`,i.subject),Ig(3),Yb(`ngModel`,i.emailText),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,Lf,o5,U4,Goe,Yoe,ea,Tze],encapsulation:2,changeDetection:1})}return o})();var We=o=>({"docs-sample-code-tabs":o});var Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-textarea-email-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Textarea - Email`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-textarea-email/sample-po-textarea-email.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form #formEmail="ngForm">
    <po-email class="po-sm-12" name="from" [(ngModel)]="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" [(ngModel)]="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" [(ngModel)]="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" [(ngModel)]="subject" p-clean p-label="Subject" p-required> </po-input>

    <po-textarea class="po-sm-12" name="emailText" [(ngModel)]="emailText" p-label="E-mail" p-required p-rows="8">
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="from"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="to"> </po-info>
  </div>

  <po-divider />

  @if (cc !== '') {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="cc"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="subject"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea class="po-md-12" name="text" [(ngModel)]="emailText" p-label="E-mail" p-readonly p-rows="6">
    </po-textarea>
  </div>
</po-modal>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-textarea-email/sample-po-textarea-email.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email',
  templateUrl: './sample-po-textarea-email.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaEmailComponent {
  @ViewChild('formEmail', { static: true }) formEmail: UntypedFormControl;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  cc: string = '';
  emailText: string = '';
  from: string = '';
  subject: string = '';
  to: string = '';

  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };
  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail['valid'] : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-textarea-email`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,We,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,fe],encapsulation:2,changeDetection:1})}return o})();function je(o,ie){if(o&1&&(Jc(0,`div`)(1,`div`,8),_u(2,`po-info`,13),Zg(),_u(3,`po-divider`),Zg()),o&2){let m=nk();Ig(2),Rb(`p-value`,m.formEmail.get(`cc`).value)}}var ve=(()=>{class o{formBuilder=p(kZ);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:`Ok`};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,Jm.required],to:[null,Jm.required],emailText:[null,Jm.required],subject:[null,Jm.required]})}getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:`Send`,action:this.send.bind(this),disabled:m},{label:`Clean`,action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-textarea-email-reactive-form`]],viewQuery:function(r,i){if(r&1&&Cu(ea,7),r&2){let s;No(s=xo())&&(i.poModal=s.first)}},standalone:!1,decls:18,vars:8,consts:[[`p-title`,`Send email`,3,`p-actions`],[3,`formGroup`],[`name`,`from`,`formControlName`,`from`,`p-clean`,``,`p-label`,`From`,`p-required`,``,1,`po-sm-12`],[`name`,`to`,`formControlName`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`],[`name`,`cc`,`formControlName`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`],[`name`,`subject`,`formControlName`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`],[`name`,`emailText`,`formControlName`,`emailText`,`p-label`,`E-mail`,`p-rows`,`8`,`p-required`,``,1,`po-sm-12`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[1,`po-row`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`Subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-required`,``,`p-rows`,`6`,1,`po-md-12`,3,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`form`,1)(2,`po-email`,2),W0(),Zg(),Jc(3,`po-email`,3),W0(),Zg(),Jc(4,`po-email`,4),W0(),Zg(),Jc(5,`po-input`,5),W0(),Zg(),Jc(6,`po-textarea`,6),W0(),Zg()()(),Jc(7,`po-modal`,7)(8,`div`,8),_u(9,`po-info`,9)(10,`po-info`,10),Zg(),_u(11,`po-divider`),VO(12,je,4,1,`div`),Jc(13,`div`,8),_u(14,`po-info`,11),Zg(),_u(15,`po-divider`),Jc(16,`div`,8)(17,`po-textarea`,12),W0(),Zg()()()),r&2&&(Rb(`p-actions`,i.getPageAction()),Ig(),Rb(`formGroup`,i.formEmail),Ig(),Y0(),Ig(),Y0(),Ig(),Y0(),Ig(),Y0(),Ig(),Y0(),Ig(),Rb(`p-primary-action`,i.primaryAction),Ig(2),Rb(`p-value`,i.formEmail.get(`from`).value),Ig(),Rb(`p-value`,i.formEmail.get(`to`).value),Ig(2),BO(i.formEmail.get(`cc`).value?12:-1),Ig(2),Rb(`p-value`,i.formEmail.get(`subject`).value),Ig(3),Rb(`ngModel`,i.formEmail.get(`emailText`).value),Y0())},dependencies:[NZ,TZ,RZ,JL,XL,o1,Lf,o5,U4,Goe,Yoe,ea,Tze],encapsulation:2,changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o});var Te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-textarea-email-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Textarea - Email Reactive Form`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form [formGroup]="formEmail">
    <po-email class="po-sm-12" name="from" formControlName="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" formControlName="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" formControlName="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" formControlName="subject" p-clean p-label="Subject" p-required>
    </po-input>

    <po-textarea class="po-sm-12" name="emailText" formControlName="emailText" p-label="E-mail" p-rows="8" p-required>
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="formEmail.get('from').value"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="formEmail.get('to').value"> </po-info>
  </div>

  <po-divider />

  @if (formEmail.get('cc').value) {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="formEmail.get('cc').value"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="formEmail.get('subject').value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea
      class="po-md-12"
      name="text"
      [ngModel]="formEmail.get('emailText').value"
      p-label="E-mail"
      p-readonly
      p-required
      p-rows="6"
    >
    </po-textarea>
  </div>
</po-modal>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email-reactive-form',
  templateUrl: './sample-po-textarea-email-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaEmailReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  formEmail: UntypedFormGroup;
  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };

  ngOnInit() {
    this.formEmail = this.formBuilder.group({
      cc: null,
      from: [null, Validators.required],
      to: [null, Validators.required],
      emailText: [null, Validators.required],
      subject: [null, Validators.required]
    });
  }

  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail.valid : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-textarea-email-reactive-form`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ne,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ve],encapsulation:2,changeDetection:1})}return o})();var ye=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-textarea-doc`]],standalone:!1,decls:902,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoTextareaComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),Zg(),Jc(24,`p`),Tk(25,`Importante:`),Zg(),Jc(26,`ul`)(27,`li`),Tk(28,`A propriedade `),Jc(29,`code`),Tk(30,`name`),Zg(),Tk(31,` é obrigatória para que o formulário e o `),Jc(32,`code`),Tk(33,`model`),Zg(),Tk(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),Jc(35,`em`),Tk(36,`Angular`),Zg(),Tk(37,`, onde será necessário informar o atributo `),Jc(38,`code`),Tk(39,`name`),Zg(),Tk(40,` ou o atributo `),Jc(41,`code`),Tk(42,`[ngModelOptions]="{standalone: true}"`),Zg(),Tk(43,`, por exemplo:`),Zg()(),Jc(44,`pre`)(45,`code`),Tk(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),Zg()(),Jc(47,`h4`),Tk(48,`Acessibilidade tratada no componente`),Zg(),Jc(49,`p`),Tk(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:`),Zg(),Jc(51,`ul`)(52,`li`),Tk(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),Jc(54,`a`,6),Tk(55,`WCAG 4.1.2: Name, Role, Value`),Zg()(),Jc(56,`li`),Tk(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),Jc(58,`a`,7),Tk(59,`WCAG 2.4.12: Focus Appearance)`),Zg()(),Jc(60,`li`),Tk(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),Jc(62,`a`,8),Tk(63,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),Zg()()(),Jc(64,`h4`),Tk(65,`Tokens customizáveis`),Zg(),Jc(66,`p`),Tk(67,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(68,`blockquote`)(69,`p`),Tk(70,`Para maiores informações, acesse o guia `),Jc(71,`a`,9),Tk(72,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(73,`.`),Zg()(),Jc(74,`table`)(75,`thead`)(76,`tr`)(77,`th`),Tk(78,`Propriedade`),Zg(),Jc(79,`th`),Tk(80,`Descrição`),Zg(),Jc(81,`th`),Tk(82,`Valor Padrão`),Zg()()(),Jc(83,`tbody`)(84,`tr`)(85,`td`)(86,`strong`),Tk(87,`Default Values`),Zg()(),_u(88,`td`)(89,`td`),Zg(),Jc(90,`tr`)(91,`td`)(92,`code`),Tk(93,`--font-family`),Zg()(),Jc(94,`td`),Tk(95,`Família tipográfica usada`),Zg(),Jc(96,`td`)(97,`code`),Tk(98,`var(--font-family-theme)`),Zg()()(),Jc(99,`tr`)(100,`td`)(101,`code`),Tk(102,`--font-size`),Zg()(),Jc(103,`td`),Tk(104,`Tamanho da fonte`),Zg(),Jc(105,`td`)(106,`code`),Tk(107,`var(--font-size-default)`),Zg()()(),Jc(108,`tr`)(109,`td`)(110,`code`),Tk(111,`--text-color-placeholder`),Zg()(),Jc(112,`td`),Tk(113,`Cor do texto placeholder`),Zg(),Jc(114,`td`)(115,`code`),Tk(116,`var(--color-neutral-light-30)`),Zg()()(),Jc(117,`tr`)(118,`td`)(119,`code`),Tk(120,`--color`),Zg()(),Jc(121,`td`),Tk(122,`Cor pincipal do campo`),Zg(),Jc(123,`td`)(124,`code`),Tk(125,`var(--color-neutral-dark-70)`),Zg()()(),Jc(126,`tr`)(127,`td`)(128,`code`),Tk(129,`--background`),Zg()(),Jc(130,`td`),Tk(131,`Cor de background`),Zg(),Jc(132,`td`)(133,`code`),Tk(134,`var(--color-neutral-light-05)`),Zg()()(),Jc(135,`tr`)(136,`td`)(137,`code`),Tk(138,`--field-container-title-justify`),Zg()(),Jc(139,`td`),Tk(140,`Alinhamento horizontal do título (`),Jc(141,`code`),Tk(142,`justify-content`),Zg(),Tk(143,`)`),Zg(),Jc(144,`td`)(145,`code`),Tk(146,`space-between`),Zg()()(),Jc(147,`tr`)(148,`td`)(149,`code`),Tk(150,`--field-container-title-flex`),Zg()(),Jc(151,`td`),Tk(152,`Flex do título (`),Jc(153,`code`),Tk(154,`flex`),Zg(),Tk(155,`)`),Zg(),Jc(156,`td`)(157,`code`),Tk(158,`1 auto`),Zg()()()()()(),Jc(159,`div`,10)(160,`h4`,11),Tk(161,`Seletor`),Zg(),Jc(162,`pre`,12),Tk(163,`<po-textarea
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    (p-enter)="EventEmitter"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-maxlength="number"
    p-minlength="number"
    name="string"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-rows="number"
    p-show-required="boolean"
    p-size="string" >
</po-textarea>
`),Zg()(),Jc(164,`h4`,13),Tk(165,`Propriedades`),Zg(),Jc(166,`table`,14)(167,`tr`,15)(168,`th`,16),Tk(169,`Nome`),Zg(),Jc(170,`th`,16),Tk(171,`Tipo`),Zg(),Jc(172,`th`,16),Tk(173,`Padrão`),Zg(),Jc(174,`th`,16),Tk(175,`Descrição`),Zg()(),Jc(176,`tr`,17)(177,`td`,18)(178,`div`,19)(179,`span`,20),Tk(180,` (p-additional-help)`),_u(181,`br`),Zg()(),Jc(182,`div`,21),Tk(183,`Deprecated`),Zg()(),Jc(184,`td`,22)(185,`code`,23),Tk(186,`EventEmitter`),Zg()(),Jc(187,`td`,24),Tk(188,`-`),Zg(),Jc(189,`td`,25)(190,`em`)(191,`strong`),Tk(192,`(opcional)`),Zg()(),Jc(193,`p`),Tk(194,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(195,`blockquote`)(196,`p`),Tk(197,`Essa propriedade está `),Jc(198,`strong`),Tk(199,`depreciada`),Zg(),Tk(200,` e será removida na versão `),Jc(201,`code`),Tk(202,`23.x.x`),Zg(),Tk(203,`. Recomendamos utilizar a propriedade `),Jc(204,`code`),Tk(205,`p-helper`),Zg(),Tk(206,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(207,`tr`,17)(208,`td`,18)(209,`div`,26)(210,`span`,27),Tk(211,` p-additional-help-tooltip`),_u(212,`br`),Zg()(),Jc(213,`div`,21),Tk(214,`Deprecated`),Zg()(),Jc(215,`td`,22)(216,`code`,28),Tk(217,`string`),Zg()(),Jc(218,`td`,24),Tk(219,`-`),Zg(),Jc(220,`td`,25)(221,`em`)(222,`strong`),Tk(223,`(opcional)`),Zg()(),Jc(224,`p`),Tk(225,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(226,`code`),Tk(227,`po-helper`),Zg(),Tk(228,`.
`),Jc(229,`strong`),Tk(230,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(231,`blockquote`)(232,`p`),Tk(233,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Zg()(),Jc(234,`blockquote`)(235,`p`),Tk(236,`Essa propriedade está `),Jc(237,`strong`),Tk(238,`depreciada`),Zg(),Tk(239,` e será removida na versão `),Jc(240,`code`),Tk(241,`23.x.x`),Zg(),Tk(242,`. Recomendamos utilizar a propriedade `),Jc(243,`code`),Tk(244,`p-helper`),Zg(),Tk(245,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(246,`tr`,17)(247,`td`,18)(248,`div`,26)(249,`span`,27),Tk(250,` p-append-in-body`),_u(251,`br`),Zg()()(),Jc(252,`td`,22)(253,`code`,29),Tk(254,`boolean`),Zg()(),Jc(255,`td`,24)(256,`p`)(257,`code`),Tk(258,`false`),Zg()()(),Jc(259,`td`,25)(260,`em`)(261,`strong`),Tk(262,`(opcional)`),Zg()(),Jc(263,`p`),Tk(264,`Define que o popover (`),Jc(265,`code`),Tk(266,`p-helper`),Zg(),Tk(267,` e/ou `),Jc(268,`code`),Tk(269,`p-error-limit`),Zg(),Tk(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Zg(),Jc(271,`blockquote`)(272,`p`),Tk(273,`Quando utilizado com `),Jc(274,`code`),Tk(275,`p-helper`),Zg(),Tk(276,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(277,`tr`,17)(278,`td`,18)(279,`div`,26)(280,`span`,27),Tk(281,` p-auto-focus`),_u(282,`br`),Zg()()(),Jc(283,`td`,22)(284,`code`,29),Tk(285,`boolean`),Zg()(),Jc(286,`td`,24)(287,`p`)(288,`code`),Tk(289,`false`),Zg()()(),Jc(290,`td`,25)(291,`em`)(292,`strong`),Tk(293,`(opcional)`),Zg()(),Jc(294,`p`),Tk(295,`Aplica foco no elemento ao ser iniciado.`),Zg(),Jc(296,`blockquote`)(297,`p`),Tk(298,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Zg()()()(),Jc(299,`tr`,17)(300,`td`,18)(301,`div`,19)(302,`span`,20),Tk(303,` (p-blur)`),_u(304,`br`),Zg()()(),Jc(305,`td`,22)(306,`code`,23),Tk(307,`EventEmitter`),Zg()(),Jc(308,`td`,24),Tk(309,`-`),Zg(),Jc(310,`td`,25)(311,`em`)(312,`strong`),Tk(313,`(opcional)`),Zg()(),Jc(314,`p`),Tk(315,`Evento disparado ao sair do campo.`),Zg()()(),Jc(316,`tr`,17)(317,`td`,18)(318,`div`,19)(319,`span`,20),Tk(320,` (p-change)`),_u(321,`br`),Zg()()(),Jc(322,`td`,22)(323,`code`,23),Tk(324,`EventEmitter`),Zg()(),Jc(325,`td`,24),Tk(326,`-`),Zg(),Jc(327,`td`,25)(328,`em`)(329,`strong`),Tk(330,`(opcional)`),Zg()(),Jc(331,`p`),Tk(332,`Evento disparado ao alterar valor e deixar o campo.`),Zg()()(),Jc(333,`tr`,17)(334,`td`,18)(335,`div`,19)(336,`span`,20),Tk(337,` (p-change-model)`),_u(338,`br`),Zg()()(),Jc(339,`td`,22)(340,`code`,23),Tk(341,`EventEmitter`),Zg()(),Jc(342,`td`,24),Tk(343,`-`),Zg(),Jc(344,`td`,25)(345,`em`)(346,`strong`),Tk(347,`(opcional)`),Zg()(),Jc(348,`p`),Tk(349,`Evento disparado ao alterar valor do model.`),Zg()()(),Jc(350,`tr`,17)(351,`td`,18)(352,`div`,26)(353,`span`,27),Tk(354,` p-compact-label`),_u(355,`br`),Zg()()(),Jc(356,`td`,22)(357,`code`,29),Tk(358,`boolean`),Zg()(),Jc(359,`td`,24)(360,`p`)(361,`code`),Tk(362,`false`),Zg()()(),Jc(363,`td`,25)(364,`em`)(365,`strong`),Tk(366,`(opcional)`),Zg()(),Jc(367,`p`),Tk(368,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(369,`p`),Tk(370,`Quando habilitado (`),Jc(371,`code`),Tk(372,`true`),Zg(),Tk(373,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(374,`ul`)(375,`li`)(376,`code`),Tk(377,`po-label`),Zg()(),Jc(378,`li`)(379,`code`),Tk(380,`p-requirement (showRequired)`),Zg()(),Jc(381,`li`)(382,`code`),Tk(383,`po-helper`),Zg()()(),Jc(384,`p`),Tk(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(386,`p`),Tk(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(388,`ul`)(389,`li`)(390,`code`),Tk(391,`--field-container-title-justify`),Zg()(),Jc(392,`li`)(393,`code`),Tk(394,`--field-container-title-flex`),Zg()()(),Jc(395,`p`),Tk(396,`Exemplo:`),Zg(),Jc(397,`pre`)(398,`code`),Tk(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(400,`p`),Tk(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(402,`tr`,17)(403,`td`,18)(404,`div`,26)(405,`span`,27),Tk(406,` p-disabled`),_u(407,`br`),Zg()()(),Jc(408,`td`,22)(409,`code`,29),Tk(410,`boolean`),Zg()(),Jc(411,`td`,24)(412,`p`)(413,`code`),Tk(414,`false`),Zg()()(),Jc(415,`td`,25)(416,`em`)(417,`strong`),Tk(418,`(opcional)`),Zg()(),Jc(419,`p`),Tk(420,`Indica que o campo será desabilitado.`),Zg()()(),Jc(421,`tr`,17)(422,`td`,18)(423,`div`,19)(424,`span`,20),Tk(425,` (p-enter)`),_u(426,`br`),Zg()()(),Jc(427,`td`,22)(428,`code`,23),Tk(429,`EventEmitter`),Zg()(),Jc(430,`td`,24),Tk(431,`-`),Zg(),Jc(432,`td`,25)(433,`em`)(434,`strong`),Tk(435,`(opcional)`),Zg()(),Jc(436,`p`),Tk(437,`Evento disparado ao entrar do campo.`),Zg()()(),Jc(438,`tr`,17)(439,`td`,18)(440,`div`,26)(441,`span`,27),Tk(442,` p-error-limit`),_u(443,`br`),Zg()()(),Jc(444,`td`,22)(445,`code`,29),Tk(446,`boolean`),Zg()(),Jc(447,`td`,24)(448,`p`)(449,`code`),Tk(450,`false`),Zg()()(),Jc(451,`td`,25)(452,`em`)(453,`strong`),Tk(454,`(opcional)`),Zg()(),Jc(455,`p`),Tk(456,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg(),Jc(457,`blockquote`)(458,`p`),Tk(459,`Caso essa propriedade seja definida como `),Jc(460,`code`),Tk(461,`true`),Zg(),Tk(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Zg()()()(),Jc(463,`tr`,17)(464,`td`,18)(465,`div`,26)(466,`span`,27),Tk(467,` p-field-error-message`),_u(468,`br`),Zg()()(),Jc(469,`td`,22)(470,`code`,28),Tk(471,`string`),Zg()(),Jc(472,`td`,24),Tk(473,`-`),Zg(),Jc(474,`td`,25)(475,`em`)(476,`strong`),Tk(477,`(opcional)`),Zg()(),Jc(478,`p`),Tk(479,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Zg(),Jc(480,`blockquote`)(481,`p`),Tk(482,`Necessário que a propriedade `),Jc(483,`code`),Tk(484,`p-required`),Zg(),Tk(485,` esteja habilitada.`),Zg()()()(),Jc(486,`tr`,17)(487,`td`,18)(488,`div`,26)(489,`span`,27),Tk(490,` p-help`),_u(491,`br`),Zg()()(),Jc(492,`td`,22)(493,`code`,28),Tk(494,`string`),Zg()(),Jc(495,`td`,24),Tk(496,`-`),Zg(),Jc(497,`td`,25)(498,`em`)(499,`strong`),Tk(500,`(opcional)`),Zg()(),Jc(501,`p`),Tk(502,`Texto de apoio do campo.`),Zg()()(),Jc(503,`tr`,17)(504,`td`,18)(505,`div`,19)(506,`span`,20),Tk(507,` (p-keydown)`),_u(508,`br`),Zg()()(),Jc(509,`td`,22)(510,`code`,23),Tk(511,`EventEmitter`),Zg()(),Jc(512,`td`,24),Tk(513,`-`),Zg(),Jc(514,`td`,25)(515,`em`)(516,`strong`),Tk(517,`(opcional)`),Zg()(),Jc(518,`p`),Tk(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(520,`code`),Tk(521,`KeyboardEvent`),Zg(),Tk(522,` com informações sobre a tecla.`),Zg()()(),Jc(523,`tr`,17)(524,`td`,18)(525,`div`,26)(526,`span`,27),Tk(527,` p-label`),_u(528,`br`),Zg()()(),Jc(529,`td`,22)(530,`code`,28),Tk(531,`string`),Zg()(),Jc(532,`td`,24),Tk(533,`-`),Zg(),Jc(534,`td`,25)(535,`em`)(536,`strong`),Tk(537,`(opcional)`),Zg()(),Jc(538,`p`),Tk(539,`Label do campo.`),Zg()()(),Jc(540,`tr`,17)(541,`td`,18)(542,`div`,26)(543,`span`,27),Tk(544,` p-label-text-wrap`),_u(545,`br`),Zg()()(),Jc(546,`td`,22)(547,`code`,29),Tk(548,`boolean`),Zg()(),Jc(549,`td`,24)(550,`p`)(551,`code`),Tk(552,`false`),Zg()()(),Jc(553,`td`,25)(554,`em`)(555,`strong`),Tk(556,`(opcional)`),Zg()(),Jc(557,`p`),Tk(558,`Habilita a quebra automática do texto da propriedade `),Jc(559,`code`),Tk(560,`p-label`),Zg(),Tk(561,`. Quando `),Jc(562,`code`),Tk(563,`p-label-text-wrap`),Zg(),Tk(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg()()(),Jc(565,`tr`,17)(566,`td`,18)(567,`div`,26)(568,`span`,27),Tk(569,` p-loading`),_u(570,`br`),Zg()()(),Jc(571,`td`,22)(572,`code`,29),Tk(573,`boolean`),Zg()(),Jc(574,`td`,24)(575,`p`)(576,`code`),Tk(577,`false`),Zg()()(),Jc(578,`td`,25)(579,`em`)(580,`strong`),Tk(581,`(opcional)`),Zg()(),Jc(582,`p`),Tk(583,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Zg()()(),Jc(584,`tr`,17)(585,`td`,18)(586,`div`,26)(587,`span`,27),Tk(588,` p-maxlength`),_u(589,`br`),Zg()()(),Jc(590,`td`,22)(591,`code`,30),Tk(592,`number`),Zg()(),Jc(593,`td`,24),Tk(594,`-`),Zg(),Jc(595,`td`,25)(596,`em`)(597,`strong`),Tk(598,`(opcional)`),Zg()(),Jc(599,`p`),Tk(600,`Indica a quantidade máxima de caracteres que o campo aceita.`),Zg()()(),Jc(601,`tr`,17)(602,`td`,18)(603,`div`,26)(604,`span`,27),Tk(605,` p-minlength`),_u(606,`br`),Zg()()(),Jc(607,`td`,22)(608,`code`,30),Tk(609,`number`),Zg()(),Jc(610,`td`,24),Tk(611,`-`),Zg(),Jc(612,`td`,25)(613,`em`)(614,`strong`),Tk(615,`(opcional)`),Zg()(),Jc(616,`p`),Tk(617,`Indica a quantidade mínima de caracteres que o campo aceita.`),Zg()()(),Jc(618,`tr`,17)(619,`td`,18)(620,`div`,26)(621,`span`,27),Tk(622,` name`),_u(623,`br`),Zg()()(),Jc(624,`td`,22)(625,`code`,28),Tk(626,`string`),Zg()(),Jc(627,`td`,24),Tk(628,`-`),Zg(),Jc(629,`td`,25)(630,`p`),Tk(631,`Nome e Id do componente.`),Zg()()(),Jc(632,`tr`,17)(633,`td`,18)(634,`div`,26)(635,`span`,27),Tk(636,` p-optional`),_u(637,`br`),Zg()()(),Jc(638,`td`,22)(639,`code`,29),Tk(640,`boolean`),Zg()(),Jc(641,`td`,24)(642,`p`)(643,`code`),Tk(644,`false`),Zg()()(),Jc(645,`td`,25)(646,`em`)(647,`strong`),Tk(648,`(opcional)`),Zg()(),Jc(649,`p`),Tk(650,`Define se a indicação de campo opcional será exibida.`),Zg(),Jc(651,`blockquote`)(652,`p`),Tk(653,`Não será exibida a indicação se:`),Zg()(),Jc(654,`ul`)(655,`li`),Tk(656,`O campo conter `),Jc(657,`code`),Tk(658,`p-required`),Zg(),Tk(659,`;`),Zg(),Jc(660,`li`),Tk(661,`Não possuir `),Jc(662,`code`),Tk(663,`p-help`),Zg(),Tk(664,` e/ou `),Jc(665,`code`),Tk(666,`p-label`),Zg(),Tk(667,`.`),Zg()()()(),Jc(668,`tr`,17)(669,`td`,18)(670,`div`,26)(671,`span`,27),Tk(672,` p-placeholder`),_u(673,`br`),Zg()()(),Jc(674,`td`,22)(675,`code`,28),Tk(676,`string`),Zg()(),Jc(677,`td`,24),Tk(678,`-`),Zg(),Jc(679,`td`,25)(680,`p`),Tk(681,`Placeholder, mensagem que aparecerá enquanto o campo não estiver preenchido.`),Zg()()(),Jc(682,`tr`,17)(683,`td`,18)(684,`div`,26)(685,`span`,27),Tk(686,` p-helper`),_u(687,`br`),Zg()()(),Jc(688,`td`,22)(689,`code`,31),Tk(690,`PoHelperOptions `),Zg(),Jc(691,`code`,28),Tk(692,` string`),Zg()(),Jc(693,`td`,24),Tk(694,`-`),Zg(),Jc(695,`td`,25)(696,`em`)(697,`strong`),Tk(698,`(opcional)`),Zg()(),Jc(699,`p`),Tk(700,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(701,`code`),Tk(702,`p-label`),Zg(),Tk(703,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(704,`code`),Tk(705,`p-label`),Zg(),Tk(706,`.`),Zg(),Jc(707,`blockquote`)(708,`p`),Tk(709,`Para mais informações acesse: `),Jc(710,`a`,32),Tk(711,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(712,`.`),Zg()(),Jc(713,`blockquote`)(714,`p`),Tk(715,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(716,`code`),Tk(717,`p-additional-help-tooltip`),Zg(),Tk(718,` e `),Jc(719,`code`),Tk(720,`p-additional-help`),Zg(),Tk(721,`) será ignorado.`),Zg()()()(),Jc(722,`tr`,17)(723,`td`,18)(724,`div`,26)(725,`span`,27),Tk(726,` p-readonly`),_u(727,`br`),Zg()()(),Jc(728,`td`,22)(729,`code`,29),Tk(730,`boolean`),Zg()(),Jc(731,`td`,24)(732,`p`)(733,`code`),Tk(734,`false`),Zg()()(),Jc(735,`td`,25)(736,`em`)(737,`strong`),Tk(738,`(opcional)`),Zg()(),Jc(739,`p`),Tk(740,`Indica que o campo será somente leitura.`),Zg()()(),Jc(741,`tr`,17)(742,`td`,18)(743,`div`,26)(744,`span`,27),Tk(745,` p-required`),_u(746,`br`),Zg()()(),Jc(747,`td`,22)(748,`code`,29),Tk(749,`boolean`),Zg()(),Jc(750,`td`,24)(751,`p`)(752,`code`),Tk(753,`false`),Zg()()(),Jc(754,`td`,25)(755,`em`)(756,`strong`),Tk(757,`(opcional)`),Zg()(),Jc(758,`p`),Tk(759,`Define que o campo será obrigatório.`),Zg(),Jc(760,`blockquote`)(761,`p`),Tk(762,`Esta propriedade é desconsiderada quando o input está desabilitado `),Jc(763,`code`),Tk(764,`(p-disabled)`),Zg(),Tk(765,`.`),Zg()()()(),Jc(766,`tr`,17)(767,`td`,18)(768,`div`,26)(769,`span`,27),Tk(770,` p-rows`),_u(771,`br`),Zg()()(),Jc(772,`td`,22)(773,`code`,30),Tk(774,`number`),Zg()(),Jc(775,`td`,24)(776,`p`)(777,`code`),Tk(778,`3`),Zg()()(),Jc(779,`td`,25)(780,`em`)(781,`strong`),Tk(782,`(opcional)`),Zg()(),Jc(783,`p`),Tk(784,`Indica a quantidade de linhas que serão exibidas.`),Zg()()(),Jc(785,`tr`,17)(786,`td`,18)(787,`div`,26)(788,`span`,27),Tk(789,` p-show-required`),_u(790,`br`),Zg()()(),Jc(791,`td`,22)(792,`code`,29),Tk(793,`boolean`),Zg()(),Jc(794,`td`,24),Tk(795,`-`),Zg(),Jc(796,`td`,25)(797,`p`),Tk(798,`Define se a indicação de campo obrigatório será exibida.`),Zg(),Jc(799,`blockquote`)(800,`p`),Tk(801,`Não será exibida a indicação se:`),Zg()(),Jc(802,`ul`)(803,`li`),Tk(804,`Não possuir `),Jc(805,`code`),Tk(806,`p-help`),Zg(),Tk(807,` e/ou `),Jc(808,`code`),Tk(809,`p-label`),Zg(),Tk(810,`.`),Zg()()()(),Jc(811,`tr`,17)(812,`td`,18)(813,`div`,26)(814,`span`,27),Tk(815,` p-size`),_u(816,`br`),Zg()()(),Jc(817,`td`,22)(818,`code`,28),Tk(819,`string`),Zg()(),Jc(820,`td`,24)(821,`p`)(822,`code`),Tk(823,`medium`),Zg()()(),Jc(824,`td`,25)(825,`em`)(826,`strong`),Tk(827,`(opcional)`),Zg()(),Jc(828,`p`),Tk(829,`Define o tamanho do componente:`),Zg(),Jc(830,`ul`)(831,`li`)(832,`code`),Tk(833,`small`),Zg(),Tk(834,` (disponível apenas para acessibilidade AA)`),Zg(),Jc(835,`li`)(836,`code`),Tk(837,`medium`),Zg()()(),Jc(838,`blockquote`)(839,`p`),Tk(840,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(841,`code`),Tk(842,`medium`),Zg(),Tk(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(844,`a`,33),Tk(845,`po-theme`),Zg(),Tk(846,`.`),Zg()()()()(),Jc(847,`h3`,13),Tk(848,`Métodos`),Zg(),Jc(849,`table`,34)(850,`tr`,17)(851,`th`,35)(852,`div`,26)(853,`h4`)(854,`span`,27),Tk(855,` focus `),Zg()()()()(),Jc(856,`tr`,25)(857,`td`,25)(858,`p`),Tk(859,`Função que atribui foco ao componente.`),Zg(),Jc(860,`p`),Tk(861,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(862,`pre`)(863,`code`),Tk(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),Zg()()()()(),_u(865,`br`),Jc(866,`table`,34)(867,`tr`,17)(868,`th`,35)(869,`div`,26)(870,`h4`)(871,`span`,27),Tk(872,` showAdditionalHelp `),Zg()()()()(),Jc(873,`tr`,25)(874,`td`,25)(875,`p`),Tk(876,`Método que exibe `),Jc(877,`code`),Tk(878,`p-helper`),Zg(),Tk(879,` ou executa a ação definida em `),Jc(880,`code`),Tk(881,`p-helper{eventOnClick}`),Zg(),Tk(882,` ou em `),Jc(883,`code`),Tk(884,`p-additionalHelp`),Zg(),Tk(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(886,`code`),Tk(887,`p-keydown`),Zg(),Tk(888,`.`),Zg(),Jc(889,`blockquote`)(890,`p`),Tk(891,`Exibe ou oculta o conteúdo do componente `),Jc(892,`code`),Tk(893,`po-helper`),Zg(),Tk(894,` quando o componente estiver com foco.`),Zg()(),Jc(895,`pre`)(896,`code`),Tk(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),Zg()(),Jc(898,`pre`)(899,`code`),Tk(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(901,`br`),Zg())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Re(o,ie){if(o&1){let m=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(m);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-textarea-basic-view`)(2,`sample-po-textarea-labs-view`)(3,`sample-po-textarea-email-view`)(4,`sample-po-textarea-email-reactive-form-view`),Zg()}if(o&2){let m=nk();Rb(`p-active`,m.activeTab===`web`)}}var He=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Textarea`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Re,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-textarea-doc`),Zg()()()),r&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,xe,Se,Ce,Te,ye],encapsulation:2,changeDetection:1})}return o})()}];var Me=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[WV.forChild(He),WV]})}return o})();var wt=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[M,Me]})}return o})();export{wt as DocPoTextareaModule};