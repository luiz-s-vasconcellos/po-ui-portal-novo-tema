import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,At as Zte,G as Nf,Ii as WL,Ir as Kb,Ki as Z,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Q as Pb,Qa as tm,Ti as U_,Ui as YO,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,an as ia,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,li as Qc,na as de$1,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var re=(()=>{class i{poButton;static ɵfac=function(p){return new(p||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-basic`]],viewQuery:function(p,n){if(p&1&&Du(oi,7,Z),p&2){let m;No(m=xo())&&(n.poButton=m.first)}},standalone:!1,decls:3,vars:1,consts:[[3,`p-target`],[`p-label`,`Open Popover`]],template:function(p,n){p&1&&(Qc(0,`po-popover`,0),Sk(1,` PO Popover `),Kg(),vu(2,`po-button`,1)),p&2&&Rb(`p-target`,n.poButton)},dependencies:[oi,Pb],encapsulation:2,changeDetection:1})}return i})();var be=i=>({"docs-sample-code-tabs":i});var de=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-popover-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Popover Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-popover-basic/sample-po-popover-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-popover-basic/sample-po-popover-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popover-basic',
  templateUrl: './sample-po-popover-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopoverBasicComponent {
  @ViewChild(PoButtonComponent, { read: ElementRef, static: true }) poButton: PoButtonComponent;
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-popover-basic`),Kg(),vu(23,`hr`)),p&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,be,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,re],encapsulation:2,changeDetection:1})}return i})();var Se=[`buttonClick`];var Pe=[`buttonHover`];var me=(()=>{class i{buttonClickRef;buttonHoverRef;content=``;position=``;properties=[];title=``;offset=8;positionOptions=[{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`},{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`}];offsetOptions=[{label:`0`,value:0},{label:`4`,value:4},{label:`8 (default)`,value:8},{label:`16`,value:16},{label:`32`,value:32}];propertiesOptions=[{value:`hideArrow`,label:`Hide arrow`}];restore(){this.content=``,this.position=void 0,this.properties=[],this.title=``,this.offset=8}static ɵfac=function(p){return new(p||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-labs`]],viewQuery:function(p,n){if(p&1&&Du(Se,7,Z)(Pe,7,Z),p&2){let m;No(m=xo())&&(n.buttonClickRef=m.first),No(m=xo())&&(n.buttonHoverRef=m.first)}},standalone:!1,decls:24,vars:21,consts:[[`buttonClick`,``],[`buttonHover`,``],[`f`,`ngForm`],[`p-trigger`,`click`,3,`p-hide-arrow`,`p-position`,`p-offset`,`p-target`,`p-title`],[`p-trigger`,`hover`,3,`p-hide-arrow`,`p-position`,`p-offset`,`p-target`,`p-title`],[1,`po-row`],[1,`po-offset-xl-1`,`po-offset-lg-1`,`po-md-6`,`po-lg-3`],[`p-label`,`Popover with click`],[`p-label`,`Popover with hover`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`position`,`p-label`,`Position`,1,`po-md-8`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`offset`,`p-label`,`Offset (px)`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(p,n){if(p&1){let m=YO();Qc(0,`po-popover`,3),Sk(1),Kg(),Qc(2,`po-popover`,4),Sk(3),Kg(),Qc(4,`div`,5)(5,`div`,6),vu(6,`po-button`,7,0),Kg(),Qc(8,`div`,6),vu(9,`po-button`,8,1),Kg()(),vu(11,`po-divider`),Qc(12,`form`,null,2)(14,`div`,5)(15,`po-input`,9),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(n.title,l)||(n.title=l),U_(l)}),Kg(),Qc(16,`po-input`,10),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(n.content,l)||(n.content=l),U_(l)}),Kg()(),Qc(17,`div`,5)(18,`po-radio-group`,11),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(n.position,l)||(n.position=l),U_(l)}),Kg(),Qc(19,`po-checkbox-group`,12),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(n.properties,l)||(n.properties=l),U_(l)}),Kg()(),Qc(20,`div`,5)(21,`po-radio-group`,13),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(n.offset,l)||(n.offset=l),U_(l)}),Kg()(),Qc(22,`div`,5)(23,`po-button`,14),vt(`p-click`,function(){return n.restore()}),Kg()()()}p&2&&(Rb(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-offset`,n.offset)(`p-target`,n.buttonClickRef)(`p-title`,n.title),wg(),tm(` `,n.content,`
`),wg(),Rb(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-offset`,n.offset)(`p-target`,n.buttonHoverRef)(`p-title`,n.title),wg(),tm(` `,n.content,`
`),wg(12),Yb(`ngModel`,n.title),W0(),wg(),Yb(`ngModel`,n.content),W0(),wg(2),Yb(`ngModel`,n.position),Rb(`p-options`,n.positionOptions),W0(),wg(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(2),Yb(`ngModel`,n.offset),Rb(`p-columns`,5)(`p-options`,n.offsetOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,Pb],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-popover-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Popover Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-popover-labs/sample-po-popover-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-popover
  p-trigger="click"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-offset]="offset"
  [p-target]="buttonClickRef"
  [p-title]="title"
>
  { { content }}
</po-popover>

<po-popover
  p-trigger="hover"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-offset]="offset"
  [p-target]="buttonHoverRef"
  [p-title]="title"
>
  { { content }}
</po-popover>

<div class="po-row">
  <div class="po-offset-xl-1 po-offset-lg-1 po-md-6 po-lg-3">
    <po-button #buttonClick p-label="Popover with click"> </po-button>
  </div>

  <div class="po-offset-xl-1 po-offset-lg-1 po-md-6 po-lg-3">
    <po-button #buttonHover p-label="Popover with hover"> </po-button>
  </div>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title"> </po-input>

    <po-input class="po-md-6" name="content" [(ngModel)]="content" p-clean p-label="Content"> </po-input>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-8"
      name="position"
      [(ngModel)]="position"
      p-label="Position"
      [p-options]="positionOptions"
    >
    </po-radio-group>

    <po-checkbox-group
      class="po-md-4"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-12"
      name="offset"
      [(ngModel)]="offset"
      [p-columns]="5"
      p-label="Offset (px)"
      [p-options]="offsetOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-popover-labs/sample-po-popover-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popover-labs',
  templateUrl: './sample-po-popover-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopoverLabsComponent {
  @ViewChild('buttonClick', { read: ElementRef, static: true }) buttonClickRef: ElementRef;
  @ViewChild('buttonHover', { read: ElementRef, static: true }) buttonHoverRef: ElementRef;

  content: string = '';
  position: string = '';
  properties: Array<string> = [];
  title: string = '';
  offset: number = 8;

  public readonly positionOptions: Array<PoRadioGroupOption> = [
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' }
  ];

  public readonly offsetOptions: Array<PoRadioGroupOption> = [
    { label: '0', value: 0 },
    { label: '4', value: 4 },
    { label: '8 (default)', value: 8 },
    { label: '16', value: 16 },
    { label: '32', value: 32 }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideArrow', label: 'Hide arrow' }];

  restore() {
    this.content = '';
    this.position = undefined;
    this.properties = [];
    this.title = '';
    this.offset = 8;
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-popover-labs`),Kg(),vu(23,`hr`)),p&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,we,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,me],encapsulation:2,changeDetection:1})}return i})();var _e=[`cardname`];var Te=[`cardcode`];var Me=[`carddate`];var ce=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static ɵfac=function(p){return new(p||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-credit-card`]],viewQuery:function(p,n){if(p&1&&Du(_e,7,Z)(Te,7,Z)(Me,7,Z),p&2){let m;No(m=xo())&&(n.cardnameref=m.first),No(m=xo())&&(n.cardcoderef=m.first),No(m=xo())&&(n.carddateref=m.first)}},standalone:!1,decls:28,vars:10,consts:[[`f`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`modalCreditCard`,``],[`p-trigger`,`hover`,3,`p-target`],[`src`,`assets/graphics/card-code.jpg`],[`src`,`assets/graphics/card-date.jpg`],[`src`,`assets/graphics/card-owner.jpg`],[1,`po-row`],[`name`,`inputCardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`inputCardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`inputCardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Confirm`,1,`po-md-2`,3,`click`,`p-disabled`],[`p-title`,`Your Credit Card`]],template:function(p,n){if(p&1){let m=YO();Qc(0,`po-popover`,5),vu(1,`img`,6),Kg(),Qc(2,`po-popover`,5),vu(3,`img`,7),Kg(),Qc(4,`po-popover`,5),vu(5,`img`,8),Kg(),Qc(6,`form`,null,0)(8,`div`,9)(9,`po-input`,10,1),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(n.inputCardName,l)||(n.inputCardName=l),U_(l)}),Kg(),Qc(11,`po-input`,11,2),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(n.inputCardCode,l)||(n.inputCardCode=l),U_(l)}),Kg(),Qc(13,`po-input`,12,3),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(n.inputCardValid,l)||(n.inputCardValid=l),U_(l)}),Kg()(),Qc(15,`div`,9)(16,`po-button`,13),vt(`click`,function(){B_(m);let l=ik(18);return U_(l.open())}),Kg()()(),Qc(17,`po-modal`,14,4)(19,`div`,9)(20,`div`),Sk(21),Kg()(),Qc(22,`div`,9)(23,`div`),Sk(24),Kg()(),Qc(25,`div`,9)(26,`div`),Sk(27),Kg()()()}if(p&2){let m=ik(7);Rb(`p-target`,n.cardcoderef),wg(2),Rb(`p-target`,n.carddateref),wg(2),Rb(`p-target`,n.cardnameref),wg(5),Yb(`ngModel`,n.inputCardName),W0(),wg(2),Yb(`ngModel`,n.inputCardCode),W0(),wg(2),Yb(`ngModel`,n.inputCardValid),W0(),wg(3),Rb(`p-disabled`,m.form.invalid),wg(5),tm(`Card Code: `,n.inputCardCode),wg(3),tm(`Card Expiration: `,n.inputCardValid),wg(3),tm(`Card Owner: `,n.inputCardName)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,j4,ia,Pb],encapsulation:2,changeDetection:1})}return i})();var ke=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-credit-card-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-popover-credit-card`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Popover - Credit Card`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
  <img src="assets/graphics/card-code.jpg" />
</po-popover>

<po-popover p-trigger="hover" [p-target]="carddateref">
  <img src="assets/graphics/card-date.jpg" />
</po-popover>

<po-popover p-trigger="hover" [p-target]="cardnameref">
  <img src="assets/graphics/card-owner.jpg" />
</po-popover>

<form #f="ngForm">
  <div class="po-row">
    <po-input
      #cardname
      class="po-lg-6"
      name="inputCardName"
      [(ngModel)]="inputCardName"
      p-clean
      p-label="Name"
      p-required
    >
    </po-input>

    <po-input
      #cardcode
      class="po-lg-4 po-md-9"
      name="inputCardCode"
      [(ngModel)]="inputCardCode"
      p-clean
      p-label="Code"
      p-mask="9999 9999 9999 9999"
      p-mask-format-model
      p-pattern="\\d{4} \\d{4} \\d{4} \\d{4}"
      p-required
    >
    </po-input>

    <po-input
      #carddate
      class="po-lg-2 po-md-3"
      name="inputCardValid"
      [(ngModel)]="inputCardValid"
      p-clean
      p-label="Expiration Date"
      p-mask="12/99"
      p-mask-format-model
      p-pattern="\\d{2}\\/\\d{2}"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-2" p-label="Confirm" [p-disabled]="f.form.invalid" (click)="modalCreditCard.open()">
    </po-button>
  </div>
</form>

<po-modal #modalCreditCard p-title="Your Credit Card">
  <div class="po-row">
    <div>Card Code: { { inputCardCode }}</div>
  </div>
  <div class="po-row">
    <div>Card Expiration: { { inputCardValid }}</div>
  </div>
  <div class="po-row">
    <div>Card Owner: { { inputCardName }}</div>
  </div>
</po-modal>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-popover-credit-card',
  templateUrl: './sample-po-popover-credit-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopoverCreditCardComponent {
  @ViewChild('cardname', { read: ElementRef, static: true }) cardnameref: ElementRef;
  @ViewChild('cardcode', { read: ElementRef, static: true }) cardcoderef: ElementRef;
  @ViewChild('carddate', { read: ElementRef, static: true }) carddateref: ElementRef;

  public inputCardName: string;
  public inputCardCode: string;
  public inputCardValid: string;
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-popover-credit-card`),Kg(),vu(23,`hr`)),p&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ke,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ce],encapsulation:2,changeDetection:1})}return i})();var ve=(()=>{class i{static ɵfac=function(p){return new(p||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-doc`]],standalone:!1,decls:363,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-popover-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/documentation/po-tooltip?view=doc`],[`href`,`https://po-ui.io/documentation/po-modal?view=doc`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-close`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-custom-classes`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-hide-arrow`,1,`docs-api-properties-row`],[`id`,`prop-p-offset`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`event-p-open`,1,`docs-api-properties-row`],[`id`,`prop-p-position`,1,`docs-api-properties-row`],[`id`,`prop-p-target`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`ElementRef`],[`pan`,``,1,`docs-api-property-type`,`HTMLElement`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`prop-p-trigger`,1,`docs-api-properties-row`]],template:function(p,n){p&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoPopoverModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-popover.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoPopoverComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-popover`),Kg(),Sk(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),Kg(),Qc(18,`p`),Sk(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),Qc(20,`a`,6)(21,`strong`),Sk(22,`po-tooltip`),Kg()(),Sk(23,`.`),Kg(),Qc(24,`p`),Sk(25,`Para conteúdos maiores recomenda-se o uso do `),Qc(26,`a`,7)(27,`strong`),Sk(28,`po-modal`),Kg()(),Sk(29,`.`),Kg(),Qc(30,`p`),Sk(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),Qc(32,`code`),Sk(33,`right`),Kg(),Sk(34,`, `),Qc(35,`code`),Sk(36,`right-top`),Kg(),Sk(37,`, `),Qc(38,`code`),Sk(39,`right-bottom`),Kg(),Sk(40,`, `),Qc(41,`code`),Sk(42,`top`),Kg(),Sk(43,`, `),Qc(44,`code`),Sk(45,`top-left`),Kg(),Sk(46,`, `),Qc(47,`code`),Sk(48,`top-right`),Kg(),Sk(49,`,
`),Qc(50,`code`),Sk(51,`left`),Kg(),Sk(52,`, `),Qc(53,`code`),Sk(54,`left-top`),Kg(),Sk(55,`, `),Qc(56,`code`),Sk(57,`left-bottom`),Kg(),Sk(58,`, `),Qc(59,`code`),Sk(60,`bottom`),Kg(),Sk(61,`, `),Qc(62,`code`),Sk(63,`bottom-left`),Kg(),Sk(64,` e `),Qc(65,`code`),Sk(66,`bottom-right`),Kg(),Sk(67,`.`),Kg(),Qc(68,`p`),Sk(69,`Também é possível escolher entre os dois eventos que podem abrir o `),Qc(70,`em`),Sk(71,`popover`),Kg(),Sk(72,`.
Os eventos permitidos s\xE3o: `),Qc(73,`code`),Sk(74,`click`),Kg(),Sk(75,` e `),Qc(76,`code`),Sk(77,`hover`),Kg(),Sk(78,`. `),Kg()(),Qc(79,`div`,8)(80,`h4`,9),Sk(81,`Seletor`),Kg(),Qc(82,`pre`,10),Sk(83,`<po-popover
    p-append-in-body="boolean"
    (p-close)="EventEmitter"
    p-custom-classes="string"
    p-hide-arrow="boolean"
    p-offset="number"
    (p-open)="EventEmitter"
    p-position="string"
    p-target="ElementRef | HTMLElement"
    p-title="string"
    p-trigger="string" >
</po-popover>
`),Kg()(),Qc(84,`h4`,11),Sk(85,`Propriedades`),Kg(),Qc(86,`table`,12)(87,`tr`,13)(88,`th`,14),Sk(89,`Nome`),Kg(),Qc(90,`th`,14),Sk(91,`Tipo`),Kg(),Qc(92,`th`,14),Sk(93,`Padrão`),Kg(),Qc(94,`th`,14),Sk(95,`Descrição`),Kg()(),Qc(96,`tr`,15)(97,`td`,16)(98,`div`,17)(99,`span`,18),Sk(100,` p-append-in-body`),vu(101,`br`),Kg()()(),Qc(102,`td`,19)(103,`code`,20),Sk(104,`boolean`),Kg()(),Qc(105,`td`,21)(106,`p`)(107,`code`),Sk(108,`false`),Kg()()(),Qc(109,`td`,22)(110,`em`)(111,`strong`),Sk(112,`(opcional)`),Kg()(),Qc(113,`p`),Sk(114,`Define que o popover será inserido no body da página em vez do elemento definido em `),Qc(115,`code`),Sk(116,`p-target`),Kg(),Sk(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),Kg()()(),Qc(118,`tr`,23)(119,`td`,16)(120,`div`,24)(121,`span`,25),Sk(122,` (p-close)`),vu(123,`br`),Kg()()(),Qc(124,`td`,19)(125,`code`,26),Sk(126,`EventEmitter`),Kg()(),Qc(127,`td`,21),Sk(128,`-`),Kg(),Qc(129,`td`,22)(130,`p`),Sk(131,`Evento disparado ao fechar o popover.`),Kg()()(),Qc(132,`tr`,27)(133,`td`,16)(134,`div`,17)(135,`span`,18),Sk(136,` p-custom-classes`),vu(137,`br`),Kg()()(),Qc(138,`td`,19)(139,`code`,28),Sk(140,`string`),Kg()(),Qc(141,`td`,21),Sk(142,`-`),Kg(),Qc(143,`td`,22)(144,`em`)(145,`strong`),Sk(146,`(opcional)`),Kg()(),Qc(147,`p`),Sk(148,`Permite a inclusão de classes CSS customizadas ao componente.`),Kg(),Qc(149,`p`),Sk(150,`Exemplo: `),Qc(151,`code`),Sk(152,`p-custom-classes="minha-classe-1 minha-classe-2"`),Kg(),Sk(153,`.`),Kg()()(),Qc(154,`tr`,29)(155,`td`,16)(156,`div`,17)(157,`span`,18),Sk(158,` p-hide-arrow`),vu(159,`br`),Kg()()(),Qc(160,`td`,19)(161,`code`,20),Sk(162,`boolean`),Kg()(),Qc(163,`td`,21)(164,`p`)(165,`code`),Sk(166,`false`),Kg()()(),Qc(167,`td`,22)(168,`em`)(169,`strong`),Sk(170,`(opcional)`),Kg()(),Qc(171,`p`),Sk(172,`Desabilita a seta do componente `),Qc(173,`em`),Sk(174,`popover`),Kg(),Sk(175,`.`),Kg()()(),Qc(176,`tr`,30)(177,`td`,16)(178,`div`,17)(179,`span`,18),Sk(180,` p-offset`),vu(181,`br`),Kg()()(),Qc(182,`td`,19)(183,`code`,31),Sk(184,`number`),Kg()(),Qc(185,`td`,21)(186,`p`)(187,`code`),Sk(188,`8`),Kg()()(),Qc(189,`td`,22)(190,`em`)(191,`strong`),Sk(192,`(opcional)`),Kg()(),Qc(193,`p`),Sk(194,`Define o espaçamento (em pixels) entre o componente alvo (`),Qc(195,`code`),Sk(196,`p-target`),Kg(),Sk(197,`) e o `),Qc(198,`code`),Sk(199,`po-popover`),Kg(),Sk(200,`.
\xDAtil para componentes com targets pequenos (como \xEDcones) onde o espa\xE7amento padr\xE3o \xE9
proporcionalmente muito grande e cria desalinhamento visual.`),Kg()()(),Qc(201,`tr`,32)(202,`td`,16)(203,`div`,24)(204,`span`,25),Sk(205,` (p-open)`),vu(206,`br`),Kg()()(),Qc(207,`td`,19)(208,`code`,26),Sk(209,`EventEmitter`),Kg()(),Qc(210,`td`,21),Sk(211,`-`),Kg(),Qc(212,`td`,22)(213,`p`),Sk(214,`Evento disparado ao abrir o popover.`),Kg()()(),Qc(215,`tr`,33)(216,`td`,16)(217,`div`,17)(218,`span`,18),Sk(219,` p-position`),vu(220,`br`),Kg()()(),Qc(221,`td`,19)(222,`code`,28),Sk(223,`string`),Kg()(),Qc(224,`td`,21)(225,`p`),Sk(226,`right`),Kg()(),Qc(227,`td`,22)(228,`em`)(229,`strong`),Sk(230,`(opcional)`),Kg()(),Qc(231,`p`),Sk(232,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),Kg(),Qc(233,`p`),Sk(234,`Posições válidas:`),Kg(),Qc(235,`ul`)(236,`li`)(237,`code`),Sk(238,`right`),Kg(),Sk(239,`: Posiciona o po-popover no lado direito do componente alvo.`),Kg(),Qc(240,`li`)(241,`code`),Sk(242,`right-bottom`),Kg(),Sk(243,`: Posiciona o po-popover no lado direito inferior do componente alvo.`),Kg(),Qc(244,`li`)(245,`code`),Sk(246,`right-top`),Kg(),Sk(247,`: Posiciona o po-popover no lado direito superior do componente alvo.`),Kg(),Qc(248,`li`)(249,`code`),Sk(250,`bottom`),Kg(),Sk(251,`: Posiciona o po-popover abaixo do componente alvo.`),Kg(),Qc(252,`li`)(253,`code`),Sk(254,`bottom-left`),Kg(),Sk(255,`: Posiciona o po-popover abaixo e à esquerda do componente alvo.`),Kg(),Qc(256,`li`)(257,`code`),Sk(258,`bottom-right`),Kg(),Sk(259,`: Posiciona o po-popover abaixo e à direita do componente alvo.`),Kg(),Qc(260,`li`)(261,`code`),Sk(262,`left`),Kg(),Sk(263,`: Posiciona o po-popover no lado esquerdo do componente alvo.`),Kg(),Qc(264,`li`)(265,`code`),Sk(266,`left-top`),Kg(),Sk(267,`: Posiciona o po-popover no lado esquerdo superior do componente alvo.`),Kg(),Qc(268,`li`)(269,`code`),Sk(270,`left-bottom`),Kg(),Sk(271,`: Posiciona o po-popover no lado esquerdo inferior do componente alvo.`),Kg(),Qc(272,`li`)(273,`code`),Sk(274,`top`),Kg(),Sk(275,`: Posiciona o po-popover acima do componente alvo.`),Kg(),Qc(276,`li`)(277,`code`),Sk(278,`top-right`),Kg(),Sk(279,`: Posiciona o po-popover acima e à direita do componente alvo.`),Kg(),Qc(280,`li`)(281,`code`),Sk(282,`top-left`),Kg(),Sk(283,`: Posiciona o po-popover acima e à esquerda do componente alvo.`),Kg()()()(),Qc(284,`tr`,34)(285,`td`,16)(286,`div`,17)(287,`span`,18),Sk(288,` p-target`),vu(289,`br`),Kg()()(),Qc(290,`td`,19)(291,`code`,35),Sk(292,`ElementRef `),Kg(),Qc(293,`code`,36),Sk(294,` HTMLElement`),Kg()(),Qc(295,`td`,21),Sk(296,`-`),Kg(),Qc(297,`td`,22)(298,`p`),Sk(299,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),Kg(),Qc(300,`pre`)(301,`code`),Sk(302,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),Kg()(),Qc(303,`p`),Sk(304,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),Kg(),Qc(305,`pre`)(306,`code`),Sk(307,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),Kg()(),Qc(308,`p`),Sk(309,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),Kg(),Qc(310,`pre`)(311,`code`),Sk(312,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),Kg()()()(),Qc(313,`tr`,37)(314,`td`,16)(315,`div`,17)(316,`span`,18),Sk(317,` p-title`),vu(318,`br`),Kg()()(),Qc(319,`td`,19)(320,`code`,28),Sk(321,`string`),Kg()(),Qc(322,`td`,21),Sk(323,`-`),Kg(),Qc(324,`td`,22)(325,`em`)(326,`strong`),Sk(327,`(opcional)`),Kg()(),Qc(328,`p`),Sk(329,`Título do popover.`),Kg()()(),Qc(330,`tr`,38)(331,`td`,16)(332,`div`,17)(333,`span`,18),Sk(334,` p-trigger`),vu(335,`br`),Kg()()(),Qc(336,`td`,19)(337,`code`,28),Sk(338,`string`),Kg()(),Qc(339,`td`,21)(340,`p`),Sk(341,`click`),Kg()(),Qc(342,`td`,22)(343,`em`)(344,`strong`),Sk(345,`(opcional)`),Kg()(),Qc(346,`p`),Sk(347,`Define o evento que abrirá o po-popover.`),Kg(),Qc(348,`p`),Sk(349,`Valores válidos:`),Kg(),Qc(350,`ul`)(351,`li`)(352,`code`),Sk(353,`click`),Kg(),Sk(354,`: Abre ao clicar no componente alvo.`),Kg(),Qc(355,`li`)(356,`code`),Sk(357,`hover`),Kg(),Sk(358,`: Abre ao passar o mouse sobre o componente alvo.`),Kg(),Qc(359,`li`)(360,`code`),Sk(361,`function`),Kg(),Sk(362,`: Abre através de funções públicas do componente.`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Re(i,qe){if(i&1){let d=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(d);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-popover-basic-view`)(2,`sample-po-popover-labs-view`)(3,`sample-po-popover-credit-card-view`),Kg()}if(i&2){let d=ek();Rb(`p-active`,d.activeTab===`web`)}}var Le=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Popover`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(p,n){p&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Re,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-popover-doc`),Kg()()()),p&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,de,se,ue,ve],encapsulation:2,changeDetection:1})}return i})()}];var fe=(()=>{class i{static ɵfac=function(p){return new(p||i)};static ɵmod=ge({type:i});static ɵinj=de$1({imports:[GV.forChild(Le),GV]})}return i})();var bt=(()=>{class i{static ɵfac=function(p){return new(p||i)};static ɵmod=ge({type:i});static ɵinj=de$1({imports:[M,fe]})}return i})();export{bt as DocPoPopoverModule};