import{n as P,t as M}from"./main-G4GMLTOQ.js";import{Ei as WV,Fi as Z,Fr as Jc,H as Mze,Hi as ar,Ia as sk,Ii as ZO,Ji as eF,Li as Zb,Mi as Y0,Mn as tre,Mt as are,Nr as Ig,Oa as qL,Or as H_,Ot as Zte,Pr as JL,Ri as Zg,Rr as Jn,Ti as W0,U as Nf,Vi as _u,Vr as Kb,X as Pb,Yr as NZ,Zn as $_,Zr as No,an as j4,cr as Bk,ea as ge,eo as xo,er as Ab,fi as RZ,gi as Tk,hi as TZ,ir as BO,j as I4,jr as I,no as yk,nr as An,pr as Cu,qa as vt,qi as de$1,rn as ia,tr as Ak,va as nk,vn as oi,xi as VO,ya as nm}from"./chunk-BJubg121.js";var re=(()=>{class i{poButton;static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-basic`]],viewQuery:function(a,n){if(a&1&&Cu(oi,7,Z),a&2){let d;No(d=xo())&&(n.poButton=d.first)}},standalone:!1,decls:3,vars:1,consts:[[3,`p-target`],[`p-label`,`Open Popover`]],template:function(a,n){a&1&&(Jc(0,`po-popover`,0),Tk(1,` PO Popover `),Zg(),_u(2,`po-button`,1)),a&2&&Ab(`p-target`,n.poButton)},dependencies:[oi,Pb],encapsulation:2,changeDetection:1})}return i})();var be=i=>({"docs-sample-code-tabs":i});var me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Popover Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-popover-basic/sample-po-popover-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-popover-basic/sample-po-popover-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-popover-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,be,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,re],encapsulation:2,changeDetection:1})}return i})();var Se=[`buttonClick`];var Pe=[`buttonHover`];var de=(()=>{class i{buttonClickRef;buttonHoverRef;content=``;position=``;properties=[];title=``;offset=8;positionOptions=[{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`},{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`}];offsetOptions=[{label:`0`,value:0},{label:`4`,value:4},{label:`8 (default)`,value:8},{label:`16`,value:16},{label:`32`,value:32}];propertiesOptions=[{value:`hideArrow`,label:`Hide arrow`}];restore(){this.content=``,this.position=void 0,this.properties=[],this.title=``,this.offset=8}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-labs`]],viewQuery:function(a,n){if(a&1&&Cu(Se,7,Z)(Pe,7,Z),a&2){let d;No(d=xo())&&(n.buttonClickRef=d.first),No(d=xo())&&(n.buttonHoverRef=d.first)}},standalone:!1,decls:24,vars:21,consts:[[`buttonClick`,``],[`buttonHover`,``],[`f`,`ngForm`],[`p-trigger`,`click`,3,`p-hide-arrow`,`p-position`,`p-offset`,`p-target`,`p-title`],[`p-trigger`,`hover`,3,`p-hide-arrow`,`p-position`,`p-offset`,`p-target`,`p-title`],[1,`po-row`],[1,`po-offset-xl-1`,`po-offset-lg-1`,`po-md-6`,`po-lg-3`],[`p-label`,`Popover with click`],[`p-label`,`Popover with hover`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`position`,`p-label`,`Position`,1,`po-md-8`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`offset`,`p-label`,`Offset (px)`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,n){if(a&1){let d=ZO();Jc(0,`po-popover`,3),Tk(1),Zg(),Jc(2,`po-popover`,4),Tk(3),Zg(),Jc(4,`div`,5)(5,`div`,6),_u(6,`po-button`,7,0),Zg(),Jc(8,`div`,6),_u(9,`po-button`,8,1),Zg()(),_u(11,`po-divider`),Jc(12,`form`,null,2)(14,`div`,5)(15,`po-input`,9),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(n.title,l)||(n.title=l),$_(l)}),Zg(),Jc(16,`po-input`,10),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(n.content,l)||(n.content=l),$_(l)}),Zg()(),Jc(17,`div`,5)(18,`po-radio-group`,11),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(n.position,l)||(n.position=l),$_(l)}),Zg(),Jc(19,`po-checkbox-group`,12),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(n.properties,l)||(n.properties=l),$_(l)}),Zg()(),Jc(20,`div`,5)(21,`po-radio-group`,13),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(n.offset,l)||(n.offset=l),$_(l)}),Zg()(),Jc(22,`div`,5)(23,`po-button`,14),vt(`p-click`,function(){return n.restore()}),Zg()()()}a&2&&(Ab(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-offset`,n.offset)(`p-target`,n.buttonClickRef)(`p-title`,n.title),Ig(),nm(` `,n.content,`
`),Ig(),Ab(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-offset`,n.offset)(`p-target`,n.buttonHoverRef)(`p-title`,n.title),Ig(),nm(` `,n.content,`
`),Ig(12),Kb(`ngModel`,n.title),Y0(),Ig(),Kb(`ngModel`,n.content),Y0(),Ig(2),Kb(`ngModel`,n.position),Ab(`p-options`,n.positionOptions),Y0(),Ig(),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),Y0(),Ig(2),Kb(`ngModel`,n.offset),Ab(`p-columns`,5)(`p-options`,n.offsetOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,Zte,Pb],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Popover Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-popover-labs/sample-po-popover-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-popover
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-popover-labs/sample-po-popover-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-popover-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,we,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,de],encapsulation:2,changeDetection:1})}return i})();var _e=[`cardname`];var Te=[`cardcode`];var Me=[`carddate`];var ce=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-credit-card`]],viewQuery:function(a,n){if(a&1&&Cu(_e,7,Z)(Te,7,Z)(Me,7,Z),a&2){let d;No(d=xo())&&(n.cardnameref=d.first),No(d=xo())&&(n.cardcoderef=d.first),No(d=xo())&&(n.carddateref=d.first)}},standalone:!1,decls:28,vars:10,consts:[[`f`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`modalCreditCard`,``],[`p-trigger`,`hover`,3,`p-target`],[`src`,`assets/graphics/card-code.jpg`],[`src`,`assets/graphics/card-date.jpg`],[`src`,`assets/graphics/card-owner.jpg`],[1,`po-row`],[`name`,`inputCardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`inputCardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`inputCardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Confirm`,1,`po-md-2`,3,`click`,`p-disabled`],[`p-title`,`Your Credit Card`]],template:function(a,n){if(a&1){let d=ZO();Jc(0,`po-popover`,5),_u(1,`img`,6),Zg(),Jc(2,`po-popover`,5),_u(3,`img`,7),Zg(),Jc(4,`po-popover`,5),_u(5,`img`,8),Zg(),Jc(6,`form`,null,0)(8,`div`,9)(9,`po-input`,10,1),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(n.inputCardName,l)||(n.inputCardName=l),$_(l)}),Zg(),Jc(11,`po-input`,11,2),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(n.inputCardCode,l)||(n.inputCardCode=l),$_(l)}),Zg(),Jc(13,`po-input`,12,3),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(n.inputCardValid,l)||(n.inputCardValid=l),$_(l)}),Zg()(),Jc(15,`div`,9)(16,`po-button`,13),vt(`click`,function(){H_(d);let l=sk(18);return $_(l.open())}),Zg()()(),Jc(17,`po-modal`,14,4)(19,`div`,9)(20,`div`),Tk(21),Zg()(),Jc(22,`div`,9)(23,`div`),Tk(24),Zg()(),Jc(25,`div`,9)(26,`div`),Tk(27),Zg()()()}if(a&2){let d=sk(7);Ab(`p-target`,n.cardcoderef),Ig(2),Ab(`p-target`,n.carddateref),Ig(2),Ab(`p-target`,n.cardnameref),Ig(5),Kb(`ngModel`,n.inputCardName),Y0(),Ig(2),Kb(`ngModel`,n.inputCardCode),Y0(),Ig(2),Kb(`ngModel`,n.inputCardValid),Y0(),Ig(3),Ab(`p-disabled`,d.form.invalid),Ig(5),nm(`Card Code: `,n.inputCardCode),Ig(3),nm(`Card Expiration: `,n.inputCardValid),Ig(3),nm(`Card Owner: `,n.inputCardName)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,j4,ia,Pb],encapsulation:2,changeDetection:1})}return i})();var ke=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-credit-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Popover - Credit Card`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-popover-credit-card`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,ke,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ce],encapsulation:2,changeDetection:1})}return i})();var ve=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-doc`]],standalone:!1,decls:363,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/documentation/po-tooltip?view=doc`],[`href`,`https://po-ui.io/documentation/po-modal?view=doc`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`ElementRef`],[`pan`,``,1,`docs-api-property-type`,`HTMLElement`]],template:function(a,n){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoPopoverModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-popover.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoPopoverComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-popover`),Zg(),Tk(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),Zg(),Jc(18,`p`),Tk(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),Jc(20,`a`,6)(21,`strong`),Tk(22,`po-tooltip`),Zg()(),Tk(23,`.`),Zg(),Jc(24,`p`),Tk(25,`Para conteúdos maiores recomenda-se o uso do `),Jc(26,`a`,7)(27,`strong`),Tk(28,`po-modal`),Zg()(),Tk(29,`.`),Zg(),Jc(30,`p`),Tk(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),Jc(32,`code`),Tk(33,`right`),Zg(),Tk(34,`, `),Jc(35,`code`),Tk(36,`right-top`),Zg(),Tk(37,`, `),Jc(38,`code`),Tk(39,`right-bottom`),Zg(),Tk(40,`, `),Jc(41,`code`),Tk(42,`top`),Zg(),Tk(43,`, `),Jc(44,`code`),Tk(45,`top-left`),Zg(),Tk(46,`, `),Jc(47,`code`),Tk(48,`top-right`),Zg(),Tk(49,`,
`),Jc(50,`code`),Tk(51,`left`),Zg(),Tk(52,`, `),Jc(53,`code`),Tk(54,`left-top`),Zg(),Tk(55,`, `),Jc(56,`code`),Tk(57,`left-bottom`),Zg(),Tk(58,`, `),Jc(59,`code`),Tk(60,`bottom`),Zg(),Tk(61,`, `),Jc(62,`code`),Tk(63,`bottom-left`),Zg(),Tk(64,` e `),Jc(65,`code`),Tk(66,`bottom-right`),Zg(),Tk(67,`.`),Zg(),Jc(68,`p`),Tk(69,`Também é possível escolher entre os dois eventos que podem abrir o `),Jc(70,`em`),Tk(71,`popover`),Zg(),Tk(72,`.
Os eventos permitidos s\xE3o: `),Jc(73,`code`),Tk(74,`click`),Zg(),Tk(75,` e `),Jc(76,`code`),Tk(77,`hover`),Zg(),Tk(78,`. `),Zg()(),Jc(79,`div`,8)(80,`h4`,9),Tk(81,`Seletor`),Zg(),Jc(82,`pre`,10),Tk(83,`<po-popover
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
`),Zg()(),Jc(84,`h4`,11),Tk(85,`Propriedades`),Zg(),Jc(86,`table`,12)(87,`tr`,13)(88,`th`,14),Tk(89,`Nome`),Zg(),Jc(90,`th`,14),Tk(91,`Tipo`),Zg(),Jc(92,`th`,14),Tk(93,`Padrão`),Zg(),Jc(94,`th`,14),Tk(95,`Descrição`),Zg()(),Jc(96,`tr`,15)(97,`td`,16)(98,`div`,17)(99,`span`,18),Tk(100,` p-append-in-body`),_u(101,`br`),Zg()()(),Jc(102,`td`,19)(103,`code`,20),Tk(104,`boolean`),Zg()(),Jc(105,`td`,21)(106,`p`)(107,`code`),Tk(108,`false`),Zg()()(),Jc(109,`td`,22)(110,`em`)(111,`strong`),Tk(112,`(opcional)`),Zg()(),Jc(113,`p`),Tk(114,`Define que o popover será inserido no body da página em vez do elemento definido em `),Jc(115,`code`),Tk(116,`p-target`),Zg(),Tk(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),Zg()()(),Jc(118,`tr`,15)(119,`td`,16)(120,`div`,23)(121,`span`,24),Tk(122,` (p-close)`),_u(123,`br`),Zg()()(),Jc(124,`td`,19)(125,`code`,25),Tk(126,`EventEmitter`),Zg()(),Jc(127,`td`,21),Tk(128,`-`),Zg(),Jc(129,`td`,22)(130,`p`),Tk(131,`Evento disparado ao fechar o popover.`),Zg()()(),Jc(132,`tr`,15)(133,`td`,16)(134,`div`,17)(135,`span`,18),Tk(136,` p-custom-classes`),_u(137,`br`),Zg()()(),Jc(138,`td`,19)(139,`code`,26),Tk(140,`string`),Zg()(),Jc(141,`td`,21),Tk(142,`-`),Zg(),Jc(143,`td`,22)(144,`em`)(145,`strong`),Tk(146,`(opcional)`),Zg()(),Jc(147,`p`),Tk(148,`Permite a inclusão de classes CSS customizadas ao componente.`),Zg(),Jc(149,`p`),Tk(150,`Exemplo: `),Jc(151,`code`),Tk(152,`p-custom-classes="minha-classe-1 minha-classe-2"`),Zg(),Tk(153,`.`),Zg()()(),Jc(154,`tr`,15)(155,`td`,16)(156,`div`,17)(157,`span`,18),Tk(158,` p-hide-arrow`),_u(159,`br`),Zg()()(),Jc(160,`td`,19)(161,`code`,20),Tk(162,`boolean`),Zg()(),Jc(163,`td`,21)(164,`p`)(165,`code`),Tk(166,`false`),Zg()()(),Jc(167,`td`,22)(168,`em`)(169,`strong`),Tk(170,`(opcional)`),Zg()(),Jc(171,`p`),Tk(172,`Desabilita a seta do componente `),Jc(173,`em`),Tk(174,`popover`),Zg(),Tk(175,`.`),Zg()()(),Jc(176,`tr`,15)(177,`td`,16)(178,`div`,17)(179,`span`,18),Tk(180,` p-offset`),_u(181,`br`),Zg()()(),Jc(182,`td`,19)(183,`code`,27),Tk(184,`number`),Zg()(),Jc(185,`td`,21)(186,`p`)(187,`code`),Tk(188,`8`),Zg()()(),Jc(189,`td`,22)(190,`em`)(191,`strong`),Tk(192,`(opcional)`),Zg()(),Jc(193,`p`),Tk(194,`Define o espaçamento (em pixels) entre o componente alvo (`),Jc(195,`code`),Tk(196,`p-target`),Zg(),Tk(197,`) e o `),Jc(198,`code`),Tk(199,`po-popover`),Zg(),Tk(200,`.
\xDAtil para componentes com targets pequenos (como \xEDcones) onde o espa\xE7amento padr\xE3o \xE9
proporcionalmente muito grande e cria desalinhamento visual.`),Zg()()(),Jc(201,`tr`,15)(202,`td`,16)(203,`div`,23)(204,`span`,24),Tk(205,` (p-open)`),_u(206,`br`),Zg()()(),Jc(207,`td`,19)(208,`code`,25),Tk(209,`EventEmitter`),Zg()(),Jc(210,`td`,21),Tk(211,`-`),Zg(),Jc(212,`td`,22)(213,`p`),Tk(214,`Evento disparado ao abrir o popover.`),Zg()()(),Jc(215,`tr`,15)(216,`td`,16)(217,`div`,17)(218,`span`,18),Tk(219,` p-position`),_u(220,`br`),Zg()()(),Jc(221,`td`,19)(222,`code`,26),Tk(223,`string`),Zg()(),Jc(224,`td`,21)(225,`p`),Tk(226,`right`),Zg()(),Jc(227,`td`,22)(228,`em`)(229,`strong`),Tk(230,`(opcional)`),Zg()(),Jc(231,`p`),Tk(232,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),Zg(),Jc(233,`p`),Tk(234,`Posições válidas:`),Zg(),Jc(235,`ul`)(236,`li`)(237,`code`),Tk(238,`right`),Zg(),Tk(239,`: Posiciona o po-popover no lado direito do componente alvo.`),Zg(),Jc(240,`li`)(241,`code`),Tk(242,`right-bottom`),Zg(),Tk(243,`: Posiciona o po-popover no lado direito inferior do componente alvo.`),Zg(),Jc(244,`li`)(245,`code`),Tk(246,`right-top`),Zg(),Tk(247,`: Posiciona o po-popover no lado direito superior do componente alvo.`),Zg(),Jc(248,`li`)(249,`code`),Tk(250,`bottom`),Zg(),Tk(251,`: Posiciona o po-popover abaixo do componente alvo.`),Zg(),Jc(252,`li`)(253,`code`),Tk(254,`bottom-left`),Zg(),Tk(255,`: Posiciona o po-popover abaixo e à esquerda do componente alvo.`),Zg(),Jc(256,`li`)(257,`code`),Tk(258,`bottom-right`),Zg(),Tk(259,`: Posiciona o po-popover abaixo e à direita do componente alvo.`),Zg(),Jc(260,`li`)(261,`code`),Tk(262,`left`),Zg(),Tk(263,`: Posiciona o po-popover no lado esquerdo do componente alvo.`),Zg(),Jc(264,`li`)(265,`code`),Tk(266,`left-top`),Zg(),Tk(267,`: Posiciona o po-popover no lado esquerdo superior do componente alvo.`),Zg(),Jc(268,`li`)(269,`code`),Tk(270,`left-bottom`),Zg(),Tk(271,`: Posiciona o po-popover no lado esquerdo inferior do componente alvo.`),Zg(),Jc(272,`li`)(273,`code`),Tk(274,`top`),Zg(),Tk(275,`: Posiciona o po-popover acima do componente alvo.`),Zg(),Jc(276,`li`)(277,`code`),Tk(278,`top-right`),Zg(),Tk(279,`: Posiciona o po-popover acima e à direita do componente alvo.`),Zg(),Jc(280,`li`)(281,`code`),Tk(282,`top-left`),Zg(),Tk(283,`: Posiciona o po-popover acima e à esquerda do componente alvo.`),Zg()()()(),Jc(284,`tr`,15)(285,`td`,16)(286,`div`,17)(287,`span`,18),Tk(288,` p-target`),_u(289,`br`),Zg()()(),Jc(290,`td`,19)(291,`code`,28),Tk(292,`ElementRef `),Zg(),Jc(293,`code`,29),Tk(294,` HTMLElement`),Zg()(),Jc(295,`td`,21),Tk(296,`-`),Zg(),Jc(297,`td`,22)(298,`p`),Tk(299,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),Zg(),Jc(300,`pre`)(301,`code`),Tk(302,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),Zg()(),Jc(303,`p`),Tk(304,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),Zg(),Jc(305,`pre`)(306,`code`),Tk(307,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),Zg()(),Jc(308,`p`),Tk(309,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),Zg(),Jc(310,`pre`)(311,`code`),Tk(312,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),Zg()()()(),Jc(313,`tr`,15)(314,`td`,16)(315,`div`,17)(316,`span`,18),Tk(317,` p-title`),_u(318,`br`),Zg()()(),Jc(319,`td`,19)(320,`code`,26),Tk(321,`string`),Zg()(),Jc(322,`td`,21),Tk(323,`-`),Zg(),Jc(324,`td`,22)(325,`em`)(326,`strong`),Tk(327,`(opcional)`),Zg()(),Jc(328,`p`),Tk(329,`Título do popover.`),Zg()()(),Jc(330,`tr`,15)(331,`td`,16)(332,`div`,17)(333,`span`,18),Tk(334,` p-trigger`),_u(335,`br`),Zg()()(),Jc(336,`td`,19)(337,`code`,26),Tk(338,`string`),Zg()(),Jc(339,`td`,21)(340,`p`),Tk(341,`click`),Zg()(),Jc(342,`td`,22)(343,`em`)(344,`strong`),Tk(345,`(opcional)`),Zg()(),Jc(346,`p`),Tk(347,`Define o evento que abrirá o po-popover.`),Zg(),Jc(348,`p`),Tk(349,`Valores válidos:`),Zg(),Jc(350,`ul`)(351,`li`)(352,`code`),Tk(353,`click`),Zg(),Tk(354,`: Abre ao clicar no componente alvo.`),Zg(),Jc(355,`li`)(356,`code`),Tk(357,`hover`),Zg(),Tk(358,`: Abre ao passar o mouse sobre o componente alvo.`),Zg(),Jc(359,`li`)(360,`code`),Tk(361,`function`),Zg(),Tk(362,`: Abre através de funções públicas do componente.`),Zg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Re(i,qe){if(i&1){let m=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(m);let n=nk();return $_(n.changeTab(`web`))}),_u(1,`sample-po-popover-basic-view`)(2,`sample-po-popover-labs-view`)(3,`sample-po-popover-credit-card-view`),Zg()}if(i&2){let m=nk();Ab(`p-active`,m.activeTab===`web`)}}var Le=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Popover`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,n){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Re,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),_u(4,`sample-po-popover-doc`),Zg()()()),a&2&&(Ab(`p-actions`,n.actions),Ig(2),BO(n.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,me,se,ue,ve],encapsulation:2,changeDetection:1})}return i})()}];var fe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge({type:i});static ɵinj=de$1({imports:[WV.forChild(Le),WV]})}return i})();var bt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge({type:i});static ɵinj=de$1({imports:[M,fe]})}return i})();export{bt as DocPoPopoverModule};