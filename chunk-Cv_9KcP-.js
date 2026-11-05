import{$r as RK,Ai as Zn,Br as MK,C as G4,Ca as o0,Ci as Xx,Ga as vo,Ia as rg,Ii as ab,Jr as Ok,Ka as vx,La as sb,Li as b,Mi as __,Mn as ure,Nr as I1,Oa as pe,Oi as Z,Pa as r0,Qa as xF,Ra as uO,Sa as nu,Sn as ri,Tr as Fx,Ua as v_,Ut as ea,Xa as wg,Z as P4,_r as Dx,_t as Vze,aa as ir,at as Sb,ca as jc,di as UE,fr as DO,ha as lO,ii as SK,io as yo,ir as Ax,ln as lre,oa as iu,oi as Sn,ri as SF,rr as Ag,sr as Bx,tt as Qte,x as Ff,ya as mt,za as ue$1}from"./chunk-CtaZqRb_.js";import{n as P,t as M}from"./main-ZQ7GH27Y.js";var re=(()=>{class i{poButton;static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-popover-basic`]],viewQuery:function(a,n){if(a&1&&iu(ri,7,Z),a&2){let d;yo(d=vo())&&(n.poButton=d.first)}},standalone:!1,decls:3,vars:1,consts:[[3,`p-target`],[`p-label`,`Open Popover`]],template:function(a,n){a&1&&(jc(0,`po-popover`,0),lO(1,` PO Popover `),wg(),nu(2,`po-button`,1)),a&2&&UE(`p-target`,n.poButton)},dependencies:[ri,Sb],encapsulation:2,changeDetection:1})}return i})();var be=i=>({"docs-sample-code-tabs":i});var me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-popover-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Popover Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-popover-basic/sample-po-popover-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-popover-basic/sample-po-popover-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-popover-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,be,n.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,re],encapsulation:2,changeDetection:1})}return i})();var Se=[`buttonClick`];var Pe=[`buttonHover`];var de=(()=>{class i{buttonClickRef;buttonHoverRef;content=``;position=``;properties=[];title=``;offset=8;positionOptions=[{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`},{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`}];offsetOptions=[{label:`0`,value:0},{label:`4`,value:4},{label:`8 (default)`,value:8},{label:`16`,value:16},{label:`32`,value:32}];propertiesOptions=[{value:`hideArrow`,label:`Hide arrow`}];restore(){this.content=``,this.position=void 0,this.properties=[],this.title=``,this.offset=8}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-popover-labs`]],viewQuery:function(a,n){if(a&1&&iu(Se,7,Z)(Pe,7,Z),a&2){let d;yo(d=vo())&&(n.buttonClickRef=d.first),yo(d=vo())&&(n.buttonHoverRef=d.first)}},standalone:!1,decls:24,vars:21,consts:[[`buttonClick`,``],[`buttonHover`,``],[`f`,`ngForm`],[`p-trigger`,`click`,3,`p-hide-arrow`,`p-position`,`p-offset`,`p-target`,`p-title`],[`p-trigger`,`hover`,3,`p-hide-arrow`,`p-position`,`p-offset`,`p-target`,`p-title`],[1,`po-row`],[1,`po-offset-xl-1`,`po-offset-lg-1`,`po-md-6`,`po-lg-3`],[`p-label`,`Popover with click`],[`p-label`,`Popover with hover`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`position`,`p-label`,`Position`,1,`po-md-8`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`offset`,`p-label`,`Offset (px)`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,n){if(a&1){let d=Ax();jc(0,`po-popover`,3),lO(1),wg(),jc(2,`po-popover`,4),lO(3),wg(),jc(4,`div`,5)(5,`div`,6),nu(6,`po-button`,7,0),wg(),jc(8,`div`,6),nu(9,`po-button`,8,1),wg()(),nu(11,`po-divider`),jc(12,`form`,null,2)(14,`div`,5)(15,`po-input`,9),r0(),ab(`ngModelChange`,function(l){return v_(d),uO(n.title,l)||(n.title=l),__(l)}),wg(),jc(16,`po-input`,10),r0(),ab(`ngModelChange`,function(l){return v_(d),uO(n.content,l)||(n.content=l),__(l)}),wg()(),jc(17,`div`,5)(18,`po-radio-group`,11),r0(),ab(`ngModelChange`,function(l){return v_(d),uO(n.position,l)||(n.position=l),__(l)}),wg(),jc(19,`po-checkbox-group`,12),r0(),ab(`ngModelChange`,function(l){return v_(d),uO(n.properties,l)||(n.properties=l),__(l)}),wg()(),jc(20,`div`,5)(21,`po-radio-group`,13),r0(),ab(`ngModelChange`,function(l){return v_(d),uO(n.offset,l)||(n.offset=l),__(l)}),wg()(),jc(22,`div`,5)(23,`po-button`,14),mt(`p-click`,function(){return n.restore()}),wg()()()}a&2&&(UE(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-offset`,n.offset)(`p-target`,n.buttonClickRef)(`p-title`,n.title),rg(),Ag(` `,n.content,`
`),rg(),UE(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-offset`,n.offset)(`p-target`,n.buttonHoverRef)(`p-title`,n.title),rg(),Ag(` `,n.content,`
`),rg(12),sb(`ngModel`,n.title),o0(),rg(),sb(`ngModel`,n.content),o0(),rg(2),sb(`ngModel`,n.position),UE(`p-options`,n.positionOptions),o0(),rg(),sb(`ngModel`,n.properties),UE(`p-options`,n.propertiesOptions),o0(),rg(2),sb(`ngModel`,n.offset),UE(`p-columns`,5)(`p-options`,n.offsetOptions),o0())},dependencies:[RK,SK,MK,xF,SF,ri,Ff,P4,G4,Qte,Sb],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-popover-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Popover Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-popover-labs/sample-po-popover-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-popover
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-popover-labs/sample-po-popover-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-popover-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,we,n.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,de],encapsulation:2,changeDetection:1})}return i})();var _e=[`cardname`];var Te=[`cardcode`];var Me=[`carddate`];var ce=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-popover-credit-card`]],viewQuery:function(a,n){if(a&1&&iu(_e,7,Z)(Te,7,Z)(Me,7,Z),a&2){let d;yo(d=vo())&&(n.cardnameref=d.first),yo(d=vo())&&(n.cardcoderef=d.first),yo(d=vo())&&(n.carddateref=d.first)}},standalone:!1,decls:28,vars:10,consts:[[`f`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`modalCreditCard`,``],[`p-trigger`,`hover`,3,`p-target`],[`src`,`assets/graphics/card-code.jpg`],[`src`,`assets/graphics/card-date.jpg`],[`src`,`assets/graphics/card-owner.jpg`],[1,`po-row`],[`name`,`inputCardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`inputCardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`inputCardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Confirm`,1,`po-md-2`,3,`click`,`p-disabled`],[`p-title`,`Your Credit Card`]],template:function(a,n){if(a&1){let d=Ax();jc(0,`po-popover`,5),nu(1,`img`,6),wg(),jc(2,`po-popover`,5),nu(3,`img`,7),wg(),jc(4,`po-popover`,5),nu(5,`img`,8),wg(),jc(6,`form`,null,0)(8,`div`,9)(9,`po-input`,10,1),r0(),ab(`ngModelChange`,function(l){return v_(d),uO(n.inputCardName,l)||(n.inputCardName=l),__(l)}),wg(),jc(11,`po-input`,11,2),r0(),ab(`ngModelChange`,function(l){return v_(d),uO(n.inputCardCode,l)||(n.inputCardCode=l),__(l)}),wg(),jc(13,`po-input`,12,3),r0(),ab(`ngModelChange`,function(l){return v_(d),uO(n.inputCardValid,l)||(n.inputCardValid=l),__(l)}),wg()(),jc(15,`div`,9)(16,`po-button`,13),mt(`click`,function(){v_(d);let l=Bx(18);return __(l.open())}),wg()()(),jc(17,`po-modal`,14,4)(19,`div`,9)(20,`div`),lO(21),wg()(),jc(22,`div`,9)(23,`div`),lO(24),wg()(),jc(25,`div`,9)(26,`div`),lO(27),wg()()()}if(a&2){let d=Bx(7);UE(`p-target`,n.cardcoderef),rg(2),UE(`p-target`,n.carddateref),rg(2),UE(`p-target`,n.cardnameref),rg(5),sb(`ngModel`,n.inputCardName),o0(),rg(2),sb(`ngModel`,n.inputCardCode),o0(),rg(2),sb(`ngModel`,n.inputCardValid),o0(),rg(3),UE(`p-disabled`,d.form.invalid),rg(5),Ag(`Card Code: `,n.inputCardCode),rg(3),Ag(`Card Expiration: `,n.inputCardValid),rg(3),Ag(`Card Owner: `,n.inputCardName)}},dependencies:[RK,SK,MK,xF,SF,ri,G4,ea,Sb],encapsulation:2,changeDetection:1})}return i})();var ke=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-popover-credit-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Popover - Credit Card`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-popover-credit-card`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ke,n.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,ce],encapsulation:2,changeDetection:1})}return i})();var ve=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-popover-doc`]],standalone:!1,decls:363,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/documentation/po-tooltip?view=doc`],[`href`,`https://po-ui.io/documentation/po-modal?view=doc`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`ElementRef`],[`pan`,``,1,`docs-api-property-type`,`HTMLElement`]],template:function(a,n){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoPopoverModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-popover.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoPopoverComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O componente `),jc(15,`code`),lO(16,`po-popover`),wg(),lO(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),wg(),jc(18,`p`),lO(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),jc(20,`a`,6)(21,`strong`),lO(22,`po-tooltip`),wg()(),lO(23,`.`),wg(),jc(24,`p`),lO(25,`Para conteúdos maiores recomenda-se o uso do `),jc(26,`a`,7)(27,`strong`),lO(28,`po-modal`),wg()(),lO(29,`.`),wg(),jc(30,`p`),lO(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),jc(32,`code`),lO(33,`right`),wg(),lO(34,`, `),jc(35,`code`),lO(36,`right-top`),wg(),lO(37,`, `),jc(38,`code`),lO(39,`right-bottom`),wg(),lO(40,`, `),jc(41,`code`),lO(42,`top`),wg(),lO(43,`, `),jc(44,`code`),lO(45,`top-left`),wg(),lO(46,`, `),jc(47,`code`),lO(48,`top-right`),wg(),lO(49,`,
`),jc(50,`code`),lO(51,`left`),wg(),lO(52,`, `),jc(53,`code`),lO(54,`left-top`),wg(),lO(55,`, `),jc(56,`code`),lO(57,`left-bottom`),wg(),lO(58,`, `),jc(59,`code`),lO(60,`bottom`),wg(),lO(61,`, `),jc(62,`code`),lO(63,`bottom-left`),wg(),lO(64,` e `),jc(65,`code`),lO(66,`bottom-right`),wg(),lO(67,`.`),wg(),jc(68,`p`),lO(69,`Também é possível escolher entre os dois eventos que podem abrir o `),jc(70,`em`),lO(71,`popover`),wg(),lO(72,`.
Os eventos permitidos s\xE3o: `),jc(73,`code`),lO(74,`click`),wg(),lO(75,` e `),jc(76,`code`),lO(77,`hover`),wg(),lO(78,`. `),wg()(),jc(79,`div`,8)(80,`h4`,9),lO(81,`Seletor`),wg(),jc(82,`pre`,10),lO(83,`<po-popover
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
`),wg()(),jc(84,`h4`,11),lO(85,`Propriedades`),wg(),jc(86,`table`,12)(87,`tr`,13)(88,`th`,14),lO(89,`Nome`),wg(),jc(90,`th`,14),lO(91,`Tipo`),wg(),jc(92,`th`,14),lO(93,`Padrão`),wg(),jc(94,`th`,14),lO(95,`Descrição`),wg()(),jc(96,`tr`,15)(97,`td`,16)(98,`div`,17)(99,`span`,18),lO(100,` p-append-in-body`),nu(101,`br`),wg()()(),jc(102,`td`,19)(103,`code`,20),lO(104,`boolean`),wg()(),jc(105,`td`,21)(106,`p`)(107,`code`),lO(108,`false`),wg()()(),jc(109,`td`,22)(110,`em`)(111,`strong`),lO(112,`(opcional)`),wg()(),jc(113,`p`),lO(114,`Define que o popover será inserido no body da página em vez do elemento definido em `),jc(115,`code`),lO(116,`p-target`),wg(),lO(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),wg()()(),jc(118,`tr`,15)(119,`td`,16)(120,`div`,23)(121,`span`,24),lO(122,` (p-close)`),nu(123,`br`),wg()()(),jc(124,`td`,19)(125,`code`,25),lO(126,`EventEmitter`),wg()(),jc(127,`td`,21),lO(128,`-`),wg(),jc(129,`td`,22)(130,`p`),lO(131,`Evento disparado ao fechar o popover.`),wg()()(),jc(132,`tr`,15)(133,`td`,16)(134,`div`,17)(135,`span`,18),lO(136,` p-custom-classes`),nu(137,`br`),wg()()(),jc(138,`td`,19)(139,`code`,26),lO(140,`string`),wg()(),jc(141,`td`,21),lO(142,`-`),wg(),jc(143,`td`,22)(144,`em`)(145,`strong`),lO(146,`(opcional)`),wg()(),jc(147,`p`),lO(148,`Permite a inclusão de classes CSS customizadas ao componente.`),wg(),jc(149,`p`),lO(150,`Exemplo: `),jc(151,`code`),lO(152,`p-custom-classes="minha-classe-1 minha-classe-2"`),wg(),lO(153,`.`),wg()()(),jc(154,`tr`,15)(155,`td`,16)(156,`div`,17)(157,`span`,18),lO(158,` p-hide-arrow`),nu(159,`br`),wg()()(),jc(160,`td`,19)(161,`code`,20),lO(162,`boolean`),wg()(),jc(163,`td`,21)(164,`p`)(165,`code`),lO(166,`false`),wg()()(),jc(167,`td`,22)(168,`em`)(169,`strong`),lO(170,`(opcional)`),wg()(),jc(171,`p`),lO(172,`Desabilita a seta do componente `),jc(173,`em`),lO(174,`popover`),wg(),lO(175,`.`),wg()()(),jc(176,`tr`,15)(177,`td`,16)(178,`div`,17)(179,`span`,18),lO(180,` p-offset`),nu(181,`br`),wg()()(),jc(182,`td`,19)(183,`code`,27),lO(184,`number`),wg()(),jc(185,`td`,21)(186,`p`)(187,`code`),lO(188,`8`),wg()()(),jc(189,`td`,22)(190,`em`)(191,`strong`),lO(192,`(opcional)`),wg()(),jc(193,`p`),lO(194,`Define o espaçamento (em pixels) entre o componente alvo (`),jc(195,`code`),lO(196,`p-target`),wg(),lO(197,`) e o `),jc(198,`code`),lO(199,`po-popover`),wg(),lO(200,`.
\xDAtil para componentes com targets pequenos (como \xEDcones) onde o espa\xE7amento padr\xE3o \xE9
proporcionalmente muito grande e cria desalinhamento visual.`),wg()()(),jc(201,`tr`,15)(202,`td`,16)(203,`div`,23)(204,`span`,24),lO(205,` (p-open)`),nu(206,`br`),wg()()(),jc(207,`td`,19)(208,`code`,25),lO(209,`EventEmitter`),wg()(),jc(210,`td`,21),lO(211,`-`),wg(),jc(212,`td`,22)(213,`p`),lO(214,`Evento disparado ao abrir o popover.`),wg()()(),jc(215,`tr`,15)(216,`td`,16)(217,`div`,17)(218,`span`,18),lO(219,` p-position`),nu(220,`br`),wg()()(),jc(221,`td`,19)(222,`code`,26),lO(223,`string`),wg()(),jc(224,`td`,21)(225,`p`),lO(226,`right`),wg()(),jc(227,`td`,22)(228,`em`)(229,`strong`),lO(230,`(opcional)`),wg()(),jc(231,`p`),lO(232,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),wg(),jc(233,`p`),lO(234,`Posições válidas:`),wg(),jc(235,`ul`)(236,`li`)(237,`code`),lO(238,`right`),wg(),lO(239,`: Posiciona o po-popover no lado direito do componente alvo.`),wg(),jc(240,`li`)(241,`code`),lO(242,`right-bottom`),wg(),lO(243,`: Posiciona o po-popover no lado direito inferior do componente alvo.`),wg(),jc(244,`li`)(245,`code`),lO(246,`right-top`),wg(),lO(247,`: Posiciona o po-popover no lado direito superior do componente alvo.`),wg(),jc(248,`li`)(249,`code`),lO(250,`bottom`),wg(),lO(251,`: Posiciona o po-popover abaixo do componente alvo.`),wg(),jc(252,`li`)(253,`code`),lO(254,`bottom-left`),wg(),lO(255,`: Posiciona o po-popover abaixo e à esquerda do componente alvo.`),wg(),jc(256,`li`)(257,`code`),lO(258,`bottom-right`),wg(),lO(259,`: Posiciona o po-popover abaixo e à direita do componente alvo.`),wg(),jc(260,`li`)(261,`code`),lO(262,`left`),wg(),lO(263,`: Posiciona o po-popover no lado esquerdo do componente alvo.`),wg(),jc(264,`li`)(265,`code`),lO(266,`left-top`),wg(),lO(267,`: Posiciona o po-popover no lado esquerdo superior do componente alvo.`),wg(),jc(268,`li`)(269,`code`),lO(270,`left-bottom`),wg(),lO(271,`: Posiciona o po-popover no lado esquerdo inferior do componente alvo.`),wg(),jc(272,`li`)(273,`code`),lO(274,`top`),wg(),lO(275,`: Posiciona o po-popover acima do componente alvo.`),wg(),jc(276,`li`)(277,`code`),lO(278,`top-right`),wg(),lO(279,`: Posiciona o po-popover acima e à direita do componente alvo.`),wg(),jc(280,`li`)(281,`code`),lO(282,`top-left`),wg(),lO(283,`: Posiciona o po-popover acima e à esquerda do componente alvo.`),wg()()()(),jc(284,`tr`,15)(285,`td`,16)(286,`div`,17)(287,`span`,18),lO(288,` p-target`),nu(289,`br`),wg()()(),jc(290,`td`,19)(291,`code`,28),lO(292,`ElementRef `),wg(),jc(293,`code`,29),lO(294,` HTMLElement`),wg()(),jc(295,`td`,21),lO(296,`-`),wg(),jc(297,`td`,22)(298,`p`),lO(299,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),wg(),jc(300,`pre`)(301,`code`),lO(302,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),wg()(),jc(303,`p`),lO(304,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),wg(),jc(305,`pre`)(306,`code`),lO(307,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),wg()(),jc(308,`p`),lO(309,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),wg(),jc(310,`pre`)(311,`code`),lO(312,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),wg()()()(),jc(313,`tr`,15)(314,`td`,16)(315,`div`,17)(316,`span`,18),lO(317,` p-title`),nu(318,`br`),wg()()(),jc(319,`td`,19)(320,`code`,26),lO(321,`string`),wg()(),jc(322,`td`,21),lO(323,`-`),wg(),jc(324,`td`,22)(325,`em`)(326,`strong`),lO(327,`(opcional)`),wg()(),jc(328,`p`),lO(329,`Título do popover.`),wg()()(),jc(330,`tr`,15)(331,`td`,16)(332,`div`,17)(333,`span`,18),lO(334,` p-trigger`),nu(335,`br`),wg()()(),jc(336,`td`,19)(337,`code`,26),lO(338,`string`),wg()(),jc(339,`td`,21)(340,`p`),lO(341,`click`),wg()(),jc(342,`td`,22)(343,`em`)(344,`strong`),lO(345,`(opcional)`),wg()(),jc(346,`p`),lO(347,`Define o evento que abrirá o po-popover.`),wg(),jc(348,`p`),lO(349,`Valores válidos:`),wg(),jc(350,`ul`)(351,`li`)(352,`code`),lO(353,`click`),wg(),lO(354,`: Abre ao clicar no componente alvo.`),wg(),jc(355,`li`)(356,`code`),lO(357,`hover`),wg(),lO(358,`: Abre ao passar o mouse sobre o componente alvo.`),wg(),jc(359,`li`)(360,`code`),lO(361,`function`),wg(),lO(362,`: Abre através de funções públicas do componente.`),wg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Re(i,qe){if(i&1){let m=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(m);let n=Fx();return __(n.changeTab(`web`))}),nu(1,`sample-po-popover-basic-view`)(2,`sample-po-popover-labs-view`)(3,`sample-po-popover-credit-card-view`),wg()}if(i&2){let m=Fx();UE(`p-active`,m.activeTab===`web`)}}var Le=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Popover`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,n){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Re,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(4,`sample-po-popover-doc`),wg()()()),a&2&&(UE(`p-actions`,n.actions),rg(2),Dx(n.hidePoWebSample?-1:2),rg(),UE(`p-active`,n.activeTab===`doc`))},dependencies:[Vze,lre,ure,me,se,ue,ve],encapsulation:2,changeDetection:1})}return i})()}];var fe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe({type:i});static ɵinj=ue$1({imports:[I1.forChild(Le),I1]})}return i})();var bt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe({type:i});static ɵinj=ue$1({imports:[M,fe]})}return i})();export{bt as DocPoPopoverModule};