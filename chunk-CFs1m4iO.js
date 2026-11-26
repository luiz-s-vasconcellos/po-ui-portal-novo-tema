import{m as P,p as M}from"./main-ZE6YMYJ4.js";import{$ as Py,$r as No,$t as ia,Ba as q0,Bi as Z,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,M as I4,Mi as WL,Mt as Zte,Na as ok,Pr as I,Qn as AZ,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,ar as B_,ca as ge$1,do as xo,ea as de$1,er as Ab,fn as oi,fr as Cu,ja as nm,jr as H_,li as QL,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,va as j_,vi as Rk,zr as KO}from"./chunk-CTJH0VS3.js";var re=(()=>{class i{poButton;static ɵfac=function(p){return new(p||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-basic`]],viewQuery:function(p,n){if(p&1&&Cu(oi,7,Z),p&2){let d;No(d=xo())&&(n.poButton=d.first)}},standalone:!1,decls:3,vars:1,consts:[[3,`p-target`],[`p-label`,`Open Popover`]],template:function(p,n){p&1&&(Jc(0,`po-popover`,0),Mk(1,` PO Popover `),Kg(),_u(2,`po-button`,1)),p&2&&Ab(`p-target`,n.poButton)},dependencies:[oi,Py],encapsulation:2,changeDetection:1})}return i})();var le=(()=>{class i{static ɵfac=function(p){return new(p||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-popover-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-popover-basic/sample-po-popover-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-popover-basic/sample-po-popover-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Popover Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-popover-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-popover-basic/sample-po-popover-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-popover-basic/sample-po-popover-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,re],encapsulation:2,changeDetection:1})}return i})();var Ee=[`buttonClick`];var he=[`buttonHover`];var de=(()=>{class i{buttonClickRef;buttonHoverRef;content=``;position=``;properties=[];title=``;offset=8;positionOptions=[{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`},{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`}];offsetOptions=[{label:`0`,value:0},{label:`4`,value:4},{label:`8 (default)`,value:8},{label:`16`,value:16},{label:`32`,value:32}];propertiesOptions=[{value:`hideArrow`,label:`Hide arrow`}];restore(){this.content=``,this.position=void 0,this.properties=[],this.title=``,this.offset=8}static ɵfac=function(p){return new(p||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-labs`]],viewQuery:function(p,n){if(p&1&&Cu(Ee,7,Z)(he,7,Z),p&2){let d;No(d=xo())&&(n.buttonClickRef=d.first),No(d=xo())&&(n.buttonHoverRef=d.first)}},standalone:!1,decls:24,vars:21,consts:[[`buttonClick`,``],[`buttonHover`,``],[`f`,`ngForm`],[`p-trigger`,`click`,3,`p-hide-arrow`,`p-position`,`p-offset`,`p-target`,`p-title`],[`p-trigger`,`hover`,3,`p-hide-arrow`,`p-position`,`p-offset`,`p-target`,`p-title`],[1,`po-row`],[1,`po-offset-xl-1`,`po-offset-lg-1`,`po-md-6`,`po-lg-3`],[`p-label`,`Popover with click`],[`p-label`,`Popover with hover`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`position`,`p-label`,`Position`,1,`po-md-8`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`offset`,`p-label`,`Offset (px)`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(p,n){if(p&1){let d=KO();Jc(0,`po-popover`,3),Mk(1),Kg(),Jc(2,`po-popover`,4),Mk(3),Kg(),Jc(4,`div`,5)(5,`div`,6),_u(6,`po-button`,7,0),Kg(),Jc(8,`div`,6),_u(9,`po-button`,8,1),Kg()(),_u(11,`po-divider`),Jc(12,`form`,null,2)(14,`div`,5)(15,`po-input`,9),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(n.title,r)||(n.title=r),H_(r)}),Kg(),Jc(16,`po-input`,10),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(n.content,r)||(n.content=r),H_(r)}),Kg()(),Jc(17,`div`,5)(18,`po-radio-group`,11),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(n.position,r)||(n.position=r),H_(r)}),Kg(),Jc(19,`po-checkbox-group`,12),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(n.properties,r)||(n.properties=r),H_(r)}),Kg()(),Jc(20,`div`,5)(21,`po-radio-group`,13),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(n.offset,r)||(n.offset=r),H_(r)}),Kg()(),Jc(22,`div`,5)(23,`po-button`,14),_t(`p-click`,function(){return n.restore()}),Kg()()()}p&2&&(Ab(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-offset`,n.offset)(`p-target`,n.buttonClickRef)(`p-title`,n.title),wg(),nm(` `,n.content,`
`),wg(),Ab(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-offset`,n.offset)(`p-target`,n.buttonHoverRef)(`p-title`,n.title),wg(),nm(` `,n.content,`
`),wg(12),Kb(`ngModel`,n.title),q0(),wg(),Kb(`ngModel`,n.content),q0(),wg(2),Kb(`ngModel`,n.position),Ab(`p-options`,n.positionOptions),q0(),wg(),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),q0(),wg(2),Kb(`ngModel`,n.offset),Ab(`p-columns`,5)(`p-options`,n.offsetOptions),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,Zte,Py],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{static ɵfac=function(p){return new(p||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-labs-view`]],standalone:!1,decls:36,vars:0,consts:[[`id`,`sample-po-popover-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-popover-labs/sample-po-popover-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-popover-labs/sample-po-popover-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Popover Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-popover-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-popover-labs/sample-po-popover-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-popover
  p-trigger="click"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-offset]="offset"
  [p-target]="buttonClickRef"
  [p-title]="title"
>
  `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` content `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`
</po-popover>

<po-popover
  p-trigger="hover"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-offset]="offset"
  [p-target]="buttonHoverRef"
  [p-title]="title"
>
  `),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` content `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`
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
`),Kg()()()(),Jc(28,`po-tab`,10)(29,`div`)(30,`label`,7),Mk(31,`sample-po-popover-labs/sample-po-popover-labs.component.ts`),Kg(),Jc(32,`div`,11)(33,`pre`,12),Mk(34,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(35,`hr`))},dependencies:[P,tre,are,de],encapsulation:2,changeDetection:1})}return i})();var xe=[`cardname`];var we=[`cardcode`];var ye=[`carddate`];var se=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static ɵfac=function(p){return new(p||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-credit-card`]],viewQuery:function(p,n){if(p&1&&Cu(xe,7,Z)(we,7,Z)(ye,7,Z),p&2){let d;No(d=xo())&&(n.cardnameref=d.first),No(d=xo())&&(n.cardcoderef=d.first),No(d=xo())&&(n.carddateref=d.first)}},standalone:!1,decls:28,vars:10,consts:[[`f`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`modalCreditCard`,``],[`p-trigger`,`hover`,3,`p-target`],[`src`,`assets/graphics/card-code.jpg`],[`src`,`assets/graphics/card-date.jpg`],[`src`,`assets/graphics/card-owner.jpg`],[1,`po-row`],[`name`,`inputCardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`inputCardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`inputCardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Confirm`,1,`po-md-2`,3,`click`,`p-disabled`],[`p-title`,`Your Credit Card`]],template:function(p,n){if(p&1){let d=KO();Jc(0,`po-popover`,5),_u(1,`img`,6),Kg(),Jc(2,`po-popover`,5),_u(3,`img`,7),Kg(),Jc(4,`po-popover`,5),_u(5,`img`,8),Kg(),Jc(6,`form`,null,0)(8,`div`,9)(9,`po-input`,10,1),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(n.inputCardName,r)||(n.inputCardName=r),H_(r)}),Kg(),Jc(11,`po-input`,11,2),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(n.inputCardCode,r)||(n.inputCardCode=r),H_(r)}),Kg(),Jc(13,`po-input`,12,3),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(n.inputCardValid,r)||(n.inputCardValid=r),H_(r)}),Kg()(),Jc(15,`div`,9)(16,`po-button`,13),_t(`click`,function(){U_(d);let r=ok(18);return H_(r.open())}),Kg()()(),Jc(17,`po-modal`,14,4)(19,`div`,9)(20,`div`),Mk(21),Kg()(),Jc(22,`div`,9)(23,`div`),Mk(24),Kg()(),Jc(25,`div`,9)(26,`div`),Mk(27),Kg()()()}if(p&2){let d=ok(7);Ab(`p-target`,n.cardcoderef),wg(2),Ab(`p-target`,n.carddateref),wg(2),Ab(`p-target`,n.cardnameref),wg(5),Kb(`ngModel`,n.inputCardName),q0(),wg(2),Kb(`ngModel`,n.inputCardCode),q0(),wg(2),Kb(`ngModel`,n.inputCardValid),q0(),wg(3),Ab(`p-disabled`,d.form.invalid),wg(5),nm(`Card Code: `,n.inputCardCode),wg(3),nm(`Card Expiration: `,n.inputCardValid),wg(3),nm(`Card Owner: `,n.inputCardName)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,j4,ia,Py],encapsulation:2,changeDetection:1})}return i})();var ce=(()=>{class i{static ɵfac=function(p){return new(p||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-credit-card-view`]],standalone:!1,decls:42,vars:0,consts:[[`id`,`sample-po-popover-credit-card`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Popover - Credit Card`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-popover-credit-card`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
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
    <div>Card Code: `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` inputCardCode `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</div>
  </div>
  <div class="po-row">
    <div>Card Expiration: `),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` inputCardValid `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`</div>
  </div>
  <div class="po-row">
    <div>Card Owner: `),Jc(28,`span`),B_(),Mk(29,`{{`),j_(),Kg(),Mk(30,` inputCardName `),Jc(31,`span`),B_(),Mk(32,`}}`),j_(),Kg(),Mk(33,`</div>
  </div>
</po-modal>
`),Kg()()()(),Jc(34,`po-tab`,10)(35,`div`)(36,`label`,7),Mk(37,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts`),Kg(),Jc(38,`div`,11)(39,`pre`,12),Mk(40,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(41,`hr`))},dependencies:[P,tre,are,se],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(p){return new(p||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-popover-doc`]],standalone:!1,decls:363,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-popover-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/documentation/po-tooltip?view=doc`],[`href`,`https://po-ui.io/documentation/po-modal?view=doc`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-close`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-custom-classes`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-hide-arrow`,1,`docs-api-properties-row`],[`id`,`prop-p-offset`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`event-p-open`,1,`docs-api-properties-row`],[`id`,`prop-p-position`,1,`docs-api-properties-row`],[`id`,`prop-p-target`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`ElementRef`],[`pan`,``,1,`docs-api-property-type`,`HTMLElement`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`prop-p-trigger`,1,`docs-api-properties-row`]],template:function(p,n){p&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoPopoverModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-popover.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoPopoverComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O componente `),Jc(15,`code`),Mk(16,`po-popover`),Kg(),Mk(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),Kg(),Jc(18,`p`),Mk(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),Jc(20,`a`,6)(21,`strong`),Mk(22,`po-tooltip`),Kg()(),Mk(23,`.`),Kg(),Jc(24,`p`),Mk(25,`Para conteúdos maiores recomenda-se o uso do `),Jc(26,`a`,7)(27,`strong`),Mk(28,`po-modal`),Kg()(),Mk(29,`.`),Kg(),Jc(30,`p`),Mk(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),Jc(32,`code`),Mk(33,`right`),Kg(),Mk(34,`, `),Jc(35,`code`),Mk(36,`right-top`),Kg(),Mk(37,`, `),Jc(38,`code`),Mk(39,`right-bottom`),Kg(),Mk(40,`, `),Jc(41,`code`),Mk(42,`top`),Kg(),Mk(43,`, `),Jc(44,`code`),Mk(45,`top-left`),Kg(),Mk(46,`, `),Jc(47,`code`),Mk(48,`top-right`),Kg(),Mk(49,`,
`),Jc(50,`code`),Mk(51,`left`),Kg(),Mk(52,`, `),Jc(53,`code`),Mk(54,`left-top`),Kg(),Mk(55,`, `),Jc(56,`code`),Mk(57,`left-bottom`),Kg(),Mk(58,`, `),Jc(59,`code`),Mk(60,`bottom`),Kg(),Mk(61,`, `),Jc(62,`code`),Mk(63,`bottom-left`),Kg(),Mk(64,` e `),Jc(65,`code`),Mk(66,`bottom-right`),Kg(),Mk(67,`.`),Kg(),Jc(68,`p`),Mk(69,`Também é possível escolher entre os dois eventos que podem abrir o `),Jc(70,`em`),Mk(71,`popover`),Kg(),Mk(72,`.
Os eventos permitidos s\xE3o: `),Jc(73,`code`),Mk(74,`click`),Kg(),Mk(75,` e `),Jc(76,`code`),Mk(77,`hover`),Kg(),Mk(78,`. `),Kg()(),Jc(79,`div`,8)(80,`h4`,9),Mk(81,`Seletor`),Kg(),Jc(82,`pre`,10),Mk(83,`<po-popover
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
`),Kg()(),Jc(84,`h4`,11),Mk(85,`Propriedades`),Kg(),Jc(86,`table`,12)(87,`tr`,13)(88,`th`,14),Mk(89,`Nome`),Kg(),Jc(90,`th`,14),Mk(91,`Tipo`),Kg(),Jc(92,`th`,14),Mk(93,`Padrão`),Kg(),Jc(94,`th`,14),Mk(95,`Descrição`),Kg()(),Jc(96,`tr`,15)(97,`td`,16)(98,`div`,17)(99,`span`,18),Mk(100,` p-append-in-body`),_u(101,`br`),Kg()()(),Jc(102,`td`,19)(103,`code`,20),Mk(104,`boolean`),Kg()(),Jc(105,`td`,21)(106,`p`)(107,`code`),Mk(108,`false`),Kg()()(),Jc(109,`td`,22)(110,`em`)(111,`strong`),Mk(112,`(opcional)`),Kg()(),Jc(113,`p`),Mk(114,`Define que o popover será inserido no body da página em vez do elemento definido em `),Jc(115,`code`),Mk(116,`p-target`),Kg(),Mk(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),Kg()()(),Jc(118,`tr`,23)(119,`td`,16)(120,`div`,24)(121,`span`,25),Mk(122,` (p-close)`),_u(123,`br`),Kg()()(),Jc(124,`td`,19)(125,`code`,26),Mk(126,`EventEmitter`),Kg()(),Jc(127,`td`,21),Mk(128,`-`),Kg(),Jc(129,`td`,22)(130,`p`),Mk(131,`Evento disparado ao fechar o popover.`),Kg()()(),Jc(132,`tr`,27)(133,`td`,16)(134,`div`,17)(135,`span`,18),Mk(136,` p-custom-classes`),_u(137,`br`),Kg()()(),Jc(138,`td`,19)(139,`code`,28),Mk(140,`string`),Kg()(),Jc(141,`td`,21),Mk(142,`-`),Kg(),Jc(143,`td`,22)(144,`em`)(145,`strong`),Mk(146,`(opcional)`),Kg()(),Jc(147,`p`),Mk(148,`Permite a inclusão de classes CSS customizadas ao componente.`),Kg(),Jc(149,`p`),Mk(150,`Exemplo: `),Jc(151,`code`),Mk(152,`p-custom-classes="minha-classe-1 minha-classe-2"`),Kg(),Mk(153,`.`),Kg()()(),Jc(154,`tr`,29)(155,`td`,16)(156,`div`,17)(157,`span`,18),Mk(158,` p-hide-arrow`),_u(159,`br`),Kg()()(),Jc(160,`td`,19)(161,`code`,20),Mk(162,`boolean`),Kg()(),Jc(163,`td`,21)(164,`p`)(165,`code`),Mk(166,`false`),Kg()()(),Jc(167,`td`,22)(168,`em`)(169,`strong`),Mk(170,`(opcional)`),Kg()(),Jc(171,`p`),Mk(172,`Desabilita a seta do componente `),Jc(173,`em`),Mk(174,`popover`),Kg(),Mk(175,`.`),Kg()()(),Jc(176,`tr`,30)(177,`td`,16)(178,`div`,17)(179,`span`,18),Mk(180,` p-offset`),_u(181,`br`),Kg()()(),Jc(182,`td`,19)(183,`code`,31),Mk(184,`number`),Kg()(),Jc(185,`td`,21)(186,`p`)(187,`code`),Mk(188,`8`),Kg()()(),Jc(189,`td`,22)(190,`em`)(191,`strong`),Mk(192,`(opcional)`),Kg()(),Jc(193,`p`),Mk(194,`Define o espaçamento (em pixels) entre o componente alvo (`),Jc(195,`code`),Mk(196,`p-target`),Kg(),Mk(197,`) e o `),Jc(198,`code`),Mk(199,`po-popover`),Kg(),Mk(200,`.
\xDAtil para componentes com targets pequenos (como \xEDcones) onde o espa\xE7amento padr\xE3o \xE9
proporcionalmente muito grande e cria desalinhamento visual.`),Kg()()(),Jc(201,`tr`,32)(202,`td`,16)(203,`div`,24)(204,`span`,25),Mk(205,` (p-open)`),_u(206,`br`),Kg()()(),Jc(207,`td`,19)(208,`code`,26),Mk(209,`EventEmitter`),Kg()(),Jc(210,`td`,21),Mk(211,`-`),Kg(),Jc(212,`td`,22)(213,`p`),Mk(214,`Evento disparado ao abrir o popover.`),Kg()()(),Jc(215,`tr`,33)(216,`td`,16)(217,`div`,17)(218,`span`,18),Mk(219,` p-position`),_u(220,`br`),Kg()()(),Jc(221,`td`,19)(222,`code`,28),Mk(223,`string`),Kg()(),Jc(224,`td`,21)(225,`p`),Mk(226,`right`),Kg()(),Jc(227,`td`,22)(228,`em`)(229,`strong`),Mk(230,`(opcional)`),Kg()(),Jc(231,`p`),Mk(232,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),Kg(),Jc(233,`p`),Mk(234,`Posições válidas:`),Kg(),Jc(235,`ul`)(236,`li`)(237,`code`),Mk(238,`right`),Kg(),Mk(239,`: Posiciona o po-popover no lado direito do componente alvo.`),Kg(),Jc(240,`li`)(241,`code`),Mk(242,`right-bottom`),Kg(),Mk(243,`: Posiciona o po-popover no lado direito inferior do componente alvo.`),Kg(),Jc(244,`li`)(245,`code`),Mk(246,`right-top`),Kg(),Mk(247,`: Posiciona o po-popover no lado direito superior do componente alvo.`),Kg(),Jc(248,`li`)(249,`code`),Mk(250,`bottom`),Kg(),Mk(251,`: Posiciona o po-popover abaixo do componente alvo.`),Kg(),Jc(252,`li`)(253,`code`),Mk(254,`bottom-left`),Kg(),Mk(255,`: Posiciona o po-popover abaixo e à esquerda do componente alvo.`),Kg(),Jc(256,`li`)(257,`code`),Mk(258,`bottom-right`),Kg(),Mk(259,`: Posiciona o po-popover abaixo e à direita do componente alvo.`),Kg(),Jc(260,`li`)(261,`code`),Mk(262,`left`),Kg(),Mk(263,`: Posiciona o po-popover no lado esquerdo do componente alvo.`),Kg(),Jc(264,`li`)(265,`code`),Mk(266,`left-top`),Kg(),Mk(267,`: Posiciona o po-popover no lado esquerdo superior do componente alvo.`),Kg(),Jc(268,`li`)(269,`code`),Mk(270,`left-bottom`),Kg(),Mk(271,`: Posiciona o po-popover no lado esquerdo inferior do componente alvo.`),Kg(),Jc(272,`li`)(273,`code`),Mk(274,`top`),Kg(),Mk(275,`: Posiciona o po-popover acima do componente alvo.`),Kg(),Jc(276,`li`)(277,`code`),Mk(278,`top-right`),Kg(),Mk(279,`: Posiciona o po-popover acima e à direita do componente alvo.`),Kg(),Jc(280,`li`)(281,`code`),Mk(282,`top-left`),Kg(),Mk(283,`: Posiciona o po-popover acima e à esquerda do componente alvo.`),Kg()()()(),Jc(284,`tr`,34)(285,`td`,16)(286,`div`,17)(287,`span`,18),Mk(288,` p-target`),_u(289,`br`),Kg()()(),Jc(290,`td`,19)(291,`code`,35),Mk(292,`ElementRef `),Kg(),Jc(293,`code`,36),Mk(294,` HTMLElement`),Kg()(),Jc(295,`td`,21),Mk(296,`-`),Kg(),Jc(297,`td`,22)(298,`p`),Mk(299,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),Kg(),Jc(300,`pre`)(301,`code`),Mk(302,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),Kg()(),Jc(303,`p`),Mk(304,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),Kg(),Jc(305,`pre`)(306,`code`),Mk(307,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),Kg()(),Jc(308,`p`),Mk(309,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),Kg(),Jc(310,`pre`)(311,`code`),Mk(312,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),Kg()()()(),Jc(313,`tr`,37)(314,`td`,16)(315,`div`,17)(316,`span`,18),Mk(317,` p-title`),_u(318,`br`),Kg()()(),Jc(319,`td`,19)(320,`code`,28),Mk(321,`string`),Kg()(),Jc(322,`td`,21),Mk(323,`-`),Kg(),Jc(324,`td`,22)(325,`em`)(326,`strong`),Mk(327,`(opcional)`),Kg()(),Jc(328,`p`),Mk(329,`Título do popover.`),Kg()()(),Jc(330,`tr`,38)(331,`td`,16)(332,`div`,17)(333,`span`,18),Mk(334,` p-trigger`),_u(335,`br`),Kg()()(),Jc(336,`td`,19)(337,`code`,28),Mk(338,`string`),Kg()(),Jc(339,`td`,21)(340,`p`),Mk(341,`click`),Kg()(),Jc(342,`td`,22)(343,`em`)(344,`strong`),Mk(345,`(opcional)`),Kg()(),Jc(346,`p`),Mk(347,`Define o evento que abrirá o po-popover.`),Kg(),Jc(348,`p`),Mk(349,`Valores válidos:`),Kg(),Jc(350,`ul`)(351,`li`)(352,`code`),Mk(353,`click`),Kg(),Mk(354,`: Abre ao clicar no componente alvo.`),Kg(),Jc(355,`li`)(356,`code`),Mk(357,`hover`),Kg(),Mk(358,`: Abre ao passar o mouse sobre o componente alvo.`),Kg(),Jc(359,`li`)(360,`code`),Mk(361,`function`),Kg(),Mk(362,`: Abre através de funções públicas do componente.`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Be(i,ke){if(i&1&&(Jc(0,`div`,1),_u(1,`sample-po-popover-basic-view`)(2,`sample-po-popover-labs-view`)(3,`sample-po-popover-credit-card-view`),Kg()),i&2){let l=tk();Ab(`hidden`,l.activeTab!==`web`)}}var Ve=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Popover`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(l,p){this.route=l,this.router=p}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`,this.title=`Popover · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(p,n){p&1&&(Jc(0,`po-page-default`,0),LO(1,Be,4,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-popover-doc`),Kg()()),p&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,le,me,ce,ue],encapsulation:2,changeDetection:1})}return i})()}];var ge=(()=>{class i{static ɵfac=function(p){return new(p||i)};static ɵmod=ge$1({type:i});static ɵinj=de$1({imports:[GV.forChild(Ve),GV]})}return i})();var Ct=(()=>{class i{static ɵfac=function(p){return new(p||i)};static ɵmod=ge$1({type:i});static ɵinj=de$1({imports:[M,ge]})}return i})();export{Ct as DocPoPopoverModule};