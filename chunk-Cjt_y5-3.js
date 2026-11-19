import{m as P,p as M}from"./main-MOTCU2CE.js";import{Ar as I,At as Zte,F as Joe,G as Nf,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Qr as OZ,Ti as U_,Ui as YO,Va as p,Vi as Xm,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,an as ia,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,ha as i1,io as vu,j as I4,ji as Vk,k as Goe,kt as Zoe,li as Qc,na as de,oo as wg,qi as ZL,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge$1,vi as Sk,wr as GV,xi as Tk,xn as p5,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var ge=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-textarea-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`textarea`,`p-label`,`PO Textarea`]],template:function(r,o){r&1&&vu(0,`po-textarea`,0)},dependencies:[Zoe],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i});var xe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-textarea-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-textarea-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-textarea-basic/sample-po-textarea-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-textarea-basic/sample-po-textarea-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,o){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Textarea Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-textarea-basic/sample-po-textarea-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-textarea-basic/sample-po-textarea-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-textarea-basic`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,_e,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ge],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage=``,this.rows=void 0,this.placeholder=``,this.properties=[],this.size=`medium`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-textarea-labs`]],standalone:!1,decls:20,vars:33,consts:[[`f`,`ngForm`],[`name`,`textarea`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-field-error-message`,`p-show-required`,`p-rows`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`rows`,`p-clean`,``,`p-label`,`Rows`,`p-min`,`3`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,o){if(r&1){let s=YO();Qc(0,`po-textarea`,1),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.textarea,l)||(o.textarea=l),U_(l)}),vt(`p-blur`,function(){return o.changeEvent(`p-blur`)})(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-enter`,function(){return o.changeEvent(`p-enter`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,2),vu(3,`po-info`,3)(4,`po-info`,4),Kg(),vu(5,`po-divider`),Qc(6,`form`,null,0)(8,`po-input`,5),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.label,l)||(o.label=l),U_(l)}),Kg(),Qc(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.help,l)||(o.help=l),U_(l)}),Kg(),Qc(10,`po-input`,7),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.helperText,l)||(o.helperText=l),U_(l)}),Kg(),Qc(11,`po-input`,8),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.placeholder,l)||(o.placeholder=l),U_(l)}),Kg(),Qc(12,`po-input`,9),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.fieldErrorMessage,l)||(o.fieldErrorMessage=l),U_(l)}),Kg(),Qc(13,`po-number`,10),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.rows,l)||(o.rows=l),U_(l)}),Kg(),Qc(14,`po-number`,11),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.minlength,l)||(o.minlength=l),U_(l)}),Kg(),Qc(15,`po-number`,12),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.maxlength,l)||(o.maxlength=l),U_(l)}),Kg(),Qc(16,`po-checkbox-group`,13),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.properties,l)||(o.properties=l),U_(l)}),Kg(),Qc(17,`po-radio-group`,14),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.size,l)||(o.size=l),U_(l)}),Kg(),Qc(18,`div`,2)(19,`po-button`,15),vt(`p-click`,function(){return o.restore()}),Kg()()()}r&2&&(Yb(`ngModel`,o.textarea),Rb(`p-helper`,o.helperText)(`p-disabled`,o.properties.includes(`disabled`))(`p-help`,o.help)(`p-label`,o.label)(`p-loading`,o.properties.includes(`loading`))(`p-maxlength`,o.maxlength)(`p-minlength`,o.minlength)(`p-optional`,o.properties.includes(`optional`))(`p-placeholder`,o.placeholder)(`p-readonly`,o.properties.includes(`readonly`))(`p-required`,o.properties.includes(`required`))(`p-field-error-message`,o.fieldErrorMessage)(`p-show-required`,o.properties.includes(`showRequired`))(`p-rows`,o.rows)(`p-size`,o.size)(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),W0(),wg(3),Rb(`p-value`,o.textarea),wg(),Rb(`p-value`,o.event),wg(4),Yb(`ngModel`,o.label),W0(),wg(),Yb(`ngModel`,o.help),W0(),wg(),Yb(`ngModel`,o.helperText),W0(),wg(),Yb(`ngModel`,o.placeholder),W0(),wg(),Yb(`ngModel`,o.fieldErrorMessage),W0(),wg(),Yb(`ngModel`,o.rows),W0(),wg(),Yb(`ngModel`,o.minlength),W0(),wg(),Yb(`ngModel`,o.maxlength),W0(),wg(),Yb(`ngModel`,o.properties),Rb(`p-options`,o.propertiesOptions),W0(),wg(),Yb(`ngModel`,o.size),Rb(`p-options`,o.sizeOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Goe,Zte,Zoe,Joe],encapsulation:2,changeDetection:1})}return i})();var ke=i=>({"docs-sample-code-tabs":i});var fe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-textarea-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-textarea-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-textarea-labs/sample-po-textarea-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-textarea-labs/sample-po-textarea-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,o){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Textarea Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-textarea-labs/sample-po-textarea-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-textarea
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-textarea-labs/sample-po-textarea-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-textarea-labs`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ke,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,he],encapsulation:2,changeDetection:1})}return i})();var Fe=[`formEmail`];function Ve(i,ae){if(i&1&&(Qc(0,`div`)(1,`div`,8),vu(2,`po-info`,13),Kg(),vu(3,`po-divider`),Kg()),i&2){let m=ek();wg(2),Rb(`p-value`,m.cc)}}var Se=(()=>{class i{formEmail;poModal;cc=``;emailText=``;from=``;subject=``;to=``;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:`Ok`};getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:`Send`,action:this.send.bind(this),disabled:m},{label:`Clean`,action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-textarea-email`]],viewQuery:function(r,o){if(r&1&&Du(Fe,7)(ia,7),r&2){let s;No(s=xo())&&(o.formEmail=s.first),No(s=xo())&&(o.poModal=s.first)}},standalone:!1,decls:19,vars:12,consts:[[`formEmail`,`ngForm`],[`p-title`,`Send email`,3,`p-actions`],[`name`,`from`,`p-clean`,``,`p-label`,`From`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`emailText`,`p-label`,`E-mail`,`p-required`,``,`p-rows`,`8`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[1,`po-row`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`Subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-rows`,`6`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(r,o){if(r&1){let s=YO();Qc(0,`po-page-default`,1)(1,`form`,null,0)(3,`po-email`,2),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.from,l)||(o.from=l),U_(l)}),Kg(),Qc(4,`po-email`,3),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.to,l)||(o.to=l),U_(l)}),Kg(),Qc(5,`po-email`,4),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.cc,l)||(o.cc=l),U_(l)}),Kg(),Qc(6,`po-input`,5),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.subject,l)||(o.subject=l),U_(l)}),Kg(),Qc(7,`po-textarea`,6),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.emailText,l)||(o.emailText=l),U_(l)}),Kg()()(),Qc(8,`po-modal`,7)(9,`div`,8),vu(10,`po-info`,9)(11,`po-info`,10),Kg(),vu(12,`po-divider`),FO(13,Ve,4,1,`div`),Qc(14,`div`,8),vu(15,`po-info`,11),Kg(),vu(16,`po-divider`),Qc(17,`div`,8)(18,`po-textarea`,12),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(o.emailText,l)||(o.emailText=l),U_(l)}),Kg()()()}r&2&&(Rb(`p-actions`,o.getPageAction()),wg(3),Yb(`ngModel`,o.from),W0(),wg(),Yb(`ngModel`,o.to),W0(),wg(),Yb(`ngModel`,o.cc),W0(),wg(),Yb(`ngModel`,o.subject),W0(),wg(),Yb(`ngModel`,o.emailText),W0(),wg(),Rb(`p-primary-action`,o.primaryAction),wg(2),Rb(`p-value`,o.from),wg(),Rb(`p-value`,o.to),wg(2),VO(o.cc!==``?13:-1),wg(2),Rb(`p-value`,o.subject),wg(3),Yb(`ngModel`,o.emailText),W0())},dependencies:[AZ,MZ,TZ,QL,WL,Nf,p5,j4,Zoe,Joe,ia,Mze],encapsulation:2,changeDetection:1})}return i})();var We=i=>({"docs-sample-code-tabs":i});var ve=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-textarea-email-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-textarea-email`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-textarea-email/sample-po-textarea-email.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-textarea-email/sample-po-textarea-email.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,o){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Textarea - Email`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-textarea-email/sample-po-textarea-email.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-textarea-email/sample-po-textarea-email.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-textarea-email`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,We,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Se],encapsulation:2,changeDetection:1})}return i})();function je(i,ae){if(i&1&&(Qc(0,`div`)(1,`div`,8),vu(2,`po-info`,13),Kg(),vu(3,`po-divider`),Kg()),i&2){let m=ek();wg(2),Rb(`p-value`,m.formEmail.get(`cc`).value)}}var Ce=(()=>{class i{formBuilder=p(OZ);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:`Ok`};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,Xm.required],to:[null,Xm.required],emailText:[null,Xm.required],subject:[null,Xm.required]})}getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:`Send`,action:this.send.bind(this),disabled:m},{label:`Clean`,action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-textarea-email-reactive-form`]],viewQuery:function(r,o){if(r&1&&Du(ia,7),r&2){let s;No(s=xo())&&(o.poModal=s.first)}},standalone:!1,decls:18,vars:8,consts:[[`p-title`,`Send email`,3,`p-actions`],[3,`formGroup`],[`name`,`from`,`formControlName`,`from`,`p-clean`,``,`p-label`,`From`,`p-required`,``,1,`po-sm-12`],[`name`,`to`,`formControlName`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`],[`name`,`cc`,`formControlName`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`],[`name`,`subject`,`formControlName`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`],[`name`,`emailText`,`formControlName`,`emailText`,`p-label`,`E-mail`,`p-rows`,`8`,`p-required`,``,1,`po-sm-12`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[1,`po-row`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`Subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-required`,``,`p-rows`,`6`,1,`po-md-12`,3,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(r,o){r&1&&(Qc(0,`po-page-default`,0)(1,`form`,1)(2,`po-email`,2),z0(),Kg(),Qc(3,`po-email`,3),z0(),Kg(),Qc(4,`po-email`,4),z0(),Kg(),Qc(5,`po-input`,5),z0(),Kg(),Qc(6,`po-textarea`,6),z0(),Kg()()(),Qc(7,`po-modal`,7)(8,`div`,8),vu(9,`po-info`,9)(10,`po-info`,10),Kg(),vu(11,`po-divider`),FO(12,je,4,1,`div`),Qc(13,`div`,8),vu(14,`po-info`,11),Kg(),vu(15,`po-divider`),Qc(16,`div`,8)(17,`po-textarea`,12),z0(),Kg()()()),r&2&&(Rb(`p-actions`,o.getPageAction()),wg(),Rb(`formGroup`,o.formEmail),wg(),W0(),wg(),W0(),wg(),W0(),wg(),W0(),wg(),W0(),wg(),Rb(`p-primary-action`,o.primaryAction),wg(2),Rb(`p-value`,o.formEmail.get(`from`).value),wg(),Rb(`p-value`,o.formEmail.get(`to`).value),wg(2),VO(o.formEmail.get(`cc`).value?12:-1),wg(2),Rb(`p-value`,o.formEmail.get(`subject`).value),wg(3),Rb(`ngModel`,o.formEmail.get(`emailText`).value),W0())},dependencies:[AZ,MZ,TZ,QL,ZL,i1,Nf,p5,j4,Zoe,Joe,ia,Mze],encapsulation:2,changeDetection:1})}return i})();var ze=i=>({"docs-sample-code-tabs":i});var we=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-textarea-email-reactive-form-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-textarea-email-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,o){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Textarea - Email Reactive Form`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-textarea-email-reactive-form`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ze,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return i})();var Te=(()=>{class i{router=p(An);openDoc(m){this.router.navigate([`/documentation`,m],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-textarea-doc`]],standalone:!1,decls:902,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-textarea-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`event-p-enter`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-maxlength`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-minlength`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-readonly`,1,`docs-api-properties-row`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-rows`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`]],template:function(r,o){r&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoTextareaComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),Kg(),Qc(24,`p`),Sk(25,`Importante:`),Kg(),Qc(26,`ul`)(27,`li`),Sk(28,`A propriedade `),Qc(29,`code`),Sk(30,`name`),Kg(),Sk(31,` é obrigatória para que o formulário e o `),Qc(32,`code`),Sk(33,`model`),Kg(),Sk(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),Qc(35,`em`),Sk(36,`Angular`),Kg(),Sk(37,`, onde será necessário informar o atributo `),Qc(38,`code`),Sk(39,`name`),Kg(),Sk(40,` ou o atributo `),Qc(41,`code`),Sk(42,`[ngModelOptions]="{standalone: true}"`),Kg(),Sk(43,`, por exemplo:`),Kg()(),Qc(44,`pre`)(45,`code`),Sk(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),Kg()(),Qc(47,`h4`),Sk(48,`Acessibilidade tratada no componente`),Kg(),Qc(49,`p`),Sk(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:`),Kg(),Qc(51,`ul`)(52,`li`),Sk(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),Qc(54,`a`,6),Sk(55,`WCAG 4.1.2: Name, Role, Value`),Kg()(),Qc(56,`li`),Sk(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),Qc(58,`a`,7),Sk(59,`WCAG 2.4.12: Focus Appearance)`),Kg()(),Qc(60,`li`),Sk(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),Qc(62,`a`,8),Sk(63,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),Kg()()(),Qc(64,`h4`),Sk(65,`Tokens customizáveis`),Kg(),Qc(66,`p`),Sk(67,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(68,`blockquote`)(69,`p`),Sk(70,`Para maiores informações, acesse o guia `),Qc(71,`a`,9),Sk(72,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(73,`.`),Kg()(),Qc(74,`table`)(75,`thead`)(76,`tr`)(77,`th`),Sk(78,`Propriedade`),Kg(),Qc(79,`th`),Sk(80,`Descrição`),Kg(),Qc(81,`th`),Sk(82,`Valor Padrão`),Kg()()(),Qc(83,`tbody`)(84,`tr`)(85,`td`)(86,`strong`),Sk(87,`Default Values`),Kg()(),vu(88,`td`)(89,`td`),Kg(),Qc(90,`tr`)(91,`td`)(92,`code`),Sk(93,`--font-family`),Kg()(),Qc(94,`td`),Sk(95,`Família tipográfica usada`),Kg(),Qc(96,`td`)(97,`code`),Sk(98,`var(--font-family-theme)`),Kg()()(),Qc(99,`tr`)(100,`td`)(101,`code`),Sk(102,`--font-size`),Kg()(),Qc(103,`td`),Sk(104,`Tamanho da fonte`),Kg(),Qc(105,`td`)(106,`code`),Sk(107,`var(--font-size-default)`),Kg()()(),Qc(108,`tr`)(109,`td`)(110,`code`),Sk(111,`--text-color-placeholder`),Kg()(),Qc(112,`td`),Sk(113,`Cor do texto placeholder`),Kg(),Qc(114,`td`)(115,`code`),Sk(116,`var(--color-neutral-light-30)`),Kg()()(),Qc(117,`tr`)(118,`td`)(119,`code`),Sk(120,`--color`),Kg()(),Qc(121,`td`),Sk(122,`Cor pincipal do campo`),Kg(),Qc(123,`td`)(124,`code`),Sk(125,`var(--color-neutral-dark-70)`),Kg()()(),Qc(126,`tr`)(127,`td`)(128,`code`),Sk(129,`--background`),Kg()(),Qc(130,`td`),Sk(131,`Cor de background`),Kg(),Qc(132,`td`)(133,`code`),Sk(134,`var(--color-neutral-light-05)`),Kg()()(),Qc(135,`tr`)(136,`td`)(137,`code`),Sk(138,`--field-container-title-justify`),Kg()(),Qc(139,`td`),Sk(140,`Alinhamento horizontal do título (`),Qc(141,`code`),Sk(142,`justify-content`),Kg(),Sk(143,`)`),Kg(),Qc(144,`td`)(145,`code`),Sk(146,`space-between`),Kg()()(),Qc(147,`tr`)(148,`td`)(149,`code`),Sk(150,`--field-container-title-flex`),Kg()(),Qc(151,`td`),Sk(152,`Flex do título (`),Qc(153,`code`),Sk(154,`flex`),Kg(),Sk(155,`)`),Kg(),Qc(156,`td`)(157,`code`),Sk(158,`1 auto`),Kg()()()()()(),Qc(159,`div`,10)(160,`h4`,11),Sk(161,`Seletor`),Kg(),Qc(162,`pre`,12),Sk(163,`<po-textarea
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
`),Kg()(),Qc(164,`h4`,13),Sk(165,`Propriedades`),Kg(),Qc(166,`table`,14)(167,`tr`,15)(168,`th`,16),Sk(169,`Nome`),Kg(),Qc(170,`th`,16),Sk(171,`Tipo`),Kg(),Qc(172,`th`,16),Sk(173,`Padrão`),Kg(),Qc(174,`th`,16),Sk(175,`Descrição`),Kg()(),Qc(176,`tr`,17)(177,`td`,18)(178,`div`,19)(179,`span`,20),Sk(180,` (p-additional-help)`),vu(181,`br`),Kg()(),Qc(182,`div`,21),Sk(183,`Deprecated`),Kg()(),Qc(184,`td`,22)(185,`code`,23),Sk(186,`EventEmitter`),Kg()(),Qc(187,`td`,24),Sk(188,`-`),Kg(),Qc(189,`td`,25)(190,`em`)(191,`strong`),Sk(192,`(opcional)`),Kg()(),Qc(193,`p`),Sk(194,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(195,`blockquote`)(196,`p`),Sk(197,`Essa propriedade está `),Qc(198,`strong`),Sk(199,`depreciada`),Kg(),Sk(200,` e será removida na versão `),Qc(201,`code`),Sk(202,`23.x.x`),Kg(),Sk(203,`. Recomendamos utilizar a propriedade `),Qc(204,`code`),Sk(205,`p-helper`),Kg(),Sk(206,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(207,`tr`,26)(208,`td`,18)(209,`div`,27)(210,`span`,28),Sk(211,` p-additional-help-tooltip`),vu(212,`br`),Kg()(),Qc(213,`div`,21),Sk(214,`Deprecated`),Kg()(),Qc(215,`td`,22)(216,`code`,29),Sk(217,`string`),Kg()(),Qc(218,`td`,24),Sk(219,`-`),Kg(),Qc(220,`td`,25)(221,`em`)(222,`strong`),Sk(223,`(opcional)`),Kg()(),Qc(224,`p`),Sk(225,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(226,`code`),Sk(227,`po-helper`),Kg(),Sk(228,`.
`),Qc(229,`strong`),Sk(230,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(231,`blockquote`)(232,`p`),Sk(233,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Qc(234,`blockquote`)(235,`p`),Sk(236,`Essa propriedade está `),Qc(237,`strong`),Sk(238,`depreciada`),Kg(),Sk(239,` e será removida na versão `),Qc(240,`code`),Sk(241,`23.x.x`),Kg(),Sk(242,`. Recomendamos utilizar a propriedade `),Qc(243,`code`),Sk(244,`p-helper`),Kg(),Sk(245,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(246,`tr`,30)(247,`td`,18)(248,`div`,27)(249,`span`,28),Sk(250,` p-append-in-body`),vu(251,`br`),Kg()()(),Qc(252,`td`,22)(253,`code`,31),Sk(254,`boolean`),Kg()(),Qc(255,`td`,24)(256,`p`)(257,`code`),Sk(258,`false`),Kg()()(),Qc(259,`td`,25)(260,`em`)(261,`strong`),Sk(262,`(opcional)`),Kg()(),Qc(263,`p`),Sk(264,`Define que o popover (`),Qc(265,`code`),Sk(266,`p-helper`),Kg(),Sk(267,` e/ou `),Qc(268,`code`),Sk(269,`p-error-limit`),Kg(),Sk(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Qc(271,`blockquote`)(272,`p`),Sk(273,`Quando utilizado com `),Qc(274,`code`),Sk(275,`p-helper`),Kg(),Sk(276,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(277,`tr`,32)(278,`td`,18)(279,`div`,27)(280,`span`,28),Sk(281,` p-auto-focus`),vu(282,`br`),Kg()()(),Qc(283,`td`,22)(284,`code`,31),Sk(285,`boolean`),Kg()(),Qc(286,`td`,24)(287,`p`)(288,`code`),Sk(289,`false`),Kg()()(),Qc(290,`td`,25)(291,`em`)(292,`strong`),Sk(293,`(opcional)`),Kg()(),Qc(294,`p`),Sk(295,`Aplica foco no elemento ao ser iniciado.`),Kg(),Qc(296,`blockquote`)(297,`p`),Sk(298,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Qc(299,`tr`,33)(300,`td`,18)(301,`div`,19)(302,`span`,20),Sk(303,` (p-blur)`),vu(304,`br`),Kg()()(),Qc(305,`td`,22)(306,`code`,23),Sk(307,`EventEmitter`),Kg()(),Qc(308,`td`,24),Sk(309,`-`),Kg(),Qc(310,`td`,25)(311,`em`)(312,`strong`),Sk(313,`(opcional)`),Kg()(),Qc(314,`p`),Sk(315,`Evento disparado ao sair do campo.`),Kg()()(),Qc(316,`tr`,34)(317,`td`,18)(318,`div`,19)(319,`span`,20),Sk(320,` (p-change)`),vu(321,`br`),Kg()()(),Qc(322,`td`,22)(323,`code`,23),Sk(324,`EventEmitter`),Kg()(),Qc(325,`td`,24),Sk(326,`-`),Kg(),Qc(327,`td`,25)(328,`em`)(329,`strong`),Sk(330,`(opcional)`),Kg()(),Qc(331,`p`),Sk(332,`Evento disparado ao alterar valor e deixar o campo.`),Kg()()(),Qc(333,`tr`,35)(334,`td`,18)(335,`div`,19)(336,`span`,20),Sk(337,` (p-change-model)`),vu(338,`br`),Kg()()(),Qc(339,`td`,22)(340,`code`,23),Sk(341,`EventEmitter`),Kg()(),Qc(342,`td`,24),Sk(343,`-`),Kg(),Qc(344,`td`,25)(345,`em`)(346,`strong`),Sk(347,`(opcional)`),Kg()(),Qc(348,`p`),Sk(349,`Evento disparado ao alterar valor do model.`),Kg()()(),Qc(350,`tr`,36)(351,`td`,18)(352,`div`,27)(353,`span`,28),Sk(354,` p-compact-label`),vu(355,`br`),Kg()()(),Qc(356,`td`,22)(357,`code`,31),Sk(358,`boolean`),Kg()(),Qc(359,`td`,24)(360,`p`)(361,`code`),Sk(362,`false`),Kg()()(),Qc(363,`td`,25)(364,`em`)(365,`strong`),Sk(366,`(opcional)`),Kg()(),Qc(367,`p`),Sk(368,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(369,`p`),Sk(370,`Quando habilitado (`),Qc(371,`code`),Sk(372,`true`),Kg(),Sk(373,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(374,`ul`)(375,`li`)(376,`code`),Sk(377,`po-label`),Kg()(),Qc(378,`li`)(379,`code`),Sk(380,`p-requirement (showRequired)`),Kg()(),Qc(381,`li`)(382,`code`),Sk(383,`po-helper`),Kg()()(),Qc(384,`p`),Sk(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(386,`p`),Sk(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(388,`ul`)(389,`li`)(390,`code`),Sk(391,`--field-container-title-justify`),Kg()(),Qc(392,`li`)(393,`code`),Sk(394,`--field-container-title-flex`),Kg()()(),Qc(395,`p`),Sk(396,`Exemplo:`),Kg(),Qc(397,`pre`)(398,`code`),Sk(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(400,`p`),Sk(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(402,`tr`,37)(403,`td`,18)(404,`div`,27)(405,`span`,28),Sk(406,` p-disabled`),vu(407,`br`),Kg()()(),Qc(408,`td`,22)(409,`code`,31),Sk(410,`boolean`),Kg()(),Qc(411,`td`,24)(412,`p`)(413,`code`),Sk(414,`false`),Kg()()(),Qc(415,`td`,25)(416,`em`)(417,`strong`),Sk(418,`(opcional)`),Kg()(),Qc(419,`p`),Sk(420,`Indica que o campo será desabilitado.`),Kg()()(),Qc(421,`tr`,38)(422,`td`,18)(423,`div`,19)(424,`span`,20),Sk(425,` (p-enter)`),vu(426,`br`),Kg()()(),Qc(427,`td`,22)(428,`code`,23),Sk(429,`EventEmitter`),Kg()(),Qc(430,`td`,24),Sk(431,`-`),Kg(),Qc(432,`td`,25)(433,`em`)(434,`strong`),Sk(435,`(opcional)`),Kg()(),Qc(436,`p`),Sk(437,`Evento disparado ao entrar do campo.`),Kg()()(),Qc(438,`tr`,39)(439,`td`,18)(440,`div`,27)(441,`span`,28),Sk(442,` p-error-limit`),vu(443,`br`),Kg()()(),Qc(444,`td`,22)(445,`code`,31),Sk(446,`boolean`),Kg()(),Qc(447,`td`,24)(448,`p`)(449,`code`),Sk(450,`false`),Kg()()(),Qc(451,`td`,25)(452,`em`)(453,`strong`),Sk(454,`(opcional)`),Kg()(),Qc(455,`p`),Sk(456,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Qc(457,`blockquote`)(458,`p`),Sk(459,`Caso essa propriedade seja definida como `),Qc(460,`code`),Sk(461,`true`),Kg(),Sk(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Qc(463,`tr`,40)(464,`td`,18)(465,`div`,27)(466,`span`,28),Sk(467,` p-field-error-message`),vu(468,`br`),Kg()()(),Qc(469,`td`,22)(470,`code`,29),Sk(471,`string`),Kg()(),Qc(472,`td`,24),Sk(473,`-`),Kg(),Qc(474,`td`,25)(475,`em`)(476,`strong`),Sk(477,`(opcional)`),Kg()(),Qc(478,`p`),Sk(479,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Qc(480,`blockquote`)(481,`p`),Sk(482,`Necessário que a propriedade `),Qc(483,`code`),Sk(484,`p-required`),Kg(),Sk(485,` esteja habilitada.`),Kg()()()(),Qc(486,`tr`,41)(487,`td`,18)(488,`div`,27)(489,`span`,28),Sk(490,` p-help`),vu(491,`br`),Kg()()(),Qc(492,`td`,22)(493,`code`,29),Sk(494,`string`),Kg()(),Qc(495,`td`,24),Sk(496,`-`),Kg(),Qc(497,`td`,25)(498,`em`)(499,`strong`),Sk(500,`(opcional)`),Kg()(),Qc(501,`p`),Sk(502,`Texto de apoio do campo.`),Kg()()(),Qc(503,`tr`,42)(504,`td`,18)(505,`div`,19)(506,`span`,20),Sk(507,` (p-keydown)`),vu(508,`br`),Kg()()(),Qc(509,`td`,22)(510,`code`,23),Sk(511,`EventEmitter`),Kg()(),Qc(512,`td`,24),Sk(513,`-`),Kg(),Qc(514,`td`,25)(515,`em`)(516,`strong`),Sk(517,`(opcional)`),Kg()(),Qc(518,`p`),Sk(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(520,`code`),Sk(521,`KeyboardEvent`),Kg(),Sk(522,` com informações sobre a tecla.`),Kg()()(),Qc(523,`tr`,43)(524,`td`,18)(525,`div`,27)(526,`span`,28),Sk(527,` p-label`),vu(528,`br`),Kg()()(),Qc(529,`td`,22)(530,`code`,29),Sk(531,`string`),Kg()(),Qc(532,`td`,24),Sk(533,`-`),Kg(),Qc(534,`td`,25)(535,`em`)(536,`strong`),Sk(537,`(opcional)`),Kg()(),Qc(538,`p`),Sk(539,`Label do campo.`),Kg()()(),Qc(540,`tr`,44)(541,`td`,18)(542,`div`,27)(543,`span`,28),Sk(544,` p-label-text-wrap`),vu(545,`br`),Kg()()(),Qc(546,`td`,22)(547,`code`,31),Sk(548,`boolean`),Kg()(),Qc(549,`td`,24)(550,`p`)(551,`code`),Sk(552,`false`),Kg()()(),Qc(553,`td`,25)(554,`em`)(555,`strong`),Sk(556,`(opcional)`),Kg()(),Qc(557,`p`),Sk(558,`Habilita a quebra automática do texto da propriedade `),Qc(559,`code`),Sk(560,`p-label`),Kg(),Sk(561,`. Quando `),Qc(562,`code`),Sk(563,`p-label-text-wrap`),Kg(),Sk(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Qc(565,`tr`,45)(566,`td`,18)(567,`div`,27)(568,`span`,28),Sk(569,` p-loading`),vu(570,`br`),Kg()()(),Qc(571,`td`,22)(572,`code`,31),Sk(573,`boolean`),Kg()(),Qc(574,`td`,24)(575,`p`)(576,`code`),Sk(577,`false`),Kg()()(),Qc(578,`td`,25)(579,`em`)(580,`strong`),Sk(581,`(opcional)`),Kg()(),Qc(582,`p`),Sk(583,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Qc(584,`tr`,46)(585,`td`,18)(586,`div`,27)(587,`span`,28),Sk(588,` p-maxlength`),vu(589,`br`),Kg()()(),Qc(590,`td`,22)(591,`code`,47),Sk(592,`number`),Kg()(),Qc(593,`td`,24),Sk(594,`-`),Kg(),Qc(595,`td`,25)(596,`em`)(597,`strong`),Sk(598,`(opcional)`),Kg()(),Qc(599,`p`),Sk(600,`Indica a quantidade máxima de caracteres que o campo aceita.`),Kg()()(),Qc(601,`tr`,48)(602,`td`,18)(603,`div`,27)(604,`span`,28),Sk(605,` p-minlength`),vu(606,`br`),Kg()()(),Qc(607,`td`,22)(608,`code`,47),Sk(609,`number`),Kg()(),Qc(610,`td`,24),Sk(611,`-`),Kg(),Qc(612,`td`,25)(613,`em`)(614,`strong`),Sk(615,`(opcional)`),Kg()(),Qc(616,`p`),Sk(617,`Indica a quantidade mínima de caracteres que o campo aceita.`),Kg()()(),Qc(618,`tr`,49)(619,`td`,18)(620,`div`,27)(621,`span`,28),Sk(622,` name`),vu(623,`br`),Kg()()(),Qc(624,`td`,22)(625,`code`,29),Sk(626,`string`),Kg()(),Qc(627,`td`,24),Sk(628,`-`),Kg(),Qc(629,`td`,25)(630,`p`),Sk(631,`Nome e Id do componente.`),Kg()()(),Qc(632,`tr`,50)(633,`td`,18)(634,`div`,27)(635,`span`,28),Sk(636,` p-optional`),vu(637,`br`),Kg()()(),Qc(638,`td`,22)(639,`code`,31),Sk(640,`boolean`),Kg()(),Qc(641,`td`,24)(642,`p`)(643,`code`),Sk(644,`false`),Kg()()(),Qc(645,`td`,25)(646,`em`)(647,`strong`),Sk(648,`(opcional)`),Kg()(),Qc(649,`p`),Sk(650,`Define se a indicação de campo opcional será exibida.`),Kg(),Qc(651,`blockquote`)(652,`p`),Sk(653,`Não será exibida a indicação se:`),Kg()(),Qc(654,`ul`)(655,`li`),Sk(656,`O campo conter `),Qc(657,`code`),Sk(658,`p-required`),Kg(),Sk(659,`;`),Kg(),Qc(660,`li`),Sk(661,`Não possuir `),Qc(662,`code`),Sk(663,`p-help`),Kg(),Sk(664,` e/ou `),Qc(665,`code`),Sk(666,`p-label`),Kg(),Sk(667,`.`),Kg()()()(),Qc(668,`tr`,51)(669,`td`,18)(670,`div`,27)(671,`span`,28),Sk(672,` p-placeholder`),vu(673,`br`),Kg()()(),Qc(674,`td`,22)(675,`code`,29),Sk(676,`string`),Kg()(),Qc(677,`td`,24),Sk(678,`-`),Kg(),Qc(679,`td`,25)(680,`p`),Sk(681,`Placeholder, mensagem que aparecerá enquanto o campo não estiver preenchido.`),Kg()()(),Qc(682,`tr`,52)(683,`td`,18)(684,`div`,27)(685,`span`,28),Sk(686,` p-helper`),vu(687,`br`),Kg()()(),Qc(688,`td`,22)(689,`code`,53),Sk(690,`PoHelperOptions `),Kg(),Qc(691,`code`,29),Sk(692,` string`),Kg()(),Qc(693,`td`,24),Sk(694,`-`),Kg(),Qc(695,`td`,25)(696,`em`)(697,`strong`),Sk(698,`(opcional)`),Kg()(),Qc(699,`p`),Sk(700,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Qc(701,`code`),Sk(702,`p-label`),Kg(),Sk(703,` for definida, ou, ao lado do componente na ausência da propriedade `),Qc(704,`code`),Sk(705,`p-label`),Kg(),Sk(706,`.`),Kg(),Qc(707,`blockquote`)(708,`p`),Sk(709,`Para mais informações acesse: `),Qc(710,`a`,54),Sk(711,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(712,`.`),Kg()(),Qc(713,`blockquote`)(714,`p`),Sk(715,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Qc(716,`code`),Sk(717,`p-additional-help-tooltip`),Kg(),Sk(718,` e `),Qc(719,`code`),Sk(720,`p-additional-help`),Kg(),Sk(721,`) será ignorado.`),Kg()()()(),Qc(722,`tr`,55)(723,`td`,18)(724,`div`,27)(725,`span`,28),Sk(726,` p-readonly`),vu(727,`br`),Kg()()(),Qc(728,`td`,22)(729,`code`,31),Sk(730,`boolean`),Kg()(),Qc(731,`td`,24)(732,`p`)(733,`code`),Sk(734,`false`),Kg()()(),Qc(735,`td`,25)(736,`em`)(737,`strong`),Sk(738,`(opcional)`),Kg()(),Qc(739,`p`),Sk(740,`Indica que o campo será somente leitura.`),Kg()()(),Qc(741,`tr`,56)(742,`td`,18)(743,`div`,27)(744,`span`,28),Sk(745,` p-required`),vu(746,`br`),Kg()()(),Qc(747,`td`,22)(748,`code`,31),Sk(749,`boolean`),Kg()(),Qc(750,`td`,24)(751,`p`)(752,`code`),Sk(753,`false`),Kg()()(),Qc(754,`td`,25)(755,`em`)(756,`strong`),Sk(757,`(opcional)`),Kg()(),Qc(758,`p`),Sk(759,`Define que o campo será obrigatório.`),Kg(),Qc(760,`blockquote`)(761,`p`),Sk(762,`Esta propriedade é desconsiderada quando o input está desabilitado `),Qc(763,`code`),Sk(764,`(p-disabled)`),Kg(),Sk(765,`.`),Kg()()()(),Qc(766,`tr`,57)(767,`td`,18)(768,`div`,27)(769,`span`,28),Sk(770,` p-rows`),vu(771,`br`),Kg()()(),Qc(772,`td`,22)(773,`code`,47),Sk(774,`number`),Kg()(),Qc(775,`td`,24)(776,`p`)(777,`code`),Sk(778,`3`),Kg()()(),Qc(779,`td`,25)(780,`em`)(781,`strong`),Sk(782,`(opcional)`),Kg()(),Qc(783,`p`),Sk(784,`Indica a quantidade de linhas que serão exibidas.`),Kg()()(),Qc(785,`tr`,58)(786,`td`,18)(787,`div`,27)(788,`span`,28),Sk(789,` p-show-required`),vu(790,`br`),Kg()()(),Qc(791,`td`,22)(792,`code`,31),Sk(793,`boolean`),Kg()(),Qc(794,`td`,24),Sk(795,`-`),Kg(),Qc(796,`td`,25)(797,`p`),Sk(798,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Qc(799,`blockquote`)(800,`p`),Sk(801,`Não será exibida a indicação se:`),Kg()(),Qc(802,`ul`)(803,`li`),Sk(804,`Não possuir `),Qc(805,`code`),Sk(806,`p-help`),Kg(),Sk(807,` e/ou `),Qc(808,`code`),Sk(809,`p-label`),Kg(),Sk(810,`.`),Kg()()()(),Qc(811,`tr`,59)(812,`td`,18)(813,`div`,27)(814,`span`,28),Sk(815,` p-size`),vu(816,`br`),Kg()()(),Qc(817,`td`,22)(818,`code`,29),Sk(819,`string`),Kg()(),Qc(820,`td`,24)(821,`p`)(822,`code`),Sk(823,`medium`),Kg()()(),Qc(824,`td`,25)(825,`em`)(826,`strong`),Sk(827,`(opcional)`),Kg()(),Qc(828,`p`),Sk(829,`Define o tamanho do componente:`),Kg(),Qc(830,`ul`)(831,`li`)(832,`code`),Sk(833,`small`),Kg(),Sk(834,` (disponível apenas para acessibilidade AA)`),Kg(),Qc(835,`li`)(836,`code`),Sk(837,`medium`),Kg()()(),Qc(838,`blockquote`)(839,`p`),Sk(840,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(841,`code`),Sk(842,`medium`),Kg(),Sk(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(844,`a`,60),Sk(845,`po-theme`),Kg(),Sk(846,`.`),Kg()()()()(),Qc(847,`h3`,13),Sk(848,`Métodos`),Kg(),Qc(849,`table`,61)(850,`tr`,62)(851,`th`,63)(852,`div`,27)(853,`h4`)(854,`span`,28),Sk(855,` focus `),Kg()()()()(),Qc(856,`tr`,25)(857,`td`,25)(858,`p`),Sk(859,`Função que atribui foco ao componente.`),Kg(),Qc(860,`p`),Sk(861,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(862,`pre`)(863,`code`),Sk(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),Kg()()()()(),vu(865,`br`),Qc(866,`table`,64)(867,`tr`,62)(868,`th`,63)(869,`div`,27)(870,`h4`)(871,`span`,28),Sk(872,` showAdditionalHelp `),Kg()()()()(),Qc(873,`tr`,25)(874,`td`,25)(875,`p`),Sk(876,`Método que exibe `),Qc(877,`code`),Sk(878,`p-helper`),Kg(),Sk(879,` ou executa a ação definida em `),Qc(880,`code`),Sk(881,`p-helper{eventOnClick}`),Kg(),Sk(882,` ou em `),Qc(883,`code`),Sk(884,`p-additionalHelp`),Kg(),Sk(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(886,`code`),Sk(887,`p-keydown`),Kg(),Sk(888,`.`),Kg(),Qc(889,`blockquote`)(890,`p`),Sk(891,`Exibe ou oculta o conteúdo do componente `),Qc(892,`code`),Sk(893,`po-helper`),Kg(),Sk(894,` quando o componente estiver com foco.`),Kg()(),Qc(895,`pre`)(896,`code`),Sk(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),Kg()(),Qc(898,`pre`)(899,`code`),Sk(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(901,`br`),Kg())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Ie(i,ae){if(i&1){let m=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(m);let o=ek();return U_(o.changeTab(`web`))}),vu(1,`sample-po-textarea-basic-view`)(2,`sample-po-textarea-labs-view`)(3,`sample-po-textarea-email-view`)(4,`sample-po-textarea-email-reactive-form-view`),Kg()}if(i&2){let m=ek();Rb(`p-active`,m.activeTab===`web`)}}var He=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Textarea`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,o){r&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ie,5,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),vu(4,`sample-po-textarea-doc`),Kg()()()),r&2&&(Rb(`p-actions`,o.actions),wg(2),VO(o.hidePoWebSample?-1:2),wg(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,xe,fe,ve,we,Te],encapsulation:2,changeDetection:1})}return i})()}];var Pe=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[GV.forChild(He),GV]})}return i})();var Dt=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[M,Pe]})}return i})();export{Dt as DocPoTextareaModule};